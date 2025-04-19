import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/projects/:id/tasks
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // Check if project exists
    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    // Get tasks for the project
    const tasks = await prisma.task.findMany({
      where: {
        projectId: id,
      },
      orderBy: {
        updatedAt: 'desc',
      },
      include: {
        _count: {
          select: {
            logs: true,
            children: true,
          },
        },
      },
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Error fetching project tasks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project tasks' },
      { status: 500 }
    );
  }
}
