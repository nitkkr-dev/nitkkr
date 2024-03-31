import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa6';

import Heading from '~/components/heading';
import { Button } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { populate } from '~/populateDB';
import { cn } from '~/lib/utils';

const DirecotorsImage = ({ className, ...props }: Omit<ImageProps, 'src'>) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <Image
    className={cn('rounded-xl', className)}
    height={682}
    width={591}
    src="https://nitkkr.ac.in/wp-content/uploads/2022/02/directorim.jpg"
    {...props}
  />
);

export default async function DirectorsCorner({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).DirectorsCorner;
  await populate();

  return (
    <article className="container mb-32 mt-10" id="directors-corner">
      <Heading
        glyphDirection="rtl"
        heading="h2"
        href="#directors-corner"
        text={text.title}
      />

      <article
        className={cn(
          'gap-5 lg:flex',
          'p-4 md:p-6 xl:p-8',
          'rounded-xl border border-primary-700 bg-neutral-50'
        )}
      >
        <figure className="mb-4 flex gap-4 sm:gap-6 md:gap-8 lg:hidden">
          <DirecotorsImage
            alt={text.alt}
            className="h-[92px] w-20 md:h-[111px] md:w-24"
          />
          <figcaption className="my-auto">
            <h3 className="mb-0">{text.name}</h3>
          </figcaption>
        </figure>

        <DirecotorsImage
          alt={text.alt}
          className={cn(
            'hidden lg:block',
            'h-[295px] w-64 xl:h-[443px] xl:w-96'
          )}
        />

        <blockquote>
          <h2 className="mb-4 hidden lg:block">{text.name}</h2>
          <p className="lg:text-xl">
            {text.quote[0]}
            &nbsp;
            <Button
              asChild
              className="inline-flex items-center gap-1"
              variant="link"
            >
              <Link href={`/${locale}/institute/director#message`}>
                {text.more}
                <span className="rotate-90">
                  <FaArrowUp
                    className={cn(
                      'mx-auto animate-bounce',
                      'size-2 md:size-3 lg:size-4'
                    )}
                  />
                </span>
              </Link>
            </Button>
            <br />
            <br />
            {text.quote[1]}
          </p>
        </blockquote>
      </article>
    </article>
  );
}
