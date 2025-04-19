import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/projects/:id/stats
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // Get project
    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    // Get task statistics
    const taskStats = await prisma.task.groupBy({
      by: ['status'],
      where: {
        projectId: id,
      },
      _count: {
        _all: true,
      },
    });

    // Format task statistics
    const taskStatsByStatus = {
      PENDING: 0,
      RUNNING: 0,
      PAUSED: 0,
      COMPLETED: 0,
      FAILED: 0,
      CANCELLED: 0,
    };

    taskStats.forEach((stat) => {
      taskStatsByStatus[stat.status] = stat._count._all;
    });

    // Get total tasks
    const totalTasks = await prisma.task.count({
      where: {
        projectId: id,
      },
    });

    // Get total schedules
    const totalSchedules = await prisma.schedule.count({
      where: {
        projectId: id,
      },
    });

    // Get active schedules
    const activeSchedules = await prisma.schedule.count({
      where: {
        projectId: id,
        active: true,
      },
    });

    // Calculate overall progress
    const tasks = await prisma.task.findMany({
      where: {
        projectId: id,
      },
      select: {
        progress: true,
      },
    });

    const totalProgress = tasks.reduce((sum, task) => sum + task.progress, 0);
    const overallProgress = totalTasks > 0 ? totalProgress / totalTasks : 0;

    // Return statistics
    return NextResponse.json({
      projectId: id,
      projectName: project.name,
      totalTasks,
      taskStatsByStatus,
      totalSchedules,
      activeSchedules,
      overallProgress,
    });
  } catch (error) {
    console.error('Error fetching project stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project stats' },
      { status: 500 }
    );
  }
}
