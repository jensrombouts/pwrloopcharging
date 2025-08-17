import { NextRequest, NextResponse } from 'next/server';
import { exchangeCodeForToken } from '@/lib/enodeClient';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  if (!code) return NextResponse.json({ error: 'missing code' }, { status: 400 });

  try {
    const tokens = await exchangeCodeForToken(code);
    console.log('OAuth tokens', tokens);
    return NextResponse.redirect('/');
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
