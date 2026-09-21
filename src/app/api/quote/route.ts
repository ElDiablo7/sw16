import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const quoteSchema = z.object({
  moveType: z.string().min(1, 'Move type is required'),
  fromPostcode: z.string().min(2).max(10),
  toPostcode: z.string().min(2).max(10),
  propertySize: z.string().min(1),
  preferredDate: z.string().min(1),
  flexibility: z.string().min(1),
  additionalInfo: z.string().optional(),
  floorFrom: z.string().min(1),
  floorTo: z.string().min(1),
  name: z.string().min(2),
  phone: z.string().min(10).max(15),
  email: z.string().email(),
  referralSource: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = quoteSchema.parse(body);
    
    // Generate reference number (SW16-XXXXX random)
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const referenceNumber = `SW16-${randomNum}`;
    
    // Log the lead
    console.log('New Quote Request:', {
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
