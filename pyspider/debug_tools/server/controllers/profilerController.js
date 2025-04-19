/**
 * Profiler Controller
 */

const path = require('path');
const fs = require('fs');
const { WEBSOCKET_EVENTS } = require('../../shared/constants');

// Import Python profiler interface
const pythonProfiler = require('../services/pythonProfiler');

/**
 * Start CPU profiling
 */
exports.startCpuProfiling = async (req, res) => {
  try {
    const result = await pythonProfiler.startCpuProfiling();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error starting CPU profiling:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Stop CPU profiling
 */
exports.stopCpuProfiling = async (req, res) => {
  try {
    const result = await pythonProfiler.stopCpuProfiling();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error stopping CPU profiling:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Start memory tracking
 */
exports.startMemoryTracking = async (req, res) => {
  try {
    const result = await pythonProfiler.startMemoryTracking();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error starting memory tracking:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Stop memory tracking
 */
exports.stopMemoryTracking = async (req, res) => {
  try {
    const result = await pythonProfiler.stopMemoryTracking();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error stopping memory tracking:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Take a memory snapshot
 */
exports.takeMemorySnapshot = async (req, res) => {
  try {
    const { label } = req.body;
    const result = await pythonProfiler.takeMemorySnapshot(label);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error taking memory snapshot:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Compare two memory snapshots
 */
exports.compareMemorySnapshots = async (req, res) => {
  try {
    const { snapshot1_index, snapshot2_index } = req.body;
    
    if (snapshot1_index === undefined || snapshot2_index === undefined) {
      return res.status(400).json({ success: false, error: 'Two snapshot indices are required' });
    }
    
    const result = await pythonProfiler.compareMemorySnapshots(
      parseInt(snapshot1_index),
      parseInt(snapshot2_index)
    );
    
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error comparing memory snapshots:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Start timing a section of code
 */
exports.startTiming = async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ success: false, error: 'Name is required' });
    }
    
    const result = await pythonProfiler.startTiming(name);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error starting timing:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Stop timing a section of code
 */
exports.stopTiming = async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ success: false, error: 'Name is required' });
    }
    
    const result = await pythonProfiler.stopTiming(name);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error stopping timing:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Reset timing statistics
 */
exports.resetTiming = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await pythonProfiler.resetTiming(name);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error resetting timing:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get timing statistics
 */
exports.getTimingStats = async (req, res) => {
  try {
    const { name } = req.query;
    const result = await pythonProfiler.getTimingStats(name);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error getting timing stats:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get function statistics
 */
exports.getFunctionStats = async (req, res) => {
  try {
    const { name } = req.query;
    const result = await pythonProfiler.getFunctionStats(name);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error getting function stats:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Reset function statistics
 */
exports.resetFunctionStats = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await pythonProfiler.resetFunctionStats(name);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error resetting function stats:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Collect garbage
 */
exports.collectGarbage = async (req, res) => {
  try {
    const result = await pythonProfiler.collectGarbage();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error collecting garbage:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get current memory usage
 */
exports.getMemoryUsage = async (req, res) => {
  try {
    const result = await pythonProfiler.getMemoryUsage();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error getting memory usage:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Generate a comprehensive performance report
 */
exports.generateReport = async (req, res) => {
  try {
    const result = await pythonProfiler.generateReport();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error generating report:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Save performance report to a file
 */
exports.saveReport = async (req, res) => {
  try {
    const { filename } = req.body;
    
    if (!filename) {
      return res.status(400).json({ success: false, error: 'Filename is required' });
    }
    
    const result = await pythonProfiler.saveReport(filename);
    
    if (!result.success) {
      return res.status(500).json({ success: false, error: result.error });
    }
    
    res.json({ success: true, filename: result.filename });
  } catch (error) {
    console.error('Error saving report:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Start monitoring system resources
 */
exports.startResourceMonitoring = async (req, res) => {
  try {
    const result = await pythonProfiler.startResourceMonitoring();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error starting resource monitoring:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Stop monitoring system resources
 */
exports.stopResourceMonitoring = async (req, res) => {
  try {
    const result = await pythonProfiler.stopResourceMonitoring();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error stopping resource monitoring:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get resource usage data
 */
exports.getResourceUsage = async (req, res) => {
  try {
    const result = await pythonProfiler.getResourceUsage();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error getting resource usage:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get network statistics
 */
exports.getNetworkStats = async (req, res) => {
  try {
    const result = await pythonProfiler.getNetworkStats();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error getting network stats:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Reset network statistics
 */
exports.resetNetworkStats = async (req, res) => {
  try {
    const result = await pythonProfiler.resetNetworkStats();
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error resetting network stats:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Profile a block of code
 */
exports.profileCodeBlock = async (req, res) => {
  try {
    const { code, globals, locals } = req.body;
    
    if (!code) {
      return res.status(400).json({ success: false, error: 'Code is required' });
    }
    
    const result = await pythonProfiler.profileCodeBlock(code, globals, locals);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error profiling code block:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get estimated frame rate
 */
exports.getFrameRate = async (req, res) => {
  try {
    const { window_size } = req.query;
    const result = await pythonProfiler.getFrameRate(parseInt(window_size) || 10);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error getting frame rate:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};
