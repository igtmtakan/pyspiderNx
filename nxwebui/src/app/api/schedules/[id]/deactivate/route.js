import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// PUT /api/schedules/:id/deactivate
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

    // Deactivate schedule
    const updatedSchedule = await prisma.schedule.update({
      where: { id },
      data: {
        active: false,
        nextRun: null,
      },
    });

    return NextResponse.json(updatedSchedule);
  } catch (error) {
    console.error('Error deactivating schedule:', error);
    return NextResponse.json(
      { error: 'Failed to deactivate schedule' },
      { status: 500 }
    );
  }
}
