import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Result from '@/models/Result';

// GET single result
export async function GET(request, { params }) {
  try {
    await dbConnect();
    const result = await Result.findById(params.id);
    if (!result) {
      return NextResponse.json({ error: 'Result not found' }, { status: 404 });
    }
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching result:', error);
    return NextResponse.json({ error: 'Failed to fetch result' }, { status: 500 });
  }
}

// PUT update result
export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const body = await request.json();
    const result = await Result.findByIdAndUpdate(params.id, body, { new: true });
    if (!result) {
      return NextResponse.json({ error: 'Result not found' }, { status: 404 });
    }
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating result:', error);
    return NextResponse.json({ error: 'Failed to update result' }, { status: 500 });
  }
}

// DELETE result
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const result = await Result.findByIdAndDelete(params.id);
    if (!result) {
      return NextResponse.json({ error: 'Result not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Result deleted successfully' });
  } catch (error) {
    console.error('Error deleting result:', error);
    return NextResponse.json({ error: 'Failed to delete result' }, { status: 500 });
  }
}
