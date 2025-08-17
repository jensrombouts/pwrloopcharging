# EVCC Cloud MVP (Beginner Helper, Webhook-Only)

Deployable on Vercel Hobby. Uses Enode **sandbox**. No cron jobs.
- `/env` page checks env vars (✅/❌).
- `/api/enode/connect?asset=vehicle&debug=1` prints the exact Connect URL (no redirect).
- `/api/enode/connect?asset=vehicle` redirects to Enode Connect sandbox when env is correct.

## Env vars to set in Vercel (Production)
ENODE_CLIENT_ID=YOUR-SANDBOX-CLIENT-ID
ENODE_CLIENT_SECRET=YOUR-SANDBOX-CLIENT-SECRET
ENODE_BASE_URL=https://api.sandbox.enode.com
ENODE_CONNECT_BASE=https://connect.sandbox.enode.com
ENODE_REDIRECT_URI=https://YOUR-APP.vercel.app/api/enode/oauth/callback
JWT_SECRET=any-long-random

## Test flow
1) Deploy → open `/env` and ensure all ✅.
2) Open `/api/enode/connect?asset=vehicle&debug=1` → copy URL (should contain a full https redirect_uri).
3) Open `/api/enode/connect?asset=vehicle` → should land on Enode Connect sandbox.
