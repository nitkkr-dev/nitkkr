// Revalidate every 5 minutes (has DB calls)
export const revalidate = 300;

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import { BouncyArrowButton } from '~/components/buttons';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import StudentGroup from '~/components/student-group';
import Loading from '~/components/loading';
import { Card, CardDescription, CardTitle } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { db } from '~/server/db';
import EventSection from '~/components/events/event-section';

export default async function StudentActivities({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).StudentActivities;

  const rawEvents = await db.query.eventClubs.findMany({
    with: {
      event: {
        columns: {
          id: true,
          title: true,
          categories: true,
          startDate: true,
          endDate: true,
          time: true,
          description: true,
          images: true,
          location: true,
        },
      },
    },
    limit: 3,
  });

  // Ensure endDate and time are never null
  const events = rawEvents.map(({ event }) => ({
    ...event,
    endDate: event.endDate ?? '',
    time: event.time ?? '',
    description: event.description ?? '',
    location: event.location ?? '',
  }));

  const studentCoordinators = [
    { rollNumber: '12212070' },
    { rollNumber: '12112002' },
    { rollNumber: '12112003' },
    { rollNumber: '12112004' },
  ];
  return (
    <>
      <ImageHeader
        title={text.title}
        headings={[
          { label: text.headings.clubs, href: '#clubs' },
          { label: text.headings.societies, href: '#societies' },
          { label: text.headings.events, href: '#events' },
          { label: text.headings.council, href: '#council' },
          { label: text.headings.thoughtLab, href: '#thought-lab' },
          { label: text.headings.nss, href: '#nss' },
          { label: text.headings.ncc, href: '#ncc' },
        ]}
        src="student-activities/header.jpg"
      />
      <section id="clubs">
        <Heading
          className="container"
          glyphDirection="rtl"
          heading="h3"
          href={`/${locale}/student-activities/clubs`}
          text={text.sections.clubs.title}
        />

        <section className="container mb-6 text-center">
          <Suspense fallback={<Loading />}>
            <ClubsCarousel locale={locale} />
          </Suspense>
        </section>
      </section>
      <section id="societies">
        <Heading
          className="container"
          glyphDirection="ltr"
          heading="h3"
          href={`/${locale}/student-activities/societies`}
          text={text.sections.societies.title}
        />

        <section className="container mb-6 text-center">
          <Suspense fallback={<Loading />}>
            <ClubsCarousel locale={locale} />
          </Suspense>
        </section>
      </section>

      <section id="events">
        <Heading
          className="container"
          glyphDirection="rtl"
          heading="h3"
          href={`/${locale}/student-activities/events`}
          text={text.sections.events.title}
        />
        <Suspense fallback={<Loading />}>
          <EventSection
            events={events}
            locale={locale}
            viewAllText={text.sections.events.more}
            viewAllHref={`/${locale}/student-activities/events`}
          />
        </Suspense>
      </section>

      <section className="container text-center" id="council">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#council"
          text={text.sections.council.title}
        />
        <StudentGroup studentData={studentCoordinators} />
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
          text={text.sections.council.more}
        />
      </section>
      <section className="container text-center" id="thought-lab">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href={`/${locale}/student-activities/thought-lab`}
          text={text.sections.thoughtLab.title}
        />

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left: Image with caption */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            {/* Adjust this image */}
            <Image
              src={`academics/2.jpg`}
              alt="Revised IP Policy"
              width={500}
              height={200}
              className="h-auto max-h-80 w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#000000] to-[#FAFAFA]/25"></div>

            <Link
              href={`/${locale}/student-activities/thought-lab`}
              className="absolute bottom-4 left-4 font-serif text-2xl font-semibold text-shade-light hover:underline"
              target="_blank"
            >
              <span className="uppercase"></span>{' '}
              {text.sections.thoughtLab.title} →
            </Link>
          </div>

          {/* Right: Description */}
          <p className="text-gray-800 text-justify leading-relaxed">
            {text.sections.thoughtLab.content}
          </p>
        </div>
      </section>

      <section className="container text-center" id="nss">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href={`/${locale}/student-activities/nss`}
          text={text.sections.nss.title}
        />

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left: Description */}
          <p className="text-gray-800 text-justify leading-relaxed">
            {text.sections.nss.content}
          </p>

          {/* Right: Image with caption */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={`academics/2.jpg`}
              alt="Revised IP Policy"
              width={500}
              height={200}
              className="h-auto max-h-80 w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#000000] to-[#FAFAFA]/25"></div>

            <Link
              href={`/${locale}/student-activities/nss`}
              className="absolute bottom-4 left-4 font-serif text-2xl font-semibold text-shade-light hover:underline"
              target="_blank"
            >
              <span className="uppercase"></span> {text.sections.nss.title} →
            </Link>
          </div>
        </div>
      </section>

      <section className="container text-center" id="ncc">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href={`/${locale}/student-activities/ncc`}
          text={text.sections.ncc.title}
        />

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left: Image with caption */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            {/* Adjust this image */}
            <Image
              src={`academics/2.jpg`}
              alt="Revised IP Policy"
              width={500}
              height={200}
              className="h-auto max-h-80 w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#000000] to-[#FAFAFA]/25"></div>

            <Link
              href={`/${locale}/student-activities/ncc`}
              className="absolute bottom-4 left-4 font-serif text-2xl font-semibold text-shade-light hover:underline"
              target="_blank"
            >
              <span className="uppercase"></span> {text.sections.ncc.title} →
            </Link>
          </div>

          {/* Right: Description */}
          <p className="text-gray-800 text-justify leading-relaxed">
            {text.sections.nss.content}
          </p>
        </div>
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
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
      {clubs.map(({ alias, name, urlName }, index) => (
        <Link
          className="drop-shadow hover:drop-shadow-xl"
          href={`/${locale}/student-activities/clubs/${urlName}`}
          key={index}
        >
          <Card className="mx-auto flex aspect-square size-48 flex-col p-2 sm:size-56 md:size-64">
            <CardTitle
              className={cn(
                'm-0 leading-none',
                'flex items-center justify-center gap-2 text-neutral-900',
                'text-lg sm:text-xl md:text-2xl'
              )}
            >
              <Image
                alt={alias ?? name}
                className="aspect-square size-6 rounded-md sm:size-7 md:size-8"
                src={`student-activities/clubs/${urlName}/logo.jpg`}
                width={28}
                height={28}
              />
              {alias ?? name}
            </CardTitle>

            <CardDescription
              className="
mt-0.5
      flex grow
      items-center justify-center
      overflow-hidden rounded-xl
      p-0
      leading-none "
            >
              <Image
                alt={alias ?? name}
                className="h-full w-full rounded-xl object-cover"
                src={`student-activities/clubs/${urlName}/logo.jpg`}
                height={0}
                width={0}
              />
            </CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};
