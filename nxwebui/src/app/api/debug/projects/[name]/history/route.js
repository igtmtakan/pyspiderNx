import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/debug/projects/:name/history
export async function GET(request, { params }) {
  try {
    const { name } = await params;

    const project = await prisma.debugProject.findUnique({
      where: { name },
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    const history = await prisma.scriptHistory.findMany({
      where: { projectId: project.id },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(history);
  } catch (error) {
    console.error('Error fetching script history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch script history' },
      { status: 500 }
    );
  }
}

// GET /api/debug/projects/:name/history/:id
export async function getHistoryById(request, { params }) {
  try {
    const { name, id } = params;

    const project = await prisma.debugProject.findUnique({
      where: { name },
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    const historyItem = await prisma.scriptHistory.findUnique({
      where: { 
        id,
        projectId: project.id,
      },
    });

    if (!historyItem) {
      return NextResponse.json(
        { error: 'History item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(historyItem);
  } catch (error) {
    console.error('Error fetching history item:', error);
    return NextResponse.json(
      { error: 'Failed to fetch history item' },
      { status: 500 }
    );
  }
}
