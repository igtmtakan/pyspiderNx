import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/debug/debugger/status
export async function GET() {
  try {
    // Get the latest debug session of type DEBUGGER
    const debugSession = await prisma.debugSession.findFirst({
      where: {
        type: 'DEBUGGER',
      },
      orderBy: {
        startedAt: 'desc',
      },
    });

    if (!debugSession) {
      return NextResponse.json({
        status: 'STOPPED',
        message: 'No debugger session found',
      });
    }

    return NextResponse.json({
      status: debugSession.status,
      sessionId: debugSession.id,
      startedAt: debugSession.startedAt,
      endedAt: debugSession.endedAt,
      data: debugSession.data,
    });
  } catch (error) {
    console.error('Error getting debugger status:', error);
    return NextResponse.json(
      { error: 'Failed to get debugger status' },
      { status: 500 }
    );
  }
}
