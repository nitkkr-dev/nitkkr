import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

import { GalleryCarousel } from '~/components/carousels';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import Loading from '~/components/loading';
import { Button, Card, CardDescription, CardTitle } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { db } from '~/server/db';

export default async function StudentActivities({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).StudentActivities;

  return (
    <>
      <ImageHeader
        title={text.title}
        headings={[
          { label: text.headings.clubs, href: '#clubs' },
          { label: text.headings.council, href: '#council' },
          { label: text.headings.events, href: '#events' },
          { label: text.headings.thoughtLab, href: '#thought-lab' },
          { label: text.headings.nss, href: '#nss' },
          { label: text.headings.ncc, href: '#ncc' },
        ]}
        src="assets/admin-block.png"
      />

      <Heading
        className="container"
        glyphDirection="ltr"
        heading="h3"
        id="clubs"
        text={text.sections.clubs.title}
      />

      <section className="container mb-6 text-center">
        <Suspense fallback={<Loading />}>
          <ClubsCarousel locale={locale} />
        </Suspense>
        <Button
          asChild
          className={cn(
            'px-2 py-1 md:px-4 md:py-2',
            'mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8',
            'inline-flex items-center gap-1 md:gap-2',
            'rounded-md border font-bold text-primary-700'
          )}
          variant="outline"
        >
          <Link href={`/${locale}/student-activities/clubs`}>
            {text.sections.clubs.more}
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
      </section>
    </>
  );
}

const ClubsCarousel = async ({ locale }: { locale: string }) => {
  const clubs = await db.query.clubs.findMany({
    columns: { alias: true, name: true, urlName: true },
  });

  return (
    <GalleryCarousel>
      {clubs.map(({ alias, name, urlName }, index) => (
        <Link
          className="drop-shadow hover:drop-shadow-xl"
          href={`/${locale}/student-activities/clubs/${urlName}`}
          key={index}
        >
          <Card className="mx-auto flex aspect-square size-48 flex-col p-3 sm:size-56 md:size-64">
            <CardTitle
              className={cn(
                'flex items-center justify-center gap-2 text-neutral-900',
                'text-lg sm:text-xl md:text-2xl'
              )}
            >
              <Image
                alt={alias ?? name}
                className="aspect-square size-6 rounded-md sm:size-7 md:size-8"
                height={0}
                src={`clubs/${urlName}/logo.png`}
                width={0}
              />
              {alias ?? name}
            </CardTitle>
            <CardDescription className="grow">
              <Image
                alt={alias ?? name}
                className="size-full rounded-md object-cover"
                height={0}
                src={`clubs/${urlName}/thumbnail.png`}
                width={0}
              />
            </CardDescription>
          </Card>
        </Link>
      ))}
    </GalleryCarousel>
  );
};
