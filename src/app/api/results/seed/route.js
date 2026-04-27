import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Result from '@/models/Result';

export async function POST() {
  try {
    await dbConnect();
    
    // Check if the result already exists
    const existing = await Result.findOne({ 
      title: 'Paramedical Examination, October 2025' 
    });
    
    if (existing) {
      return NextResponse.json({ 
        message: 'Result already exists',
        result: existing 
      });
    }
    
    // Create the initial result
    const result = await Result.create({
      title: 'Paramedical Examination, October 2025',
      link: 'https://script.google.com/macros/s/AKfycbzqOEKqQCkxaOrE9xD7n4r4o5Kz2C5VOfeyyg-CokinPRCkrUqeZKmOhc87yKlcO0tS/exec',
      description: 'View results for Paramedical Examination conducted in October 2025',
      isActive: true,
      order: 0,
      publishDate: new Date('2025-10-01'),
    });
    
    return NextResponse.json({ 
      message: 'Initial result created successfully',
      result 
    }, { status: 201 });
  } catch (error) {
    console.error('Error seeding result:', error);
    return NextResponse.json({ 
      error: 'Failed to seed result',
      details: error.message 
    }, { status: 500 });
  }
}
