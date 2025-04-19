import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import axios from 'axios';

// POST /api/debug/debugger/stop
export async function POST(request) {
  try {
    // Get the latest running debug session
    const debugSession = await prisma.debugSession.findFirst({
      where: {
        type: 'DEBUGGER',
        status: {
          in: ['RUNNING', 'PAUSED'],
        },
      },
      orderBy: {
        startedAt: 'desc',
      },
    });

    if (!debugSession) {
      return NextResponse.json({
        success: false,
        message: 'No active debugger session found',
      });
    }

    // Call PySpider API to stop the debugger
    try {
      const response = await axios.post(`${process.env.PYSPIDER_API_URL}/debug/debugger/stop`, {
        sessionId: debugSession.id,
      });

      // Update session status
      await prisma.debugSession.update({
        where: { id: debugSession.id },
        data: {
          status: 'STOPPED',
          endedAt: new Date(),
          data: {
            ...debugSession.data,
            stopResult: response.data,
          },
        },
      });

      return NextResponse.json({
        success: true,
        message: 'Debugger stopped successfully',
        sessionId: debugSession.id,
      });
    } catch (apiError) {
      // If PySpider API call fails, still mark the session as stopped
      await prisma.debugSession.update({
        where: { id: debugSession.id },
        data: {
          status: 'STOPPED',
          endedAt: new Date(),
          data: {
            ...debugSession.data,
            error: apiError.message,
          },
        },
      });

      return NextResponse.json(
        {
          success: false,
          error: 'Failed to stop debugger cleanly',
          details: apiError.message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error stopping debugger:', error);
    return NextResponse.json(
      { error: 'Failed to stop debugger' },
      { status: 500 }
    );
  }
}
