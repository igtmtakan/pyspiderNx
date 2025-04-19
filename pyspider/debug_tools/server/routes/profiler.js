/**
 * Profiler Routes
 */

const express = require('express');
const router = express.Router();
const profilerController = require('../controllers/profilerController');

// Start CPU profiling
router.post('/cpu/start', profilerController.startCpuProfiling);

// Stop CPU profiling
router.post('/cpu/stop', profilerController.stopCpuProfiling);

// Start memory tracking
router.post('/memory/start', profilerController.startMemoryTracking);

// Stop memory tracking
router.post('/memory/stop', profilerController.stopMemoryTracking);

// Take a memory snapshot
router.post('/memory/snapshot', profilerController.takeMemorySnapshot);

// Compare two memory snapshots
router.post('/memory/compare', profilerController.compareMemorySnapshots);

// Start timing a section of code
router.post('/timing/start', profilerController.startTiming);

// Stop timing a section of code
router.post('/timing/stop', profilerController.stopTiming);

// Reset timing statistics
router.post('/timing/reset', profilerController.resetTiming);

// Get timing statistics
router.get('/timing', profilerController.getTimingStats);

// Get function statistics
router.get('/function', profilerController.getFunctionStats);

// Reset function statistics
router.post('/function/reset', profilerController.resetFunctionStats);

// Collect garbage
router.post('/gc', profilerController.collectGarbage);

// Get current memory usage
router.get('/memory_usage', profilerController.getMemoryUsage);

// Generate a comprehensive performance report
router.get('/report', profilerController.generateReport);

// Save performance report to a file
router.post('/report/save', profilerController.saveReport);

// Start monitoring system resources
router.post('/resources/start', profilerController.startResourceMonitoring);

// Stop monitoring system resources
router.post('/resources/stop', profilerController.stopResourceMonitoring);

// Get resource usage data
router.get('/resources', profilerController.getResourceUsage);

// Get network statistics
router.get('/network', profilerController.getNetworkStats);

// Reset network statistics
router.post('/network/reset', profilerController.resetNetworkStats);

// Profile a block of code
router.post('/code', profilerController.profileCodeBlock);

// Get estimated frame rate
router.get('/fps', profilerController.getFrameRate);

module.exports = router;
