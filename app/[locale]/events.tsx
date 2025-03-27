import { desc, eq } from 'drizzle-orm';
import Image from 'next/image';
import Link from 'next/link';

import { BouncyArrowButton, Button } from '~/components/buttons';
import Heading from '~/components/heading';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs';
import { Card, CardContent, CardDescription, CardTitle } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn, getKeys } from '~/lib/utils';
import { db, type events as eventsSchema } from '~/server/db';
import { getS3Url } from '~/server/s3';

export default async function Events({
  category: currentCategory,
  locale,
}: {
  category:
    | (typeof eventsSchema.category.enumValues)[number]
    | 'recents'
    | 'featured';
  locale: string;
}) {
  const text = (await getTranslations(locale)).Events;

  const events = await db.query.events.findMany({
    where: (event) => {
      if (currentCategory === 'recents') return undefined;
      else if (currentCategory === 'featured')
        return eq(event.isFeatured, true);
      return eq(event.category, currentCategory);
    },
    orderBy: (event) => [desc(event.startDate)],
    limit: 6,
  });

  return (
    <article
      className="relative bg-cover bg-no-repeat pb-32 pt-[72px] md:pb-40"
      id="events"
      style={{
        backgroundImage: `url('${getS3Url()}/assets/dottedarrows-1.png')`,
      }}
    >
      <Heading
        className="container"
        glyphDirection="ltr"
        heading="h2"
        href="#events"
        text={text.title}
      />
      <Image
        alt="arjuna"
        src="assets/arjuna-1.png"
        width={0}
        height={0}
        className="absolute bottom-0 left-0 opacity-80 lg:size-[28rem]"
      />
      <article className="container relative lg:flex lg:gap-16">
        <ol
          className={cn(
            'hidden lg:block',
            'sticky top-[88px]',
            'h-fit min-w-72 space-y-4'
          )}
        >
          {getKeys(text.categories).map((category, index) => (
            <li key={index}>
              <Link
                href={{ query: { eventsCategory: category } }}
                scroll={false}
              >
                <Button
                  className={cn(
                    'w-full flex-auto rounded-xl text-center font-serif text-shade-light',
                    'border border-primary-700 p-6 text-2xl drop-shadow-2xl',
                    'bg-neutral-50 text-primary-700',
                    'hover:bg-primary-700 hover:text-shade-light',
                    category === currentCategory
                      ? 'bg-primary-700 text-shade-light'
                      : 'bg-opacity-60'
                  )}
                >
                  {text.categories[category]}
                </Button>
              </Link>
            </li>
          ))}
        </ol>
        <section className="my-4 flex justify-between drop-shadow-2xl lg:hidden">
          <Select defaultValue={text.categories.featured}>
            <SelectTrigger className="w-[70%] px-4 py-5 text-shade-light">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {getKeys(text.categories).map((category, index) => (
                <SelectItem key={index} value={text.categories[category]}>
                  {text.categories[category]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <BouncyArrowButton
            buttonProps={{
              className: 'text-base md:text-lg mx-auto',
              variant: 'link',
            }}
            linkProps={{ href: `/${locale}/events` }}
            text={text.viewAll}
          />
        </section>

        <section className="flex flex-col gap-4">
          <BouncyArrowButton
            buttonProps={{
              className:
                'ml-auto text-lg lg:inline-flex items-center gap-1 hidden',
              variant: 'link',
            }}
            linkProps={{ href: `/${locale}/events` }}
            text={text.viewAll}
          />
          <ol className="z-10 grid grid-cols-1 grid-rows-6 gap-6 lg:grid-cols-5 lg:grid-rows-3">
            {events.map(({ title, content, startDate }, index) => (
              <li
                key={index}
                className={cn(
                  index % 3 === 0 || index === 4
                    ? 'lg:col-span-3'
                    : 'lg:col-span-2',
                  'h-[448px] list-none'
                )}
              >
                <Card
                  className={cn('flex h-full flex-col border-0 bg-shade-light')}
                >
                  <Image
                    alt={title}
                    className="h-64 w-full rounded-t-md object-cover"
                    height={0}
                    src={`${getS3Url()}/events/${startDate.slice(0, 4)}/${startDate.slice(5, 7)}/${title}/image01.jpg`}
                    width={0}
                  />
                  <CardContent className="relative pt-3">
                    <time className="absolute -top-10 right-8 flex h-20 w-16 flex-col items-center justify-center bg-primary-500 bg-opacity-90 text-shade-light">
                      <span className="font-serif text-2xl">
                        {new Intl.DateTimeFormat('en-GB', {
                          day: '2-digit',
                        }).format(new Date(startDate))}
                      </span>
                      <span className="font-serif text-xl">
                        {new Intl.DateTimeFormat('en-GB', { month: 'short' })
                          .format(new Date(startDate))
                          .substring(0, 3)
                          .toUpperCase()}
                      </span>
                    </time>
                    <CardTitle className="mr-20 lg:text-2xl">{title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {content}
                    </CardDescription>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </article>
  );
}
