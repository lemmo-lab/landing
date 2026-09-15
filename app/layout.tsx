import type { Metadata, Viewport } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Lemmo — Describe it. Watch AI build it.',
  description:
    'Lemmo turns a single prompt into production-ready product UI. Describe what you need, generate, and refine — right in your browser.',
  metadataBase: new URL('https://lemmo.ai'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#131517',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <a className="skipLink" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
