/**
 * Debugger WebSocket Service
 * 
 * This service handles WebSocket communication for the debugger.
 */

const pythonDebugger = require('./pythonDebugger');
const { WEBSOCKET_EVENTS } = require('../../shared/constants');

/**
 * Set up debugger socket handlers
 * 
 * @param {Object} io - The socket.io instance
 * @param {Object} socket - The socket connection
 */
exports.setup = (io, socket) => {
  // Set the socket.io instance for the Python debugger
  pythonDebugger.setIo(io);
  
  // Start the debugger
  socket.on('debugger:start', async (data, callback) => {
    try {
      const result = await pythonDebugger.start();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error starting debugger:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Stop the debugger
  socket.on('debugger:stop', async (data, callback) => {
    try {
      const result = await pythonDebugger.stop();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error stopping debugger:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Step into the next line
  socket.on('debugger:step_into', async (data, callback) => {
    try {
      const result = await pythonDebugger.stepInto();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error stepping into:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Step over the next line
  socket.on('debugger:step_over', async (data, callback) => {
    try {
      const result = await pythonDebugger.stepOver();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error stepping over:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Step out of the current function
  socket.on('debugger:step_out', async (data, callback) => {
    try {
      const result = await pythonDebugger.stepOut();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error stepping out:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Continue execution
  socket.on('debugger:continue', async (data, callback) => {
    try {
      const result = await pythonDebugger.continueExecution();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error continuing execution:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Set a breakpoint
  socket.on('debugger:set_breakpoint', async (data, callback) => {
    try {
      const { filename, lineno, condition } = data;
      const result = await pythonDebugger.setBreakpoint(filename, lineno, condition);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error setting breakpoint:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Clear a breakpoint
  socket.on('debugger:clear_breakpoint', async (data, callback) => {
    try {
      const { filename, lineno } = data;
      const result = await pythonDebugger.clearBreakpoint(filename, lineno);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error clearing breakpoint:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Evaluate an expression
  socket.on('debugger:evaluate', async (data, callback) => {
    try {
      const { expression } = data;
      const result = await pythonDebugger.evaluateExpression(expression);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error evaluating expression:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Execute a statement
  socket.on('debugger:execute', async (data, callback) => {
    try {
      const { statement } = data;
      const result = await pythonDebugger.executeStatement(statement);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error executing statement:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get variables in the current frame
  socket.on('debugger:get_variables', async (data, callback) => {
    try {
      const result = await pythonDebugger.getVariables();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting variables:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get the call stack
  socket.on('debugger:get_call_stack', async (data, callback) => {
    try {
      const result = await pythonDebugger.getCallStack();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting call stack:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get the source code of a file
  socket.on('debugger:get_source', async (data, callback) => {
    try {
      const { filename } = data;
      const result = await pythonDebugger.getSource(filename);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting source:', error);
      callback({ success: false, error: error.message });
    }
  });
};
