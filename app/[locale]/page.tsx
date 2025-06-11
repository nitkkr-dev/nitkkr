import Image from 'next/image';
import { BsCalendar3, BsClockFill } from 'react-icons/bs';
import {
  FaFacebook,
  FaGraduationCap,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';

import Notifications from '~/app/notifications';
import { Button } from '~/components/buttons';
import {
  AutoplayCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/carousels';
import Heading from '~/components/heading';
import MessageCard from '~/components/message-card';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { type events, type notifications } from '~/server/db';

import Events from './events';

export default async function Home({
  params: { locale },
  searchParams: {
    notificationCategory = 'academic',
    eventsCategory = 'featured',
  },
}: {
  params: { locale: string };
  searchParams: {
    notificationCategory?: (typeof notifications.category.enumValues)[number];
    eventsCategory?:
      | (typeof events.category.enumValues)[number]
      | 'recents'
      | 'featured';
  };
}) {
  const text = (await getTranslations(locale)).Main;

  return (
    <>
      <style>
        {`.header-sticky-ness {
          position: fixed;
        }`}
      </style>

      <AutoplayCarousel autoplayOptions={{ delay: 7000 }}>
        <CarouselContent>
          {text.slideshow.map(({ image, title, subtitle }, index) => (
            <CarouselItem key={index} className="relative max-h-screen">
              <figure className="relative h-full">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-800/80"></div>
                <article className="absolute inset-x-0 top-[35%] mx-auto text-center drop-shadow-md">
                  <h4 className="text-shade-light">{text.title.secondary}</h4>
                  <h1 className="text-lg text-shade-light md:text-4xl lg:text-6xl">
                    {text.title.primary}
                  </h1>
                </article>

                <Image
                  alt={`slide ${index + 1}`}
                  className="h-full w-full object-cover"
                  height={1080}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  width={1920}
                  src={image}
                />

                {title && (
                  <figcaption className="absolute inset-x-0 bottom-0 justify-start bg-gradient-to-b from-transparent to-neutral-800/80 pb-8 lg:block">
                    <article className="container max-w-[90%]">
                      <h4 className="pl-2 text-sm text-neutral-100 md:text-2xl">
                        {title}
                      </h4>
                      <p className="line-clamp-1 pl-2 text-xs text-neutral-100 md:text-lg">
                        {subtitle}
                      </p>
                    </article>
                  </figcaption>
                )}
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>

        <section className="container absolute inset-0 top-[50%] flex h-0 justify-between">
          <CarouselPrevious className="static text-neutral-100 drop-shadow-2xl" />
          <CarouselNext className="static text-neutral-100 drop-shadow-2xl" />
        </section>

        <section className="container absolute inset-x-0 bottom-0 hidden h-0 justify-end lg:flex">
          <section className="absolute bottom-0 flex flex-col space-y-4 pb-8">
            {[
              {
                href: 'https://www.facebook.com/nitkurukshetraofficialpage',
                icon: FaFacebook,
              },
              {
                href: 'https://www.instagram.com/nitkurukshetra',
                icon: FaInstagram,
              },
              {
                href: 'https://twitter.com/NITKURUKSHETRA',
                icon: FaXTwitter,
              },
              {
                href: 'https://www.linkedin.com/school/national-institute-of-technology-kurukshetra-haryana',
                icon: FaLinkedinIn,
              },
            ].map(({ href, icon: Icon }, index) => (
              <a href={href} key={index} target="_blank">
                <Button
                  className="size-16 rounded-full border border-shade-light text-neutral-900 backdrop-blur-md hover:bg-shade-light/20"
                  variant="icon"
                >
                  <Icon className="size-5 text-shade-light lg:size-8" />
                </Button>
              </a>
            ))}
          </section>
        </section>
      </AutoplayCarousel>

      <Notifications category={notificationCategory} locale={locale} />
      <Events category={eventsCategory} locale={locale} />

      <section className="container mb-32 mt-10" id="directors-corner">
        <Heading
          glyphDirection="rtl"
          heading="h2"
          href="#directors-corner"
          text={text.director.title}
        />
        <MessageCard
          image="assets/director.jpeg"
          locale={locale}
          name={text.director.name}
          quote={text.director.quote[0]}
          quoteBelow={text.director.quote[1]}
          readMore={{
            text: text.director.more,
            href: `/director-message`,
          }}
        />
      </section>

      <section className="container mb-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: text.quickLinks.results,
              href: 'https://nitkkr.ac.in/result-notification/',
              icon: FaGraduationCap,
            },
            {
              label: text.quickLinks.academicCalendar,
              href: 'https://nitkkr.ac.in/academic-calender/',
              icon: BsCalendar3,
            },
            {
              label: text.quickLinks.examDateSheet,
              href: 'https://nitkkr.ac.in/exam-date-sheet/',
              icon: MdDateRange,
            },
            {
              label: text.quickLinks.timeTable,
              href: 'https://nitkkr.ac.in/institute-time-table/',
              icon: BsClockFill,
            },
          ].map(({ label, href, icon: Icon }, index) => (
            <Button
              key={index}
              asChild
              className={cn(
                'flex flex-col',
                'gap-2 md:gap-3 lg:gap-4',
                'h-40 md:h-48'
              )}
              variant="secondary"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="size-12" />
                <p className="font-serif font-semibold sm:text-lg md:text-xl">
                  {label}
                </p>
              </a>
            </Button>
          ))}
        </div>
      </section>
    </>
  );
}
