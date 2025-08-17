import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const connectBase = process.env.ENODE_CONNECT_BASE || 'https://connect.sandbox.enode.com';
  const clientId = process.env.ENODE_CLIENT_ID;
  const redirectUri = process.env.ENODE_REDIRECT_URI; // MUST be full https URL

  const url = new URL(req.url);
  const asset = url.searchParams.get('asset') || 'vehicle';
  const debug = url.searchParams.get('debug');

  if (!clientId) {
    const msg = 'Missing ENODE_CLIENT_ID env var';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
  if (!redirectUri || !redirectUri.startsWith('http')) {
    const msg = 'ENODE_REDIRECT_URI must be an absolute https URL like https://YOUR-APP.vercel.app/api/enode/oauth/callback';
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  const connectUrl = new URL(`${connectBase}/oauth/authorize`);
  connectUrl.searchParams.set('client_id', clientId);
  connectUrl.searchParams.set('redirect_uri', redirectUri);
  connectUrl.searchParams.set('response_type', 'code');
  connectUrl.searchParams.set('scope', asset === 'vehicle' ? 'vehicles:read vehicles:control' : 'inverters:read meters:read');
  connectUrl.searchParams.set('state', Math.random().toString(36).slice(2));

  if (debug) {
    return NextResponse.json({ connect: connectUrl.toString() });
  }
  return NextResponse.redirect(connectUrl.toString());
}
