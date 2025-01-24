export default function WcagSkipAppNav() {
  return (
    <div role="region" aria-label="skip navigation">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-black focus:text-white focus:dark:bg-white focus:dark:text-black focus:border-4 focus:border-primary-500 focus:p-1"
      >
        Skip to main content
      </a>
    </div>
  );
}
