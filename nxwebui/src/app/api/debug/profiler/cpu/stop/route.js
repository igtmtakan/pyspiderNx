import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import axios from 'axios';

// POST /api/debug/profiler/cpu/stop
export async function POST(request) {
  try {
    // Get the latest running CPU profiling session
    const debugSession = await prisma.debugSession.findFirst({
      where: {
        type: 'PROFILER',
        status: 'RUNNING',
        data: {
          path: ['profilingType'],
          equals: 'CPU',
        },
      },
      orderBy: {
        startedAt: 'desc',
      },
    });

    if (!debugSession) {
      return NextResponse.json({
        success: false,
        message: 'No active CPU profiling session found',
      });
    }

    // Call PySpider API to stop CPU profiling
    try {
      const response = await axios.post(`${process.env.PYSPIDER_API_URL}/debug/profiler/cpu/stop`, {
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
            endTime: new Date().toISOString(),
            results: response.data,
          },
        },
      });

      return NextResponse.json({
        success: true,
        message: 'CPU profiling stopped successfully',
        sessionId: debugSession.id,
        results: response.data,
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
            endTime: new Date().toISOString(),
            error: apiError.message,
          },
        },
      });

      return NextResponse.json(
        {
          success: false,
          error: 'Failed to stop CPU profiling cleanly',
          details: apiError.message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error stopping CPU profiling:', error);
    return NextResponse.json(
      { error: 'Failed to stop CPU profiling' },
      { status: 500 }
    );
  }
}
