import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  console.log('Webhook event:', JSON.stringify(body));
  // TODO: implement smart charging logic here
  return NextResponse.json({ ok: true });
}
