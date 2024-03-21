'use client';

import { animate, type AnimationSequence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import { useCtrl } from '~/lib/hooks';
import { cn } from '~/lib/utils';

export default function SearchButton({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const sequence = [
    ['#content', { opacity: 0, scale: 0.95 }, { duration: 0.1 }],
    ['#overlay', { opacity: 0 }, { duration: 0.05 }],
  ] as AnimationSequence;
  useCtrl('k', () => {
    if (pathname === href) void animate(sequence).then(() => router.back());
    else router.push(href, { scroll: false });
  });

  return (
    <Link href={href} scroll={false}>
      <FaMagnifyingGlass className="p-2 text-primary-700 xl:hidden" size={40} />
      <button
        className={cn(
          'hidden xl:flex',
          'button hover:text-inherit group h-full w-60 items-center gap-3 rounded-xl border px-4'
        )}
      >
        <FaMagnifyingGlass size={16} />
        <span className="grow text-left text-neutral-500 group-hover:text-neutral-100">
          {text}
        </span>
        <kbd className="font-sans font-medium opacity-50">Ctrl K</kbd>
      </button>
    </Link>
  );
}
