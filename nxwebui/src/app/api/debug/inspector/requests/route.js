import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/debug/inspector/requests
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    // Pagination
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = (page - 1) * limit;

    // Filtering
    const url = searchParams.get('url');
    const method = searchParams.get('method');
    const sessionId = searchParams.get('sessionId');

    // Build where clause
    const where = {
      ...(url ? { url: { contains: url } } : {}),
      ...(method ? { method } : {}),
      ...(sessionId ? { debugSessionId: sessionId } : {}),
    };

    // Get requests
    const requests = await prisma.request.findMany({
      where,
      orderBy: {
        timestamp: 'desc',
      },
      skip,
      take: limit,
      include: {
        response: {
          select: {
            statusCode: true,
            timestamp: true,
          },
        },
      },
    });

    // Get total count
    const total = await prisma.request.count({ where });

    return NextResponse.json({
      requests,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching requests:', error);
    return NextResponse.json(
      { error: 'Failed to fetch requests' },
      { status: 500 }
    );
  }
}
