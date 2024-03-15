import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import Heading from '~/components/heading';
import { ScrollArea } from '~/components/scroll-area';
import { getTranslations } from '~/i18n/translations';
import { cn, getKeys } from '~/lib/utils';

export default async function Notifications({
  category: currentCategory,
  locale,
}: {
  category: 'academic' | 'tenders' | 'workshops' | 'recruitement';
  locale: string;
}) {
  const text = (await getTranslations(locale)).Notifications;

  const notifications = [
    ...[...Array<number>(16)].map((_, index) => {
      return {
        id: index,
        title:
          'Information regarding specialization for the post of Technical Assistant (Ref.:Advt.No.03/2023 No.129)',
        content: '',
        category: 'academic',
      };
    }),
    ...[...Array<number>(4)].map((_, index) => {
      return {
        id: index,
        title:
          'Information regarding specialization for the post of Technical Assistant (Ref.:Advt.No.03/2023 No.129)',
        content: '',
        category: 'tenders',
      };
    }),
  ];

  return (
    <article
      className="bg-notifications bg-cover bg-no-repeat pb-32 pt-[72px] md:pb-40"
      id="notifications"
    >
      <Heading className="container" glyphDirection="rtl" href="#notifications">
        <h2 className="my-auto w-fit">{text.title}</h2>
      </Heading>

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
                    'flex-auto rounded-xl py-2 text-center font-serif text-neutral-50',
                    'lg:button lg:border lg:p-8 lg:text-2xl lg:drop-shadow-2xl',
                    category === currentCategory
                      ? 'bg-primary-300 lg:bg-primary-700 lg:text-neutral-50'
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
            'lg:px-6 lg:pt-6 xl:px-8 xl:pt-8'
          )}
        >
          <ScrollArea
            type="always"
            className={cn(
              'h-[90%] md:h-[91%] lg:h-[87%] xl:h-[85%]',
              'px-1 sm:px-2 md:px-3 lg:pl-0 lg:pr-4 xl:pr-6'
            )}
          >
            <ol>
              {notifications
                .filter(({ category }) => category == currentCategory)
                .map(({ id, title }, index) => (
                  <li key={index}>
                    <Link
                      className={cn(
                        'inline-flex max-w-full',
                        'my-2 sm:my-4 xl:my-5'
                      )}
                      href={`/${locale}/noticeboard/${id}`}
                    >
                      <MdOutlineKeyboardArrowRight className="my-auto size-4 text-primary-700 lg:size-6" />
                      <p className="truncate">{title}</p>
                    </Link>
                    <hr className="opacity-20" />
                  </li>
                ))}
            </ol>
          </ScrollArea>

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
