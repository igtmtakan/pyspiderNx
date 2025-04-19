import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/progress/:id
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const task = await prisma.task.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        status: true,
        progress: true,
        startedAt: true,
        completedAt: true,
      },
    });

    if (!task) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(task);
  } catch (error) {
    console.error('Error fetching task progress:', error);
    return NextResponse.json(
      { error: 'Failed to fetch task progress' },
      { status: 500 }
    );
  }
}

// PUT /api/progress/:id
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { progress } = await request.json();

    // Validate progress
    if (typeof progress !== 'number' || progress < 0 || progress > 100) {
      return NextResponse.json(
        { error: 'Progress must be a number between 0 and 100' },
        { status: 400 }
      );
    }

    // Update task progress
    const task = await prisma.task.update({
      where: { id },
      data: {
        progress,
        // If progress is 100%, set status to COMPLETED
        ...(progress === 100 ? {
          status: 'COMPLETED',
          completedAt: new Date()
        } : {}),
      },
    });

    // If progress is 100%, add log entry
    if (progress === 100) {
      await prisma.taskLog.create({
        data: {
          taskId: id,
          message: 'Task completed',
          level: 'INFO',
        },
      });
    }

    return NextResponse.json(task);
  } catch (error) {
    console.error('Error updating task progress:', error);
    return NextResponse.json(
      { error: 'Failed to update task progress' },
      { status: 500 }
    );
  }
}
