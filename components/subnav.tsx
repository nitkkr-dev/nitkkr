'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { cn } from '~/lib/utils';

export default function Subnav({ subLinkTitles }: { subLinkTitles: string[] }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      const yOffset = window.scrollY;
      if (!isSticky && yOffset > 200) {
        setIsSticky(true);
      } else if (isSticky && yOffset <= 200) {
        setIsSticky(false);
      } else if (yOffset === 0) {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [isSticky]);

  return (
    <div
      className={cn(
        `top-0 z-10 transform pb-10 transition-all duration-300 `,
        isSticky ? 'fixed w-full' : 'mx-auto mt-16 max-w-3xl'
      )}
    >
      <nav
        className={clsx(
          'flex justify-evenly space-x-1 bg-background p-1 md:space-x-2',
          !isSticky && 'rounded-full'
        )}
      >
        {subLinkTitles.map((title, i) => (
          <Link
            key={i}
            href={'#'}
            className="rounded-full p-2 transition-all duration-300 hover:bg-primary-700 hover:text-background"
          >
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
