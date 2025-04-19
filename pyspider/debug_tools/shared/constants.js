/**
 * Debug Tools Constants
 */

// API Endpoints
const API_ENDPOINTS = {
  // Debugger
  DEBUGGER_START: '/api/debugger/start',
  DEBUGGER_STOP: '/api/debugger/stop',
  DEBUGGER_STEP_INTO: '/api/debugger/step_into',
  DEBUGGER_STEP_OVER: '/api/debugger/step_over',
  DEBUGGER_STEP_OUT: '/api/debugger/step_out',
  DEBUGGER_CONTINUE: '/api/debugger/continue',
  DEBUGGER_BREAKPOINTS: '/api/debugger/breakpoints',
  DEBUGGER_EVALUATE: '/api/debugger/evaluate',
  DEBUGGER_EXECUTE: '/api/debugger/execute',
  DEBUGGER_VARIABLES: '/api/debugger/variables',
  DEBUGGER_VARIABLE: '/api/debugger/variable',
  DEBUGGER_WATCH: '/api/debugger/watch',
  DEBUGGER_STACK: '/api/debugger/stack',
  DEBUGGER_FRAME: '/api/debugger/frame',
  DEBUGGER_SOURCE: '/api/debugger/source',
  DEBUGGER_DEBUG: '/api/debugger/debug',
  DEBUGGER_OUTPUT: '/api/debugger/output',
  
  // Inspector
  INSPECTOR_REQUESTS: '/api/inspector/requests',
  INSPECTOR_RESPONSES: '/api/inspector/responses',
  INSPECTOR_REQUEST: '/api/inspector/request',
  INSPECTOR_RESPONSE: '/api/inspector/response',
  INSPECTOR_REQUEST_RESPONSE: '/api/inspector/request_response',
  INSPECTOR_CLEAR: '/api/inspector/clear',
  INSPECTOR_DELETE_REQUEST: '/api/inspector/request',
  INSPECTOR_MODIFY_REQUEST: '/api/inspector/request/modify',
  INSPECTOR_RESEND_REQUEST: '/api/inspector/request/resend',
  INSPECTOR_FILTER: '/api/inspector/filter',
  INSPECTOR_FILTER_CLEAR: '/api/inspector/filter/clear',
  INSPECTOR_FILTERED_REQUESTS: '/api/inspector/filtered_requests',
  INSPECTOR_FILTERED_RESPONSES: '/api/inspector/filtered_responses',
  INSPECTOR_WEBSOCKET_MESSAGES: '/api/inspector/websocket_messages',
  INSPECTOR_WEBSOCKET_MESSAGE: '/api/inspector/websocket_message',
  INSPECTOR_WEBSOCKET_MESSAGES_CLEAR: '/api/inspector/websocket_messages/clear',
  INSPECTOR_HAR: '/api/inspector/har',
  INSPECTOR_COMPARE: '/api/inspector/compare',
  
  // Profiler
  PROFILER_CPU_START: '/api/profiler/cpu/start',
  PROFILER_CPU_STOP: '/api/profiler/cpu/stop',
  PROFILER_MEMORY_START: '/api/profiler/memory/start',
  PROFILER_MEMORY_STOP: '/api/profiler/memory/stop',
  PROFILER_MEMORY_SNAPSHOT: '/api/profiler/memory/snapshot',
  PROFILER_MEMORY_COMPARE: '/api/profiler/memory/compare',
  PROFILER_TIMING_START: '/api/profiler/timing/start',
  PROFILER_TIMING_STOP: '/api/profiler/timing/stop',
  PROFILER_TIMING_RESET: '/api/profiler/timing/reset',
  PROFILER_TIMING: '/api/profiler/timing',
  PROFILER_FUNCTION: '/api/profiler/function',
  PROFILER_FUNCTION_RESET: '/api/profiler/function/reset',
  PROFILER_GC: '/api/profiler/gc',
  PROFILER_MEMORY_USAGE: '/api/profiler/memory_usage',
  PROFILER_REPORT: '/api/profiler/report',
  PROFILER_REPORT_SAVE: '/api/profiler/report/save',
  PROFILER_RESOURCES_START: '/api/profiler/resources/start',
  PROFILER_RESOURCES_STOP: '/api/profiler/resources/stop',
  PROFILER_RESOURCES: '/api/profiler/resources',
  PROFILER_NETWORK: '/api/profiler/network',
  PROFILER_NETWORK_RESET: '/api/profiler/network/reset',
  PROFILER_CODE: '/api/profiler/code',
  PROFILER_FPS: '/api/profiler/fps'
};

// WebSocket Events
const WEBSOCKET_EVENTS = {
  // Debugger
  DEBUGGER_PAUSED: 'debugger:paused',
  DEBUGGER_RESUMED: 'debugger:resumed',
  DEBUGGER_STOPPED: 'debugger:stopped',
  DEBUGGER_ERROR: 'debugger:error',
  DEBUGGER_OUTPUT: 'debugger:output',
  
  // Inspector
  INSPECTOR_REQUEST_RECEIVED: 'inspector:request_received',
  INSPECTOR_RESPONSE_RECEIVED: 'inspector:response_received',
  INSPECTOR_WEBSOCKET_MESSAGE: 'inspector:websocket_message',
  
  // Profiler
  PROFILER_CPU_UPDATE: 'profiler:cpu_update',
  PROFILER_MEMORY_UPDATE: 'profiler:memory_update',
  PROFILER_RESOURCES_UPDATE: 'profiler:resources_update',
  PROFILER_NETWORK_UPDATE: 'profiler:network_update'
};

// Debugger States
const DEBUGGER_STATES = {
  STOPPED: 'stopped',
  RUNNING: 'running',
  PAUSED: 'paused',
  STEPPING: 'stepping',
  ERROR: 'error'
};

// HTTP Methods
const HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'];

// Content Types
const CONTENT_TYPES = {
  JSON: 'application/json',
  FORM: 'application/x-www-form-urlencoded',
  MULTIPART: 'multipart/form-data',
  TEXT: 'text/plain',
  HTML: 'text/html',
  XML: 'application/xml',
  JAVASCRIPT: 'application/javascript',
  CSS: 'text/css'
};

module.exports = {
  API_ENDPOINTS,
  WEBSOCKET_EVENTS,
  DEBUGGER_STATES,
  HTTP_METHODS,
  CONTENT_TYPES
};
