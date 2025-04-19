import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/tasks
export async function GET(request) {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
      include: {
        project: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
      { status: 500 }
    );
  }
}

// POST /api/tasks
export async function POST(request) {
  try {
    const data = await request.json();

    // Check if project exists
    const project = await prisma.project.findUnique({
      where: { id: data.projectId },
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    // Create task
    const task = await prisma.task.create({
      data: {
        name: data.name,
        description: data.description,
        status: data.status || 'PENDING',
        priority: data.priority || 'MEDIUM',
        progress: data.progress || 0,
        projectId: data.projectId,
        parentId: data.parentId,
        scheduleId: data.scheduleId,
      },
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.error('Error creating task:', error);
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    );
  }
}
