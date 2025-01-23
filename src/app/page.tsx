import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      <div role="region" aria-label="skip navigation">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-black focus:text-white focus:dark:bg-white focus:dark:text-black focus:border-4 focus:border-primary-500 focus:p-1"
        >
          Skip to main content
        </a>
      </div>
      <header
        id="header"
        className="flex flex-row flex-wrap sm:flex-nowrap items-center"
      >
        <div className="font-medium text-lg text-nowrap pr-4">
          React Evolution
        </div>
      </header>
      <main id="main" className="container flex flex-grow justify-center">
        <div className="flex justify-between">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
      </main>
      <footer id="footer" className="text-center py-4">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
