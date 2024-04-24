import Link from 'next/link';
import { Suspense } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import Heading from '~/components/heading';
import Loading from '~/components/loading';
import { Button, ScrollArea } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn, getKeys, groupBy } from '~/lib/utils';
import type { notifications as notificationsSchema } from '~/server/db';
import { db } from '~/server/db';
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
        backgroundImage: `linear-gradient(rgba(249, 245, 235, 0.6) 0%, rgba(249, 245, 235, 0.8) 85%, rgba(249, 245, 235, 1) 100%), url('${getS3Url()}/assets/mahabharat.jpg')`,
      }}
    >
      <Heading
        className="container"
        glyphDirection="rtl"
        heading="h2"
        id="notifications"
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

        <section
          className={cn(
            `h-full rounded-b-xl bg-background/[0.6]`,
            'lg:w-[65%] lg:rounded-t-xl lg:shadow-[0px_8px_0px_#e13f32_inset,_-12px_22px_60px_rgba(0,_43,_91,_0.15)] lg:drop-shadow-2xl',
            'lg:px-6 lg:pt-8 xl:px-8'
          )}
        >
          <ScrollArea
            type="always"
            className={cn(
              'h-[90%] md:h-[91%] lg:h-[87%] xl:h-[85%]',
              'px-3 pt-3 md:px-5 md:pt-5 lg:pl-0 lg:pr-4 lg:pt-0 xl:pr-6'
            )}
          >
            <ol className="space-y-2 sm:space-y-4 md:space-y-6">
              <Suspense fallback={<Loading />} key={currentCategory}>
                <NotificationsList category={currentCategory} locale={locale} />
              </Suspense>
            </ol>
          </ScrollArea>

          <footer className="mt-auto inline-flex h-[10%] w-full justify-center">
            <Button
              asChild
              className="p-2 font-bold text-primary-700 lg:p-3 lg:text-lg xl:p-4"
              variant="ghost"
            >
              <Link href={`/${locale}/noticeboard`}>{text.viewAll}</Link>
            </Button>
          </footer>
        </section>
      </article>
    </article>
  );
}

const NotificationsList = async ({
  category,
  locale,
}: {
  category: (typeof notificationsSchema.category.enumValues)[number];
  locale: string;
}) => {
  const notifications = (
    await db.query.notifications.findMany({
      where: (notification, { eq }) => eq(notification.category, category),
    })
  ).map((notification) => ({
    ...notification,
    createdAt: notification.createdAt.toLocaleString(locale, {
      dateStyle: 'long',
      numberingSystem: locale === 'hi' ? 'deva' : 'roman',
    }),
  }));

  return Array.from(groupBy(notifications, 'createdAt')).map(
    ([createdAt, notifications], index) => (
      <li key={index}>
        <h5 className="text-primary-700">{createdAt as string}</h5>
        <ul className="space-y-2 py-2 sm:space-y-4 sm:py-4 md:space-y-6 md:py-6">
          {notifications.map(({ id, title }, index) => (
            <li key={index}>
              <Link
                className={cn('inline-flex max-w-full')}
                href={`/${locale}/noticeboard/${id}`}
              >
                <MdOutlineKeyboardArrowRight className="my-auto size-4 text-primary-700 lg:size-6" />
                <p className="truncate">{title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <hr className="opacity-20" />
      </li>
    )
  );
};
