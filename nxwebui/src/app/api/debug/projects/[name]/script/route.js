import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import axios from 'axios';

// GET /api/debug/projects/:name/script
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

    return NextResponse.json({ script: project.script });
  } catch (error) {
    console.error('Error fetching project script:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project script' },
      { status: 500 }
    );
  }
}

// PUT /api/debug/projects/:name/script
export async function PUT(request, { params }) {
  try {
    const { name } = await params;
    const data = await request.json();
    const { script } = data;

    if (!script) {
      return NextResponse.json(
        { error: 'Script is required' },
        { status: 400 }
      );
    }

    const project = await prisma.debugProject.findUnique({
      where: { name },
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    // Save script history
    await prisma.scriptHistory.create({
      data: {
        content: project.script,
        projectId: project.id,
      },
    });

    // Update project script
    const updatedProject = await prisma.debugProject.update({
      where: { id: project.id },
      data: {
        script,
      },
    });

    // Try to update project in PySpider
    try {
      await axios.post(`${process.env.PYSPIDER_API_URL || 'http://localhost:5000'}/api/projects/${name}`, {
        script,
      });
    } catch (error) {
      console.error('Error updating project in PySpider:', error);
      // Continue anyway
    }

    return NextResponse.json({ success: true, script: updatedProject.script });
  } catch (error) {
    console.error('Error updating project script:', error);
    return NextResponse.json(
      { error: 'Failed to update project script' },
      { status: 500 }
    );
  }
}
