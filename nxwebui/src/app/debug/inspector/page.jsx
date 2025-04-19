'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowPathIcon,
  TrashIcon,
  ArrowUturnRightIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';
import { useSocketEvent } from '@/lib/socket';

// Request Item Component
function RequestItem({ request, isSelected, onClick }) {
  const statusCode = request.response?.statusCode;
  let statusColor = 'bg-gray-100 text-gray-800';
  
  if (statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
      statusColor = 'bg-green-100 text-green-800';
    } else if (statusCode >= 300 && statusCode < 400) {
      statusColor = 'bg-blue-100 text-blue-800';
    } else if (statusCode >= 400 && statusCode < 500) {
      statusColor = 'bg-yellow-100 text-yellow-800';
    } else if (statusCode >= 500) {
      statusColor = 'bg-red-100 text-red-800';
    }
  }
  
  return (
    <div 
      className={`p-3 border-b border-gray-200 cursor-pointer ${isSelected ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {request.method} {request.url}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {new Date(request.timestamp).toLocaleTimeString()}
          </p>
        </div>
        {statusCode && (
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
            {statusCode}
          </span>
        )}
      </div>
    </div>
  );
}

// Request Detail Component
function RequestDetail({ request }) {
  const [activeTab, setActiveTab] = useState('headers');
  
  if (!request) {
    return (
      <div className="text-center p-6 text-gray-500">
        Select a request to view details
      </div>
    );
  }
  
  const response = request.response;
  
  return (
    <div className="h-full flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Request Details</h3>
          <div className="flex space-x-2">
            <button
              type="button"
              className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ArrowUturnRightIcon className="-ml-0.5 mr-1 h-4 w-4" aria-hidden="true" />
              Resend
            </button>
            <button
              type="button"
              className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <DocumentDuplicateIcon className="-ml-0.5 mr-1 h-4 w-4" aria-hidden="true" />
              Copy
            </button>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            {request.method} {request.url}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {new Date(request.timestamp).toLocaleString()}
          </p>
        </div>
      </div>
      
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex">
          <button
            className={`${
              activeTab === 'headers'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm`}
            onClick={() => setActiveTab('headers')}
          >
            Headers
          </button>
          <button
            className={`${
              activeTab === 'body'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm`}
            onClick={() => setActiveTab('body')}
          >
            Body
          </button>
          {response && (
            <button
              className={`${
                activeTab === 'response'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab('response')}
            >
              Response
            </button>
          )}
        </nav>
      </div>
      
      <div className="flex-1 overflow-auto p-4">
        {activeTab === 'headers' && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Request Headers</h4>
            <div className="bg-gray-50 p-3 rounded-md">
              <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                {JSON.stringify(request.headers, null, 2)}
              </pre>
            </div>
          </div>
        )}
        
        {activeTab === 'body' && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Request Body</h4>
            <div className="bg-gray-50 p-3 rounded-md">
              <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                {request.body || 'No body content'}
              </pre>
            </div>
          </div>
        )}
        
        {activeTab === 'response' && response && (
          <div>
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Response Status</h4>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-sm text-gray-700">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    response.statusCode >= 200 && response.statusCode < 300 ? 'bg-green-100 text-green-800' : 
                    response.statusCode >= 300 && response.statusCode < 400 ? 'bg-blue-100 text-blue-800' : 
                    response.statusCode >= 400 && response.statusCode < 500 ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {response.statusCode}
                  </span>
                  <span className="ml-2">
                    {response.statusCode === 200 ? 'OK' : 
                     response.statusCode === 201 ? 'Created' : 
                     response.statusCode === 204 ? 'No Content' : 
                     response.statusCode === 400 ? 'Bad Request' : 
                     response.statusCode === 401 ? 'Unauthorized' : 
                     response.statusCode === 403 ? 'Forbidden' : 
                     response.statusCode === 404 ? 'Not Found' : 
                     response.statusCode === 500 ? 'Internal Server Error' : ''}
                  </span>
                </p>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Response Headers</h4>
              <div className="bg-gray-50 p-3 rounded-md">
                <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                  {JSON.stringify(response.headers, null, 2)}
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Response Body</h4>
              <div className="bg-gray-50 p-3 rounded-md">
                <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                  {response.body || 'No body content'}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function RequestInspector() {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [methodFilter, setMethodFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  
  // Fetch requests on component mount
  useEffect(() => {
    fetchRequests();
  }, []);
  
  // Set up WebSocket event listeners
  useSocketEvent('inspector:request_received', handleRequestReceived);
  useSocketEvent('inspector:response_received', handleResponseReceived);
  
  // Fetch requests
  const fetchRequests = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.get('/api/debug/inspector/requests');
      
      setRequests(response.data.requests);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching requests:', error);
      setError(error.response?.data?.error || 'Failed to fetch requests');
      setLoading(false);
    }
  };
  
  // Clear all requests
  const clearRequests = async () => {
    if (window.confirm('Are you sure you want to clear all requests?')) {
      try {
        setLoading(true);
        setError('');
        
        await axios.post('/api/debug/inspector/clear');
        
        setRequests([]);
        setSelectedRequest(null);
        setLoading(false);
      } catch (error) {
        console.error('Error clearing requests:', error);
        setError(error.response?.data?.error || 'Failed to clear requests');
        setLoading(false);
      }
    }
  };
  
  // Handle request selection
  const handleRequestSelect = async (request) => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.get(`/api/debug/inspector/request/${request.id}`);
      
      setSelectedRequest(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching request details:', error);
      setError(error.response?.data?.error || 'Failed to fetch request details');
      setLoading(false);
    }
  };
  
  // WebSocket event handlers
  function handleRequestReceived(data) {
    setRequests(prev => [data, ...prev]);
  }
  
  function handleResponseReceived(data) {
    setRequests(prev => {
      const index = prev.findIndex(req => req.id === data.requestId);
      if (index === -1) return prev;
      
      const newRequests = [...prev];
      newRequests[index] = {
        ...newRequests[index],
        response: {
          statusCode: data.statusCode,
          headers: data.headers,
          body: data.body,
          timestamp: data.timestamp
        }
      };
      
      return newRequests;
    });
    
    // Update selected request if it's the one that received a response
    if (selectedRequest && selectedRequest.id === data.requestId) {
      setSelectedRequest(prev => ({
        ...prev,
        response: {
          statusCode: data.statusCode,
          headers: data.headers,
          body: data.body,
          timestamp: data.timestamp
        }
      }));
    }
  }
  
  // Filter requests
  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.url.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMethod = methodFilter === '' || request.method === methodFilter;
    const matchesStatus = statusFilter === '' || 
                         (request.response && request.response.statusCode.toString().startsWith(statusFilter));
    
    return matchesSearch && matchesMethod && matchesStatus;
  });
  
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
          <h1 className="text-2xl font-semibold text-gray-900">Request Inspector</h1>
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={fetchRequests}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <ArrowPathIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
            Refresh
          </button>
          <button
            type="button"
            onClick={clearRequests}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <TrashIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
            Clear All
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
      
      <div className="bg-white shadow rounded-lg flex flex-col h-[calc(100vh-12rem)]">
        <div className="px-4 py-5 sm:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="flex-1 min-w-0">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search requests by URL"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={methodFilter}
                onChange={(e) => setMethodFilter(e.target.value)}
              >
                <option value="">All Methods</option>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
                <option value="PATCH">PATCH</option>
              </select>
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="2">2xx (Success)</option>
                <option value="3">3xx (Redirect)</option>
                <option value="4">4xx (Client Error)</option>
                <option value="5">5xx (Server Error)</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex overflow-hidden">
          <div className="w-1/3 border-r border-gray-200 overflow-y-auto">
            {loading && requests.length === 0 ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            ) : filteredRequests.length === 0 ? (
              <div className="text-center p-6 text-gray-500">
                No requests found
              </div>
            ) : (
              filteredRequests.map(request => (
                <RequestItem
                  key={request.id}
                  request={request}
                  isSelected={selectedRequest && selectedRequest.id === request.id}
                  onClick={() => handleRequestSelect(request)}
                />
              ))
            )}
          </div>
          
          <div className="w-2/3 overflow-y-auto">
            <RequestDetail request={selectedRequest} />
          </div>
        </div>
      </div>
    </div>
  );
}
