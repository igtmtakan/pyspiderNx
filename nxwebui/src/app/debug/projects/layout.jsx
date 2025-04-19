'use client';

import { useEffect } from 'react';

export default function DebugProjectsLayout({ children }) {
  // Add any layout-specific logic here
  
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
