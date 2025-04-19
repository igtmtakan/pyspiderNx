/**
 * Debugger Controller
 */

const path = require('path');
const { spawn } = require('child_process');
const { WEBSOCKET_EVENTS } = require('../../shared/constants');

// Import Python debugger interface
const pythonDebugger = require('../services/pythonDebugger');

/**
 * Start the debugger
 */
exports.startDebugger = async (req, res) => {
  try {
    const result = await pythonDebugger.start();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error starting debugger:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Stop the debugger
 */
exports.stopDebugger = async (req, res) => {
  try {
    const result = await pythonDebugger.stop();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error stopping debugger:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Step into the next line
 */
exports.stepInto = async (req, res) => {
  try {
    const result = await pythonDebugger.stepInto();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error stepping into:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Step over the next line
 */
exports.stepOver = async (req, res) => {
  try {
    const result = await pythonDebugger.stepOver();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error stepping over:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Step out of the current function
 */
exports.stepOut = async (req, res) => {
  try {
    const result = await pythonDebugger.stepOut();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error stepping out:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Continue execution
 */
exports.continueExecution = async (req, res) => {
  try {
    const result = await pythonDebugger.continueExecution();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error continuing execution:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get all breakpoints
 */
exports.getBreakpoints = async (req, res) => {
  try {
    const breakpoints = await pythonDebugger.getBreakpoints();
    res.json({ success: true, breakpoints });
  } catch (error) {
    console.error('Error getting breakpoints:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Set a breakpoint
 */
exports.setBreakpoint = async (req, res) => {
  try {
    const { filename, lineno, condition } = req.body;
    
    if (!filename || !lineno) {
      return res.status(400).json({ success: false, error: 'Filename and line number are required' });
    }
    
    const breakpoint = await pythonDebugger.setBreakpoint(filename, parseInt(lineno), condition);
    res.json({ success: true, breakpoint });
  } catch (error) {
    console.error('Error setting breakpoint:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Clear a breakpoint
 */
exports.clearBreakpoint = async (req, res) => {
  try {
    const { filename, lineno } = req.params;
    
    if (!filename || !lineno) {
      return res.status(400).json({ success: false, error: 'Filename and line number are required' });
    }
    
    const result = await pythonDebugger.clearBreakpoint(filename, parseInt(lineno));
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error clearing breakpoint:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Enable a breakpoint
 */
exports.enableBreakpoint = async (req, res) => {
  try {
    const { filename, lineno } = req.params;
    
    if (!filename || !lineno) {
      return res.status(400).json({ success: false, error: 'Filename and line number are required' });
    }
    
    const result = await pythonDebugger.enableBreakpoint(filename, parseInt(lineno));
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error enabling breakpoint:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Disable a breakpoint
 */
exports.disableBreakpoint = async (req, res) => {
  try {
    const { filename, lineno } = req.params;
    
    if (!filename || !lineno) {
      return res.status(400).json({ success: false, error: 'Filename and line number are required' });
    }
    
    const result = await pythonDebugger.disableBreakpoint(filename, parseInt(lineno));
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error disabling breakpoint:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Clear all breakpoints
 */
exports.clearAllBreakpoints = async (req, res) => {
  try {
    const result = await pythonDebugger.clearAllBreakpoints();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error clearing all breakpoints:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Evaluate an expression
 */
exports.evaluateExpression = async (req, res) => {
  try {
    const { expression } = req.body;
    
    if (!expression) {
      return res.status(400).json({ success: false, error: 'Expression is required' });
    }
    
    const result = await pythonDebugger.evaluateExpression(expression);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error evaluating expression:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Execute a statement
 */
exports.executeStatement = async (req, res) => {
  try {
    const { statement } = req.body;
    
    if (!statement) {
      return res.status(400).json({ success: false, error: 'Statement is required' });
    }
    
    const result = await pythonDebugger.executeStatement(statement);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error executing statement:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get variables in the current frame
 */
exports.getVariables = async (req, res) => {
  try {
    const variables = await pythonDebugger.getVariables();
    res.json({ success: true, variables });
  } catch (error) {
    console.error('Error getting variables:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get a variable value
 */
exports.getVariable = async (req, res) => {
  try {
    const { name } = req.params;
    
    if (!name) {
      return res.status(400).json({ success: false, error: 'Variable name is required' });
    }
    
    const variable = await pythonDebugger.getVariable(name);
    res.json({ success: true, variable });
  } catch (error) {
    console.error('Error getting variable:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Set a variable value
 */
exports.setVariable = async (req, res) => {
  try {
    const { name } = req.params;
    const { value } = req.body;
    
    if (!name) {
      return res.status(400).json({ success: false, error: 'Variable name is required' });
    }
    
    if (value === undefined) {
      return res.status(400).json({ success: false, error: 'Variable value is required' });
    }
    
    const result = await pythonDebugger.setVariable(name, value);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error setting variable:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Evaluate a watch expression
 */
exports.watchExpression = async (req, res) => {
  try {
    const { expression } = req.body;
    
    if (!expression) {
      return res.status(400).json({ success: false, error: 'Expression is required' });
    }
    
    const result = await pythonDebugger.watchExpression(expression);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error watching expression:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get the call stack
 */
exports.getCallStack = async (req, res) => {
  try {
    const stack = await pythonDebugger.getCallStack();
    res.json({ success: true, stack });
  } catch (error) {
    console.error('Error getting call stack:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Jump to a specific frame in the call stack
 */
exports.jumpToFrame = async (req, res) => {
  try {
    const { frameIndex } = req.params;
    
    if (frameIndex === undefined) {
      return res.status(400).json({ success: false, error: 'Frame index is required' });
    }
    
    const result = await pythonDebugger.jumpToFrame(parseInt(frameIndex));
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error jumping to frame:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get the source code of a file
 */
exports.getSource = async (req, res) => {
  try {
    const { filename } = req.params;
    
    if (!filename) {
      return res.status(400).json({ success: false, error: 'Filename is required' });
    }
    
    const source = await pythonDebugger.getSource(filename);
    res.json({ success: true, source });
  } catch (error) {
    console.error('Error getting source:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Debug a script
 */
exports.debugScript = async (req, res) => {
  try {
    const { script, globals } = req.body;
    
    if (!script) {
      return res.status(400).json({ success: false, error: 'Script is required' });
    }
    
    const result = await pythonDebugger.debugScript(script, globals || {});
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error debugging script:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get captured output
 */
exports.getOutput = async (req, res) => {
  try {
    const output = await pythonDebugger.getOutput();
    res.json({ success: true, output });
  } catch (error) {
    console.error('Error getting output:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Clear captured output
 */
exports.clearOutput = async (req, res) => {
  try {
    const result = await pythonDebugger.clearOutput();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error clearing output:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};
