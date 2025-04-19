'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  FolderIcon,
  ClockIcon,
  CalendarIcon,
  BugAntIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Projects', href: '/projects', icon: FolderIcon },
  { name: 'Tasks', href: '/tasks', icon: ClockIcon },
  { name: 'Schedule', href: '/schedule', icon: CalendarIcon },
  { name: 'Debug Tools', href: '/debug', icon: BugAntIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`bg-gray-900 text-white transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
          {!collapsed && (
            <div className="text-xl font-bold">NxWebUI</div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-md hover:bg-gray-800"
          >
            {collapsed ? (
              <ArrowRightCircleIcon className="h-6 w-6" />
            ) : (
              <ArrowLeftCircleIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  ${isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
                  group flex items-center px-2 py-2 text-sm font-medium rounded-md
                `}
              >
                <item.icon
                  className={`
                    ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}
                    mr-3 flex-shrink-0 h-6 w-6
                  `}
                  aria-hidden="true"
                />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-800">
          {!collapsed && (
            <div className="text-xs text-gray-400">
              <div>PySpider v1.0.0</div>
              <div>NxWebUI v0.1.0</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
