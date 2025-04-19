/**
 * Python Inspector Service
 * 
 * This service provides an interface to the Python request inspector.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

// Import WebSocket events
const { WEBSOCKET_EVENTS } = require('../../shared/constants');

// Global socket.io instance
let io = null;

// Python inspector process
let inspectorProcess = null;

// Set the socket.io instance
exports.setIo = (socketIo) => {
  io = socketIo;
};

/**
 * Start the inspector
 */
exports.start = async () => {
  try {
    // Check if inspector is already running
    if (inspectorProcess) {
      return { status: 'already_running' };
    }
    
    // Start the Python inspector process
    inspectorProcess = spawn('python', [
      '-m', 'pyspider.debugger.request_inspector',
      '--server'
    ]);
    
    // Set up event listeners
    inspectorProcess.stdout.on('data', (data) => {
      const output = data.toString();
      console.log('Inspector output:', output);
      
      // Parse JSON output
      try {
        const jsonOutput = JSON.parse(output);
        
        // Emit event based on message type
        if (jsonOutput.type === 'request_received') {
          io.emit(WEBSOCKET_EVENTS.INSPECTOR_REQUEST_RECEIVED, jsonOutput.data);
        } else if (jsonOutput.type === 'response_received') {
          io.emit(WEBSOCKET_EVENTS.INSPECTOR_RESPONSE_RECEIVED, jsonOutput.data);
        } else if (jsonOutput.type === 'websocket_message') {
          io.emit(WEBSOCKET_EVENTS.INSPECTOR_WEBSOCKET_MESSAGE, jsonOutput.data);
        }
      } catch (error) {
        // Not JSON, just regular output
        console.log('Non-JSON inspector output:', output);
      }
    });
    
    inspectorProcess.stderr.on('data', (data) => {
      const error = data.toString();
      console.error('Inspector error:', error);
    });
    
    inspectorProcess.on('close', (code) => {
      console.log(`Inspector process exited with code ${code}`);
      inspectorProcess = null;
    });
    
    // Wait for inspector to initialize
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { status: 'started' };
  } catch (error) {
    console.error('Error starting inspector:', error);
    throw error;
  }
};

/**
 * Stop the inspector
 */
exports.stop = async () => {
  try {
    if (!inspectorProcess) {
      return { status: 'not_running' };
    }
    
    // Send stop command to inspector
    await _sendCommand('stop');
    
    // Kill the process if it doesn't exit
    setTimeout(() => {
      if (inspectorProcess) {
        inspectorProcess.kill();
        inspectorProcess = null;
      }
    }, 1000);
    
    return { status: 'stopped' };
  } catch (error) {
    console.error('Error stopping inspector:', error);
    throw error;
  }
};

/**
 * Get all requests
 */
exports.getRequests = async () => {
  try {
    return await _sendCommand('get_all_requests');
  } catch (error) {
    console.error('Error getting requests:', error);
    throw error;
  }
};

/**
 * Get all responses
 */
exports.getResponses = async () => {
  try {
    return await _sendCommand('get_all_responses');
  } catch (error) {
    console.error('Error getting responses:', error);
    throw error;
  }
};

/**
 * Get a request
 */
exports.getRequest = async (requestId) => {
  try {
    return await _sendCommand('get_request', { request_id: requestId });
  } catch (error) {
    console.error('Error getting request:', error);
    throw error;
  }
};

/**
 * Get a response
 */
exports.getResponse = async (requestId) => {
  try {
    return await _sendCommand('get_response', { request_id: requestId });
  } catch (error) {
    console.error('Error getting response:', error);
    throw error;
  }
};

/**
 * Get a request and response
 */
exports.getRequestResponse = async (requestId) => {
  try {
    return await _sendCommand('get_request_response', { request_id: requestId });
  } catch (error) {
    console.error('Error getting request/response:', error);
    throw error;
  }
};

/**
 * Clear all requests and responses
 */
exports.clearAll = async () => {
  try {
    return await _sendCommand('clear_all');
  } catch (error) {
    console.error('Error clearing all requests and responses:', error);
    throw error;
  }
};

/**
 * Delete a request
 */
exports.deleteRequest = async (requestId) => {
  try {
    return await _sendCommand('delete_request', { request_id: requestId });
  } catch (error) {
    console.error('Error deleting request:', error);
    throw error;
  }
};

/**
 * Modify a request
 */
exports.modifyRequest = async (requestId, modifications) => {
  try {
    return await _sendCommand('modify_request', { request_id: requestId, modifications });
  } catch (error) {
    console.error('Error modifying request:', error);
    throw error;
  }
};

/**
 * Resend a request
 */
exports.resendRequest = async (requestId, modifications = null) => {
  try {
    return await _sendCommand('resend_request', { request_id: requestId, modifications });
  } catch (error) {
    console.error('Error resending request:', error);
    throw error;
  }
};

/**
 * Set a filter
 */
exports.setFilter = async (name, value) => {
  try {
    return await _sendCommand('set_filter', { name, value });
  } catch (error) {
    console.error('Error setting filter:', error);
    throw error;
  }
};

/**
 * Clear a filter
 */
exports.clearFilter = async (filterName = null) => {
  try {
    return await _sendCommand('clear_filter', { filter_name: filterName });
  } catch (error) {
    console.error('Error clearing filter:', error);
    throw error;
  }
};

/**
 * Get filtered requests
 */
exports.getFilteredRequests = async () => {
  try {
    return await _sendCommand('get_filtered_requests');
  } catch (error) {
    console.error('Error getting filtered requests:', error);
    throw error;
  }
};

/**
 * Get filtered responses
 */
exports.getFilteredResponses = async () => {
  try {
    return await _sendCommand('get_filtered_responses');
  } catch (error) {
    console.error('Error getting filtered responses:', error);
    throw error;
  }
};

/**
 * Get all WebSocket messages
 */
exports.getWebSocketMessages = async () => {
  try {
    return await _sendCommand('get_all_websocket_messages');
  } catch (error) {
    console.error('Error getting WebSocket messages:', error);
    throw error;
  }
};

/**
 * Get a WebSocket message
 */
exports.getWebSocketMessage = async (messageId) => {
  try {
    return await _sendCommand('get_websocket_message', { message_id: messageId });
  } catch (error) {
    console.error('Error getting WebSocket message:', error);
    throw error;
  }
};

/**
 * Clear all WebSocket messages
 */
exports.clearWebSocketMessages = async () => {
  try {
    return await _sendCommand('clear_websocket_messages');
  } catch (error) {
    console.error('Error clearing WebSocket messages:', error);
    throw error;
  }
};

/**
 * Save requests and responses to HAR format
 */
exports.saveToHar = async (filename) => {
  try {
    return await _sendCommand('save_to_har', { filename });
  } catch (error) {
    console.error('Error saving to HAR:', error);
    throw error;
  }
};

/**
 * Compare two requests
 */
exports.compareRequests = async (request_id1, request_id2) => {
  try {
    return await _sendCommand('compare_requests', { request_id1, request_id2 });
  } catch (error) {
    console.error('Error comparing requests:', error);
    throw error;
  }
};

/**
 * Send a command to the Python inspector
 * 
 * @param {string} command - The command to send
 * @param {Object} params - The parameters for the command
 * @returns {Promise<Object>} - The result of the command
 */
async function _sendCommand(command, params = {}) {
  // If inspector is not running, start it
  if (!inspectorProcess) {
    await exports.start();
  }
  
  // Create command object
  const commandObj = {
    command,
    params
  };
  
  // Send command to inspector
  inspectorProcess.stdin.write(JSON.stringify(commandObj) + '\n');
  
  // Wait for response
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Command timed out'));
    }, 5000);
    
    const onData = (data) => {
      const output = data.toString();
      
      try {
        const jsonOutput = JSON.parse(output);
        
        if (jsonOutput.command === command) {
          // Remove event listeners
          inspectorProcess.stdout.removeListener('data', onData);
          clearTimeout(timeout);
          
          resolve(jsonOutput.result);
        }
      } catch (error) {
        // Not JSON or not the response we're looking for
      }
    };
    
    inspectorProcess.stdout.on('data', onData);
  });
}
