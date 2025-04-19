import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST /api/projects
export async function POST(request) {
  try {
    const data = await request.json();

    const project = await prisma.project.create({
      data: {
        name: data.name,
        description: data.description,
        status: data.status || 'ACTIVE',
        settings: data.settings || {},
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
