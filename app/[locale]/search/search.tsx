import Link from 'next/link';
import { Suspense } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { FaMagnifyingGlass, FaPaperclip, FaSchool } from 'react-icons/fa6';
import { IoNotifications } from 'react-icons/io5';
import { MdEmojiEvents, MdSchool } from 'react-icons/md';

import { BouncyArrowButton, Button } from '~/components/buttons';
import { Input } from '~/components/inputs';
import { LocalStorageLink } from '~/components/link';
import { ScrollArea } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn, getKeys } from '~/lib/utils';

import { Recents } from './client-utils';
import SearchCard, { type CardContent, type SearchResult } from './search-card';

const categoryIconMapping = {
  course: MdSchool,
  department: FaSchool,
  document: FaPaperclip,
  event: MdEmojiEvents,
  notification: IoNotifications,
  person: BsPersonFill,
};

export type searchCategory =
  | 'allResults'
  | 'webPages'
  | 'people'
  | 'documents'
  | 'events'
  | 'news'
  | 'courses'
  | 'clubs'
  | 'positions';

export default async function Search({
  query,
  selectedCategory,
  locale,
}: {
  query?: string;
  selectedCategory: searchCategory;
  locale: string;
}) {
  const text = (await getTranslations(locale)).Search;
  const currentCategory = getKeys(text.categories)
    .slice(1)
    .includes(selectedCategory)
    ? selectedCategory
    : 'allResults';

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
                      asChild
                      className={cn(
                        'button inline-block whitespace-nowrap rounded border px-2 py-1 text-center font-semibold',
                        'sm:rounded-md sm:p-2',
                        category == currentCategory
                          ? 'bg-primary-700 text-shade-light'
                          : 'bg-opacity-60'
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
              <Suspense fallback={<h5>loader</h5>}>
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
  locale,
  query,
  currentCategory,
  viewAll,
}: {
  categories: Record<searchCategory, string>;
  locale: string;
  query?: string;
  currentCategory: searchCategory;
  viewAll: string;
}) => {
  const results: SearchResult = {
    webPages: [
      {
        heading: 'NIT Departments',
        content:
          '... The NITKKR Departments are the mission of the colleges to provide a segregated and conclusive study program to all indivisduals seeking admission in the various fields of the college ...',
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
      },
      {
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
        heading: 'NIT Departments',
        content:
          '... The NITKKR Departments are the mission of the colleges to provide a segregated and conclusive study program to all indivisduals seeking admission in the various fields of the college ...',
      },
      {
        heading: 'NIT Departments',
        content:
          '... The NITKKR Departments are the mission of the colleges to provide a segregated and conclusive study program to all indivisduals seeking admission in the various fields of the college ...',
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
      },
    ],
    people: [
      {
        image: 'dummy-person.jpg',
        name: 'Dr. Saket Raman',
        designation: 'Assistant Professor',
        email: 'saketraman123@gmail.com',
        phone: '+91-1744-233482 (off-Direct no)',
        address: 'MBA 205, District Attorney Office, NIT Kurukshetra',
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
      },
      {
        image: 'dummy-person.jpg',
        name: 'Dr. Saket Raman',
        designation: 'Assistant Professor',
        email: 'saketraman123@gmail.com',
        phone: '+91-1744-233482 (off-Direct no)',
        address: 'MBA 205, District Attorney Office, NIT Kurukshetra',
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
      },
      {
        image: 'dummy-person.jpg',
        name: 'Dr. Saket Raman',
        designation: 'Assistant Professor',
        email: 'saketraman123@gmail.com',
        phone: '+91-1744-233482 (off-Direct no)',
        address: 'MBA 205, District Attorney Office, NIT Kurukshetra',
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
      },
    ],
    documents: [
      {
        content:
          'Student Fee Receipt 2023 - 24: Special bill with mess details included along with each item of food including the sauce that the students use to eat samosa ...',
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
      },
    ],
    events: [
      {
        image: 'dummy-event.jpg',
        heading: 'NITKKR Annual Fest 2023',
        subHeading: 'The biggest event of the year is here',
        location: 'NIT Kurukshetra',
        date: '12th - 15th March 2023',
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
      },
    ],
    news: [
      {
        heading: 'Ceremony of NIT Departments',
        content:
          'The NITKKR Departments are the mission of the colleges to provide a segregated and conclusive study program to all indivisduals seeking admission in the various fields of the college ...',
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
      },
      {
        heading:
          'NITTKR Launches first robots to compete with Boston robotics!',
        image: 'dummy-news.jpg',
        content:
          'The NITKKR Robotics Student Fellowship (NITKKR AUTOBOTS) program offers graduate students the opportunity to research alongside experts on the specific topic of robotics ...The NITKKR Robotics Student Fellowship (NITKKR AUTOBOTS) program offers graduate students the opportunity to research alongside experts on the specific topic of robotics ...',
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
      },
    ],
    courses: [
      {
        heading: 'CSPC20',
        subHeading: 'Operating System',
        programme: "Bachelor's of Technology",
        programmeDuration: '(B. Tech. - 4 years)',
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
      },
      {
        heading: 'CSPC62',
        subHeading: 'Advanced Data Structures and Algorithms',
        programme: "Bachelor's of Technology",
        programmeDuration: '(B. Tech. - 4 years)',
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
      },
    ],
    clubs: [
      {
        image: 'dummy-club.png',
        heading: 'SPIC MACAY',
        subHeading: 'Musical and Cultural Club of NIT Kurukshetra',
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
        delegation: [
          {
            post: 'Secretary',
            name: 'Saket Raman',
          },
          {
            post: 'Assistant Director',
            name: 'Sahitya Gupta',
          },
          {
            post: 'Vice President',
            name: 'Aditya Karna',
          },
          {
            post: 'Assistant Director',
            name: 'Sahitya Gupta',
          },
        ],
      },
    ],
    positions: [
      {
        position: 'Head of Operations',
        organisation: 'ISAC Project Team',
        names: ['Mr. Priyanshu Bindal', 'Dr. Saket Raman'],
        email: 'saketraman123@gmail.com',
        phone: '+91-1744-233482 (off-Direct no)',
        address: 'MBA 205, District Attorney Office, NIT Kurukshetra',
        label: 'Dr. Vikram Singh',
        value: 'faculty/0',
      },
    ],
  };

  return currentCategory !== 'allResults' ? (
    <>
      <header className="flex justify-between text-primary-700">
        <h4>{categories[currentCategory]}</h4>
      </header>
      <ul className="mb-5 space-y-3">
        {results[currentCategory].map(({ label, value, ...result }, index) => (
          <li key={index}>
            <LocalStorageLink
              href={`/${locale}/${value}`}
              newItem={{
                title: label,
                href: `/${locale}/${value}`,
                category: currentCategory,
              }}
              options={{ filter: true, unshift: true }}
              replace
              storageKey="recentSearches"
            >
              <SearchCard
                cardContent={
                  {
                    category: currentCategory,
                    ...result,
                  } as CardContent
                }
              />
            </LocalStorageLink>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <ol className="space-y-5">
      {getKeys(categories)
        .slice(1)
        .map((category, index) => (
          <li key={index}>
            <header className="flex justify-between text-primary-700">
              <h4>{categories[category]}</h4>
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
            </header>
            <ul className="space-y-3">
              {results[category as keyof SearchResult].map(
                ({ value, label, ...result }, i) => (
                  <li key={i}>
                    <LocalStorageLink
                      href={`/${locale}/${value}`}
                      newItem={{
                        title: label,
                        href: `/${locale}/${value}`,
                        category: category,
                      }}
                      options={{ filter: true, unshift: true }}
                      replace
                      storageKey="recentSearches"
                    >
                      <SearchCard
                        cardContent={{ category, ...result } as CardContent}
                      />
                    </LocalStorageLink>
                  </li>
                )
              )}
            </ul>
          </li>
        ))}
    </ol>
  );
};
