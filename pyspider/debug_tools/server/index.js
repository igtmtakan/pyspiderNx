/**
 * Debug Tools Server
 */

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const debuggerRoutes = require('./routes/debugger');
const inspectorRoutes = require('./routes/inspector');
const profilerRoutes = require('./routes/profiler');

// Import WebSocket handlers
const debuggerSocket = require('./services/debuggerSocket');
const inspectorSocket = require('./services/inspectorSocket');
const profilerSocket = require('./services/profilerSocket');

// Import constants
const { WEBSOCKET_EVENTS } = require('../shared/constants');

// Create Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../client/build')));

// API routes
app.use('/api/debugger', debuggerRoutes);
app.use('/api/inspector', inspectorRoutes);
app.use('/api/profiler', profilerRoutes);

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// WebSocket connection
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // Set up debugger socket handlers
  debuggerSocket.setup(io, socket);

  // Set up inspector socket handlers
  inspectorSocket.setup(io, socket);

  // Set up profiler socket handlers
  profilerSocket.setup(io, socket);

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: err.message
  });
});

// Start server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Debug Tools server running on port ${PORT}`);
});

module.exports = { app, server, io };
