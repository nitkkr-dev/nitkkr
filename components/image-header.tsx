import { cn } from '~/lib/utils';
import { getS3Url } from '~/server/s3';

import ScrollingNav from './scrolling-nav';

export default function ImageHeader({
  className,
  title,
  headings,
  src,
}: {
  className?: string;
  title?: string;
  headings?: { label: string; href: string }[];
  src: string;
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
          'absolute flex w-full bg-cover bg-top max-sm:static',
          'h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-[448px]',
          className
        )}
        style={{
          backgroundImage: `url('${getS3Url()}/${src}')`,
        }}
      >
        {title && (
          <h1 className="container my-auto text-center text-shade-light">
            {title}
          </h1>
        )}
      </section>

      {headings ? (
        <>
          <ol
            className={cn(
              'p-1 xl:p-2',
              'hidden sm:flex sm:gap-1 md:gap-2',
              'sticky top-6 z-nav mx-auto w-fit rounded-full',
              'border border-primary-700 bg-background drop-shadow-md',
              'sm:mb-4 sm:mt-48 md:mb-[14px] md:mt-56 lg:mb-[30px] lg:mt-60 xl:mb-[38px] xl:mt-72 2xl:mt-[352px]' // DEPENDS-ON: header.tsx
            )}
          >
            <ScrollingNav headings={headings} />
          </ol>
          <hr className="invisible hidden sm:block" />
        </>
      ) : (
        <hr
          className={cn(
            'invisible hidden sm:block',
            'mt-56 sm:mt-64 md:mt-72 lg:mt-80 xl:mt-96 2xl:mt-[448px]'
          )}
        />
      )}
    </>
  );
}
