import { NextResponse } from 'next/server';
import { Server } from 'socket.io';

// Socket.IO server instance
let io;

// This is a workaround for Next.js API routes to handle Socket.IO
export async function GET(req) {
  // Check if Socket.IO server is already initialized
  if (!io) {
    // Get the response object
    const res = new NextResponse();
    
    // Initialize Socket.IO server if it doesn't exist
    if (!res.socket && typeof window === 'undefined') {
      // For server-side rendering
      return NextResponse.json({
        success: false,
        message: 'Socket.IO server cannot be initialized in SSR mode',
      });
    }
    
    // Create Socket.IO server
    io = new Server(res.socket.server, {
      path: '/socket.io',
      addTrailingSlash: false,
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });
    
    // Socket.IO event handlers
    io.on('connection', (socket) => {
      console.log('Client connected:', socket.id);
      
      socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
      });
      
      // Add more event handlers as needed
    });
    
    // Attach Socket.IO server to response object
    res.socket.server.io = io;
  }
  
  return NextResponse.json({
    success: true,
    message: 'Socket.IO server is running',
  });
}

// Export Socket.IO server instance for use in other files
export { io };
