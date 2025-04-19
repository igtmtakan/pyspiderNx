/**
 * Profiler WebSocket Service
 * 
 * This service handles WebSocket communication for the profiler.
 */

const pythonProfiler = require('./pythonProfiler');
const { WEBSOCKET_EVENTS } = require('../../shared/constants');

/**
 * Set up profiler socket handlers
 * 
 * @param {Object} io - The socket.io instance
 * @param {Object} socket - The socket connection
 */
exports.setup = (io, socket) => {
  // Set the socket.io instance for the Python profiler
  pythonProfiler.setIo(io);
  
  // Start the profiler
  socket.on('profiler:start', async (data, callback) => {
    try {
      const result = await pythonProfiler.start();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error starting profiler:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Stop the profiler
  socket.on('profiler:stop', async (data, callback) => {
    try {
      const result = await pythonProfiler.stop();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error stopping profiler:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Start CPU profiling
  socket.on('profiler:start_cpu_profiling', async (data, callback) => {
    try {
      const result = await pythonProfiler.startCpuProfiling();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error starting CPU profiling:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Stop CPU profiling
  socket.on('profiler:stop_cpu_profiling', async (data, callback) => {
    try {
      const result = await pythonProfiler.stopCpuProfiling();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error stopping CPU profiling:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Start memory tracking
  socket.on('profiler:start_memory_tracking', async (data, callback) => {
    try {
      const result = await pythonProfiler.startMemoryTracking();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error starting memory tracking:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Stop memory tracking
  socket.on('profiler:stop_memory_tracking', async (data, callback) => {
    try {
      const result = await pythonProfiler.stopMemoryTracking();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error stopping memory tracking:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Take a memory snapshot
  socket.on('profiler:take_memory_snapshot', async (data, callback) => {
    try {
      const { label } = data;
      const result = await pythonProfiler.takeMemorySnapshot(label);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error taking memory snapshot:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Compare two memory snapshots
  socket.on('profiler:compare_memory_snapshots', async (data, callback) => {
    try {
      const { snapshot1_index, snapshot2_index } = data;
      const result = await pythonProfiler.compareMemorySnapshots(snapshot1_index, snapshot2_index);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error comparing memory snapshots:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Start timing a section of code
  socket.on('profiler:start_timing', async (data, callback) => {
    try {
      const { name } = data;
      const result = await pythonProfiler.startTiming(name);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error starting timing:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Stop timing a section of code
  socket.on('profiler:stop_timing', async (data, callback) => {
    try {
      const { name } = data;
      const result = await pythonProfiler.stopTiming(name);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error stopping timing:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get timing statistics
  socket.on('profiler:get_timing_stats', async (data, callback) => {
    try {
      const { name } = data;
      const result = await pythonProfiler.getTimingStats(name);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting timing stats:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get function statistics
  socket.on('profiler:get_function_stats', async (data, callback) => {
    try {
      const { name } = data;
      const result = await pythonProfiler.getFunctionStats(name);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting function stats:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get current memory usage
  socket.on('profiler:get_memory_usage', async (data, callback) => {
    try {
      const result = await pythonProfiler.getMemoryUsage();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting memory usage:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Generate a comprehensive performance report
  socket.on('profiler:generate_report', async (data, callback) => {
    try {
      const result = await pythonProfiler.generateReport();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error generating report:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Start monitoring system resources
  socket.on('profiler:start_resource_monitoring', async (data, callback) => {
    try {
      const result = await pythonProfiler.startResourceMonitoring();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error starting resource monitoring:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Stop monitoring system resources
  socket.on('profiler:stop_resource_monitoring', async (data, callback) => {
    try {
      const result = await pythonProfiler.stopResourceMonitoring();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error stopping resource monitoring:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get resource usage data
  socket.on('profiler:get_resource_usage', async (data, callback) => {
    try {
      const result = await pythonProfiler.getResourceUsage();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting resource usage:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get network statistics
  socket.on('profiler:get_network_stats', async (data, callback) => {
    try {
      const result = await pythonProfiler.getNetworkStats();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting network stats:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Profile a block of code
  socket.on('profiler:profile_code_block', async (data, callback) => {
    try {
      const { code, globals, locals } = data;
      const result = await pythonProfiler.profileCodeBlock(code, globals, locals);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error profiling code block:', error);
      callback({ success: false, error: error.message });
    }
  });
};
