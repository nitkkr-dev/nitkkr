import {
  TbBuildingSkyscraper,
  TbContract,
  TbRocket,
  TbSchool,
} from 'react-icons/tb';

import Notifications, { type NotificationCategory } from '~/app/notifications';
import { getTranslations } from '~/i18n/translations';
import { type eventCategoryEnum } from '~/server/db';
import ButtonGroup from '~/components/button-group';
import Heading from '~/components/heading';
import MessageCard from '~/components/message-card';

import Events from './events';
import HeroCarousel from './hero-carousel';

export default async function Home({
  params: { locale },
  searchParams: {
    notificationCategory = 'academic',
    eventsCategory = 'featured',
  },
}: {
  params: { locale: string };
  searchParams: {
    notificationCategory?: NotificationCategory;
    eventsCategory?: (typeof eventCategoryEnum.enumValues)[number] | 'featured';
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

      <HeroCarousel slideshow={text.slideshow} title={text.title} />

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
            href: `/institute/administration/director`,
          }}
        />
      </section>

      <ButtonGroup
        buttonArray={[
          {
            label: text.buttons.hostels,
            href: `/${locale}/institute/hostels`,
            icon: TbBuildingSkyscraper,
          },
          {
            label: text.buttons.racs,
            href: `/${locale}/RACS`,
            icon: TbRocket,
          },
          {
            label: text.buttons.scoe,
            href: `/${locale}/scoe`,
            icon: TbSchool,
          },
          {
            label: text.buttons.tenders,
            href: `/${locale}/notifications/?category=tender`,
            icon: TbContract,
          },
        ]}
      />
    </>
  );
}
