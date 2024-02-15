'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LocaleSwitcher({
  children,
  className,
  locale,
}: {
  children: React.ReactNode;
  className?: string;
  locale: string;
}) {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';

    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <Link className={className} href={redirectedPathName(locale)}>
      {children}
    </Link>
  );
}
