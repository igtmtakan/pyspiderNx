import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import axios from 'axios';

// POST /api/debug/debugger/start
export async function POST(request) {
  try {
    // Check if there's already a running debugger session
    const runningSession = await prisma.debugSession.findFirst({
      where: {
        type: 'DEBUGGER',
        status: 'RUNNING',
      },
    });

    if (runningSession) {
      return NextResponse.json({
        success: false,
        message: 'A debugger session is already running',
        sessionId: runningSession.id,
      });
    }

    // Create a new debug session
    const debugSession = await prisma.debugSession.create({
      data: {
        type: 'DEBUGGER',
        status: 'RUNNING',
        data: {},
      },
    });

    // Call PySpider API to start the debugger
    try {
      const response = await axios.post(`${process.env.PYSPIDER_API_URL}/debug/debugger/start`, {
        sessionId: debugSession.id,
      });

      // Update session with data from PySpider
      await prisma.debugSession.update({
        where: { id: debugSession.id },
        data: {
          data: response.data,
        },
      });

      return NextResponse.json({
        success: true,
        message: 'Debugger started successfully',
        sessionId: debugSession.id,
        data: response.data,
      });
    } catch (apiError) {
      // If PySpider API call fails, update session status and return error
      await prisma.debugSession.update({
        where: { id: debugSession.id },
        data: {
          status: 'STOPPED',
          endedAt: new Date(),
          data: { error: apiError.message },
        },
      });

      return NextResponse.json(
        {
          success: false,
          error: 'Failed to start debugger',
          details: apiError.message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error starting debugger:', error);
    return NextResponse.json(
      { error: 'Failed to start debugger' },
      { status: 500 }
    );
  }
}
