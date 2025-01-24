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
        <div className="container flex flex-grow justify-center"></div>
        <div className="flex flex-row items-center text-nowrap pl-4">
          <button className="btn btn-square btn-sm mr-2 dark:bg-primary-500 dark:text-black dark:hover:bg-primary-600 dark:focus:bg-primary-600 dark:active:bg-primary-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
          </button>
          <button className="btn btn-square btn-sm mr-2 dark:bg-primary-500 dark:text-black dark:hover:bg-primary-600 dark:focus:bg-primary-600 dark:active:bg-primary-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </button>
          <button className="btn btn-square btn-sm mr-2 dark:bg-primary-500 dark:text-black dark:hover:bg-primary-600 dark:focus:bg-primary-600 dark:active:bg-primary-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </button>
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
