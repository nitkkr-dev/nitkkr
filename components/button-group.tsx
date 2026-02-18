import { type UrlObject } from 'node:url';

import Link from 'next/link';
import { type IconType } from 'react-icons';

import { Button } from '~/components/buttons';
import { cn } from '~/lib/utils';
import { getS3Url } from '~/server/s3';

export default function ButtonGroup({
  buttonArray,
  columns = 4,
  imageurl = `${getS3Url()}/assets/elephants-3.png`,
}: {
  buttonArray: {
    label: string;
    href: string | UrlObject;
    icon?: IconType;
    annotation?: string;
  }[];
  columns?: 2 | 3 | 4;
  imageurl?: string;
}) {
  const isTwoColumn = columns === 2;
  const useFlexLayout = buttonArray.length < columns;
  const sizeClass = isTwoColumn
    ? 'mx-auto w-72 sm:w-[22rem] md:w-[20rem] lg:w-[26rem]'
    : useFlexLayout
      ? 'w-40 sm:w-60 md:w-64 lg:w-72 xl:w-80 2xl:w-96'
      : 'w-full';
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
    <nav
      className={cn(
        'm-auto my-10',
        // Removed all background styles from here
        useFlexLayout
          ? 'flex flex-wrap justify-center gap-6 lg:gap-8'
          : columns === 2
            ? 'grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6 xl:gap-8'
            : columns === 3
              ? 'grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:gap-8'
              : 'grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6 xl:gap-8'
      )}
    >
      {buttonArray.map(({ label, href, icon: Icon, annotation }, index) => (
        <Button
          asChild
          className={cn(
            'relative flex flex-col overflow-hidden text-wrap border ',
            'gap-2 sm:gap-3 lg:gap-4 xl:gap-5',
            'h-40 sm:h-48 md:h-52 lg:h-60',
            sizeClass
          )}
          key={index}
          variant="secondary"
        >
          <Link
            href={href}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Image overlay*/}
            <div
              className="absolute inset-0 z-10"
              style={{
                backgroundImage: `url(${imageurl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                opacity: 0.1,
              }}
            />

            <div className="relative z-20 flex flex-col items-center justify-center">
              {Icon && <Icon className="size-8 drop-shadow-lg md:size-12" />}
              <div className="p-2 text-center font-serif text-sm font-semibold drop-shadow-lg md:p-4 md:text-base xl:text-lg 2xl:text-xl">
                <p className="whitespace-normal">{label}</p>
                {annotation && <p>{annotation}</p>}
              </div>
            </div>
          </Link>
        </Button>
      ))}
    </nav>
  );
}
