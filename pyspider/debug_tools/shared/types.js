/**
 * Debug Tools Type Definitions
 * 
 * Note: This file uses JSDoc for type definitions.
 * In a TypeScript project, this would be a .ts file with proper TypeScript types.
 */

/**
 * @typedef {Object} BreakpointInfo
 * @property {string} filename - The filename where the breakpoint is set
 * @property {number} lineno - The line number where the breakpoint is set
 * @property {string} [condition] - Optional condition for the breakpoint
 * @property {boolean} enabled - Whether the breakpoint is enabled
 * @property {number} hits - Number of times the breakpoint has been hit
 */

/**
 * @typedef {Object} FrameInfo
 * @property {string} filename - The filename of the current frame
 * @property {number} lineno - The line number of the current frame
 * @property {string} function - The function name of the current frame
 * @property {string} source_line - The source code of the current line
 * @property {Array<LineContext>} context - The context lines around the current line
 * @property {Object.<string, string>} locals - Local variables in the current frame
 * @property {Object.<string, string>} globals - Global variables in the current frame
 * @property {Array<StackFrame>} stack - The call stack
 * @property {string} output - Captured stdout
 * @property {string} error - Captured stderr
 */

/**
 * @typedef {Object} LineContext
 * @property {number} lineno - The line number
 * @property {string} content - The content of the line
 * @property {boolean} current - Whether this is the current line
 */

/**
 * @typedef {Object} StackFrame
 * @property {string} filename - The filename of the frame
 * @property {number} lineno - The line number of the frame
 * @property {string} function - The function name of the frame
 */

/**
 * @typedef {Object} EvaluationResult
 * @property {boolean} success - Whether the evaluation was successful
 * @property {string} [result] - The result of the evaluation (if successful)
 * @property {string} [type] - The type of the result (if successful)
 * @property {string} [error] - The error message (if unsuccessful)
 * @property {string} [traceback] - The traceback (if unsuccessful)
 */

/**
 * @typedef {Object} RequestInfo
 * @property {string} id - The request ID
 * @property {number} timestamp - The timestamp of the request
 * @property {string} method - The HTTP method
 * @property {string} url - The URL
 * @property {string} scheme - The URL scheme
 * @property {string} host - The URL host
 * @property {string} path - The URL path
 * @property {string} query_string - The URL query string
 * @property {Array<Array<string>>} query_params - The URL query parameters
 * @property {Object.<string, string>} headers - The request headers
 * @property {Object.<string, string>} cookies - The request cookies
 * @property {string} body - The request body
 * @property {Object} [body_parsed] - The parsed request body (if applicable)
 * @property {number} size - The size of the request body
 * @property {string} content_type - The content type of the request
 */

/**
 * @typedef {Object} ResponseInfo
 * @property {string} id - The response ID
 * @property {number} timestamp - The timestamp of the response
 * @property {number} status_code - The HTTP status code
 * @property {Object.<string, string>} headers - The response headers
 * @property {Object.<string, string>} cookies - The response cookies
 * @property {string} body - The response body
 * @property {Object} [body_parsed] - The parsed response body (if applicable)
 * @property {number} size - The size of the response body
 * @property {string} content_type - The content type of the response
 * @property {number} time - The time taken to receive the response
 */

/**
 * @typedef {Object} WebSocketMessageInfo
 * @property {string} id - The message ID
 * @property {number} timestamp - The timestamp of the message
 * @property {string} direction - The direction of the message ('sent' or 'received')
 * @property {string} connection_id - The connection ID
 * @property {string} data - The message data
 * @property {number} size - The size of the message
 * @property {Object} [data_parsed] - The parsed message data (if applicable)
 * @property {boolean} is_json - Whether the message is JSON
 */

/**
 * @typedef {Object} CPUProfileResult
 * @property {boolean} success - Whether the profiling was successful
 * @property {string} text_report - The text report of the profiling
 * @property {Array<FunctionStat>} function_stats - The function statistics
 */

/**
 * @typedef {Object} FunctionStat
 * @property {string} filename - The filename of the function
 * @property {number} lineno - The line number of the function
 * @property {string} funcname - The function name
 * @property {number} calls - The number of calls to the function
 * @property {number} ncalls - The number of non-recursive calls to the function
 * @property {number} tottime - The total time spent in the function
 * @property {number} cumtime - The cumulative time spent in the function and all subfunctions
 * @property {number} callers - The number of callers of the function
 */

/**
 * @typedef {Object} MemorySnapshotInfo
 * @property {string} label - The label of the snapshot
 * @property {number} timestamp - The timestamp of the snapshot
 * @property {number} total_size - The total size of the memory
 * @property {number} rss - The resident set size
 * @property {number} vms - The virtual memory size
 * @property {Array<MemoryStat>} top_stats - The top memory consumers
 */

/**
 * @typedef {Object} MemoryStat
 * @property {string} filename - The filename of the memory consumer
 * @property {number} lineno - The line number of the memory consumer
 * @property {number} size - The size of the memory consumer
 * @property {number} count - The count of the memory consumer
 */

/**
 * @typedef {Object} TimingStat
 * @property {string} name - The name of the timing
 * @property {boolean} active - Whether the timing is active
 * @property {number} elapsed - The elapsed time
 * @property {number} calls - The number of calls
 */

/**
 * @typedef {Object} ResourceUsage
 * @property {Array<CPUSample>} cpu - The CPU usage samples
 * @property {Array<MemorySample>} memory - The memory usage samples
 * @property {Array<DiskSample>} disk - The disk usage samples
 * @property {Array<NetworkSample>} network - The network usage samples
 */

/**
 * @typedef {Object} CPUSample
 * @property {number} timestamp - The timestamp of the sample
 * @property {number} percent - The CPU usage percentage
 */

/**
 * @typedef {Object} MemorySample
 * @property {number} timestamp - The timestamp of the sample
 * @property {number} total - The total memory
 * @property {number} available - The available memory
 * @property {number} used - The used memory
 * @property {number} percent - The memory usage percentage
 */

/**
 * @typedef {Object} DiskSample
 * @property {number} timestamp - The timestamp of the sample
 * @property {number} read_bytes - The number of bytes read
 * @property {number} write_bytes - The number of bytes written
 * @property {number} read_count - The number of read operations
 * @property {number} write_count - The number of write operations
 */

/**
 * @typedef {Object} NetworkSample
 * @property {number} timestamp - The timestamp of the sample
 * @property {number} bytes_sent - The number of bytes sent
 * @property {number} bytes_recv - The number of bytes received
 * @property {number} packets_sent - The number of packets sent
 * @property {number} packets_recv - The number of packets received
 */

/**
 * @typedef {Object} NetworkStats
 * @property {number} requests - The number of requests
 * @property {number} responses - The number of responses
 * @property {number} errors - The number of errors
 * @property {number} bytes_sent - The number of bytes sent
 * @property {number} bytes_received - The number of bytes received
 * @property {number} avg_response_time - The average response time
 * @property {number} total_response_time - The total response time
 */

// Export types for documentation purposes
// In JavaScript, these exports don't actually do anything at runtime
module.exports = {
  // This is just for documentation
};
