'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  PlayIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';
import TaskEditor from '@/components/TaskEditor';
import ResultTabs from '@/components/ResultTabs';
import ClientMonacoEditor from '@/components/ClientMonacoEditor';

export default function DebugProject({ params }) {
  const { name } = React.use(params);
  const router = useRouter();

  // State
  const [script, setScript] = useState('');
  const [task, setTask] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('web');
  const [selectorHelperEnabled, setSelectorHelperEnabled] = useState(false);
  const [pythonLog, setPythonLog] = useState('');
  const [showPythonLog, setShowPythonLog] = useState(false);
  const [pyspiderStatus, setPyspiderStatus] = useState({ status: 'unknown' });

  // Load project data
  useEffect(() => {
    fetchProjectData();
    checkPyspiderStatus();
  }, [name]);

  // Check PySpider status
  const checkPyspiderStatus = async () => {
    try {
      const response = await axios.get('/api/pyspider-status');
      setPyspiderStatus(response.data);
    } catch (error) {
      console.error('Error checking PySpider status:', error);
      setPyspiderStatus({ status: 'error', error: error.message });
    }
  };

  const fetchProjectData = async () => {
    try {
      setLoading(true);
      setError('');

      console.log(`Fetching project data for ${name}`);
      const response = await axios.get(`/api/debug/projects/${name}`, {
        // Force refresh to get the latest script from PySpider
        params: { refresh: true, timestamp: Date.now() },
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      console.log('Project data response:', response.data);

      // Set script from response
      if (response.data.script) {
        console.log(`Setting script (${response.data.script.length} chars)`);
        setScript(response.data.script);
      } else {
        console.warn('No script found in response');
      }

      // Set task from response or use default
      setTask(response.data.task || {
        taskid: 'data:,on_start',
        project: name,
        url: 'data:,on_start',
        process: {
          callback: 'on_start',
        },
      });

      setLoading(false);
    } catch (error) {
      console.error('Error fetching project data:', error);
      setError(error.response?.data?.error || 'Failed to fetch project data');
      setLoading(false);
    }
  };

  // Run task
  const runTask = async () => {
    try {
      setRunning(true);
      setError('');
      setPythonLog('');
      setShowPythonLog(false);

      try {
        // Validate task JSON before sending
        console.log('Task before sending:', task, 'Type:', typeof task);

        // Always use a default task object to ensure it's valid
        const defaultTask = {
          taskid: 'data:,on_start',
          project: name,
          url: 'data:,on_start',
          process: {
            callback: 'on_start',
          },
        };

        // Merge with user-provided task if available
        let mergedTask = { ...defaultTask };

        try {
          if (typeof task === 'string') {
            // If task is a string, parse it and merge
            const parsedTask = JSON.parse(task);
            mergedTask = { ...defaultTask, ...parsedTask };
          } else if (typeof task === 'object' && task !== null) {
            // If task is an object, merge directly
            mergedTask = { ...defaultTask, ...task };
          }
        } catch (jsonError) {
          console.error('Invalid task JSON:', jsonError);
          setError('Invalid task JSON: ' + jsonError.message);
          // Continue with default task
        }

        // Convert final task to JSON string
        const taskToSend = JSON.stringify(mergedTask);
        console.log('Task to send:', taskToSend);

        const response = await axios.post(`/api/debug/projects/${name}/run`, {
          script,
          task: taskToSend
        }, { timeout: 10000 }); // 10 second timeout

        setResult(response.data);

        // Set Python log if available
        if (response.data.logs) {
          setPythonLog(response.data.logs);
          setShowPythonLog(true);
        }

        // Show warning if using mock response
        if (response.data.messages &&
            response.data.messages.some(m => m.message && m.message.includes('mock'))) {
          setError('Warning: Using mock response. PySpider API is not available.');
        }

        setActiveTab('web');
      } catch (apiError) {
        console.error('Error running task:', apiError);

        // Handle network errors
        if (apiError.code === 'ECONNABORTED') {
          setError('Request timed out. The server took too long to respond.');
        } else if (apiError.message === 'Network Error') {
          setError('Network error. Please check your connection and try again.');
        } else {
          setError(apiError.response?.data?.error || 'Failed to run task');
        }
      }
    } finally {
      setRunning(false);
    }
  };

  // Save script
  const saveScript = async () => {
    try {
      setSaving(true);
      setError('');

      await axios.put(`/api/debug/projects/${name}/script`, {
        script
      });

      setSaving(false);
    } catch (error) {
      console.error('Error saving script:', error);
      setError(error.response?.data?.error || 'Failed to save script');
      setSaving(false);
    }
  };

  // Handle CSS selector selection
  const handleSelectorSelected = (selector) => {
    // Insert selector at cursor position in Monaco editor
    // This would require direct Monaco editor API access
    // For now, just append to script
    setScript(prevScript => {
      return prevScript + `\n// Selected CSS selector: ${selector}`;
    });
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/debug/projects"
            className="inline-flex items-center mr-4 text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ArrowLeftIcon className="mr-1 h-5 w-5" aria-hidden="true" />
            Back to Projects
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">{name}</h1>
          {/* PySpider status indicator */}
          <div className="ml-4 flex items-center">
            <span className="mr-2 text-sm text-gray-500">PySpider:</span>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${pyspiderStatus.status === 'online' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {pyspiderStatus.status === 'online' ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={saveScript}
            disabled={saving || loading}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {saving ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              <>
                <DocumentTextIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Save
              </>
            )}
          </button>
          <button
            type="button"
            onClick={runTask}
            disabled={running || loading}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {running ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Running...
              </>
            ) : (
              <>
                <PlayIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Run
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 m-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Loading indicator */}
      {loading && (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      )}

      {/* Main content */}
      {!loading && (
        <div className="flex-1 flex overflow-hidden">
          {/* Left panel */}
          <div className="w-1/2 flex flex-col border-r border-gray-200">
            {/* Task editor */}
            <div className="h-1/3 border-b border-gray-200 p-4">
              <h2 className="text-sm font-medium text-gray-900 mb-2">Task</h2>
              <TaskEditor
                value={task}
                onChange={setTask}
              />
            </div>

            {/* Python log */}
            {showPythonLog && (
              <div className="border-b border-gray-200 p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-sm font-medium text-gray-900">Python Log</h2>
                  <button
                    type="button"
                    onClick={() => setShowPythonLog(false)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-auto max-h-40">
                  <pre className="text-xs whitespace-pre-wrap">{pythonLog}</pre>
                </div>
              </div>
            )}

            {/* Result tabs */}
            <div className="flex-1 overflow-hidden">
              <div className="flex border-b border-gray-200">
                <button
                  className={`px-4 py-2 text-sm font-medium ${activeTab === 'web' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('web')}
                >
                  Web
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium ${activeTab === 'html' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('html')}
                >
                  HTML
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium ${activeTab === 'follows' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('follows')}
                >
                  Follows
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium ${activeTab === 'messages' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('messages')}
                >
                  Messages
                </button>
                <div className="flex-1"></div>
                <button
                  className={`px-4 py-2 text-sm font-medium ${selectorHelperEnabled ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setSelectorHelperEnabled(!selectorHelperEnabled)}
                >
                  CSS Selector Helper
                </button>
              </div>

              <ResultTabs
                result={result}
                activeTab={activeTab}
                selectorHelperEnabled={selectorHelperEnabled}
                onSelectorSelected={handleSelectorSelected}
              />
            </div>
          </div>

          {/* Right panel - Python editor */}
          <div className="w-1/2 flex flex-col">
            <div className="flex-1">
              <ClientMonacoEditor
                language="python"
                value={script}
                onChange={setScript}
                options={{
                  minimap: { enabled: false },
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
