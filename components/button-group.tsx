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
  columns?: 3 | 4;
  imageurl?: string;
}) {
  const useFlexLayout = buttonArray.length < columns;  
  return (
    <nav
      className={cn(
        'm-auto my-10',
        // Removed all background styles from here
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
            'flex flex-col text-wrap relative overflow-hidden',
            'gap-2 sm:gap-3 lg:gap-4 xl:gap-5',
            'h-40 sm:h-48 md:h-52 lg:h-60',
            'border-2 border-gray-800',
            'bg-transparent',
            useFlexLayout
              ? 'w-40 sm:w-60 md:w-64 lg:w-72 xl:w-80 2xl:w-96'
              : 'w-full'
          )}
          key={index}
          variant="secondary"
        >
          <Link href={href} className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            {/* Background image only within this button */}
            <div 
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: `url(${imageurl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                opacity: 0.1,
              }}
            />
            
            {Icon && <Icon className="size-12 drop-shadow-lg" />}
            <div className="p-2 text-center font-serif text-base font-semibold sm:text-lg md:p-4 md:text-xl drop-shadow-lg">
              <p className="whitespace-normal">{label}</p>
              {annotation && <p>{annotation}</p>}
            </div>
          </Link>
        </Button>
      ))}
    </nav>
  );
}
