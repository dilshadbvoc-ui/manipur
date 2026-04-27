import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { enrollment_no, password } = await request.json();

    // Validate input
    if (!enrollment_no || !password) {
      return NextResponse.json(
        { success: false, message: 'Enrollment number and password are required' },
        { status: 400 }
      );
    }

    // Here you would typically validate against your database
    // For now, we'll do a basic validation format check
    
    // Example validation (you can customize this based on your requirements)
    const enrollmentPattern = /^MIU\d{2}[A-Z]\d{5}$/i;
    if (!enrollmentPattern.test(enrollment_no)) {
      return NextResponse.json(
        { success: false, message: 'Invalid enrollment number format' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Query your database to verify credentials
    // 2. Generate a session token
    // 3. Store the session
    // 4. Return success with token
    
    // For now, we'll simulate a successful login
    // You should replace this with actual authentication logic
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Generate a mock token (in production, use proper JWT or session tokens)
    const token = generateToken();

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      data: {
        enrollment_no,
        token,
      }
    });

  } catch (error) {
    console.error('Student login error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred during login' },
      { status: 500 }
    );
  }
}

// Helper function to generate a simple token
// In production, use proper JWT or secure session tokens
function generateToken() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  const segments = 4;
  const segmentLength = 8;
  
  let token = '';
  for (let i = 0; i < segments; i++) {
    if (i > 0) token += '-';
    for (let j = 0; j < segmentLength; j++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }
  
  return token;
}
