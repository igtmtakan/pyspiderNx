/**
 * Inspector WebSocket Service
 * 
 * This service handles WebSocket communication for the inspector.
 */

const pythonInspector = require('./pythonInspector');
const { WEBSOCKET_EVENTS } = require('../../shared/constants');

/**
 * Set up inspector socket handlers
 * 
 * @param {Object} io - The socket.io instance
 * @param {Object} socket - The socket connection
 */
exports.setup = (io, socket) => {
  // Set the socket.io instance for the Python inspector
  pythonInspector.setIo(io);
  
  // Start the inspector
  socket.on('inspector:start', async (data, callback) => {
    try {
      const result = await pythonInspector.start();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error starting inspector:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Stop the inspector
  socket.on('inspector:stop', async (data, callback) => {
    try {
      const result = await pythonInspector.stop();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error stopping inspector:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get all requests
  socket.on('inspector:get_requests', async (data, callback) => {
    try {
      const result = await pythonInspector.getRequests();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting requests:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get all responses
  socket.on('inspector:get_responses', async (data, callback) => {
    try {
      const result = await pythonInspector.getResponses();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting responses:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get a request
  socket.on('inspector:get_request', async (data, callback) => {
    try {
      const { requestId } = data;
      const result = await pythonInspector.getRequest(requestId);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting request:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get a response
  socket.on('inspector:get_response', async (data, callback) => {
    try {
      const { requestId } = data;
      const result = await pythonInspector.getResponse(requestId);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting response:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Clear all requests and responses
  socket.on('inspector:clear_all', async (data, callback) => {
    try {
      const result = await pythonInspector.clearAll();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error clearing all requests and responses:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Modify a request
  socket.on('inspector:modify_request', async (data, callback) => {
    try {
      const { requestId, modifications } = data;
      const result = await pythonInspector.modifyRequest(requestId, modifications);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error modifying request:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Resend a request
  socket.on('inspector:resend_request', async (data, callback) => {
    try {
      const { requestId, modifications } = data;
      const result = await pythonInspector.resendRequest(requestId, modifications);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error resending request:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Set a filter
  socket.on('inspector:set_filter', async (data, callback) => {
    try {
      const { name, value } = data;
      const result = await pythonInspector.setFilter(name, value);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error setting filter:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Clear a filter
  socket.on('inspector:clear_filter', async (data, callback) => {
    try {
      const { filterName } = data;
      const result = await pythonInspector.clearFilter(filterName);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error clearing filter:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get filtered requests
  socket.on('inspector:get_filtered_requests', async (data, callback) => {
    try {
      const result = await pythonInspector.getFilteredRequests();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting filtered requests:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get filtered responses
  socket.on('inspector:get_filtered_responses', async (data, callback) => {
    try {
      const result = await pythonInspector.getFilteredResponses();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting filtered responses:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Get all WebSocket messages
  socket.on('inspector:get_websocket_messages', async (data, callback) => {
    try {
      const result = await pythonInspector.getWebSocketMessages();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error getting WebSocket messages:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Clear all WebSocket messages
  socket.on('inspector:clear_websocket_messages', async (data, callback) => {
    try {
      const result = await pythonInspector.clearWebSocketMessages();
      callback({ success: true, result });
    } catch (error) {
      console.error('Error clearing WebSocket messages:', error);
      callback({ success: false, error: error.message });
    }
  });
  
  // Compare two requests
  socket.on('inspector:compare_requests', async (data, callback) => {
    try {
      const { request_id1, request_id2 } = data;
      const result = await pythonInspector.compareRequests(request_id1, request_id2);
      callback({ success: true, result });
    } catch (error) {
      console.error('Error comparing requests:', error);
      callback({ success: false, error: error.message });
    }
  });
};
