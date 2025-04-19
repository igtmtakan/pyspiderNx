import { NextResponse } from 'next/server';
import axios from 'axios';
import { prisma } from '@/lib/prisma';

// GET /api/debug/projects/:name
export async function GET(request, { params }) {
  // Get query parameters
  const searchParams = request.nextUrl.searchParams;
  const refresh = searchParams.get('refresh') === 'true';
  try {
    const { name } = await params;
    const pyspiderUrl = process.env.PYSPIDER_API_URL || 'http://localhost:5000';

    // Check if we should use cached data
    if (!refresh) {
      // Try to get project from database first
      const cachedProject = await prisma.debugProject.findUnique({
        where: { name },
      });

      if (cachedProject && cachedProject.script) {
        console.log(`Using cached project data for ${name}`);

        // Get default task
        const defaultTask = {
          taskid: 'data:,on_start',
          project: name,
          url: 'data:,on_start',
          process: {
            callback: 'on_start',
          },
        };

        return NextResponse.json({
          ...cachedProject,
          task: defaultTask,
        });
      }
    }

    // First, try to get project from PySpider
    try {
      console.log(`Fetching project from PySpider: ${pyspiderUrl}/debug/${name}`);
      const pyspiderResponse = await axios.get(`${pyspiderUrl}/debug/${name}`, {
        timeout: 5000,
        headers: {
          'Accept': 'application/json'
        }
      });

      // If PySpider returns JSON, use it
      if (pyspiderResponse.headers['content-type']?.includes('application/json')) {
        console.log('PySpider returned JSON response');
        return NextResponse.json(pyspiderResponse.data);
      }

      // Otherwise, extract script from HTML response
      console.log('PySpider returned HTML response, extracting script');
      const html = pyspiderResponse.data;

      // Try to extract script_content variable
      const scriptContentMatch = html.match(/var script_content = "(.+?)";/s);
      let script = '';

      if (scriptContentMatch && scriptContentMatch[1]) {
        // Unescape the script content
        try {
          script = JSON.parse('"' + scriptContentMatch[1] + '"');
          console.log('Successfully extracted script from script_content variable');
        } catch (parseError) {
          console.error('Error parsing script_content:', parseError);
          // Try a simpler approach - replace escaped characters
          script = scriptContentMatch[1]
            .replace(/\\n/g, '\n')
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, '\\');
          console.log('Used simple unescaping for script_content');
        }
      } else {
        // Fallback to old method
        const scriptMatch = html.match(/<script id="script" type="text\/plain">(([\s\S])*?)<\/script>/);
        script = scriptMatch ? scriptMatch[1] : '';
        console.log('Fallback: extracted script from script tag');
      }

      // Get project from database
      const project = await prisma.debugProject.findUnique({
        where: { name },
      });

      if (project) {
        // Update script in database if it's different
        if (script && script !== project.script) {
          await prisma.debugProject.update({
            where: { id: project.id },
            data: { script }
          });
        }
      } else {
        // Create project if it doesn't exist
        await prisma.debugProject.create({
          data: {
            name,
            script: script || '',
          },
        });
      }

      // Get default task
      const defaultTask = {
        taskid: 'data:,on_start',
        project: name,
        url: 'data:,on_start',
        process: {
          callback: 'on_start',
        },
      };

      return NextResponse.json({
        name,
        script: script || '',
        task: defaultTask,
      });
    } catch (pyspiderError) {
      console.error('Error fetching from PySpider:', pyspiderError.message);

      // Fallback to database if PySpider is not available
      const project = await prisma.debugProject.findUnique({
        where: { name },
      });

      if (!project) {
        return NextResponse.json(
          { error: 'Project not found' },
          { status: 404 }
        );
      }

      // Get default task
      const defaultTask = {
        taskid: 'data:,on_start',
        project: name,
        url: 'data:,on_start',
        process: {
          callback: 'on_start',
        },
      };

      return NextResponse.json({
        ...project,
        task: defaultTask,
      });
    }
  } catch (error) {
    console.error('Error fetching debug project:', error);
    return NextResponse.json(
      { error: 'Failed to fetch debug project' },
      { status: 500 }
    );
  }
}

// PUT /api/debug/projects/:name
export async function PUT(request, { params }) {
  try {
    const { name } = await params;
    const data = await request.json();

    const project = await prisma.debugProject.findUnique({
      where: { name },
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    // Update project
    const updatedProject = await prisma.debugProject.update({
      where: { id: project.id },
      data: {
        script: data.script || project.script,
      },
    });

    // Try to update project in PySpider
    try {
      await axios.post(`${process.env.PYSPIDER_API_URL || 'http://localhost:5000'}/api/projects/${name}`, {
        script: updatedProject.script,
      });
    } catch (error) {
      console.error('Error updating project in PySpider:', error);
      // Continue anyway
    }

    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error('Error updating debug project:', error);
    return NextResponse.json(
      { error: 'Failed to update debug project' },
      { status: 500 }
    );
  }
}

// DELETE /api/debug/projects/:name
export async function DELETE(request, { params }) {
  try {
    const { name } = await params;

    const project = await prisma.debugProject.findUnique({
      where: { name },
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    // Delete project
    await prisma.debugProject.delete({
      where: { id: project.id },
    });

    // Try to delete project in PySpider
    try {
      await axios.delete(`${process.env.PYSPIDER_API_URL || 'http://localhost:5000'}/api/projects/${name}`);
    } catch (error) {
      console.error('Error deleting project in PySpider:', error);
      // Continue anyway
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting debug project:', error);
    return NextResponse.json(
      { error: 'Failed to delete debug project' },
      { status: 500 }
    );
  }
}
