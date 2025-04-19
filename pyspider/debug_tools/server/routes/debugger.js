/**
 * Debugger Routes
 */

const express = require('express');
const router = express.Router();
const debuggerController = require('../controllers/debuggerController');

// Start the debugger
router.post('/start', debuggerController.startDebugger);

// Stop the debugger
router.post('/stop', debuggerController.stopDebugger);

// Step into the next line
router.post('/step_into', debuggerController.stepInto);

// Step over the next line
router.post('/step_over', debuggerController.stepOver);

// Step out of the current function
router.post('/step_out', debuggerController.stepOut);

// Continue execution
router.post('/continue', debuggerController.continueExecution);

// Get all breakpoints
router.get('/breakpoints', debuggerController.getBreakpoints);

// Set a breakpoint
router.post('/breakpoints', debuggerController.setBreakpoint);

// Clear a breakpoint
router.delete('/breakpoints/:filename/:lineno', debuggerController.clearBreakpoint);

// Enable a breakpoint
router.post('/breakpoints/:filename/:lineno/enable', debuggerController.enableBreakpoint);

// Disable a breakpoint
router.post('/breakpoints/:filename/:lineno/disable', debuggerController.disableBreakpoint);

// Clear all breakpoints
router.post('/breakpoints/clear', debuggerController.clearAllBreakpoints);

// Evaluate an expression
router.post('/evaluate', debuggerController.evaluateExpression);

// Execute a statement
router.post('/execute', debuggerController.executeStatement);

// Get variables in the current frame
router.get('/variables', debuggerController.getVariables);

// Get a variable value
router.get('/variable/:name', debuggerController.getVariable);

// Set a variable value
router.post('/variable/:name', debuggerController.setVariable);

// Evaluate a watch expression
router.post('/watch', debuggerController.watchExpression);

// Get the call stack
router.get('/stack', debuggerController.getCallStack);

// Jump to a specific frame in the call stack
router.post('/frame/:frameIndex', debuggerController.jumpToFrame);

// Get the source code of a file
router.get('/source/:filename', debuggerController.getSource);

// Debug a script
router.post('/debug', debuggerController.debugScript);

// Get captured output
router.get('/output', debuggerController.getOutput);

// Clear captured output
router.post('/output/clear', debuggerController.clearOutput);

module.exports = router;
