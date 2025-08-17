const baseUrl = process.env.ENODE_BASE_URL || 'https://api.sandbox.enode.com';

export async function exchangeCodeForToken(code: string) {
  const res = await fetch(`${baseUrl}/oauth2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.ENODE_REDIRECT_URI || '',
      client_id: process.env.ENODE_CLIENT_ID || '',
      client_secret: process.env.ENODE_CLIENT_SECRET || '',
    })
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token exchange failed: ${res.status} ${text}`);
  }
  return res.json();
}
