import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Page from '@/models/Page';

// GET all pages
export async function GET() {
  try {
    await dbConnect();
    const pages = await Page.find().sort({ category: 1, order: 1 });
    return NextResponse.json(pages);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// POST create new page
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const page = await Page.create(body);
    return NextResponse.json(page, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
