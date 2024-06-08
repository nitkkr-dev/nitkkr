import Link from 'next/link';
import { Suspense } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { FaMagnifyingGlass, FaPaperclip, FaSchool } from 'react-icons/fa6';
import { IoNotifications } from 'react-icons/io5';
import { MdEmojiEvents, MdSchool } from 'react-icons/md';

import { BouncyArrowButton, Button } from '~/components/buttons';
import { Input } from '~/components/inputs';
import { LocalStorageLink } from '~/components/link';
import Loading from '~/components/loading';
import { NoResultStatus } from '~/components/status';
import { ScrollArea } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn, getKeys } from '~/lib/utils';
import { type schema } from '~/server/typesense';
import { search } from '~/server/typesense/utils';

import SearchCard from './cards';
import { Recents } from './client-utils';

const categoryIconMapping = {
  course: MdSchool,
  department: FaSchool,
  document: FaPaperclip,
  event: MdEmojiEvents,
  notification: IoNotifications,
  person: BsPersonFill,
};

export default async function Search({
  currentCategory,
  locale,
  query,
}: {
  currentCategory: keyof typeof schema | 'all';
  locale: string;
  query?: string;
}) {
  const text = (await getTranslations(locale)).Search;

  return (
    <search className="flex max-h-full flex-col gap-4">
      <Input
        debounceTo="query"
        id="search"
        inputClassName="border-primary-700 focus-visible:ring-primary-700"
        placeholder={text.placeholder}
        type="search"
      />
      <article
        className={cn(
          'flex grow flex-col overflow-auto rounded-lg',
          'border border-primary-700 bg-background',
          'p-4 sm:p-8 md:p-12'
        )}
      >
        {query ? (
          <>
            <nav className="mb-5">
              <ul className="flex w-full snap-x space-x-2 overflow-auto sm:space-x-3">
                {getKeys(text.categories).map((category, index) => (
                  <li key={index} className="snap-start">
                    <Button
                      active={category === currentCategory}
                      asChild
                      className={cn(
                        'button inline-block whitespace-nowrap rounded border px-2 py-1 text-center font-semibold',
                        'sm:rounded-md sm:p-2'
                      )}
                      variant="secondary"
                    >
                      <Link
                        href={{
                          query: { query, category: category },
                        }}
                        prefetch
                        replace
                      >
                        {text.categories[category]}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>

            <ScrollArea
              className="h-svh w-full overflow-y-auto pr-4 sm:pr-6 lg:pr-8"
              type="always"
            >
              <Suspense fallback={<Loading />}>
                <ResultsView
                  categories={text.categories}
                  locale={locale}
                  query={query}
                  currentCategory={currentCategory}
                  viewAll={text.viewAll}
                />
              </Suspense>
            </ScrollArea>
          </>
        ) : (
          <DefaultView locale={locale} />
        )}
      </article>
    </search>
  );
}

export const MiniSearchLink = ({
  item,
}: {
  item: {
    title: string;
    href: string;
    category: string;
  };
}) => {
  const Icon =
    categoryIconMapping[item.category as keyof typeof categoryIconMapping] ??
    FaMagnifyingGlass;

  return (
    <LocalStorageLink
      className={cn(
        'inline-flex items-center font-medium lg:text-lg',
        'gap-2 md:gap-3 lg:gap-4'
      )}
      href={item.href}
      newItem={item}
      options={{ filter: true, unshift: true }}
      replace
      storageKey="recentSearches"
    >
      <Icon className={cn('fill-primary-500', 'size-2 md:size-3 lg:size-4')} />
      {item.title}
    </LocalStorageLink>
  );
};

const DefaultView = async ({ locale }: { locale: string }) => {
  const text = (await getTranslations(locale)).Search.default;

  const mostSearched = {
    title: text.mostSearched,
    links: [
      { title: 'Departments', href: 'departments', category: 'department' },
      {
        title: 'Dr. Vikram Singh',
        href: 'faculty/0',
        category: 'person',
      },
    ],
  };
  const studentLinks = {
    title: text.studentLinks.title,
    links: [
      {
        title: text.studentLinks.clubs,
        href: 'student-activities/clubs',
        category: 'event',
      },
      {
        title: text.studentLinks.courses,
        href: 'academics/courses',
        category: 'course',
      },
      {
        title: text.studentLinks.departments,
        href: 'departments',
        category: 'department',
      },
      {
        title: text.studentLinks.notifications,
        href: 'noticeboard',
        category: 'notification',
      },
      {
        title: text.studentLinks.results,
        href: 'noticeboard?category=results',
        category: 'notification',
      },
    ],
  };
  const facultyLinks = {
    title: text.facultyLinks.title,
    links: [
      {
        title: text.facultyLinks.notifications,
        href: 'noticeboard',
        category: 'notification',
      },
      {
        title: text.facultyLinks.profile,
        href: 'profile',
        category: 'person',
      },
    ],
  };

  return (
    <>
      <Recents title={text.recents} clearButton={text.clearRecents} />
      <section className="flex flex-col justify-between sm:flex-row sm:gap-5 lg:gap-10">
        {[mostSearched, studentLinks, facultyLinks].map(
          ({ title, links }, index) => (
            <nav key={index}>
              <h5 className="mb-2 text-primary-700 lg:mb-3 xl:mb-4">{title}</h5>
              <ol>
                {links.map(({ title, href, category }, index) => (
                  <li className="mb-2" key={index}>
                    <MiniSearchLink
                      item={{
                        title,
                        href: `/${locale}/${href}`,
                        category,
                      }}
                    />
                  </li>
                ))}
              </ol>
            </nav>
          )
        )}
      </section>
    </>
  );
};

const ResultsView = async ({
  categories,
  currentCategory,
  locale,
  query,
  viewAll,
}: {
  categories: Record<keyof typeof schema | 'all', string>;
  currentCategory: keyof typeof schema | 'all';
  locale: string;
  query: string;
  viewAll: string;
}) => {
  const results = await search(query);

  if (
    getKeys(results).filter((collection) => results[collection].length !== 0)
      .length === 0
  ) {
    return <NoResultStatus locale={locale} />;
  }

  return (
    <ol className="space-y-5">
      {getKeys(results)
        .filter(
          (category) =>
            (currentCategory === 'all' && results[category].length !== 0) ||
            currentCategory === category
        )
        .map((category, index) => (
          <li key={index}>
            <header className="flex justify-between text-primary-700">
              <h4>{categories[category]}</h4>
              {currentCategory === 'all' && (
                <BouncyArrowButton
                  arrowClassName="md:size-2 lg:size-3"
                  buttonProps={{
                    className: cn(
                      'inline-flex h-fit gap-1 md:gap-2',
                      'text-xs font-semibold sm:text-base md:text-sm',
                      'px-2 py-1 md:px-4 md:py-2'
                    ),
                    variant: 'ghost',
                  }}
                  linkProps={{
                    href: { query: { query, category } },
                    replace: true,
                  }}
                  text={viewAll}
                />
              )}
            </header>
            <ol className="space-y-3">
              {results[category].length === 0 ? (
                <NoResultStatus locale={locale} />
              ) : (
                results[category].map(({ document }, index) => (
                  <li key={index}>
                    <SearchCard document={document} locale={locale} />
                  </li>
                ))
              )}
            </ol>
          </li>
        ))}
    </ol>
  );
};
