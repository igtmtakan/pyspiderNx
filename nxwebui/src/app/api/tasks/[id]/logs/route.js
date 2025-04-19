import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/tasks/:id/logs
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);

    // Pagination
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = (page - 1) * limit;

    // Level filter
    const level = searchParams.get('level');

    // Get logs
    const logs = await prisma.taskLog.findMany({
      where: {
        taskId: id,
        ...(level ? { level } : {}),
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip,
      take: limit,
    });

    // Get total count
    const total = await prisma.taskLog.count({
      where: {
        taskId: id,
        ...(level ? { level } : {}),
      },
    });

    return NextResponse.json({
      logs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching task logs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch task logs' },
      { status: 500 }
    );
  }
}

// POST /api/tasks/:id/logs
export async function POST(request, { params }) {
  try {
    const { id } = params;
    const { message, level = 'INFO' } = await request.json();

    // Validate task exists
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }

    // Create log
    const log = await prisma.taskLog.create({
      data: {
        taskId: id,
        message,
        level,
      },
    });

    return NextResponse.json(log, { status: 201 });
  } catch (error) {
    console.error('Error creating task log:', error);
    return NextResponse.json(
      { error: 'Failed to create task log' },
      { status: 500 }
    );
  }
}
