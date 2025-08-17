# EVCC Cloud MVP (Webhook-driven)

This is a **Next.js serverless MVP** for EV smart charging using **Enode sandbox**.

## How it works
- Users connect their EV and solar inverter via Enode Connect.
- Enode sends events to your webhook endpoint.
- No polling or cron jobs: everything is **event-driven**.

## Deploy on Vercel (Hobby plan supported)
1. Upload this repo to GitHub.
2. Import the repo into Vercel.
3. Set environment variables from `.env.local.example`.
4. Deploy.

## Important files
- `app/page.tsx`: UI with Connect button and status view.
- `app/api/enode/oauth/callback/route.ts`: OAuth callback handler.
- `app/api/enode/webhook/route.ts`: Webhook endpoint to receive Enode events.
- `lib/enodeClient.ts`: Helper to talk to Enode API.

## Next steps
- Store Enode tokens in a DB (Supabase, Planetscale).
- Implement real charging policy logic in the webhook handler.
