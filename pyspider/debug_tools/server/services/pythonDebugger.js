/**
 * Python Debugger Service
 *
 * This service provides an interface to the Python debugger.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

// Import WebSocket events
const { WEBSOCKET_EVENTS } = require('../../shared/constants');

// Global socket.io instance
let io = null;

// Python debugger process
let debuggerProcess = null;

// Set the socket.io instance
exports.setIo = (socketIo) => {
  io = socketIo;
};

/**
 * Start the debugger
 */
exports.start = async () => {
  try {
    // Check if debugger is already running
    if (debuggerProcess) {
      return { status: 'already_running' };
    }

    // Start the Python debugger process
    debuggerProcess = spawn('python', [
      '-m', 'pyspider.debugger.interactive_debugger',
      '--server'
    ]);

    // Set up event listeners
    debuggerProcess.stdout.on('data', (data) => {
      const output = data.toString();
      console.log('Debugger output:', output);

      // Parse JSON output
      try {
        const jsonOutput = JSON.parse(output);

        // Emit event based on message type
        if (jsonOutput.type === 'paused') {
          io.emit(WEBSOCKET_EVENTS.DEBUGGER_PAUSED, jsonOutput.data);
        } else if (jsonOutput.type === 'resumed') {
          io.emit(WEBSOCKET_EVENTS.DEBUGGER_RESUMED, jsonOutput.data);
        } else if (jsonOutput.type === 'stopped') {
          io.emit(WEBSOCKET_EVENTS.DEBUGGER_STOPPED, jsonOutput.data);
        } else if (jsonOutput.type === 'error') {
          io.emit(WEBSOCKET_EVENTS.DEBUGGER_ERROR, jsonOutput.data);
        } else if (jsonOutput.type === 'output') {
          io.emit(WEBSOCKET_EVENTS.DEBUGGER_OUTPUT, jsonOutput.data);
        }
      } catch (error) {
        // Not JSON, just regular output
        io.emit(WEBSOCKET_EVENTS.DEBUGGER_OUTPUT, { stdout: output });
      }
    });

    debuggerProcess.stderr.on('data', (data) => {
      const error = data.toString();
      console.error('Debugger error:', error);
      io.emit(WEBSOCKET_EVENTS.DEBUGGER_ERROR, { error });
    });

    debuggerProcess.on('close', (code) => {
      console.log(`Debugger process exited with code ${code}`);
      debuggerProcess = null;
      io.emit(WEBSOCKET_EVENTS.DEBUGGER_STOPPED, { code });
    });

    // Wait for debugger to initialize
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { status: 'started' };
  } catch (error) {
    console.error('Error starting debugger:', error);
    throw error;
  }
};

/**
 * Stop the debugger
 */
exports.stop = async () => {
  try {
    if (!debuggerProcess) {
      return { status: 'not_running' };
    }

    // Send stop command to debugger
    await _sendCommand('stop');

    // Kill the process if it doesn't exit
    setTimeout(() => {
      if (debuggerProcess) {
        debuggerProcess.kill();
        debuggerProcess = null;
      }
    }, 1000);

    return { status: 'stopped' };
  } catch (error) {
    console.error('Error stopping debugger:', error);
    throw error;
  }
};

/**
 * Step into the next line
 */
exports.stepInto = async () => {
  try {
    return await _sendCommand('step_into');
  } catch (error) {
    console.error('Error stepping into:', error);
    throw error;
  }
};

/**
 * Step over the next line
 */
exports.stepOver = async () => {
  try {
    return await _sendCommand('step_over');
  } catch (error) {
    console.error('Error stepping over:', error);
    throw error;
  }
};

/**
 * Step out of the current function
 */
exports.stepOut = async () => {
  try {
    return await _sendCommand('step_out');
  } catch (error) {
    console.error('Error stepping out:', error);
    throw error;
  }
};

/**
 * Continue execution
 */
exports.continueExecution = async () => {
  try {
    return await _sendCommand('continue');
  } catch (error) {
    console.error('Error continuing execution:', error);
    throw error;
  }
};

/**
 * Get all breakpoints
 */
exports.getBreakpoints = async () => {
  try {
    return await _sendCommand('get_breakpoints');
  } catch (error) {
    console.error('Error getting breakpoints:', error);
    throw error;
  }
};

/**
 * Set a breakpoint
 */
exports.setBreakpoint = async (filename, lineno, condition = null) => {
  try {
    return await _sendCommand('set_breakpoint', { filename, lineno, condition });
  } catch (error) {
    console.error('Error setting breakpoint:', error);
    throw error;
  }
};

/**
 * Clear a breakpoint
 */
exports.clearBreakpoint = async (filename, lineno) => {
  try {
    return await _sendCommand('clear_breakpoint', { filename, lineno });
  } catch (error) {
    console.error('Error clearing breakpoint:', error);
    throw error;
  }
};

/**
 * Enable a breakpoint
 */
exports.enableBreakpoint = async (filename, lineno) => {
  try {
    return await _sendCommand('enable_breakpoint', { filename, lineno });
  } catch (error) {
    console.error('Error enabling breakpoint:', error);
    throw error;
  }
};

/**
 * Disable a breakpoint
 */
exports.disableBreakpoint = async (filename, lineno) => {
  try {
    return await _sendCommand('disable_breakpoint', { filename, lineno });
  } catch (error) {
    console.error('Error disabling breakpoint:', error);
    throw error;
  }
};

/**
 * Clear all breakpoints
 */
exports.clearAllBreakpoints = async () => {
  try {
    return await _sendCommand('clear_all_breakpoints');
  } catch (error) {
    console.error('Error clearing all breakpoints:', error);
    throw error;
  }
};

/**
 * Evaluate an expression
 */
exports.evaluateExpression = async (expression) => {
  try {
    return await _sendCommand('evaluate_expression', { expression });
  } catch (error) {
    console.error('Error evaluating expression:', error);
    throw error;
  }
};

/**
 * Execute a statement
 */
exports.executeStatement = async (statement) => {
  try {
    return await _sendCommand('execute_statement', { statement });
  } catch (error) {
    console.error('Error executing statement:', error);
    throw error;
  }
};

/**
 * Get variables in the current frame
 */
exports.getVariables = async () => {
  try {
    return await _sendCommand('get_variables');
  } catch (error) {
    console.error('Error getting variables:', error);
    throw error;
  }
};

/**
 * Get a variable value
 */
exports.getVariable = async (name) => {
  try {
    return await _sendCommand('get_variable', { name });
  } catch (error) {
    console.error('Error getting variable:', error);
    throw error;
  }
};

/**
 * Set a variable value
 */
exports.setVariable = async (name, value) => {
  try {
    return await _sendCommand('set_variable', { name, value });
  } catch (error) {
    console.error('Error setting variable:', error);
    throw error;
  }
};

/**
 * Evaluate a watch expression
 */
exports.watchExpression = async (expression) => {
  try {
    return await _sendCommand('watch_expression', { expression });
  } catch (error) {
    console.error('Error watching expression:', error);
    throw error;
  }
};

/**
 * Get the call stack
 */
exports.getCallStack = async () => {
  try {
    return await _sendCommand('get_call_stack');
  } catch (error) {
    console.error('Error getting call stack:', error);
    throw error;
  }
};

/**
 * Jump to a specific frame in the call stack
 */
exports.jumpToFrame = async (frameIndex) => {
  try {
    return await _sendCommand('jump_to_frame', { frame_index: frameIndex });
  } catch (error) {
    console.error('Error jumping to frame:', error);
    throw error;
  }
};

/**
 * Get the source code of a file
 */
exports.getSource = async (filename) => {
  try {
    return await _sendCommand('get_source', { filename });
  } catch (error) {
    console.error('Error getting source:', error);
    throw error;
  }
};

/**
 * Debug a script
 */
exports.debugScript = async (script, globals = {}) => {
  try {
    // Write script to a temporary file
    const tempFile = path.join(os.tmpdir(), `debug_script_${Date.now()}.py`);
    fs.writeFileSync(tempFile, script);

    // Debug the script
    const result = await _sendCommand('debug_script', { filename: tempFile, globals });

    // Clean up temporary file
    fs.unlinkSync(tempFile);

    return result;
  } catch (error) {
    console.error('Error debugging script:', error);
    throw error;
  }
};

/**
 * Get captured output
 */
exports.getOutput = async () => {
  try {
    return await _sendCommand('get_output');
  } catch (error) {
    console.error('Error getting output:', error);
    throw error;
  }
};

/**
 * Clear captured output
 */
exports.clearOutput = async () => {
  try {
    return await _sendCommand('clear_output');
  } catch (error) {
    console.error('Error clearing output:', error);
    throw error;
  }
};

/**
 * Send a command to the Python debugger
 *
 * @param {string} command - The command to send
 * @param {Object} params - The parameters for the command
 * @returns {Promise<Object>} - The result of the command
 */
async function _sendCommand(command, params = {}) {
  if (!debuggerProcess) {
    throw new Error('Debugger not running');
  }

  // Create command object
  const commandObj = {
    command,
    params
  };

  // Send command to debugger
  debuggerProcess.stdin.write(JSON.stringify(commandObj) + '\n');

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
          debuggerProcess.stdout.removeListener('data', onData);
          clearTimeout(timeout);

          resolve(jsonOutput.result);
        }
      } catch (error) {
        // Not JSON or not the response we're looking for
      }
    };

    debuggerProcess.stdout.on('data', onData);
  });
}
