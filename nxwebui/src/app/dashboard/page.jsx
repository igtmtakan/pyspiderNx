'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ClockIcon,
  PauseCircleIcon,
  FolderIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';

// Stats Card Component
function StatsCard({ title, value, change, changeType, icon: Icon }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <div className="flex items-center">
            {changeType === 'increase' ? (
              <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={`font-medium ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
              {change}
            </span>
            <span className="text-gray-500 ml-1">from previous period</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Task Status Card Component
function TaskStatusCard({ status, count, icon: Icon, color }) {
  return (
    <div className={`bg-white overflow-hidden shadow rounded-lg border-l-4 ${color}`}>
      <div className="p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className={`h-6 w-6 ${color.replace('border-', 'text-')}`} aria-hidden="true" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{status}</div>
            <div className="text-lg font-semibold">{count}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Recent Projects Component
function RecentProjects({ projects }) {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Projects</h3>
        <Link href="/projects" className="text-sm text-indigo-600 hover:text-indigo-500">
          View all
        </Link>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {projects.map((project) => (
            <li key={project.id}>
              <Link href={`/projects/${project.id}`} className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <span className="text-indigo-800 font-semibold">{project.name.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-indigo-600">{project.name}</div>
                        <div className="text-sm text-gray-500">{project.description || 'No description'}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm text-gray-500">
                        {project.tasks} tasks
                      </div>
                      <div className={`ml-2 flex-shrink-0 flex`}>
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          project.status === 'ACTIVE' ? 'bg-green-100 text-green-800' :
                          project.status === 'COMPLETED' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Recent Tasks Component
function RecentTasks({ tasks }) {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Tasks</h3>
        <Link href="/tasks" className="text-sm text-indigo-600 hover:text-indigo-500">
          View all
        </Link>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <li key={task.id}>
              <Link href={`/tasks/${task.id}`} className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-indigo-600">{task.name}</div>
                      <div className="text-sm text-gray-500">{task.project.name}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-indigo-600 h-2.5 rounded-full"
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 text-right mt-1">{task.progress}%</div>
                      </div>
                      <div className={`flex-shrink-0 flex`}>
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          task.status === 'RUNNING' ? 'bg-green-100 text-green-800' :
                          task.status === 'COMPLETED' ? 'bg-blue-100 text-blue-800' :
                          task.status === 'FAILED' ? 'bg-red-100 text-red-800' :
                          task.status === 'PAUSED' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalProjects: 0,
    activeProjects: 0,
    totalTasks: 0,
    completedTasks: 0,
    runningTasks: 0,
    pendingTasks: 0,
    failedTasks: 0,
    pausedTasks: 0,
  });
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentTasks, setRecentTasks] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        // Fetch projects
        const projectsResponse = await axios.get('/api/projects');
        const projects = projectsResponse.data;

        // Fetch tasks
        const tasksResponse = await axios.get('/api/tasks');
        const tasks = tasksResponse.data;

        // Calculate stats
        const activeProjects = projects.filter(p => p.status === 'ACTIVE').length;
        const completedTasks = tasks.filter(t => t.status === 'COMPLETED').length;
        const runningTasks = tasks.filter(t => t.status === 'RUNNING').length;
        const pendingTasks = tasks.filter(t => t.status === 'PENDING').length;
        const failedTasks = tasks.filter(t => t.status === 'FAILED').length;
        const pausedTasks = tasks.filter(t => t.status === 'PAUSED').length;

        setStats({
          totalProjects: projects.length,
          activeProjects,
          totalTasks: tasks.length,
          completedTasks,
          runningTasks,
          pendingTasks,
          failedTasks,
          pausedTasks,
        });

        // Set recent projects
        setRecentProjects(
          projects.slice(0, 5).map(project => ({
            id: project.id,
            name: project.name,
            description: project.description,
            status: project.status,
            tasks: project._count?.tasks || 0,
          }))
        );

        // Set recent tasks
        setRecentTasks(tasks.slice(0, 5));

        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex space-x-3">
          <Link
            href="/projects/new"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            New Project
          </Link>
          <Link
            href="/tasks/new"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            New Task
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Projects"
          value={stats.totalProjects}
          change="12%"
          changeType="increase"
          icon={FolderIcon}
        />
        <StatsCard
          title="Active Projects"
          value={stats.activeProjects}
          change="8%"
          changeType="increase"
          icon={FolderIcon}
        />
        <StatsCard
          title="Total Tasks"
          value={stats.totalTasks}
          change="5%"
          changeType="increase"
          icon={ClockIcon}
        />
        <StatsCard
          title="Completed Tasks"
          value={stats.completedTasks}
          change="10%"
          changeType="increase"
          icon={CheckCircleIcon}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <TaskStatusCard
          status="Running"
          count={stats.runningTasks}
          icon={ArrowUpIcon}
          color="border-green-500"
        />
        <TaskStatusCard
          status="Pending"
          count={stats.pendingTasks}
          icon={ClockIcon}
          color="border-yellow-500"
        />
        <TaskStatusCard
          status="Paused"
          count={stats.pausedTasks}
          icon={PauseCircleIcon}
          color="border-blue-500"
        />
        <TaskStatusCard
          status="Failed"
          count={stats.failedTasks}
          icon={ExclamationCircleIcon}
          color="border-red-500"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <RecentProjects projects={recentProjects} />
        <RecentTasks tasks={recentTasks} />
      </div>
    </div>
  );
}
