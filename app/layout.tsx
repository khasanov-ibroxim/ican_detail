import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { StoreProvider } from '@/components/store/store-context';
import { StoreHeader, StoreFooter } from '@/components/store/store-shell';

export const metadata: Metadata = {
  title: 'iCan Detail — Avtomobil parvarishi',
  description: 'iCan Detail — professional avtomobil parvarishi va detailing mahsulotlari katalogi.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uz">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" />
      </head>
      <body>
        <StoreProvider>
          <StoreHeader />
          {children}
          <StoreFooter />
        </StoreProvider>
      </body>
    </html>
  );
}
