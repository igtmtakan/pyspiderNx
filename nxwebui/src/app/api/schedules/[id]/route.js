import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/schedules/:id
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const schedule = await prisma.schedule.findUnique({
      where: { id },
      include: {
        project: {
          select: {
            id: true,
            name: true,
          },
        },
        tasks: {
          select: {
            id: true,
            name: true,
            status: true,
            priority: true,
          },
        },
      },
    });

    if (!schedule) {
      return NextResponse.json(
        { error: 'Schedule not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(schedule);
  } catch (error) {
    console.error('Error fetching schedule:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schedule' },
      { status: 500 }
    );
  }
}

// PUT /api/schedules/:id
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();

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

    // Calculate next run time if cron is provided and schedule is active
    let nextRun = undefined;
    if (data.cron && (data.active === undefined || data.active)) {
      // This is a simplified calculation - a proper cron parser would be better
      nextRun = new Date();
      nextRun.setMinutes(nextRun.getMinutes() + 5); // Just a placeholder
    }

    // Update schedule
    const schedule = await prisma.schedule.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        cron: data.cron,
        active: data.active,
        nextRun,
      },
    });

    return NextResponse.json(schedule);
  } catch (error) {
    console.error('Error updating schedule:', error);
    return NextResponse.json(
      { error: 'Failed to update schedule' },
      { status: 500 }
    );
  }
}

// DELETE /api/schedules/:id
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await prisma.schedule.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting schedule:', error);
    return NextResponse.json(
      { error: 'Failed to delete schedule' },
      { status: 500 }
    );
  }
}
