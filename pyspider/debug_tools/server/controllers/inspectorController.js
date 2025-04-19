/**
 * Inspector Controller
 */

const path = require('path');
const fs = require('fs');
const { WEBSOCKET_EVENTS } = require('../../shared/constants');

// Import Python inspector interface
const pythonInspector = require('../services/pythonInspector');

/**
 * Get all requests
 */
exports.getRequests = async (req, res) => {
  try {
    const requests = await pythonInspector.getRequests();
    res.json({ success: true, requests });
  } catch (error) {
    console.error('Error getting requests:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get all responses
 */
exports.getResponses = async (req, res) => {
  try {
    const responses = await pythonInspector.getResponses();
    res.json({ success: true, responses });
  } catch (error) {
    console.error('Error getting responses:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get a request
 */
exports.getRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    
    if (!requestId) {
      return res.status(400).json({ success: false, error: 'Request ID is required' });
    }
    
    const request = await pythonInspector.getRequest(requestId);
    
    if (!request) {
      return res.status(404).json({ success: false, error: 'Request not found' });
    }
    
    res.json({ success: true, request });
  } catch (error) {
    console.error('Error getting request:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get a response
 */
exports.getResponse = async (req, res) => {
  try {
    const { requestId } = req.params;
    
    if (!requestId) {
      return res.status(400).json({ success: false, error: 'Request ID is required' });
    }
    
    const response = await pythonInspector.getResponse(requestId);
    
    if (!response) {
      return res.status(404).json({ success: false, error: 'Response not found' });
    }
    
    res.json({ success: true, response });
  } catch (error) {
    console.error('Error getting response:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get a request and response
 */
exports.getRequestResponse = async (req, res) => {
  try {
    const { requestId } = req.params;
    
    if (!requestId) {
      return res.status(400).json({ success: false, error: 'Request ID is required' });
    }
    
    const data = await pythonInspector.getRequestResponse(requestId);
    
    if (!data) {
      return res.status(404).json({ success: false, error: 'Request/response not found' });
    }
    
    res.json({ success: true, data });
  } catch (error) {
    console.error('Error getting request/response:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Clear all requests and responses
 */
exports.clearAll = async (req, res) => {
  try {
    await pythonInspector.clearAll();
    res.json({ success: true });
  } catch (error) {
    console.error('Error clearing all requests and responses:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Delete a request
 */
exports.deleteRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    
    if (!requestId) {
      return res.status(400).json({ success: false, error: 'Request ID is required' });
    }
    
    const result = await pythonInspector.deleteRequest(requestId);
    
    if (!result) {
      return res.status(404).json({ success: false, error: 'Request not found' });
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting request:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Modify a request
 */
exports.modifyRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { modifications } = req.body;
    
    if (!requestId) {
      return res.status(400).json({ success: false, error: 'Request ID is required' });
    }
    
    if (!modifications) {
      return res.status(400).json({ success: false, error: 'Modifications are required' });
    }
    
    const modifiedRequest = await pythonInspector.modifyRequest(requestId, modifications);
    
    if (!modifiedRequest) {
      return res.status(404).json({ success: false, error: 'Request not found' });
    }
    
    res.json({ success: true, request: modifiedRequest });
  } catch (error) {
    console.error('Error modifying request:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Resend a request
 */
exports.resendRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { modifications } = req.body;
    
    if (!requestId) {
      return res.status(400).json({ success: false, error: 'Request ID is required' });
    }
    
    const newRequest = await pythonInspector.resendRequest(requestId, modifications);
    
    if (!newRequest) {
      return res.status(404).json({ success: false, error: 'Request not found' });
    }
    
    res.json({ success: true, request: newRequest });
  } catch (error) {
    console.error('Error resending request:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Set a filter
 */
exports.setFilter = async (req, res) => {
  try {
    const { name, value } = req.body;
    
    if (!name) {
      return res.status(400).json({ success: false, error: 'Filter name is required' });
    }
    
    const result = await pythonInspector.setFilter(name, value);
    
    if (!result) {
      return res.status(400).json({ success: false, error: 'Invalid filter name' });
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error setting filter:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Clear a filter
 */
exports.clearFilter = async (req, res) => {
  try {
    const { filterName } = req.params;
    
    if (!filterName) {
      return res.status(400).json({ success: false, error: 'Filter name is required' });
    }
    
    const result = await pythonInspector.clearFilter(filterName);
    
    if (!result) {
      return res.status(400).json({ success: false, error: 'Invalid filter name' });
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error clearing filter:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Clear all filters
 */
exports.clearAllFilters = async (req, res) => {
  try {
    await pythonInspector.clearFilter();
    res.json({ success: true });
  } catch (error) {
    console.error('Error clearing all filters:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get filtered requests
 */
exports.getFilteredRequests = async (req, res) => {
  try {
    const requests = await pythonInspector.getFilteredRequests();
    res.json({ success: true, requests });
  } catch (error) {
    console.error('Error getting filtered requests:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get filtered responses
 */
exports.getFilteredResponses = async (req, res) => {
  try {
    const responses = await pythonInspector.getFilteredResponses();
    res.json({ success: true, responses });
  } catch (error) {
    console.error('Error getting filtered responses:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get all WebSocket messages
 */
exports.getWebSocketMessages = async (req, res) => {
  try {
    const messages = await pythonInspector.getWebSocketMessages();
    res.json({ success: true, messages });
  } catch (error) {
    console.error('Error getting WebSocket messages:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Get a WebSocket message
 */
exports.getWebSocketMessage = async (req, res) => {
  try {
    const { messageId } = req.params;
    
    if (!messageId) {
      return res.status(400).json({ success: false, error: 'Message ID is required' });
    }
    
    const message = await pythonInspector.getWebSocketMessage(messageId);
    
    if (!message) {
      return res.status(404).json({ success: false, error: 'Message not found' });
    }
    
    res.json({ success: true, message });
  } catch (error) {
    console.error('Error getting WebSocket message:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Clear all WebSocket messages
 */
exports.clearWebSocketMessages = async (req, res) => {
  try {
    await pythonInspector.clearWebSocketMessages();
    res.json({ success: true });
  } catch (error) {
    console.error('Error clearing WebSocket messages:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Save requests and responses to HAR format
 */
exports.saveToHar = async (req, res) => {
  try {
    const { filename } = req.body;
    
    if (!filename) {
      return res.status(400).json({ success: false, error: 'Filename is required' });
    }
    
    const result = await pythonInspector.saveToHar(filename);
    
    if (!result) {
      return res.status(500).json({ success: false, error: 'Failed to save to HAR' });
    }
    
    res.json({ success: true, filename });
  } catch (error) {
    console.error('Error saving to HAR:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Compare two requests
 */
exports.compareRequests = async (req, res) => {
  try {
    const { request_id1, request_id2 } = req.body;
    
    if (!request_id1 || !request_id2) {
      return res.status(400).json({ success: false, error: 'Two request IDs are required' });
    }
    
    const comparison = await pythonInspector.compareRequests(request_id1, request_id2);
    
    if (!comparison) {
      return res.status(404).json({ success: false, error: 'One or both requests not found' });
    }
    
    res.json({ success: true, comparison });
  } catch (error) {
    console.error('Error comparing requests:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};
