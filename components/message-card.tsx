import Image from 'next/image';
import { FaCalendar, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import { BouncyArrowButton } from '~/components/buttons';
import { cn } from '~/lib/utils';

export default function MessageCard({
  className,
  details,
  image,
  locale,
  name,
  quote,
  quoteBelow,
  readMore,
}: {
  className?: string;
  details?: {
    email: string;
    phone: string;
    session: string;
  };
  image: string;
  locale: string;
  more?: string;
  name: string;
  quote: string;
  quoteBelow?: string;
  readMore?: { text: string; href: string };
}) {
  return (
    <article
      className={cn(
        'grid gap-x-5 space-y-3 sm:space-y-4 md:space-y-5',
        'grid-cols-[5rem,auto] md:grid-cols-[5rem,auto] lg:grid-cols-[min(30%,24rem),auto] lg:grid-rows-[3rem,auto]',
        'p-4 md:p-6 xl:p-8',
        'rounded-xl border border-primary-700 bg-neutral-50',
        className
      )}
    >
      <Image
        alt={name}
        className="aspect-[6/7] rounded-xl object-cover max-lg:w-24 lg:row-span-2"
        height={500}
        src={image}
        width={500}
      />
      <h3 className="!my-0 h-fit self-center lg:text-4xl">{name}</h3>
      <p
        className={cn(
          'max-lg:col-span-2 lg:text-xl',
          details && 'lg:row-span-3'
        )}
      >
        {quote}
        &nbsp;
        {readMore && (
          <BouncyArrowButton
            buttonProps={{
              className: 'inline-flex items-center gap-1',
              variant: 'link',
            }}
            linkProps={{ href: `/${locale}${readMore.href}` }}
            text={readMore.text}
          />
        )}
        {quoteBelow && (
          <>
            <br />
            <br />
            {quoteBelow}
          </>
        )}
      </p>
      {details && (
        <footer className="max-lg:col-span-2">
          <ul>
            <li className="flex items-center gap-2">
              <MdEmail className="size-4 fill-primary-700 md:size-5" />
              {details.email}
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="size-4 fill-primary-700 md:size-5" />
              {details.phone}
            </li>
            <li className="flex items-center gap-2">
              <FaCalendar className="size-4 fill-primary-700 md:size-5" />
              {details.session}
            </li>
          </ul>
        </footer>
      )}
    </article>
  );
}
