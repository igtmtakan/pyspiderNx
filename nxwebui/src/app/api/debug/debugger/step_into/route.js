import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import axios from 'axios';

// POST /api/debug/debugger/step_into
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

    // Call PySpider API to step into
    try {
      const response = await axios.post(`${process.env.PYSPIDER_API_URL}/debug/debugger/step_into`, {
        sessionId: debugSession.id,
      });

      // Update session data
      await prisma.debugSession.update({
        where: { id: debugSession.id },
        data: {
          data: {
            ...debugSession.data,
            currentFrame: response.data.frame,
            lastAction: 'step_into',
          },
        },
      });

      return NextResponse.json({
        success: true,
        message: 'Step into executed successfully',
        frame: response.data.frame,
      });
    } catch (apiError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to execute step into',
          details: apiError.message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error executing step into:', error);
    return NextResponse.json(
      { error: 'Failed to execute step into' },
      { status: 500 }
    );
  }
}
