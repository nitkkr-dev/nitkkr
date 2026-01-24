import { type UrlObject } from 'node:url';

import Link from 'next/link';
import { type IconType } from 'react-icons';

import { Button } from '~/components/buttons';
import { cn } from '~/lib/utils';

export default function ButtonGroup({
  buttonArray,
  columns = 4,
}: {
  buttonArray: {
    label: string;
    href: string | UrlObject;
    icon?: IconType;
    annotation?: string;
  }[];
  columns?: 3 | 4;
}) {
  // When items are fewer than columns, use flex layout to center them
  const useFlexLayout = buttonArray.length < columns;

  return (
    <nav
      className={cn(
        'm-auto my-10',
        useFlexLayout
          ? 'flex flex-wrap justify-center gap-6 lg:gap-8'
          : columns === 3
            ? 'grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:gap-8'
            : 'grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6 xl:gap-8'
      )}
    >
      {buttonArray.map(({ label, href, icon: Icon, annotation }, index) => (
        <Button
          asChild
          className={cn(
            'flex flex-col text-wrap',
            'gap-2 sm:gap-3 lg:gap-4 xl:gap-5',
            'h-40 sm:h-48 md:h-52 lg:h-60',
            useFlexLayout
              ? 'w-40 sm:w-60 md:w-64 lg:w-72 xl:w-80 2xl:w-96'
              : 'w-full'
          )}
          key={index}
          variant="secondary"
        >
          <Link href={href}>
            {Icon && <Icon className="size-12" />}
            <div className="p-2 text-center font-serif text-base font-semibold sm:text-lg md:p-4 md:text-xl">
              <p className="whitespace-normal">{label}</p>
              {annotation && <p>{annotation}</p>}
            </div>
          </Link>
        </Button>
      ))}
    </nav>
  );
}
