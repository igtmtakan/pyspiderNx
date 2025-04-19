import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const pyspiderUrl = process.env.PYSPIDER_API_URL || 'http://localhost:5000';
    console.log(`Checking PySpider status at: ${pyspiderUrl}`);

    // Try to connect to PySpider
    // First try the root URL to check if PySpider is running
    const response = await axios.get(`${pyspiderUrl}`, {
      timeout: 5000 // 5 second timeout
    });

    return NextResponse.json({
      status: 'online',
      url: pyspiderUrl,
      statusCode: response.status,
      contentType: response.headers['content-type']
    });
  } catch (error) {
    console.error('Error connecting to PySpider:', error);

    return NextResponse.json({
      status: 'offline',
      error: error.message,
      url: process.env.PYSPIDER_API_URL || 'http://localhost:5000'
    });
  }
}
