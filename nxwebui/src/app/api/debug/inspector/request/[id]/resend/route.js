import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import axios from 'axios';

// POST /api/debug/inspector/request/:id/resend
export async function POST(request, { params }) {
  try {
    const { id } = await params;
    const { modifications } = await request.json();

    // Get the original request
    const originalRequest = await prisma.request.findUnique({
      where: { id },
    });

    if (!originalRequest) {
      return NextResponse.json(
        { error: 'Request not found' },
        { status: 404 }
      );
    }

    // Get or create a debug session
    let debugSession = await prisma.debugSession.findFirst({
      where: {
        type: 'INSPECTOR',
        status: 'RUNNING',
      },
      orderBy: {
        startedAt: 'desc',
      },
    });

    if (!debugSession) {
      debugSession = await prisma.debugSession.create({
        data: {
          type: 'INSPECTOR',
          status: 'RUNNING',
          data: {},
        },
      });
    }

    // Apply modifications
    const modifiedRequest = {
      url: modifications?.url || originalRequest.url,
      method: modifications?.method || originalRequest.method,
      headers: modifications?.headers || originalRequest.headers,
      body: modifications?.body || originalRequest.body,
    };

    // Call PySpider API to resend the request
    try {
      const response = await axios.post(`${process.env.PYSPIDER_API_URL}/debug/inspector/resend`, {
        originalRequestId: id,
        modifiedRequest,
        sessionId: debugSession.id,
      });

      // Create new request and response records
      const newRequest = await prisma.request.create({
        data: {
          url: modifiedRequest.url,
          method: modifiedRequest.method,
          headers: modifiedRequest.headers,
          body: modifiedRequest.body,
          debugSessionId: debugSession.id,
        },
      });

      // Create response if available
      if (response.data.response) {
        await prisma.response.create({
          data: {
            statusCode: response.data.response.statusCode,
            headers: response.data.response.headers,
            body: response.data.response.body,
            requestId: newRequest.id,
            debugSessionId: debugSession.id,
          },
        });
      }

      return NextResponse.json({
        success: true,
        message: 'Request resent successfully',
        requestId: newRequest.id,
      });
    } catch (apiError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to resend request',
          details: apiError.message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error resending request:', error);
    return NextResponse.json(
      { error: 'Failed to resend request' },
      { status: 500 }
    );
  }
}
