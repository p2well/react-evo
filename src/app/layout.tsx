import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Footer from './footer';
import AppHeader from './AppHeader';

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
          <div role="region" aria-label="skip navigation">
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-black focus:text-white focus:dark:bg-white focus:dark:text-black focus:border-4 focus:border-primary-500 focus:p-1"
            >
              Skip to main content
            </a>
          </div>
          <AppHeader />
          <main id="main" className="container flex flex-grow justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
