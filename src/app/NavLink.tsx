import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  svgpath: React.ReactNode;
  text: string;
  link: string;
}

const NavLink: React.FC<NavLinkProps> = ({ svgpath, text, link }) => {
  return (
    <Link
      href={link}
      className="flex items-center mx-2 p-1 text-md dark:text-white dark:hover:text-primary-500 dark:border-black dark:border-b-2 dark:hover:border-primary-500 dark:hover:border-b-2 dark:active:border-b-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 mr-1"
      >
        {svgpath}
      </svg>
      {text}
    </Link>
  );
};

export default NavLink;
