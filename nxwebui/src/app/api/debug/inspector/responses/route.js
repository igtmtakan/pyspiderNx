import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/debug/inspector/responses
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    // Pagination
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = (page - 1) * limit;

    // Filtering
    const statusCode = searchParams.get('statusCode');
    const sessionId = searchParams.get('sessionId');

    // Build where clause
    const where = {
      ...(statusCode ? { statusCode: parseInt(statusCode) } : {}),
      ...(sessionId ? { debugSessionId: sessionId } : {}),
    };

    // Get responses
    const responses = await prisma.response.findMany({
      where,
      orderBy: {
        timestamp: 'desc',
      },
      skip,
      take: limit,
      include: {
        request: {
          select: {
            url: true,
            method: true,
            timestamp: true,
          },
        },
      },
    });

    // Get total count
    const total = await prisma.response.count({ where });

    return NextResponse.json({
      responses,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching responses:', error);
    return NextResponse.json(
      { error: 'Failed to fetch responses' },
      { status: 500 }
    );
  }
}
