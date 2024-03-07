'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaMagnifyingGlass } from 'react-icons/fa6';

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
  const router = useRouter();
  useCtrl('k', () => router.push(href));

  return (
    <>
      <Button asChild className="xl:hidden" variant="icon">
        <Link href={href} scroll={false}>
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
        <Link href={href} scroll={false}>
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
