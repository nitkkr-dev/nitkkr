// Revalidate every 5 minutes (has DB calls)
export const revalidate = 300;

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import { BouncyArrowButton } from '~/components/buttons';
import { GalleryCarousel } from '~/components/carousels';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import Loading from '~/components/loading';
import { Card, CardDescription, CardTitle } from '~/components/ui';
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
        src="student-activities/header.jpg"
      />

      <Heading
        className="container"
        glyphDirection="ltr"
        heading="h3"
        href="#clubs"
        text={text.sections.clubs.title}
      />

      <section className="container mb-6 text-center">
        <Suspense fallback={<Loading />}>
          <ClubsCarousel locale={locale} />
        </Suspense>
        <BouncyArrowButton
          buttonProps={{
            className: cn(
              'px-2 py-1 md:px-4 md:py-2',
              'mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8',
              'inline-flex items-center gap-1 md:gap-2',
              'rounded-md border font-bold text-primary-700'
            ),
            variant: 'outline',
          }}
          linkProps={{ href: `/${locale}/student-activities/clubs` }}
          text={text.sections.clubs.more}
        />
      </section>
    </>
  );
}

const ClubsCarousel = async ({ locale }: { locale: string }) => {
  const clubs = await db.query.clubs.findMany({
    columns: { alias: true, name: true, urlName: true },
  });

  // console.log(clubs);

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
                width={0}
                src={`assets/nitlogo.png`}
              />
              {alias ?? name}
            </CardTitle>

            <CardDescription className="flex grow items-center justify-center overflow-hidden rounded-md">
              <Image
                alt={alias ?? name}
                className="h-full w-full object-contain"
                height={0}
                width={0}
                src={`student-activities/clubs/${urlName}/logo.jpg`}
              />
            </CardDescription>
          </Card>
        </Link>
      ))}
    </GalleryCarousel>
  );
};
