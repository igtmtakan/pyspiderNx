import { NextResponse } from 'next/server';
import { Server as SocketIOServer } from 'socket.io';
import { createServer } from 'http';

// Socket.IO server instance
let io;

// Initialize Socket.IO server
function initSocketServer(res) {
  if (!io) {
    // Create HTTP server
    const httpServer = createServer();
    
    // Create Socket.IO server
    io = new SocketIOServer(httpServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
      path: '/socket.io',
    });
    
    // Socket.IO event handlers
    io.on('connection', (socket) => {
      console.log('Client connected:', socket.id);
      
      socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
      });
      
      // Add more event handlers as needed
    });
    
    // Start HTTP server
    const PORT = parseInt(process.env.SOCKET_IO_PORT || '3001', 10);
    httpServer.listen(PORT, () => {
      console.log(`Socket.IO server running on port ${PORT}`);
    });
  }
  
  return io;
}

// GET /api/socket
export async function GET(req) {
  // Initialize Socket.IO server
  const io = initSocketServer();
  
  return NextResponse.json({
    success: true,
    message: 'Socket.IO server is running',
  });
}

// Export Socket.IO server instance for use in other files
export { io, initSocketServer };
