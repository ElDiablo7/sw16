import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const callbackSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters').max(15),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = callbackSchema.parse(body);
    
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const referenceNumber = `CB-SW16-${randomNum}`;
    
    console.log('New Callback Request:', {
      referenceNumber,
      ...validatedData
    });
    
    return NextResponse.json({ success: true, referenceNumber });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
