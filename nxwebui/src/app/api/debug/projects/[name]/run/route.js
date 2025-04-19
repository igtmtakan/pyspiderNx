import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import axios from 'axios';

// POST /api/debug/projects/:name/run
export async function POST(request, { params }) {
  try {
    const { name } = await params;
    const data = await request.json();
    const { script, task } = data;

    if (!script) {
      return NextResponse.json(
        { error: 'Script is required' },
        { status: 400 }
      );
    }

    if (!task) {
      return NextResponse.json(
        { error: 'Task is required' },
        { status: 400 }
      );
    }

    const project = await prisma.debugProject.findUnique({
      where: { name },
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    // Create debug session
    const session = await prisma.debugSession.create({
      data: {
        type: 'DEBUGGER',
        status: 'RUNNING',
        projectId: project.id,
      },
    });

    // Parse task if it's a string
    console.log('Task received:', task, 'Type:', typeof task);
    let taskObj = task;
    if (typeof task === 'string') {
      try {
        taskObj = JSON.parse(task);
        console.log('Task parsed successfully:', taskObj);
      } catch (error) {
        console.error('Error parsing task JSON:', error, 'Task:', task);
        return NextResponse.json(
          { error: 'Invalid task JSON: ' + error.message },
          { status: 400 }
        );
      }
    } else {
      console.log('Task is not a string, using as is');
    }

    // Validate required fields
    if (!taskObj.taskid) {
      taskObj.taskid = 'data:,on_start';
    }
    if (!taskObj.url) {
      taskObj.url = 'data:,on_start';
    }
    if (!taskObj.process || !taskObj.process.callback) {
      taskObj.process = { callback: 'on_start' };
    }

    // Create debug task
    await prisma.debugTask.create({
      data: {
        taskId: taskObj.taskid || 'data:,on_start',
        project: name,
        url: taskObj.url || 'data:,on_start',
        process: taskObj.process || { callback: 'on_start' },
        sessionId: session.id,
      },
    });

    // Run task in PySpider
    try {
      let response;
      try {
        const pyspiderUrl = process.env.PYSPIDER_API_URL || 'http://localhost:5000';
        console.log(`Calling PySpider API at: ${pyspiderUrl}/debug/${name}/run`);

        // First check if PySpider is running
        try {
          await axios.get(pyspiderUrl, { timeout: 2000 });
          console.log('PySpider is running');
        } catch (checkError) {
          console.error('PySpider is not running:', checkError.message);
          throw new Error('PySpider is not running');
        }

        // Try to call PySpider API
        response = await axios.post(
          `${pyspiderUrl}/debug/${name}/run`,
          {
            script,
            task: JSON.stringify(taskObj),
          },
          {
            timeout: 10000, // 10 second timeout
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
        );
      } catch (pyspiderError) {
        console.warn('PySpider API not available, using mock response');

        // Create mock response if PySpider is not available
        const mockResponse = {
          fetch_result: {
            status_code: 200,
            url: taskObj.url || 'data:,on_start',
            content: '<html><body><h1>Mock Response</h1><p>This is a mock response for debugging purposes.</p></body></html>',
            headers: { 'content-type': 'text/html' },
            cookies: {},
            time: 0.1,
            save: {
              taskid: taskObj.taskid || 'data:,on_start',
              url: taskObj.url || 'data:,on_start',
              status_code: 200
            }
          },
          follows: [],
          messages: [
            {
              type: 'info',
              message: 'Using mock response (PySpider API not available)'
            }
          ],
          logs: 'PySpider API not available. Using mock response for debugging.\nScript executed in mock environment.'
        };

        response = { data: mockResponse };
      }

      // Update session with result
      await prisma.debugSession.update({
        where: { id: session.id },
        data: {
          status: 'STOPPED',
          endedAt: new Date(),
          data: response.data,
        },
      });

      return NextResponse.json(response.data);
    } catch (error) {
      console.error('Error running debug task:', error);

      // Update session with error
      await prisma.debugSession.update({
        where: { id: session.id },
        data: {
          status: 'STOPPED',
          endedAt: new Date(),
          data: { error: error.message },
        },
      });

      return NextResponse.json(
        { error: 'Failed to run debug task' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error running debug task:', error);
    return NextResponse.json(
      { error: 'Failed to run debug task' },
      { status: 500 }
    );
  }
}
