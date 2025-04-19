import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// PUT /api/tasks/:id/status
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const { status } = await request.json();

    // Validate status
    const validStatuses = ['PENDING', 'RUNNING', 'PAUSED', 'COMPLETED', 'FAILED', 'CANCELLED'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }

    // Update task status
    const task = await prisma.task.update({
      where: { id },
      data: {
        status,
        startedAt: status === 'RUNNING' && !await prisma.task.findUnique({ where: { id }, select: { startedAt: true } }).startedAt
          ? new Date()
          : undefined,
        completedAt: ['COMPLETED', 'FAILED', 'CANCELLED'].includes(status)
          ? new Date()
          : undefined,
      },
    });

    // Add log entry
    await prisma.taskLog.create({
      data: {
        taskId: id,
        message: `Task status changed to ${status}`,
        level: status === 'FAILED' ? 'ERROR' : 'INFO',
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error('Error updating task status:', error);
    return NextResponse.json(
      { error: 'Failed to update task status' },
      { status: 500 }
    );
  }
}
