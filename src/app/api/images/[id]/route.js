import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Image from '@/models/Image';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    await dbConnect();

    const image = await Image.findById(id);
    if (!image) return NextResponse.json({ message: 'Image not found' }, { status: 404 });

    const buffer = Buffer.from(image.data, 'base64');

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': image.mimeType,
        'Content-Length': buffer.length.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Image serve error:', error);
    return NextResponse.json({ message: 'Failed to load image' }, { status: 500 });
  }
}
