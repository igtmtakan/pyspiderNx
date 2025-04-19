/**
 * Python Profiler Service
 * 
 * This service provides an interface to the Python performance profiler.
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

// Python profiler process
let profilerProcess = null;

// Set the socket.io instance
exports.setIo = (socketIo) => {
  io = socketIo;
};

/**
 * Start the profiler
 */
exports.start = async () => {
  try {
    // Check if profiler is already running
    if (profilerProcess) {
      return { status: 'already_running' };
    }
    
    // Start the Python profiler process
    profilerProcess = spawn('python', [
      '-m', 'pyspider.debugger.performance_profiler',
      '--server'
    ]);
    
    // Set up event listeners
    profilerProcess.stdout.on('data', (data) => {
      const output = data.toString();
      console.log('Profiler output:', output);
      
      // Parse JSON output
      try {
        const jsonOutput = JSON.parse(output);
        
        // Emit event based on message type
        if (jsonOutput.type === 'cpu_update') {
          io.emit(WEBSOCKET_EVENTS.PROFILER_CPU_UPDATE, jsonOutput.data);
        } else if (jsonOutput.type === 'memory_update') {
          io.emit(WEBSOCKET_EVENTS.PROFILER_MEMORY_UPDATE, jsonOutput.data);
        } else if (jsonOutput.type === 'resources_update') {
          io.emit(WEBSOCKET_EVENTS.PROFILER_RESOURCES_UPDATE, jsonOutput.data);
        } else if (jsonOutput.type === 'network_update') {
          io.emit(WEBSOCKET_EVENTS.PROFILER_NETWORK_UPDATE, jsonOutput.data);
        }
      } catch (error) {
        // Not JSON, just regular output
        console.log('Non-JSON profiler output:', output);
      }
    });
    
    profilerProcess.stderr.on('data', (data) => {
      const error = data.toString();
      console.error('Profiler error:', error);
    });
    
    profilerProcess.on('close', (code) => {
      console.log(`Profiler process exited with code ${code}`);
      profilerProcess = null;
    });
    
    // Wait for profiler to initialize
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { status: 'started' };
  } catch (error) {
    console.error('Error starting profiler:', error);
    throw error;
  }
};

/**
 * Stop the profiler
 */
exports.stop = async () => {
  try {
    if (!profilerProcess) {
      return { status: 'not_running' };
    }
    
    // Send stop command to profiler
    await _sendCommand('stop');
    
    // Kill the process if it doesn't exit
    setTimeout(() => {
      if (profilerProcess) {
        profilerProcess.kill();
        profilerProcess = null;
      }
    }, 1000);
    
    return { status: 'stopped' };
  } catch (error) {
    console.error('Error stopping profiler:', error);
    throw error;
  }
};

/**
 * Start CPU profiling
 */
exports.startCpuProfiling = async () => {
  try {
    return await _sendCommand('start_profiling');
  } catch (error) {
    console.error('Error starting CPU profiling:', error);
    throw error;
  }
};

/**
 * Stop CPU profiling
 */
exports.stopCpuProfiling = async () => {
  try {
    return await _sendCommand('stop_profiling');
  } catch (error) {
    console.error('Error stopping CPU profiling:', error);
    throw error;
  }
};

/**
 * Start memory tracking
 */
exports.startMemoryTracking = async () => {
  try {
    return await _sendCommand('start_memory_tracking');
  } catch (error) {
    console.error('Error starting memory tracking:', error);
    throw error;
  }
};

/**
 * Stop memory tracking
 */
exports.stopMemoryTracking = async () => {
  try {
    return await _sendCommand('stop_memory_tracking');
  } catch (error) {
    console.error('Error stopping memory tracking:', error);
    throw error;
  }
};

/**
 * Take a memory snapshot
 */
exports.takeMemorySnapshot = async (label = null) => {
  try {
    return await _sendCommand('take_memory_snapshot', { label });
  } catch (error) {
    console.error('Error taking memory snapshot:', error);
    throw error;
  }
};

/**
 * Compare two memory snapshots
 */
exports.compareMemorySnapshots = async (snapshot1_index, snapshot2_index) => {
  try {
    return await _sendCommand('compare_memory_snapshots', { snapshot1_index, snapshot2_index });
  } catch (error) {
    console.error('Error comparing memory snapshots:', error);
    throw error;
  }
};

/**
 * Start timing a section of code
 */
exports.startTiming = async (name) => {
  try {
    return await _sendCommand('start_timing', { name });
  } catch (error) {
    console.error('Error starting timing:', error);
    throw error;
  }
};

/**
 * Stop timing a section of code
 */
exports.stopTiming = async (name) => {
  try {
    return await _sendCommand('stop_timing', { name });
  } catch (error) {
    console.error('Error stopping timing:', error);
    throw error;
  }
};

/**
 * Reset timing statistics
 */
exports.resetTiming = async (name = null) => {
  try {
    return await _sendCommand('reset_timing', { name });
  } catch (error) {
    console.error('Error resetting timing:', error);
    throw error;
  }
};

/**
 * Get timing statistics
 */
exports.getTimingStats = async (name = null) => {
  try {
    return await _sendCommand('get_timing_stats', { name });
  } catch (error) {
    console.error('Error getting timing stats:', error);
    throw error;
  }
};

/**
 * Get function statistics
 */
exports.getFunctionStats = async (name = null) => {
  try {
    return await _sendCommand('get_function_stats', { name });
  } catch (error) {
    console.error('Error getting function stats:', error);
    throw error;
  }
};

/**
 * Reset function statistics
 */
exports.resetFunctionStats = async (name = null) => {
  try {
    return await _sendCommand('reset_function_stats', { name });
  } catch (error) {
    console.error('Error resetting function stats:', error);
    throw error;
  }
};

/**
 * Collect garbage
 */
exports.collectGarbage = async () => {
  try {
    return await _sendCommand('collect_garbage');
  } catch (error) {
    console.error('Error collecting garbage:', error);
    throw error;
  }
};

/**
 * Get current memory usage
 */
exports.getMemoryUsage = async () => {
  try {
    return await _sendCommand('get_memory_usage');
  } catch (error) {
    console.error('Error getting memory usage:', error);
    throw error;
  }
};

/**
 * Generate a comprehensive performance report
 */
exports.generateReport = async () => {
  try {
    return await _sendCommand('generate_report');
  } catch (error) {
    console.error('Error generating report:', error);
    throw error;
  }
};

/**
 * Save performance report to a file
 */
exports.saveReport = async (filename) => {
  try {
    return await _sendCommand('save_report', { filename });
  } catch (error) {
    console.error('Error saving report:', error);
    throw error;
  }
};

/**
 * Start monitoring system resources
 */
exports.startResourceMonitoring = async () => {
  try {
    return await _sendCommand('start_resource_monitoring');
  } catch (error) {
    console.error('Error starting resource monitoring:', error);
    throw error;
  }
};

/**
 * Stop monitoring system resources
 */
exports.stopResourceMonitoring = async () => {
  try {
    return await _sendCommand('stop_resource_monitoring');
  } catch (error) {
    console.error('Error stopping resource monitoring:', error);
    throw error;
  }
};

/**
 * Get resource usage data
 */
exports.getResourceUsage = async () => {
  try {
    return await _sendCommand('get_resource_usage');
  } catch (error) {
    console.error('Error getting resource usage:', error);
    throw error;
  }
};

/**
 * Get network statistics
 */
exports.getNetworkStats = async () => {
  try {
    return await _sendCommand('get_network_stats');
  } catch (error) {
    console.error('Error getting network stats:', error);
    throw error;
  }
};

/**
 * Reset network statistics
 */
exports.resetNetworkStats = async () => {
  try {
    return await _sendCommand('reset_network_stats');
  } catch (error) {
    console.error('Error resetting network stats:', error);
    throw error;
  }
};

/**
 * Profile a block of code
 */
exports.profileCodeBlock = async (code, globals = null, locals = null) => {
  try {
    return await _sendCommand('profile_code_block', { code, globals, locals });
  } catch (error) {
    console.error('Error profiling code block:', error);
    throw error;
  }
};

/**
 * Get estimated frame rate
 */
exports.getFrameRate = async (window_size = 10) => {
  try {
    return await _sendCommand('get_frame_rate', { window_size });
  } catch (error) {
    console.error('Error getting frame rate:', error);
    throw error;
  }
};

/**
 * Send a command to the Python profiler
 * 
 * @param {string} command - The command to send
 * @param {Object} params - The parameters for the command
 * @returns {Promise<Object>} - The result of the command
 */
async function _sendCommand(command, params = {}) {
  // If profiler is not running, start it
  if (!profilerProcess) {
    await exports.start();
  }
  
  // Create command object
  const commandObj = {
    command,
    params
  };
  
  // Send command to profiler
  profilerProcess.stdin.write(JSON.stringify(commandObj) + '\n');
  
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
          profilerProcess.stdout.removeListener('data', onData);
          clearTimeout(timeout);
          
          resolve(jsonOutput.result);
        }
      } catch (error) {
        // Not JSON or not the response we're looking for
      }
    };
    
    profilerProcess.stdout.on('data', onData);
  });
}
