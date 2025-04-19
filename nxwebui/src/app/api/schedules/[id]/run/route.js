import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// POST /api/schedules/:id/run
export async function POST(request, { params }) {
  try {
    const { id } = await params;

    // Get schedule
    const schedule = await prisma.schedule.findUnique({
      where: { id },
      include: {
        tasks: true,
      },
    });

    if (!schedule) {
      return NextResponse.json(
        { error: 'Schedule not found' },
        { status: 404 }
      );
    }

    // Update schedule's lastRun
    await prisma.schedule.update({
      where: { id },
      data: {
        lastRun: new Date(),
      },
    });

    // Start all tasks associated with this schedule
    const startedTasks = [];
    for (const task of schedule.tasks) {
      const updatedTask = await prisma.task.update({
        where: { id: task.id },
        data: {
          status: 'RUNNING',
          startedAt: new Date(),
          progress: 0,
        },
      });

      // Add log entry
      await prisma.taskLog.create({
        data: {
          taskId: task.id,
          message: 'Task started by manual schedule execution',
          level: 'INFO',
        },
      });

      startedTasks.push(updatedTask);
    }

    return NextResponse.json({
      success: true,
      message: `Started ${startedTasks.length} tasks`,
      tasks: startedTasks,
    });
  } catch (error) {
    console.error('Error running schedule:', error);
    return NextResponse.json(
      { error: 'Failed to run schedule' },
      { status: 500 }
    );
  }
}
