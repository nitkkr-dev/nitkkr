import Link from 'next/link';
import { Suspense } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import Heading from '~/components/heading';
import NotificationButtons from '~/components/notification-buttons';
import { ScrollArea } from '~/components/scroll-area';
import MyLoader from '~/components/spinner';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

const NotificationContent = async ({
  currentCategory,
  locale,
}: {
  currentCategory: 'academic' | 'tenders' | 'workshops' | 'recruitement';
  locale: string;
}) => {
  const notifications = [
    ...[...Array<number>(16)].map(() => {
      return {
        label:
          'Information regarding specialization for the post of Technical Assistant (Ref.:Advt.No.03/2023 No.129)',
        value: '/',
        category: 'academic',
      };
    }),
    ...[...Array<number>(4)].map(() => {
      return {
        label:
          'Information regarding specialization for the post of Technical Assistant (Ref.:Advt.No.03/2023 No.129)',
        value: '/',
        category: 'tenders',
      };
    }),
  ];

  return (
    <ol>
      {notifications
        .filter(({ category }) => category == currentCategory)
        .map(({ label, value }, index) => (
          <li key={index}>
            <Link
              className={cn('inline-flex max-w-full', 'my-2 sm:my-4 xl:my-5')}
              href={`/${locale}/${value}`}
            >
              <MdOutlineKeyboardArrowRight className="my-auto size-4 text-primary-700 lg:size-6" />
              <p className="mb-0 truncate lg:text-lg">{label}</p>
            </Link>
            <hr className="opacity-20" />
          </li>
        ))}
    </ol>
  );
};

export default async function Notifications({
  category: currentCategory,
  locale,
}: {
  category: 'academic' | 'tenders' | 'workshops' | 'recruitement';
  locale: string;
}) {
  const text = (await getTranslations(locale)).Notifications;

  return (
    <article
      className="bg-notifications bg-cover bg-no-repeat pb-32 pt-[72px] md:pb-40"
      id="notifications"
    >
      <Heading className="container" glyphDirection="rtl" href="#notifications">
        <h2 className="my-auto w-fit">{text.title}</h2>
      </Heading>

      <article className="container h-[384px] rounded-xl md:h-[512px] lg:flex lg:justify-between">
        <NotificationButtons category={currentCategory} text={text} />

        <section
          className={cn(
            `h-full rounded-b-xl bg-background/[0.6]`,
            'lg:w-[65%] lg:rounded-t-xl lg:shadow-[0px_8px_0px_#e13f32_inset,_-12px_22px_60px_rgba(0,_43,_91,_0.15)] lg:drop-shadow-2xl',
            'lg:px-6 lg:pt-6 xl:px-8 xl:pt-8'
          )}
        >
          <Suspense
            key={currentCategory}
            fallback={[1, 2, 3, 4, 5, 6].map((i) => (
              <MyLoader key={i} />
            ))}
          >
            <ScrollArea
              type="always"
              className={cn(
                'h-[90%] md:h-[91%] lg:h-[87%] xl:h-[85%]',
                'px-1 sm:px-2 md:px-3 lg:pl-0 lg:pr-4 xl:pr-6'
              )}
            >
              <NotificationContent
                currentCategory={currentCategory}
                locale={locale}
              />
            </ScrollArea>
          </Suspense>

          <footer className="mt-auto inline-flex h-[10%] w-full justify-center">
            <Link href={`/${locale}/noticeboard`}>
              <button className="p-2 font-bold text-primary-700 lg:p-3 lg:text-lg xl:p-4">
                {text.viewAll}
              </button>
            </Link>
          </footer>
        </section>
      </article>
    </article>
  );
}
