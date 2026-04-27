import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';
import { protect } from '@/lib/auth';

// Public: submit enquiry
export async function POST(request) {
  try {
    await dbConnect();
    const { name, phone, email, qualification } = await request.json();
    if (!name || !phone || !email || !qualification) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }
    const enquiry = await Enquiry.create({ name, phone, email, qualification });
    return NextResponse.json(enquiry, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

// Admin: get all enquiries
export async function GET(request) {
  try {
    const user = await protect(request);
    if (!user) return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
    await dbConnect();
    const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });
    return NextResponse.json(enquiries);
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
