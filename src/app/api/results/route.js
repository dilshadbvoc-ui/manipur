import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Result from '@/models/Result';

// GET all results
export async function GET() {
  try {
    await dbConnect();
    const results = await Result.find({ isActive: true }).sort({ order: 1, publishDate: -1 });
    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching results:', error);
    return NextResponse.json({ error: 'Failed to fetch results' }, { status: 500 });
  }
}

// POST new result
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const result = await Result.create(body);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating result:', error);
    return NextResponse.json({ error: 'Failed to create result' }, { status: 500 });
  }
}
