import Link from 'next/link';
import { MdDownload } from 'react-icons/md';

import { cn } from '~/lib/utils';

export default function FormLinkItem({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <li>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group flex items-center gap-3 rounded-md border-l-4 border-primary-700 bg-neutral-50 px-3 py-3 shadow-sm',
          'hover:bg-primary-50 transition-colors',
          className
        )}
      >
        <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary-700 text-neutral-50">
          <MdDownload className="size-4" />
        </span>
        <span className="text-sm font-semibold text-neutral-700 sm:text-base">
          {label}
        </span>
      </Link>
    </li>
  );
}
