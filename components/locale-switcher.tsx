'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useToast } from '~/lib/hooks'; //temp

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
  const { toast } = useToast(); //temp
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';

    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <Link
      className={className}
      href={redirectedPathName(locale)}
      scroll={false}
      onClick={() =>
        toast({
          variant: locale === 'en' ? 'success' : 'warning',
          title: 'toast invoked',
          description: 'This is what I look like',
        })
      }
    >
      {children}
    </Link>
  );
}
