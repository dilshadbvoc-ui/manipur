import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import { protect } from '@/lib/auth';

// Admin only: list users
export async function GET(request) {
  try {
    const user = await protect(request);
    if (!user) return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
    await dbConnect();
    const users = await User.find({}).select('-password');
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Admin only: reset password
export async function POST(request) {
  try {
    const requestingUser = await protect(request);
    if (!requestingUser) return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
    await dbConnect();
    const { email, newPassword } = await request.json();
    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ message: 'User not found' }, { status: 404 });
    user.password = newPassword;
    await user.save();
    return NextResponse.json({ message: 'Password reset successfully' });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
