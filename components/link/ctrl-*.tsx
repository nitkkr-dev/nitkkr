'use client';

import { animate } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { sequence } from '~/components/dialog';
import { useCtrl } from '~/lib/hooks';

export function CtrlLink({
  children,
  className,
  href,
  shortcut,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  shortcut: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useCtrl(shortcut, () => {
    if (pathname === href) void animate(sequence).then(() => router.back());
    else router.push(href, { scroll: false });
  });

  return (
    <Link className={className} href={href} prefetch scroll={false}>
      {children}
    </Link>
  );
}
