'use client';

import { animate } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import { sequence } from '~/components/dialog';
import { Button } from '~/components/ui';
import { useCtrl } from '~/lib/hooks';
import { cn } from '~/lib/utils';

export default function SearchButton({
  href,
  isMacOS,
  text,
}: {
  href: string;
  isMacOS: boolean;
  text: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useCtrl('k', () => {
    if (pathname === href) void animate(sequence).then(() => router.back());
    else router.push(href, { scroll: false });
  });

  return (
    <>
      <Button asChild className="xl:hidden" variant="icon">
        <Link href={href} prefetch scroll={false}>
          <FaMagnifyingGlass className="p-2 text-primary-700" size={40} />
        </Link>
      </Button>

      <Button
        asChild
        className={cn(
          'hidden xl:flex',
          'group h-full w-60 gap-3 bg-neutral-50 px-4'
        )}
        variant="secondary"
      >
        <Link href={href} prefetch scroll={false}>
          <FaMagnifyingGlass size={16} />
          <span className="grow text-left text-neutral-500 group-hover:text-neutral-100">
            {text}
          </span>
          <kbd className="font-sans font-medium opacity-50">
            {isMacOS ? '⌘' : 'Ctrl'} K
          </kbd>
        </Link>
      </Button>
    </>
  );
}
