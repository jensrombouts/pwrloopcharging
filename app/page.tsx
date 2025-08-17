'use client';

export default function Home() {
  const connect = () => {
    window.location.href = '/api/enode/connect?asset=vehicle';
  };

  return (
    <main className="min-h-screen p-6 flex flex-col gap-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">EVCC Cloud</h1>
      <p className="opacity-80">Webhook-driven smart charging MVP (Enode sandbox).</p>
      <div className="flex gap-3">
        <button onClick={connect} className="rounded-xl px-4 py-2 border">
          Connect your EV
        </button>
        <a className="rounded-xl px-4 py-2 border" href="/env">Env Check</a>
      </div>
      <div className="mt-6 p-4 border rounded-xl">
        <h2 className="text-xl font-semibold mb-2">Current Status</h2>
        <p>Charging: Idle (waiting for webhook events)</p>
      </div>
    </main>
  );
}
