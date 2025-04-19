import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/tasks/:id
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const task = await prisma.task.findUnique({
      where: { id },
      include: {
        project: {
          select: {
            id: true,
            name: true,
          },
        },
        parent: {
          select: {
            id: true,
            name: true,
          },
        },
        children: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
        schedule: {
          select: {
            id: true,
            name: true,
          },
        },
        logs: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 10,
        },
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
    console.error('Error fetching task:', error);
    return NextResponse.json(
      { error: 'Failed to fetch task' },
      { status: 500 }
    );
  }
}

// PUT /api/tasks/:id
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();

    const task = await prisma.task.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        status: data.status,
        priority: data.priority,
        progress: data.progress,
        parentId: data.parentId,
        scheduleId: data.scheduleId,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error('Error updating task:', error);
    return NextResponse.json(
      { error: 'Failed to update task' },
      { status: 500 }
    );
  }
}

// DELETE /api/tasks/:id
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await prisma.task.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json(
      { error: 'Failed to delete task' },
      { status: 500 }
    );
  }
}
