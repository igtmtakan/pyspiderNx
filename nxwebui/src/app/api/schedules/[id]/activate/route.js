import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// PUT /api/schedules/:id/activate
export async function PUT(request, { params }) {
  try {
    const { id } = await params;

    // Get schedule
    const schedule = await prisma.schedule.findUnique({
      where: { id },
    });

    if (!schedule) {
      return NextResponse.json(
        { error: 'Schedule not found' },
        { status: 404 }
      );
    }

    // Calculate next run time if cron is provided
    let nextRun = null;
    if (schedule.cron) {
      // This is a simplified calculation - a proper cron parser would be better
      nextRun = new Date();
      nextRun.setMinutes(nextRun.getMinutes() + 5); // Just a placeholder
    }

    // Activate schedule
    const updatedSchedule = await prisma.schedule.update({
      where: { id },
      data: {
        active: true,
        nextRun,
      },
    });

    return NextResponse.json(updatedSchedule);
  } catch (error) {
    console.error('Error activating schedule:', error);
    return NextResponse.json(
      { error: 'Failed to activate schedule' },
      { status: 500 }
    );
  }
}
