import Link from 'next/link';
import { Suspense } from 'react';

import Recents from './recent-search';
import Searchbar from './searchbar';
import SearchLink from './search-link';

export default function Search({ search }: { search?: string }) {
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

  return (
    <section className="flex flex-col gap-4">
      <Searchbar />
      <article className="flex w-[55rem] max-w-[100vw] flex-col gap-10 overflow-y-auto rounded-lg border border-primary-700 bg-background px-12 drop-shadow-2xl">
        {search ? (
          <Suspense fallback={<h5>loader</h5>}>
            {/* {search} */}
            <ol className="grid grid-cols-1 divide-y py-4">
              {links.recents.map(
                (
                  { label, value }: { label: string; value: string },
                  index: number
                ) => (
                  <SearchLink value={value} key={index} label={label} />
                )
              )}
            </ol>
          </Suspense>
        ) : (
          <>
            <Recents />
            <section className="mb-12 flex gap-10">
              <nav>
                <h5>Most searched at NITKKR</h5>
                <ol>
                  {links.mostSearched.map(({ label, value }, index) => (
                    <li key={index}>
                      <Link href={value}>{label}</Link>
                    </li>
                  ))}
                </ol>
              </nav>
              <nav>
                <h5>Student Quick Links</h5>
                <ol>
                  {links.studentLinks.map(({ label, value }, index) => (
                    <li key={index}>
                      <Link href={value}>{label}</Link>
                    </li>
                  ))}
                </ol>
              </nav>
              <nav>
                <h5>Faculty Quick Links</h5>
                <ol>
                  {links.facultyLinks.map(({ label, value }, index) => (
                    <li key={index}>
                      <Link href={value}>{label}</Link>
                    </li>
                  ))}
                </ol>
              </nav>
            </section>
          </>
        )}
      </article>
    </section>
  );
}
