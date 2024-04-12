'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useToast } from '~/lib/hooks'; //temp

import { ToastAction } from './ui';

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
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
          showCloseBtn: locale === 'en',
          duration: 50000,
        })
      }
    >
      {children}
    </Link>
  );
}
