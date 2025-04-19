import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import axios from 'axios';

// POST /api/debug/profiler/cpu/start
export async function POST(request) {
  try {
    // Check if there's already a running profiler session
    const runningSession = await prisma.debugSession.findFirst({
      where: {
        type: 'PROFILER',
        status: 'RUNNING',
        data: {
          path: ['profilingType'],
          equals: 'CPU',
        },
      },
    });

    if (runningSession) {
      return NextResponse.json({
        success: false,
        message: 'A CPU profiling session is already running',
        sessionId: runningSession.id,
      });
    }

    // Create a new debug session
    const debugSession = await prisma.debugSession.create({
      data: {
        type: 'PROFILER',
        status: 'RUNNING',
        data: {
          profilingType: 'CPU',
          startTime: new Date().toISOString(),
        },
      },
    });

    // Call PySpider API to start CPU profiling
    try {
      const response = await axios.post(`${process.env.PYSPIDER_API_URL}/debug/profiler/cpu/start`, {
        sessionId: debugSession.id,
      });

      // Update session with data from PySpider
      await prisma.debugSession.update({
        where: { id: debugSession.id },
        data: {
          data: {
            ...debugSession.data,
            pyspiderResponse: response.data,
          },
        },
      });

      return NextResponse.json({
        success: true,
        message: 'CPU profiling started successfully',
        sessionId: debugSession.id,
      });
    } catch (apiError) {
      // If PySpider API call fails, update session status and return error
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
          error: 'Failed to start CPU profiling',
          details: apiError.message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error starting CPU profiling:', error);
    return NextResponse.json(
      { error: 'Failed to start CPU profiling' },
      { status: 500 }
    );
  }
}
