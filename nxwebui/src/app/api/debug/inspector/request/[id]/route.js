import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/debug/inspector/request/:id
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const req = await prisma.request.findUnique({
      where: { id },
      include: {
        response: true,
        debugSession: {
          select: {
            id: true,
            type: true,
            status: true,
            startedAt: true,
          },
        },
      },
    });

    if (!req) {
      return NextResponse.json(
        { error: 'Request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(req);
  } catch (error) {
    console.error('Error fetching request:', error);
    return NextResponse.json(
      { error: 'Failed to fetch request' },
      { status: 500 }
    );
  }
}

// DELETE /api/debug/inspector/request/:id
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await prisma.request.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting request:', error);
    return NextResponse.json(
      { error: 'Failed to delete request' },
      { status: 500 }
    );
  }
}
