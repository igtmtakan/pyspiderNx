import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import axios from 'axios';

// POST /api/debug/debugger/continue
export async function POST(request) {
  try {
    // Get the latest running debug session
    const debugSession = await prisma.debugSession.findFirst({
      where: {
        type: 'DEBUGGER',
        status: 'PAUSED',
      },
      orderBy: {
        startedAt: 'desc',
      },
    });

    if (!debugSession) {
      return NextResponse.json({
        success: false,
        message: 'No paused debugger session found',
      }, { status: 400 });
    }

    // Call PySpider API to continue execution
    try {
      const response = await axios.post(`${process.env.PYSPIDER_API_URL}/debug/debugger/continue`, {
        sessionId: debugSession.id,
      });

      // Update session status
      await prisma.debugSession.update({
        where: { id: debugSession.id },
        data: {
          status: 'RUNNING',
          data: {
            ...debugSession.data,
            lastAction: 'continue',
          },
        },
      });

      return NextResponse.json({
        success: true,
        message: 'Execution continued successfully',
      });
    } catch (apiError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to continue execution',
          details: apiError.message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error continuing execution:', error);
    return NextResponse.json(
      { error: 'Failed to continue execution' },
      { status: 500 }
    );
  }
}
