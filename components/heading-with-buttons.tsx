import Link from 'next/link';
import { type IconType } from 'react-icons';

import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import { cn } from '~/lib/utils';

export default function HeadingWithButtons({
  direction,
  heading,
  buttonArray,
  id,
}: {
  direction: 'rtl' | 'dual' | 'ltr';
  heading: string;
  buttonArray: {
    label: string;
    href: string;
    icon: IconType;
  }[];
  id: string;
}) {
  return (
    <>
      <Heading
        glyphDirection={direction}
        heading={'h3'}
        text={heading.toUpperCase()}
        className="container"
        id={id}
        href={`#${id}`}
      />
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
              'flex flex-col',
              'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
              'mx-auto h-44 w-full md:h-48 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
            )}
            key={index}
            variant="secondary"
          >
            <Link href={href}>
              <Icon className="size-12" />
              <p className="font-serif text-xl font-semibold md:text-lg xl:text-xl">
                {label}
              </p>
            </Link>
          </Button>
        ))}
      </nav>
    </>
  );
}
