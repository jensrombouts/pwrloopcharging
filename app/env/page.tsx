export default function EnvCheck() {
  return (
    <main className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Environment Check</h1>
      <p>These are <b>server</b>-side environment variables. Values are redacted; we only show if they are set.</p>
      <ul className="mt-4 space-y-2">
        <li>ENODE_CLIENT_ID: {process.env.ENODE_CLIENT_ID ? '✅ set' : '❌ missing'}</li>
        <li>ENODE_CLIENT_SECRET: {process.env.ENODE_CLIENT_SECRET ? '✅ set' : '❌ missing'}</li>
        <li>ENODE_BASE_URL: {process.env.ENODE_BASE_URL ? '✅ set' : '❌ missing'}</li>
        <li>ENODE_CONNECT_BASE: {process.env.ENODE_CONNECT_BASE ? '✅ set' : '❌ missing'}</li>
        <li>ENODE_REDIRECT_URI: {process.env.ENODE_REDIRECT_URI?.startsWith('http') ? '✅ looks ok' : '❌ must be full https URL'}</li>
        <li>JWT_SECRET: {process.env.JWT_SECRET ? '✅ set' : '❌ missing (set any random string)'}</li>
      </ul>
      <p className="mt-6 text-sm opacity-70">Edit these in Vercel → Project → Settings → Environment Variables (Production) → Redeploy.</p>
    </main>
  );
}
