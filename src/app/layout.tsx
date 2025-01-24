import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import WcagSkipAppNav from './WcagSkipAppNav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'React Evolution',
  description:
    'A cutting-edge, Next.js-powered web app template designed for rapid development and seamless performance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto min-h-screen flex flex-col">
          <WcagSkipAppNav />
          <AppHeader />
          <main id="main" className="container flex flex-grow justify-center">
            {children}
          </main>
          <AppFooter />
        </div>
      </body>
    </html>
  );
}
