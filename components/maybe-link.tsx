import type { UrlObject } from 'url';

import Link, { type LinkProps } from 'next/link';

interface MaybeLinkProps extends Omit<LinkProps, 'href'> {
  children: React.ReactNode;
  className?: string;
  href?: string | UrlObject;
}

export default function MaybeLink({
  children,
  href,
  ...props
}: MaybeLinkProps) {
  return href ? (
    <Link href={href} {...props}>
      {children}
    </Link>
  ) : (
    children
  );
}
