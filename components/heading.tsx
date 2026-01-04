import { type UrlObject } from 'url';

import Image from 'next/image';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import MaybeLink from '~/components/maybe-link';
import { cn } from '~/lib/utils';

function Elephants({ direction }: { direction: 'rtl' | 'ltr' }) {
  return (
    <figure
      dir={direction}
      className="flex h-12 overflow-x-hidden sm:h-16 md:h-20"
    >
      <Image
        alt="Elephant Lead"
        className={cn(
          'w-16 scale-y-75 sm:w-20 sm:-translate-y-1 md:w-24',
          direction === 'ltr' ? '-mr-4 -scale-x-100' : '-ml-4'
        )}
        height={1268}
        width={2186}
        src="assets/bhagadutta-1.png"
      />
      {[...Array<number>(8)].map((_, index) => (
        <Image
          alt="Elephant"
          className={cn(
            'w-16 scale-y-75 sm:w-20 sm:-translate-y-1 md:w-24',
            direction === 'ltr' ? '-mr-4 -scale-x-100' : '-ml-4'
          )}
          height={1268}
          key={index}
          width={2186}
          src="assets/elephants.png"
        />
      ))}
    </figure>
  );
}

function Horses({ direction }: { direction: 'rtl' | 'ltr' }) {
  return (
    <figure
      dir={direction}
      className="flex h-12 overflow-x-hidden sm:h-16 md:h-20"
    >
      <Image
        alt="Chariot"
        className={cn(
          '-mt-2 w-16 sm:w-20 md:-mt-3 md:w-24',
          direction === 'rtl' && '-scale-x-100'
        )}
        height={407}
        loading="lazy"
        width={602}
        src="assets/chariot.png"
      />

      {[...Array<number>(16)].map((_, index) => (
        <Image
          alt="Horse"
          className={cn(
            'my-auto w-16 sm:w-20 md:w-24',
            direction === 'rtl' ? '-mr-3.5 -scale-x-100' : '-ml-3.5'
          )}
          height={250}
          key={index}
          width={375}
          src="assets/horses.png"
        />
      ))}
    </figure>
  );
}

export default function Heading({
  className,
  glyphDirection,
  heading: Comp,
  href,
  text,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  glyphDirection: 'rtl' | 'dual' | 'ltr';
  heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  href?: string | UrlObject;
  text: string;
}) {
  const styles = 'flex flex-nowrap gap-2 sm:gap-3 md:gap-4';

  return (
    <header
      className={cn('my-2 md:my-4 xl:my-6', !href && styles, className)}
      {...props}
    >
      <MaybeLink className={cn(href && styles)} href={href}>
        {glyphDirection === 'dual' && (
          <>
            <Elephants direction="rtl" />
            <Comp className="my-auto min-w-fit">{text}</Comp>
            <Elephants direction="ltr" />
          </>
        )}

        {glyphDirection === 'ltr' && (
          <Comp className="my-auto min-w-fit">{text}</Comp>
        )}
        {glyphDirection !== 'dual' && <Horses direction={glyphDirection} />}
        {glyphDirection === 'rtl' && (
          <Comp className="my-auto min-w-fit">{text}</Comp>
        )}
      </MaybeLink>
    </header>
  );
}
