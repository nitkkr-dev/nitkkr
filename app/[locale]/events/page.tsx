import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { MdCalendarToday, MdLocationOn } from 'react-icons/md';
import { Input } from '~/components/inputs';
import Loading from '~/components/loading';
import { NoResultStatus } from '~/components/status';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { db } from '~/server/db';
import { ScrollArea } from '~/components/ui/scroll-area';
import ImageHeader from '~/components/image-header';

import { ClearFiltersButton, PreserveParamsLink } from '../faculty-and-staff/client-components';
import { EventsArchiveDropdown } from './client-components';

export default async function Events({
  params: { locale },
  searchParams: { department: departmentName, query, year, month },
}: {
  params: { locale: string };
  searchParams: {
    department?: string | string[];
    query?: string;
    year?: string;
    month?: string;
  };
}) {
  const text = (await getTranslations(locale)).Events;

  return (
    <>
      <ImageHeader title="EVENTS AND NEWS
      " src="events/header.jpg" />
      <section className="container my-6 flex gap-8">
        <search
          className={cn(
            'hidden h-fit w-[30%] rounded p-4 pt-0 xl:inline',
            'sticky top-[88px]'
          )}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-primary-700">Filter By</h2>
            <ClearFiltersButton />
          </div>

          <ScrollArea className="h-[calc(100vh-200px)]">
            {/* Date Filter Box */}
            <div className="mb-6 rounded border border-primary-100 bg-neutral-50 p-4">
              <h3 className="mb-4 text-2xl font-bold text-[#E7695F] font-dm-sans">Date</h3>

              {/* Range Slider */}
              <div className="mb-6">
                <input
                  type="range"
                  min="2000"
                  max="2025"
                  defaultValue="2000"
                  className="w-full accent-primary-700"
                />
                <div className="mt-2 flex justify-between text-xs text-neutral-600">
                  <span>2000</span>
                  <span>2025</span>
                </div>
              </div>

              {/* Start Date */}
              <div className="mb-4">
                <label className="mb-2 block text-[20px] font-bold text-[#E7695F] font-dm-sans">
                  Start date
                </label>
                <div className="flex gap-2">
                  <select className="h-[36px] flex-1 rounded border border-[#E7695F] bg-white px-3 text-sm focus:border-[#E7695F] focus:outline-none focus:ring-1 focus:ring-[#E7695F]">
                    <option>Day</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <select className="h-[36px] flex-1 rounded border border-[#E7695F] bg-white px-3 text-sm focus:border-[#E7695F] focus:outline-none focus:ring-1 focus:ring-[#E7695F]">
                    <option>Month</option>
                    {[
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec',
                    ].map((month, i) => (
                      <option key={i} value={i + 1}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select className="h-[36px] flex-1 rounded border border-[#E7695F] bg-white px-3 text-sm focus:border-[#E7695F] focus:outline-none focus:ring-1 focus:ring-[#E7695F]">
                    <option>Year</option>
                    {Array.from({ length: 26 }, (_, i) => {
                      const year = 2025 - i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* End Date */}
              <div>
                <label className="mb-2 block text-[20px] font-bold text-[#E7695F] font-dm-sans">
                  End date
                </label>
                <div className="flex gap-2">
                  <select className="h-[36px] flex-1 rounded border border-[#E7695F] bg-white px-3 text-sm focus:border-[#E7695F] focus:outline-none focus:ring-1 focus:ring-[#E7695F]">
                    <option>Day</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <select className="h-[36px] flex-1 rounded border border-[#E7695F] bg-white px-3 text-sm focus:border-[#E7695F] focus:outline-none focus:ring-1 focus:ring-[#E7695F]">
                    <option>Month</option>
                    {[
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec',
                    ].map((month, i) => (
                      <option key={i} value={i + 1}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select className="h-[36px] flex-1 rounded border border-[#E7695F] bg-white px-3 text-sm focus:border-[#E7695F] focus:outline-none focus:ring-1 focus:ring-[#E7695F]">
                    <option>Year</option>
                    {Array.from({ length: 26 }, (_, i) => {
                      const year = 2025 - i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>

            {/* Department Filter Box */}
            <div className="mb-6 rounded border border-primary-100 bg-neutral-50 p-4">
              <h3 className="mb-2 text-lg font-bold text-primary-700">
                Department
              </h3>
              <Suspense fallback={<Loading className="max-xl:hidden" />}>
                <Departments department={departmentName} />
              </Suspense>
            </div>
          </ScrollArea>
        </search>

        <section className="grow space-y-6">
          <search className="flex gap-4 max-sm:flex-col">
            <Input
              className="sm:grow"
              debounceTo="query"
              debounceEvery={100}
              defaultValue={query}
              id="event-search"
              placeholder="Search by Name / Date"
            />

            {/* Mobile Events/News Archive Filter */}
            <Suspense fallback={<Loading className="xl:hidden" />}>
              <EventsArchiveDropdown year={year} month={month} />
            </Suspense>
          </search>

          <ol className="space-y-4">
            <Suspense
              fallback={<Loading />}
              key={`${query ?? ''}-${Array.isArray(departmentName) ? departmentName.join(',') : departmentName ?? ''}-${year ?? ''}-${month ?? ''}`}
            >
              <EventsList
                department={departmentName}
                locale={locale}
                query={query}
                year={year}
                month={month}
              />
            </Suspense>
          </ol>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-sm font-medium text-white">
              1
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-sm font-medium text-neutral-600 hover:border-primary-700 hover:text-primary-700">
              2
            </button>
            <button className="flex h-8 w-8 items-center justify-center text-neutral-400">
              ...
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-sm font-medium text-neutral-600 hover:border-primary-700 hover:text-primary-700">
              10
            </button>
            <button className="flex h-8 w-8 items-center justify-center text-neutral-600">
              →
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

const Departments = async ({
  department,
}: {
  department?: string | string[];
}) => {
  const departments = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });

  const selectedDepartments = Array.isArray(department)
    ? department
    : department
      ? [department]
      : [];

  const getUpdatedDepartments = (urlName: string) => {
    return selectedDepartments.includes(urlName)
      ? selectedDepartments.filter((d) => d !== urlName)
      : [...selectedDepartments, urlName];
  };

  return (
    <ol className="w-full space-y-4">
      {departments.map(({ name, urlName }, index) => (
        <li key={index}>
          <PreserveParamsLink
            paramToUpdate="department"
            value={getUpdatedDepartments(urlName)}
            className={cn(
              'flex w-full items-center rounded border p-3',
              selectedDepartments.includes(urlName)
                ? 'bg-primary-50 border-primary-700'
                : 'border-neutral-300'
            )}
          >
            <div className="flex w-full items-center">
              <div className="mr-2">
                <input
                  type="checkbox"
                  id={`department-${urlName}`}
                  className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
                  checked={selectedDepartments.includes(urlName)}
                  readOnly
                />
              </div>
              <span className="font-semibold text-shade-dark">{name}</span>
            </div>
          </PreserveParamsLink>
        </li>
      ))}
    </ol>
  );
};

const EventsList = async ({
  department,
  locale,
  query,
  year,
  month,
}: {
  department?: string | string[];
  locale: string;
  query?: string;
  year?: string;
  month?: string;
}) => {
  const events = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: 'Inter-NIT Tournament Results Out!',
    description:
      'The 2023-24 Inter-NIT Tournaments in all sports have concluded recently, with the teams of the great NIT Kurukshetra...',
    date: '9th September, 2024',
    location: 'Sports Complex',
    department: 'Sports',
    thumbnail: 'events/thumbnail.jpg',
  }));

  const filteredEvents = events.filter((event) => {
    const matchesQuery =
      !query ||
      event.title.toLowerCase().includes(query.toLowerCase()) ||
      event.description.toLowerCase().includes(query.toLowerCase());

    return matchesQuery;
  });

  return filteredEvents.length === 0 ? (
    <NoResultStatus locale={locale} />
  ) : (
    filteredEvents.map((event, index) => (
      <li
        className="rounded border border-primary-700 bg-neutral-50 hover:drop-shadow-md"
        key={index}
      >
        <Link
          className="flex gap-4 p-2 sm:p-3 md:p-4"
          href={`/${locale}/events/${event.id}`}
        >
          <main className="flex-1">
            <header className="mb-1 sm:mb-2 md:mb-3">
              <h4 className="mb-0 text-primary-700">{event.title}</h4>
              <p className="line-clamp-2 text-sm text-neutral-700">
                {event.description}
              </p>
            </header>

            <ul className="space-y-1">
              <li className="flex items-center gap-2 text-sm text-primary-700">
                <MdCalendarToday className="fill-primary-700" />
                {event.date}
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-700">
                <MdLocationOn className="fill-primary-700" />
                {event.location}
              </li>
            </ul>
          </main>

          <Image
            alt={event.title}
            className="h-[90px] w-[140px] rounded object-cover"
            height={90}
            src={event.thumbnail}
            width={140}
          />
        </Link>
      </li>
    ))
  );
};