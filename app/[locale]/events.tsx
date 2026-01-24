import { arrayOverlaps, desc, eq } from 'drizzle-orm';
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
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { db, type eventCategoryEnum } from '~/server/db';
import { getS3Url } from '~/server/s3';

import { AnimateEventsGrid } from './(animations)';

type Cat = (typeof eventCategoryEnum.enumValues)[number];

// Categories to display on the landing page (featured is special - not a real category)
const DISPLAY_CATEGORIES: (Cat | 'featured')[] = [
  'featured',
  'cultural',
  'technical',
  'campus-highlights',
  'academic',
];

export default async function Events({
  category: currentCategory,
  locale,
}: {
  category: Cat | 'featured';
  locale: string;
}) {
  const text = (await getTranslations(locale)).Events;

  const events = await db.query.events.findMany({
    where: (event) => {
      if (currentCategory === 'featured') {
        return eq(event.isFeatured, true);
      }
      // Check if the event's categories array contains the selected category
      return arrayOverlaps(event.categories, [currentCategory]);
    },
    orderBy: (event) => [desc(event.startDate)],
    limit: 6,
  });
  // console.log(events);

  return (
    <article
      className="relative bg-cover bg-no-repeat pb-20 pt-5 md:pb-24 md:pt-16"
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
          {DISPLAY_CATEGORIES.map((category, index) => (
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
        <section className="mb-2 mt-4 flex items-center gap-3 lg:hidden">
          <Select defaultValue={text.categories.featured}>
            <SelectTrigger className="w-[65%] px-4 py-5 text-shade-light">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {DISPLAY_CATEGORIES.map((category, index) => (
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

        <section className="flex flex-col gap-2">
          <BouncyArrowButton
            buttonProps={{
              className:
                'ml-auto mb-2 text-lg lg:inline-flex items-center gap-1 hidden',
              variant: 'link',
            }}
            linkProps={{ href: `/${locale}/events` }}
            text={text.viewAll}
          />
          <AnimateEventsGrid
            events={events.map((e) => ({
              id: e.id,
              title: e.title,
              description: e.description,
              categories: e.categories,
              startDate: e.startDate,
              endDate: e.endDate,
              time: e.time,
              location: e.location,
              locationUrl: e.locationUrl,
              images: e.images,
              documents: e.documents,
            }))}
            locale={locale}
            s3Url={getS3Url()}
          />
        </section>
      </article>
    </article>
  );
}
