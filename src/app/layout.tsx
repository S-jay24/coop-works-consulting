import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Coop Works Consulting | Data-First Poultry Operations & Technology Advisory',
  description:
    'Coop Works Consulting provides broiler integration, turnkey operations, and software solutions for poultry management — powered by the Poultry Resource Planner platform.',
  keywords: 'poultry consulting, broiler integration, turnkey broiler, poultry ERP, poultry management software, India',
  openGraph: {
    title: 'Coop Works Consulting',
    description: 'Data-first poultry consulting — integration, turnkey operations, and the Poultry Resource Planner ERP.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
