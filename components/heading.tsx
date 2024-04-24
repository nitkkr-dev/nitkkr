import Image from 'next/image';
import Link from 'next/link';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Button } from '~/components/ui';
import { cn } from '~/lib/utils';

function Elephants({ direction }: { direction: 'rtl' | 'ltr' }) {
  return (
    <figure
      dir={direction}
      className="flex h-12 overflow-x-hidden sm:h-16 md:h-20"
    >
      {[...Array<number>(9)].map((_, index) => (
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
  text,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  glyphDirection: 'rtl' | 'dual' | 'ltr';
  heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
}) {
  return (
    <header
      className={cn(
        'group relative',
        'my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12',
        'flex flex-nowrap items-center space-x-2 sm:space-x-3 md:space-x-4',
        className
      )}
      {...props}
    >
      {glyphDirection === 'dual' && <Elephants direction="rtl" />}
      {glyphDirection === 'rtl' && <Horses direction={glyphDirection} />}
      <Comp className="my-auto min-w-fit">{text}</Comp>
      {glyphDirection === 'ltr' && <Horses direction={glyphDirection} />}
      {glyphDirection === 'dual' && <Elephants direction="ltr" />}

      {glyphDirection !== 'dual' && (
        <Button
          asChild
          className={cn(
            '!ml-0 w-0',
            'hidden animate-in fade-in zoom-in group-hover:inline',
            // FIXME: First/last ordering
            glyphDirection === 'ltr' && 'order-first after:md:pr-2',
            glyphDirection === 'rtl' && 'order-last before:md:pl-2'
          )}
          variant="link"
        >
          <Link href={`#${props.id}`}>#</Link>
        </Button>
      )}
    </header>
  );
}
