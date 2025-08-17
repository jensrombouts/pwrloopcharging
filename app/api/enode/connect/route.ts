import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const connectBase = process.env.ENODE_CONNECT_BASE || 'https://connect.sandbox.enode.com';
  const clientId = process.env.ENODE_CLIENT_ID;
  const redirectUri = process.env.ENODE_REDIRECT_URI; // MUST be full https URL

  if (!clientId) {
    return NextResponse.json({ error: 'Missing ENODE_CLIENT_ID' }, { status: 500 });
  }
  if (!redirectUri?.startsWith('http')) {
    return NextResponse.json({ error: 'ENODE_REDIRECT_URI must be an absolute https URL' }, { status: 500 });
  }

  const { searchParams } = new URL(req.url);
  const asset = searchParams.get('asset') || 'vehicle';

  const url = new URL(`${connectBase}/oauth/authorize`);
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', redirectUri);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('scope', asset === 'vehicle' ? 'vehicles:read vehicles:control' : 'inverters:read meters:read');
  url.searchParams.set('state', Math.random().toString(36).slice(2));

  return NextResponse.redirect(url.toString());
}
