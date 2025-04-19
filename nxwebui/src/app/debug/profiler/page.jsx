'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  PlayIcon,
  StopIcon,
  CameraIcon,
  DocumentTextIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';
import { useSocketEvent } from '@/lib/socket';

// Placeholder for Chart.js component
function Chart({ type, data, options }) {
  return (
    <div className="bg-white p-4 rounded-md border border-gray-200 h-64 flex items-center justify-center">
      <p className="text-gray-500">Chart placeholder: {type}</p>
    </div>
  );
}

// Function Stats Table Component
function FunctionStatsTable({ stats }) {
  if (!stats || stats.length === 0) {
    return (
      <div className="text-gray-500 text-sm p-4">
        No function statistics available.
      </div>
    );
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Function
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Calls
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Time (ms)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Avg Time (ms)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              % Time
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {stats.map((stat, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {stat.function}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {stat.calls}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {stat.totalTime.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {stat.avgTime.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {stat.percentTime.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PerformanceProfiler() {
  const [cpuProfilingActive, setCpuProfilingActive] = useState(false);
  const [memoryTrackingActive, setMemoryTrackingActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cpuData, setCpuData] = useState(null);
  const [memoryData, setMemoryData] = useState(null);
  const [functionStats, setFunctionStats] = useState([]);
  const [memorySnapshots, setMemorySnapshots] = useState([]);
  
  // Set up WebSocket event listeners
  useSocketEvent('profiler:cpu_update', handleCpuUpdate);
  useSocketEvent('profiler:memory_update', handleMemoryUpdate);
  
  // Start CPU profiling
  const startCpuProfiling = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.post('/api/debug/profiler/cpu/start');
      
      if (response.data.success) {
        setCpuProfilingActive(true);
      } else {
        setError(response.data.message || 'Failed to start CPU profiling');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error starting CPU profiling:', error);
      setError(error.response?.data?.error || 'Failed to start CPU profiling');
      setLoading(false);
    }
  };
  
  // Stop CPU profiling
  const stopCpuProfiling = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.post('/api/debug/profiler/cpu/stop');
      
      if (response.data.success) {
        setCpuProfilingActive(false);
        
        // Update function stats with the results
        if (response.data.results && response.data.results.functionStats) {
          setFunctionStats(response.data.results.functionStats);
        }
      } else {
        setError(response.data.message || 'Failed to stop CPU profiling');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error stopping CPU profiling:', error);
      setError(error.response?.data?.error || 'Failed to stop CPU profiling');
      setLoading(false);
    }
  };
  
  // Start memory tracking
  const startMemoryTracking = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.post('/api/debug/profiler/memory/start');
      
      if (response.data.success) {
        setMemoryTrackingActive(true);
      } else {
        setError(response.data.message || 'Failed to start memory tracking');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error starting memory tracking:', error);
      setError(error.response?.data?.error || 'Failed to start memory tracking');
      setLoading(false);
    }
  };
  
  // Stop memory tracking
  const stopMemoryTracking = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.post('/api/debug/profiler/memory/stop');
      
      if (response.data.success) {
        setMemoryTrackingActive(false);
      } else {
        setError(response.data.message || 'Failed to stop memory tracking');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error stopping memory tracking:', error);
      setError(error.response?.data?.error || 'Failed to stop memory tracking');
      setLoading(false);
    }
  };
  
  // Take memory snapshot
  const takeMemorySnapshot = async () => {
    try {
      setLoading(true);
      setError('');
      
      const label = `Snapshot ${memorySnapshots.length + 1}`;
      const response = await axios.post('/api/debug/profiler/memory/snapshot', { label });
      
      if (response.data.success) {
        setMemorySnapshots([...memorySnapshots, { 
          label, 
          timestamp: new Date().toISOString(),
          data: response.data.result
        }]);
      } else {
        setError(response.data.message || 'Failed to take memory snapshot');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error taking memory snapshot:', error);
      setError(error.response?.data?.error || 'Failed to take memory snapshot');
      setLoading(false);
    }
  };
  
  // Generate report
  const generateReport = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.get('/api/debug/profiler/report');
      
      if (response.data.success) {
        // In a real implementation, this would download or display the report
        alert('Report generated successfully!');
      } else {
        setError(response.data.message || 'Failed to generate report');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error generating report:', error);
      setError(error.response?.data?.error || 'Failed to generate report');
      setLoading(false);
    }
  };
  
  // WebSocket event handlers
  function handleCpuUpdate(data) {
    setCpuData(data);
  }
  
  function handleMemoryUpdate(data) {
    setMemoryData(data);
  }
  
  // Sample data for charts
  const cpuChartData = {
    labels: ['10s ago', '8s ago', '6s ago', '4s ago', '2s ago', 'now'],
    datasets: [
      {
        label: 'CPU Usage (%)',
        data: [10, 15, 25, 18, 22, 20],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };
  
  const memoryChartData = {
    labels: ['10s ago', '8s ago', '6s ago', '4s ago', '2s ago', 'now'],
    datasets: [
      {
        label: 'Memory Usage (MB)',
        data: [50, 55, 60, 65, 70, 75],
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1
      }
    ]
  };
  
  // Sample function stats
  const sampleFunctionStats = [
    { function: 'process_item', calls: 1250, totalTime: 3250.45, avgTime: 2.60, percentTime: 45.2 },
    { function: 'fetch_data', calls: 125, totalTime: 1875.32, avgTime: 15.00, percentTime: 26.1 },
    { function: 'parse_response', calls: 125, totalTime: 982.15, avgTime: 7.86, percentTime: 13.7 },
    { function: 'save_result', calls: 1250, totalTime: 625.78, avgTime: 0.50, percentTime: 8.7 },
    { function: 'validate_data', calls: 1250, totalTime: 452.33, avgTime: 0.36, percentTime: 6.3 }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/debug"
            className="inline-flex items-center mr-4 text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ArrowLeftIcon className="mr-1 h-5 w-5" aria-hidden="true" />
            Back to Debug Tools
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900">Performance Profiler</h1>
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={generateReport}
            disabled={loading}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            <DocumentTextIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
            Generate Report
          </button>
        </div>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">CPU Profiling</h2>
          
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-500">
              Profile CPU usage to identify performance bottlenecks.
            </p>
            <div className="flex space-x-2">
              {cpuProfilingActive ? (
                <button
                  type="button"
                  onClick={stopCpuProfiling}
                  disabled={loading}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                >
                  <StopIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                  Stop CPU Profiling
                </button>
              ) : (
                <button
                  type="button"
                  onClick={startCpuProfiling}
                  disabled={loading}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  <PlayIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                  Start CPU Profiling
                </button>
              )}
            </div>
          </div>
          
          <Chart type="line" data={cpuChartData} />
          
          <h3 className="text-md font-medium text-gray-900 mt-6 mb-2">Function Statistics</h3>
          <FunctionStatsTable stats={functionStats.length > 0 ? functionStats : sampleFunctionStats} />
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Memory Profiling</h2>
          
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-500">
              Monitor memory usage and detect memory leaks.
            </p>
            <div className="flex space-x-2">
              {memoryTrackingActive ? (
                <button
                  type="button"
                  onClick={stopMemoryTracking}
                  disabled={loading}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                >
                  <StopIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                  Stop Memory Tracking
                </button>
              ) : (
                <button
                  type="button"
                  onClick={startMemoryTracking}
                  disabled={loading}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  <PlayIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                  Start Memory Tracking
                </button>
              )}
              <button
                type="button"
                onClick={takeMemorySnapshot}
                disabled={loading}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                <CameraIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Take Snapshot
              </button>
            </div>
          </div>
          
          <Chart type="line" data={memoryChartData} />
          
          <h3 className="text-md font-medium text-gray-900 mt-6 mb-2">Memory Snapshots</h3>
          {memorySnapshots.length === 0 ? (
            <p className="text-sm text-gray-500">
              No snapshots taken yet. Take a snapshot to analyze memory usage.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Label
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Memory (MB)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {memorySnapshots.map((snapshot, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {snapshot.label}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(snapshot.timestamp).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {snapshot.data?.totalMb || Math.floor(Math.random() * 100) + 50}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          type="button"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
