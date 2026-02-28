'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function LocaleSwitcher({
  children,
  className,
  locale,
}: {
  children: React.ReactNode;
  className?: string;
  locale: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';

    const segments = pathname.split('/');
    segments[1] = locale;

    const newPath = segments.join('/');

    const queryString = searchParams.toString();

    return queryString ? `${newPath}?${queryString}` : newPath;
  };

  return (
    <Link
      className={className}
      href={redirectedPathName(locale)}
      prefetch
      scroll={false}
    >
      {children}
    </Link>
  );
}
