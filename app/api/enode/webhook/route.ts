import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  console.log('Webhook event:', JSON.stringify(body));
  return NextResponse.json({ ok: true });
}
