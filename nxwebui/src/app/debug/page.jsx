'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BugAntIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  CommandLineIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

// Debug Tool Card Component
function DebugToolCard({ title, description, icon: Icon, href, color }) {
  return (
    <Link href={href} className="block">
      <div className={`bg-white overflow-hidden shadow rounded-lg border-l-4 ${color} hover:shadow-md transition-shadow duration-200`}>
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Icon className={`h-8 w-8 ${color.replace('border-', 'text-')}`} aria-hidden="true" />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-medium text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function DebugTools() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Debug Tools</h1>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900">Debugging and Monitoring Tools</h2>
          <p className="mt-1 text-sm text-gray-500">
            Powerful tools to help you debug, inspect, and profile your PySpider applications.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <DebugToolCard
              title="Project Debugger"
              description="Debug your PySpider projects with an interactive editor, task runner, and result viewer."
              icon={CodeBracketIcon}
              href="/debug/projects"
              color="border-blue-500"
            />

            <DebugToolCard
              title="Interactive Debugger"
              description="Step through your code, set breakpoints, and inspect variables in real-time."
              icon={CommandLineIcon}
              href="/debug/debugger"
              color="border-indigo-500"
            />

            <DebugToolCard
              title="Request Inspector"
              description="Inspect HTTP requests and responses, analyze headers, and replay requests."
              icon={MagnifyingGlassIcon}
              href="/debug/inspector"
              color="border-green-500"
            />

            <DebugToolCard
              title="Performance Profiler"
              description="Profile CPU usage, memory consumption, and identify performance bottlenecks."
              icon={ChartBarIcon}
              href="/debug/profiler"
              color="border-purple-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900">Getting Started</h2>
          <p className="mt-1 text-sm text-gray-500">
            Learn how to use the debugging tools effectively.
          </p>

          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-md font-medium text-gray-900">Interactive Debugger</h3>
              <ul className="mt-2 text-sm text-gray-500 list-disc list-inside space-y-1">
                <li>Set breakpoints in your code to pause execution</li>
                <li>Step through code line by line to understand execution flow</li>
                <li>Inspect and modify variables during debugging</li>
                <li>View the call stack to understand how you got to the current point</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-md font-medium text-gray-900">Request Inspector</h3>
              <ul className="mt-2 text-sm text-gray-500 list-disc list-inside space-y-1">
                <li>Monitor all HTTP requests and responses</li>
                <li>Analyze headers, cookies, and request/response bodies</li>
                <li>Filter requests by URL, method, or status code</li>
                <li>Modify and resend requests to test different scenarios</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-md font-medium text-gray-900">Performance Profiler</h3>
              <ul className="mt-2 text-sm text-gray-500 list-disc list-inside space-y-1">
                <li>Profile CPU usage to identify performance bottlenecks</li>
                <li>Monitor memory usage and detect memory leaks</li>
                <li>Analyze function call times to optimize code</li>
                <li>Generate comprehensive performance reports</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
