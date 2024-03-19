import Link from 'next/link';
import { Suspense } from 'react';
import { FaArrowUp, FaMagnifyingGlass } from 'react-icons/fa6';

import { LocalStorageLink } from '~/components/link';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

import SearchCard, {
  type CardContent,
  type CardContentWithLabel,
} from './search-card';
import { Recents, Searchbar } from './search-utils';

const categories = [
  'allResults',
  'webPages',
  'people',
  'documents',
  'events',
  'news',
  'courses',
  'clubs',
  'positions',
];

export default async function Search({
  query,
  category,
  locale,
}: {
  query?: string;
  category:
    | 'allResults'
    | 'webPages'
    | 'people'
    | 'documents'
    | 'events'
    | 'news'
    | 'courses'
    | 'clubs'
    | 'positions';
  locale: string;
}) {
  const text = (await getTranslations(locale)).Search;
  const selectedCategory = categories.indexOf(category);
  const links = {
    recents: [
      { label: 'Departments', value: '/departments' },
      { label: 'Academic', value: '/academic' },
      { label: 'Spaghetti', value: '/spaghetti' },
      { label: 'SPIC MACAY', value: '/clubs/0' },
    ],
    mostSearched: [
      { label: 'Departments', value: '/departments' },
      { label: 'Dr. Vikram Singh', value: '/faculty/0' },
    ],
    studentLinks: [
      { label: 'Departments', value: '/departments' },
      { label: 'Dr. Vikram Singh', value: '/faculty/0' },
    ],
    facultyLinks: [
      { label: 'Departments', value: '/departments' },
      { label: 'Dr. Vikram Singh', value: '/faculty/0' },
    ],
  };
  const results: CardContentWithLabel[][] = [
    [
      {
        heading: 'NIT Departments',
        content:
          '... The NITKKR Departments are the mission of the colleges to provide a segregated and conclusive study program to all indivisduals seeking admission in the various fields of the college ...',
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
      },
      {
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
        heading: 'NIT Departments',
        content:
          '... The NITKKR Departments are the mission of the colleges to provide a segregated and conclusive study program to all indivisduals seeking admission in the various fields of the college ...',
      },
      {
        heading: 'NIT Departments',
        content:
          '... The NITKKR Departments are the mission of the colleges to provide a segregated and conclusive study program to all indivisduals seeking admission in the various fields of the college ...',
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
      },
    ],
    [
      {
        image:
          'https://s3-alpha-sig.figma.com/img/588b/ab64/04ae89380965f576d620e92665f81865?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mlbfNQ6wxBAY-4fFaqTYC93tfMAryRfAx90MX9agQ934LlsGw32jCT~ANs0paIfIrybCqF21-25noYI9BAfDQVNpyj7t80k~mITw48TkuN8COo4L2nDP1ZWXcsQKAcfMdHSLUaxBERNdxl3aVTSv52r7o-~tCigNvGkI1T7Q~-bfu8euox~m2PWxJRbJ9pQt7S7qzwz6on0l6Bqzh9D26-TN7Aa7KwWerm4y4pzdeJ9hNZfhISv0aEbPHTGPBRZL9aNFSfvBVrEFlgtoJ3wj9uSi~Z6Q1SG0sX-CKuP57zNusgN8ZBjsJlAiH~6OQcX3nwEHPSJxipdip03kSvd5TA__',
        name: 'Dr. Saket Raman',
        designation: 'Assistant Professor',
        email: 'saketraman123@gmail.com',
        phone: '+91-1744-233482 (off-Direct no)',
        address: 'MBA 205, District Attorney Office, NIT Kurukshetra',
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/588b/ab64/04ae89380965f576d620e92665f81865?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mlbfNQ6wxBAY-4fFaqTYC93tfMAryRfAx90MX9agQ934LlsGw32jCT~ANs0paIfIrybCqF21-25noYI9BAfDQVNpyj7t80k~mITw48TkuN8COo4L2nDP1ZWXcsQKAcfMdHSLUaxBERNdxl3aVTSv52r7o-~tCigNvGkI1T7Q~-bfu8euox~m2PWxJRbJ9pQt7S7qzwz6on0l6Bqzh9D26-TN7Aa7KwWerm4y4pzdeJ9hNZfhISv0aEbPHTGPBRZL9aNFSfvBVrEFlgtoJ3wj9uSi~Z6Q1SG0sX-CKuP57zNusgN8ZBjsJlAiH~6OQcX3nwEHPSJxipdip03kSvd5TA__',
        name: 'Dr. Saket Raman',
        designation: 'Assistant Professor',
        email: 'saketraman123@gmail.com',
        phone: '+91-1744-233482 (off-Direct no)',
        address: 'MBA 205, District Attorney Office, NIT Kurukshetra',
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/588b/ab64/04ae89380965f576d620e92665f81865?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mlbfNQ6wxBAY-4fFaqTYC93tfMAryRfAx90MX9agQ934LlsGw32jCT~ANs0paIfIrybCqF21-25noYI9BAfDQVNpyj7t80k~mITw48TkuN8COo4L2nDP1ZWXcsQKAcfMdHSLUaxBERNdxl3aVTSv52r7o-~tCigNvGkI1T7Q~-bfu8euox~m2PWxJRbJ9pQt7S7qzwz6on0l6Bqzh9D26-TN7Aa7KwWerm4y4pzdeJ9hNZfhISv0aEbPHTGPBRZL9aNFSfvBVrEFlgtoJ3wj9uSi~Z6Q1SG0sX-CKuP57zNusgN8ZBjsJlAiH~6OQcX3nwEHPSJxipdip03kSvd5TA__',
        name: 'Dr. Saket Raman',
        designation: 'Assistant Professor',
        email: 'saketraman123@gmail.com',
        phone: '+91-1744-233482 (off-Direct no)',
        address: 'MBA 205, District Attorney Office, NIT Kurukshetra',
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
      },
    ],
    [
      {
        content:
          'Student Fee Receipt 2023 - 24: Special bill with mess details included along with each item of food including the sauce that the students use to eat samosa ...',
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
      },
    ],
    [
      {
        image:
          'https://s3-alpha-sig.figma.com/img/9b4c/ddde/89db0531d592d21458355e7e79bdfc97?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IcmdIhg2lv9wXJrQWvYiCmRSiuwvok1c5MosB1v9LbqVJ2Pguew9qyZRx8lKoa-1Q2T76hYFrpwKq32UIWTw-wKT~Bv2EogKzr7M~qWQesNQSrvp2E4PmwwZRS7zvuJlRv2XgP7zlSUxobfYqCj3pQ1N8gOXc0t6aFqRAD3qJrD0HGSOYjUPuAutPXUEltrkHv8GgLFUHq1u~apYFuSx-Se0YETQyfP3wSMmFzq5YMTe~H-Bnk8t1QOk8R95mepJuVcB-k4oIUtVxz8Fd5pec0D72EsMkbPE-3YHT07naDTCKmZLUbshqReOWrcxUKkxpAWCy2tYdm7VI9PmxR1UNA__',
        heading: 'NITKKR Annual Fest 2023',
        subHeading: 'The biggest event of the year is here',
        location: 'NIT Kurukshetra',
        date: '12th - 15th March 2023',
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
      },
    ],
    [
      {
        heading: 'Ceremony of NIT Departments',
        content:
          'The NITKKR Departments are the mission of the colleges to provide a segregated and conclusive study program to all indivisduals seeking admission in the various fields of the college ...',
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
      },
      {
        heading:
          'NITTKR Launches first robots to compete with Boston robotics!',
        image:
          'https://s3-alpha-sig.figma.com/img/bf2a/5c15/7f8cfedaa2b77202e9b1578cfcb112fd?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OTTlyTBkDlRxzDHZrPcdggouZ3FnD7XA~XrFtEiCXI333-crUWTQbWtD4kxp7D2tHGHMQaRc3-MJX8BIKcwsFs6A1VIJHpA0x-Uwju675RsiQ8EMW3w6Wlf9xI9dhaKzppER3eRQB0lVWhTj26aypVIMNL8hqrcDqgF-887kWYjlFGiTipCLYHf9~dPzPZ35of5fsIQrQT8X8zqIHCgLRtwCXbDi0n-Nv02ka6-njbkfFpRtVyGGClsSzwRCEf1Tq1i4ab-7gZHFWuV1w8WTYw4C5iDULTpUFnLEyApx54eS3U2SIpNSJ0J2oqqDn9dFlm6Q3ZXHb6KqNLNv~SPzTA__',
        content:
          'The NITKKR Robotics Student Fellowship (NITKKR AUTOBOTS) program offers graduate students the opportunity to research alongside experts on the specific topic of robotics ...The NITKKR Robotics Student Fellowship (NITKKR AUTOBOTS) program offers graduate students the opportunity to research alongside experts on the specific topic of robotics ...',
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
      },
    ],
    [
      {
        heading: 'CSPC20',
        subHeading: 'Operating System',
        programme: "Bachelor's of Technology",
        programmeDuration: '(B. Tech. - 4 years)',
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
      },
      {
        heading: 'CSPC62',
        subHeading: 'Advanced Data Structures and Algorithms',
        programme: "Bachelor's of Technology",
        programmeDuration: '(B. Tech. - 4 years)',
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
      },
    ],
    [
      {
        image:
          'https://s3-alpha-sig.figma.com/img/4be8/b8d5/4905138091404e46eae4f448817ee3d9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YFPsXa-gDKE9P7lxUTpGmZqq8PAgcAhRsUTabekQbTtSpgb~6u-L-yM8Od-TCD1mbCfVHusXYNAHWHf-tmqSwtG1fFfNHWKdlfFggRSMpDjh~jDSPI4Heh3m9n2L5e176SLmoQDSnJa56ajuXhawTSQZNWayNTA-HyxK3dOpMA-qeWkEBEzqUbzO~~sTQXtz0P-PWSY3r~svFPUUAiWqONzeWldHPCr-fADFHnNOWdKgHnsGUPAmBVUqiQbOyBIdsqxJTXjLhoogjGSLT2ljefVWzGhT8OaTJVlVD4CCxWMj3tDtwjWzTZ4Mh5VB1CjYfHIAlDp59J08MFtE9eha5Q__',
        heading: 'SPIC MACAY',
        subHeading: 'Musical and Cultural Club of NIT Kurukshetra',
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
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
    [
      {
        position: 'Head of Operations',
        organisation: 'ISAC Project Team',
        names: ['Mr. Priyanshu Bindal', 'Dr. Saket Raman'],
        email: 'saketraman123@gmail.com',
        phone: '+91-1744-233482 (off-Direct no)',
        address: 'MBA 205, District Attorney Office, NIT Kurukshetra',
        label: 'Dr. Vikram Singh',
        value: '/faculty/0',
      },
    ],
  ];

  return (
    <search className="flex max-h-full flex-col gap-4">
      <Searchbar placeholder={text.placeholders} />
      <article className="flex grow flex-col overflow-auto rounded-lg border border-primary-700 bg-background pl-4 md:pl-12">
        {query ? (
          <>
            <nav className="mr-4 md:mr-12">
              <ul className="flex w-full snap-x space-x-2 overflow-auto pb-3 pt-5 sm:space-x-3">
                {text.filters.map((category, index) => (
                  <li key={index} className="snap-start">
                    <Link
                      href={{ query: { query, category: categories[index] } }}
                      prefetch
                      replace
                    >
                      <button
                        className={cn(
                          'button inline-block whitespace-nowrap rounded border px-2 py-1 text-center font-semibold',
                          'sm:rounded-md sm:p-2',
                          index === selectedCategory
                            ? 'bg-primary-700 text-neutral-50'
                            : 'bg-opacity-60'
                        )}
                      >
                        {category}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <section className="mt-2 max-h-full w-full overflow-y-auto pr-4 md:pr-12">
              {selectedCategory > 0 ? (
                <Suspense fallback={<h5>loader</h5>}>
                  {/* {search} */}
                  <header className="flex justify-between text-primary-700">
                    <h4 className="">{text.filters[selectedCategory]}</h4>
                  </header>
                  <ul className="mb-5 space-y-3">
                    {results[selectedCategory - 1].map(
                      ({ value, label, ...result }, index) => (
                        <li key={index}>
                          <LocalStorageLink
                            href={value}
                            newItem={{ label, value }}
                            options={{ filter: true, unshift: true }}
                            replace
                            storageKey="recentSearches"
                          >
                            <SearchCard
                              cardContent={
                                {
                                  index: selectedCategory - 1,
                                  ...result,
                                } as CardContent
                              }
                            />
                          </LocalStorageLink>
                        </li>
                      )
                    )}
                  </ul>
                </Suspense>
              ) : (
                <Suspense fallback={<h5>loader</h5>}>
                  {/* {search} */}
                  <ol className="mb-5 space-y-5">
                    {text.filters.slice(1).map((category, index) => (
                      <li key={index}>
                        <header className="flex justify-between text-primary-700">
                          <h4>{category}</h4>
                          <h5>
                            <Link
                              className="inline-flex hover:underline"
                              href={{
                                query: {
                                  query,
                                  category: categories[index + 1],
                                },
                              }}
                              replace
                            >
                              {text.viewAll}
                              <span className="rotate-90">
                                <FaArrowUp
                                  className="mx-auto inline-block animate-bounce"
                                  size={16}
                                />
                              </span>
                            </Link>
                          </h5>
                        </header>
                        <ul className="space-y-3">
                          {results[index].map(
                            ({ value, label, ...result }, i) => (
                              <li key={i}>
                                <LocalStorageLink
                                  href={value}
                                  newItem={{ label, value }}
                                  options={{ filter: true, unshift: true }}
                                  replace
                                  storageKey="recentSearches"
                                >
                                  <SearchCard
                                    cardContent={
                                      { index, ...result } as CardContent
                                    }
                                  />
                                </LocalStorageLink>
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </Suspense>
              )}
            </section>
          </>
        ) : (
          <>
            <Recents title={text.recents} clearButton={text.clearRecents} />
            <section className="my-12 mr-4 flex max-w-screen-xl flex-col justify-between gap-10 md:mr-12 md:flex-row">
              <nav>
                <h5 className="mb-2 text-primary-700 lg:mb-3 xl:mb-4">
                  {text.mostSearched}
                </h5>
                <ol>
                  {links.mostSearched.map(({ label, value }, index) => (
                    <li key={index}>
                      <LocalStorageLink
                        className="inline-flex items-center gap-2 font-medium lg:text-lg"
                        href={value}
                        newItem={{ label, value }}
                        options={{ filter: true, unshift: true }}
                        replace
                        storageKey="recentSearches"
                      >
                        <FaMagnifyingGlass className="inline-block h-2 text-primary-500 lg:h-3" />
                        {label}
                      </LocalStorageLink>
                    </li>
                  ))}
                </ol>
              </nav>
              <nav>
                <h5 className="mb-2 text-primary-700 lg:mb-3 xl:mb-4">
                  {text.studentQuickLinks}
                </h5>
                <ol>
                  {links.studentLinks.map(({ label, value }, index) => (
                    <li key={index}>
                      <LocalStorageLink
                        className="inline-flex items-center gap-2 font-medium lg:text-lg"
                        href={value}
                        newItem={{ label, value }}
                        options={{ filter: true, unshift: true }}
                        replace
                        storageKey="recentSearches"
                      >
                        <FaMagnifyingGlass className="inline-block h-2 text-primary-500 lg:h-3" />
                        {label}
                      </LocalStorageLink>
                    </li>
                  ))}
                </ol>
              </nav>
              <nav>
                <h5 className="mb-2 text-primary-700 lg:mb-3 xl:mb-4">
                  {text.facultyQuickLinks}
                </h5>
                <ol>
                  {links.facultyLinks.map(({ label, value }, index) => (
                    <li key={index}>
                      <LocalStorageLink
                        className="inline-flex items-center gap-2 font-medium lg:text-lg"
                        href={value}
                        newItem={{ label, value }}
                        options={{ filter: true, unshift: true }}
                        replace
                        storageKey="recentSearches"
                      >
                        <FaMagnifyingGlass className="inline-block h-2 text-primary-500 lg:h-3" />
                        {label}
                      </LocalStorageLink>
                    </li>
                  ))}
                </ol>
              </nav>
            </section>
          </>
        )}
      </article>
    </search>
  );
}