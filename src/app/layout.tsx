import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coop Works Consulting | Global Management Consulting & Strategic Advisory',
  description: 'Empowering C-suite executives, boards, and private equity leaders with data-driven strategy, operational excellence, digital transformation, and sustainable growth advisory.',
  keywords: [
    'Management Consulting',
    'Strategic Advisory',
    'Executive Advisory',
    'Corporate Strategy',
    'Digital Transformation',
    'Private Equity Advisory',
    'Coop Works Consulting'
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
