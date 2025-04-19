import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/schedules
export async function GET(request) {
  try {
    const schedules = await prisma.schedule.findMany({
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
        _count: {
          select: {
            tasks: true,
          },
        },
      },
    });

    return NextResponse.json(schedules);
  } catch (error) {
    console.error('Error fetching schedules:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schedules' },
      { status: 500 }
    );
  }
}

// POST /api/schedules
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

    // Validate cron expression if provided
    if (data.cron) {
      // Simple validation - a more robust validation would be better
      const cronParts = data.cron.split(' ');
      if (cronParts.length !== 5) {
        return NextResponse.json(
          { error: 'Invalid cron expression' },
          { status: 400 }
        );
      }
    }

    // Calculate next run time if cron is provided
    let nextRun = null;
    if (data.cron) {
      // This is a simplified calculation - a proper cron parser would be better
      nextRun = new Date();
      nextRun.setMinutes(nextRun.getMinutes() + 5); // Just a placeholder
    }

    // Create schedule
    const schedule = await prisma.schedule.create({
      data: {
        name: data.name,
        description: data.description,
        cron: data.cron,
        active: data.active !== undefined ? data.active : true,
        nextRun,
        projectId: data.projectId,
      },
    });

    return NextResponse.json(schedule, { status: 201 });
  } catch (error) {
    console.error('Error creating schedule:', error);
    return NextResponse.json(
      { error: 'Failed to create schedule' },
      { status: 500 }
    );
  }
}
