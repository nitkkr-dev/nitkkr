import Notifications, { type NotificationCategory } from '~/app/notifications';
import { getTranslations } from '~/i18n/translations';
import { type eventCategoryEnum } from '~/server/db';

import { AnimatePageContent } from './(animations)';
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

      <AnimatePageContent
        locale={locale}
        text={{
          director: text.director,
          buttons: text.buttons,
        }}
        notificationsSection={
          <Notifications category={notificationCategory} locale={locale} />
        }
        eventsSection={<Events category={eventsCategory} locale={locale} />}
      />
    </>
  );
}
