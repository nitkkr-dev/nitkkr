import Link from 'next/link';
import { type IconType } from 'react-icons';

import { Button } from '~/components/buttons';
import { cn } from '~/lib/utils';

export default function ButtonGroup({
  buttonArray,
}: {
  buttonArray: {
    label: string;
    href: string;
    icon: IconType;
  }[];
}) {
  return (
    <>
      <nav
        className={cn(
          'container',
          'my-10',
          'flex flex-col gap-5 lg:flex-row lg:justify-around'
        )}
      >
        {buttonArray.map(({ label, href, icon: Icon }, index) => (
          <Button
              asChild
              className={cn(
                'flex flex-col text-wrap',
                'gap-2 sm:gap-3 lg:gap-4 xl:gap-5',
                'mx-auto h-40 w-40 sm:h-48 sm:w-64 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
              )}
              key={index}
              variant="secondary"
            >
              <Link href={href}>
                <Icon className={cn('size-12')} />
                <p className="text-center font-serif font-semibold sm:text-lg md:text-xl">
                  {label}
                </p>
              </Link>
            </Button>
        ))}
      </nav>
    </>
  );
}
