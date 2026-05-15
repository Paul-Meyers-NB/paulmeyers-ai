import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.formData();

  const url = new URL('/quiz/thank-you', req.url);
  const carry = ['firstName', 'ai_usage', 'business_size', 'challenge', 'outcome', 'time_sink'];
  for (const key of carry) {
    const val = data.get(key);
    if (typeof val === 'string' && val) {
      url.searchParams.set(key, val);
    }
  }

  return NextResponse.redirect(url, { status: 303 });
}
