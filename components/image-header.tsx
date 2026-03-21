import { Sub } from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '~/components/buttons';
import { cn } from '~/lib/utils';
import { getS3Url } from '~/server/s3';

export default function ImageHeader({
  className,
  title,
  subtitle,
  headings,
  src,
  logoUrl,
}: {
  className?: string;
  title?: string;
  subtitle?: string;
  headings?: { label: string; href: string }[];
  src: string;
  logoUrl?: string;
}) {
  return (
    <>
      {headings && (
        <style>
          {`@media (min-width: 640px) {
            .header-sticky-ness {
              position: static;
            }
          }`}
        </style>
      )}

      <section
        className={cn(
          'absolute flex w-full bg-neutral-700 bg-cover bg-center bg-blend-overlay max-sm:static',
          'h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-[448px]',
          className
        )}
        style={{
          backgroundImage: `url('${getS3Url()}/${src ? src : 'assets/landingpagebg-1.png'}')`, // FIXME: remove this hack once we have good images
        }}
      >
        {title && !logoUrl && (
          <div className="container my-auto text-center">
            <h1 className="text-xl text-shade-light md:text-2xl lg:text-3xl xl:text-4xl">
              {title}
            </h1>
            {subtitle && (
              <h2 className="container text-center text-xl text-shade-light md:text-2xl lg:text-3xl xl:text-4xl">
                {subtitle}
              </h2>
            )}
          </div>
        )}

        {/* Title with logo - displayed side by side */}
        {title && logoUrl && (
          <header className="container m-auto flex max-w-[46rem] items-center justify-center">
            <div className="relative h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32">
              <Image
                alt={title}
                src={logoUrl}
                fill
                className="rounded-full bg-primary-100 object-cover"
                sizes="(max-width: 640px) 4rem, (max-width: 768px) 6rem, (max-width: 920px) 8rem"
              />
            </div>

            <h1 className="mx-2 my-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              {title.toUpperCase()}
            </h1>

            {subtitle && (
              <h2 className="mx-2 my-auto text-sm md:text-base lg:text-lg xl:text-xl">
                {subtitle}
              </h2>
            )}
          </header>
        )}
      </section>

      {/* Spacer div when no headings - pushes content below the absolute header */}
      {!headings && (
        <div className="h-56 max-sm:hidden sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-[448px]" />
      )}

      {headings && (
        <>
          <div className="block h-56 max-sm:hidden sm:h-64 md:h-72 lg:h-80 xl:hidden" />
          <ol
            className={cn(
              'p-1 xl:p-2',
              'hidden xl:flex xl:gap-2',
              'sticky top-6 z-tabs mx-auto w-full max-w-[calc(100vw-20rem)] overflow-visible rounded-full',
              'border border-primary-700 bg-background drop-shadow-md',
              'sm:mb-4 sm:mt-48 md:mb-[14px] md:mt-56 lg:mb-[30px] lg:mt-60 xl:mb-[38px] xl:mt-72 2xl:mt-[352px]' // DEPENDS-ON: header.tsx
            )}
          >
            {headings.map(({ label, href }, index) => (
              <li
                key={index}
                className="group min-w-0 flex-1 overflow-visible transition-[flex-grow] duration-300 ease-in-out hover:z-10 hover:flex-[2]"
              >
                <Button
                  asChild
                  className="w-full rounded-full px-4 py-2 text-shade-dark transition-colors duration-300"
                  variant="ghost"
                >
                  <Link href={href}>
                    <span className="block max-w-[10rem] truncate transition-all duration-300 ease-in-out group-hover:max-w-[24rem] group-hover:whitespace-nowrap">
                      {label}
                    </span>
                  </Link>
                </Button>
              </li>
            ))}
          </ol>
          <hr className="invisible hidden sm:block" />
        </>
      )}
    </>
  );
}
