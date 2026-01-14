import Link from 'next/link';

import Heading from '~/components/heading';
import NotificationsPanel from '~/components/notifications-panel';
import { getTranslations } from '~/i18n/translations';
import { cn, getKeys } from '~/lib/utils';
import type { notifications as notificationsSchema } from '~/server/db';
import { getS3Url } from '~/server/s3';

export default async function Notifications({
  category: currentCategory,
  locale,
}: {
  category: (typeof notificationsSchema.category.enumValues)[number];
  locale: string;
}) {
  const text = (await getTranslations(locale)).Notifications;

  return (
    <article
      className="bg-cover bg-no-repeat pb-32 pt-[72px] md:pb-40"
      id="notifications"
      style={{
        backgroundImage: `linear-gradient(rgba(249, 245, 235, 0.6) 0%, rgba(249, 245, 235, 0.8) 85%, rgba(249, 245, 235, 1) 100%), url('${getS3Url()}/assets/mahabharat.jpeg')`,
      }}
    >
      <Heading
        className="container"
        glyphDirection="rtl"
        heading="h2"
        href="#notifications"
        text={text.title}
      />

      <article className="container h-[384px] rounded-xl md:h-[512px] lg:flex lg:justify-between">
        <ol
          className={cn(
            'flex rounded-t-xl bg-primary-700 p-1 sm:p-2',
            'lg:w-[30%] lg:flex-col lg:justify-between lg:bg-transparent lg:p-0'
          )}
        >
          {getKeys(text.categories).map((category, index) => (
            <li className="flex-auto lg:flex-initial" key={index}>
              <Link
                className="flex"
                href={{ query: { notificationCategory: category } }}
                scroll={false}
              >
                <button
                  className={cn(
                    'flex-auto rounded-xl py-2 text-center font-serif text-shade-light',
                    'lg:border lg:border-primary-700 lg:p-8 lg:text-2xl lg:drop-shadow-2xl',
                    'lg:bg-neutral-50 lg:text-primary-700',
                    'lg:hover:bg-primary-700 lg:hover:text-shade-light',
                    category === currentCategory
                      ? 'bg-primary-300 lg:bg-primary-700 lg:text-shade-light'
                      : 'lg:bg-opacity-60'
                  )}
                >
                  {text.categories[category]}
                </button>
              </Link>
            </li>
          ))}
        </ol>

        <NotificationsPanel
          locale={locale}
          category={currentCategory}
          viewAllHref={`/${locale}/notifications/${currentCategory}`}
          className="rounded-none lg:w-[65%] lg:rounded-xl"
        />
      </article>
    </article>
  );
}