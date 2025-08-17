export const metadata = {
  title: 'EVCC Cloud',
  description: 'Webhook-driven smart charging (Enode sandbox)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
