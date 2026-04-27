import { NextResponse } from 'next/server';
import { protect } from '@/lib/auth';
import dbConnect from '@/lib/mongodb';
import Image from '@/models/Image';

export async function POST(request) {
  try {
    const user = await protect(request);
    if (!user) return NextResponse.json({ message: 'Not authorized' }, { status: 401 });

    let formData;
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json({ message: 'Invalid form data' }, { status: 400 });
    }

    const file = formData.get('file');
    if (!file || typeof file === 'string') {
      return NextResponse.json({ message: 'No file provided' }, { status: 400 });
    }

    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ message: 'Only image files are allowed' }, { status: 400 });
    }

    // 2MB limit for DB storage (base64 inflates ~33%)
    if (file.size > 2 * 1024 * 1024) {
      return NextResponse.json({ message: 'File too large (max 2MB for DB storage)' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const base64 = Buffer.from(bytes).toString('base64');

    await dbConnect();
    const image = await Image.create({
      filename:   file.name.replace(/[^a-zA-Z0-9._-]/g, '_'),
      mimeType:   file.type,
      data:       base64,
      size:       file.size,
      uploadedBy: user._id,
    });

    return NextResponse.json({ url: `/api/images/${image._id}`, id: image._id });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ message: 'Upload failed: ' + error.message }, { status: 500 });
  }
}
