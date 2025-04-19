/**
 * Inspector Routes
 */

const express = require('express');
const router = express.Router();
const inspectorController = require('../controllers/inspectorController');

// Get all requests
router.get('/requests', inspectorController.getRequests);

// Get all responses
router.get('/responses', inspectorController.getResponses);

// Get a request
router.get('/request/:requestId', inspectorController.getRequest);

// Get a response
router.get('/response/:requestId', inspectorController.getResponse);

// Get a request and response
router.get('/request_response/:requestId', inspectorController.getRequestResponse);

// Clear all requests and responses
router.post('/clear', inspectorController.clearAll);

// Delete a request
router.delete('/request/:requestId', inspectorController.deleteRequest);

// Modify a request
router.post('/request/:requestId/modify', inspectorController.modifyRequest);

// Resend a request
router.post('/request/:requestId/resend', inspectorController.resendRequest);

// Set a filter
router.post('/filter', inspectorController.setFilter);

// Clear a filter
router.post('/filter/:filterName/clear', inspectorController.clearFilter);

// Clear all filters
router.post('/filter/clear', inspectorController.clearAllFilters);

// Get filtered requests
router.get('/filtered_requests', inspectorController.getFilteredRequests);

// Get filtered responses
router.get('/filtered_responses', inspectorController.getFilteredResponses);

// Get all WebSocket messages
router.get('/websocket_messages', inspectorController.getWebSocketMessages);

// Get a WebSocket message
router.get('/websocket_message/:messageId', inspectorController.getWebSocketMessage);

// Clear all WebSocket messages
router.post('/websocket_messages/clear', inspectorController.clearWebSocketMessages);

// Save requests and responses to HAR format
router.post('/har', inspectorController.saveToHar);

// Compare two requests
router.post('/compare', inspectorController.compareRequests);

module.exports = router;
