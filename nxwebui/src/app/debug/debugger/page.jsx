'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  PlayIcon,
  StopIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ForwardIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';
import { useSocketEvent } from '@/lib/socket';

// Code Editor Component (Placeholder for Monaco Editor)
function CodeEditor({ code, currentLine, breakpoints, onBreakpointToggle }) {
  // In a real implementation, this would use Monaco Editor
  const lines = code.split('\n');
  
  return (
    <div className="font-mono text-sm bg-gray-50 border border-gray-300 rounded-md overflow-auto h-96">
      <table className="min-w-full">
        <tbody>
          {lines.map((line, index) => {
            const lineNumber = index + 1;
            const isCurrentLine = lineNumber === currentLine;
            const hasBreakpoint = breakpoints.some(bp => bp.lineno === lineNumber);
            
            return (
              <tr 
                key={lineNumber} 
                className={`${isCurrentLine ? 'bg-yellow-100' : ''} hover:bg-gray-100`}
              >
                <td 
                  className="w-10 text-right pr-2 text-gray-500 select-none cursor-pointer"
                  onClick={() => onBreakpointToggle(lineNumber)}
                >
                  <div className="flex items-center justify-end">
                    {hasBreakpoint && (
                      <div className="h-3 w-3 rounded-full bg-red-500 mr-1"></div>
                    )}
                    {lineNumber}
                  </div>
                </td>
                <td className="pl-4 pr-2 whitespace-pre">{line}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// Variables Panel Component
function VariablesPanel({ variables }) {
  if (!variables || Object.keys(variables).length === 0) {
    return (
      <div className="text-gray-500 text-sm p-4">
        No variables available.
      </div>
    );
  }
  
  return (
    <div className="overflow-auto h-64">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Value
            </th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Object.entries(variables).map(([name, value]) => (
            <tr key={name} className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                {name}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {typeof value === 'object' ? JSON.stringify(value) : String(value)}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {typeof value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Call Stack Panel Component
function CallStackPanel({ stack }) {
  if (!stack || stack.length === 0) {
    return (
      <div className="text-gray-500 text-sm p-4">
        No call stack available.
      </div>
    );
  }
  
  return (
    <div className="overflow-auto h-64">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Function
            </th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              File
            </th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Line
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {stack.map((frame, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                {frame.function || '<anonymous>'}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {frame.filename}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {frame.lineno}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Console Output Component
function ConsoleOutput({ output }) {
  const consoleRef = useRef(null);
  
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [output]);
  
  return (
    <div 
      ref={consoleRef}
      className="font-mono text-sm bg-gray-900 text-gray-100 p-4 rounded-md overflow-auto h-64"
    >
      {output || 'No output.'}
    </div>
  );
}

export default function InteractiveDebugger() {
  const [debuggerStatus, setDebuggerStatus] = useState('STOPPED');
  const [sessionId, setSessionId] = useState(null);
  const [sourceCode, setSourceCode] = useState('# No source code loaded.');
  const [currentLine, setCurrentLine] = useState(null);
  const [breakpoints, setBreakpoints] = useState([]);
  const [variables, setVariables] = useState({});
  const [callStack, setCallStack] = useState([]);
  const [consoleOutput, setConsoleOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expression, setExpression] = useState('');
  
  // Fetch debugger status on component mount
  useEffect(() => {
    fetchDebuggerStatus();
  }, []);
  
  // Set up WebSocket event listeners
  useSocketEvent('debugger:paused', handleDebuggerPaused);
  useSocketEvent('debugger:resumed', handleDebuggerResumed);
  useSocketEvent('debugger:stopped', handleDebuggerStopped);
  useSocketEvent('debugger:error', handleDebuggerError);
  useSocketEvent('debugger:output', handleDebuggerOutput);
  
  // Fetch debugger status
  const fetchDebuggerStatus = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/debug/debugger/status');
      
      setDebuggerStatus(response.data.status);
      
      if (response.data.sessionId) {
        setSessionId(response.data.sessionId);
        
        // If debugger is paused, fetch current state
        if (response.data.status === 'PAUSED') {
          fetchDebuggerState();
        }
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching debugger status:', error);
      setError('Failed to fetch debugger status');
      setLoading(false);
    }
  };
  
  // Fetch debugger state (source code, variables, call stack)
  const fetchDebuggerState = async () => {
    try {
      // This would be implemented to fetch the current state from the API
      // For now, we'll use placeholder data
      setSourceCode(`def factorial(n):
    if n <= 1:
        return 1
    else:
        return n * factorial(n - 1)

def main():
    n = 5
    result = factorial(n)
    print(f"Factorial of {n} is {result}")

if __name__ == "__main__":
    main()
`);
      setCurrentLine(3);
      setVariables({
        n: 1,
        '__name__': '__main__',
        '__file__': 'example.py'
      });
      setCallStack([
        { function: 'factorial', filename: 'example.py', lineno: 3 },
        { function: 'factorial', filename: 'example.py', lineno: 5 },
        { function: 'factorial', filename: 'example.py', lineno: 5 },
        { function: 'factorial', filename: 'example.py', lineno: 5 },
        { function: 'factorial', filename: 'example.py', lineno: 5 },
        { function: 'main', filename: 'example.py', lineno: 9 },
        { function: '<module>', filename: 'example.py', lineno: 12 }
      ]);
    } catch (error) {
      console.error('Error fetching debugger state:', error);
      setError('Failed to fetch debugger state');
    }
  };
  
  // Start the debugger
  const startDebugger = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.post('/api/debug/debugger/start');
      
      if (response.data.success) {
        setDebuggerStatus('RUNNING');
        setSessionId(response.data.sessionId);
        setConsoleOutput('Debugger started.\n');
      } else {
        setError(response.data.message || 'Failed to start debugger');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error starting debugger:', error);
      setError(error.response?.data?.error || 'Failed to start debugger');
      setLoading(false);
    }
  };
  
  // Stop the debugger
  const stopDebugger = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.post('/api/debug/debugger/stop');
      
      if (response.data.success) {
        setDebuggerStatus('STOPPED');
        setSessionId(null);
        setConsoleOutput(prev => prev + 'Debugger stopped.\n');
      } else {
        setError(response.data.message || 'Failed to stop debugger');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error stopping debugger:', error);
      setError(error.response?.data?.error || 'Failed to stop debugger');
      setLoading(false);
    }
  };
  
  // Step into
  const stepInto = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.post('/api/debug/debugger/step_into');
      
      if (response.data.success) {
        // The state will be updated via WebSocket event
        setConsoleOutput(prev => prev + 'Step into.\n');
      } else {
        setError(response.data.message || 'Failed to step into');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error stepping into:', error);
      setError(error.response?.data?.error || 'Failed to step into');
      setLoading(false);
    }
  };
  
  // Step over
  const stepOver = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.post('/api/debug/debugger/step_over');
      
      if (response.data.success) {
        // The state will be updated via WebSocket event
        setConsoleOutput(prev => prev + 'Step over.\n');
      } else {
        setError(response.data.message || 'Failed to step over');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error stepping over:', error);
      setError(error.response?.data?.error || 'Failed to step over');
      setLoading(false);
    }
  };
  
  // Step out
  const stepOut = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.post('/api/debug/debugger/step_out');
      
      if (response.data.success) {
        // The state will be updated via WebSocket event
        setConsoleOutput(prev => prev + 'Step out.\n');
      } else {
        setError(response.data.message || 'Failed to step out');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error stepping out:', error);
      setError(error.response?.data?.error || 'Failed to step out');
      setLoading(false);
    }
  };
  
  // Continue execution
  const continueExecution = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.post('/api/debug/debugger/continue');
      
      if (response.data.success) {
        setDebuggerStatus('RUNNING');
        setConsoleOutput(prev => prev + 'Continuing execution.\n');
      } else {
        setError(response.data.message || 'Failed to continue execution');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error continuing execution:', error);
      setError(error.response?.data?.error || 'Failed to continue execution');
      setLoading(false);
    }
  };
  
  // Toggle breakpoint
  const toggleBreakpoint = (lineno) => {
    const existingBreakpoint = breakpoints.find(bp => bp.lineno === lineno);
    
    if (existingBreakpoint) {
      // Remove breakpoint
      setBreakpoints(breakpoints.filter(bp => bp.lineno !== lineno));
      setConsoleOutput(prev => prev + `Breakpoint removed at line ${lineno}.\n`);
    } else {
      // Add breakpoint
      setBreakpoints([...breakpoints, { lineno, enabled: true }]);
      setConsoleOutput(prev => prev + `Breakpoint set at line ${lineno}.\n`);
    }
  };
  
  // Evaluate expression
  const evaluateExpression = async () => {
    if (!expression.trim()) return;
    
    try {
      setLoading(true);
      setError('');
      
      // In a real implementation, this would call the API
      // For now, we'll just add the expression to the console
      setConsoleOutput(prev => prev + `> ${expression}\n`);
      
      // Simulate a response
      setTimeout(() => {
        setConsoleOutput(prev => prev + `Result: ${expression}\n`);
        setExpression('');
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error evaluating expression:', error);
      setError(error.response?.data?.error || 'Failed to evaluate expression');
      setLoading(false);
    }
  };
  
  // WebSocket event handlers
  function handleDebuggerPaused(data) {
    setDebuggerStatus('PAUSED');
    setCurrentLine(data.frame?.lineno);
    setVariables(data.frame?.locals || {});
    setCallStack(data.stack || []);
    setConsoleOutput(prev => prev + `Paused at line ${data.frame?.lineno}.\n`);
  }
  
  function handleDebuggerResumed(data) {
    setDebuggerStatus('RUNNING');
    setConsoleOutput(prev => prev + 'Execution resumed.\n');
  }
  
  function handleDebuggerStopped(data) {
    setDebuggerStatus('STOPPED');
    setSessionId(null);
    setConsoleOutput(prev => prev + 'Debugger stopped.\n');
  }
  
  function handleDebuggerError(data) {
    setError(data.error || 'An error occurred in the debugger');
    setConsoleOutput(prev => prev + `Error: ${data.error}\n`);
  }
  
  function handleDebuggerOutput(data) {
    if (data.stdout) {
      setConsoleOutput(prev => prev + data.stdout);
    }
    if (data.stderr) {
      setConsoleOutput(prev => prev + `Error: ${data.stderr}`);
    }
  }
  
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
          <h1 className="text-2xl font-semibold text-gray-900">Interactive Debugger</h1>
        </div>
        <div className="flex items-center space-x-2">
          <div className={`h-3 w-3 rounded-full ${
            debuggerStatus === 'RUNNING' ? 'bg-green-500' :
            debuggerStatus === 'PAUSED' ? 'bg-yellow-500' :
            'bg-gray-500'
          }`}></div>
          <span className="text-sm font-medium text-gray-700">
            {debuggerStatus}
          </span>
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
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">Debugger Controls</h2>
            <div className="flex space-x-2">
              {debuggerStatus === 'STOPPED' ? (
                <button
                  type="button"
                  onClick={startDebugger}
                  disabled={loading}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  <PlayIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                  Start
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopDebugger}
                  disabled={loading}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                >
                  <StopIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                  Stop
                </button>
              )}
              
              {debuggerStatus === 'PAUSED' && (
                <>
                  <button
                    type="button"
                    onClick={stepInto}
                    disabled={loading}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                  >
                    <ArrowDownIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                    Step Into
                  </button>
                  <button
                    type="button"
                    onClick={stepOver}
                    disabled={loading}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                  >
                    <ArrowRightIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                    Step Over
                  </button>
                  <button
                    type="button"
                    onClick={stepOut}
                    disabled={loading}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                  >
                    <ArrowUpIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                    Step Out
                  </button>
                  <button
                    type="button"
                    onClick={continueExecution}
                    disabled={loading}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                  >
                    <ForwardIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                    Continue
                  </button>
                </>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-md font-medium text-gray-900 mb-2">Source Code</h3>
              <CodeEditor 
                code={sourceCode} 
                currentLine={currentLine} 
                breakpoints={breakpoints}
                onBreakpointToggle={toggleBreakpoint}
              />
              
              <h3 className="text-md font-medium text-gray-900 mt-4 mb-2">Console</h3>
              <ConsoleOutput output={consoleOutput} />
              
              <div className="mt-2 flex">
                <input
                  type="text"
                  value={expression}
                  onChange={(e) => setExpression(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && evaluateExpression()}
                  placeholder="Enter expression to evaluate"
                  className="flex-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={evaluateExpression}
                  disabled={loading || !expression.trim()}
                  className="ml-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  Evaluate
                </button>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-2">Variables</h3>
                <VariablesPanel variables={variables} />
              </div>
              
              <div>
                <h3 className="text-md font-medium text-gray-900 mb-2">Call Stack</h3>
                <CallStackPanel stack={callStack} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
