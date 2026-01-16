import Link from 'next/link';
import React, { Suspense } from 'react';
import { desc } from 'drizzle-orm';

import { getTranslations } from '~/i18n/translations';
import { db, eventCategoryEnum } from '~/server/db';
import { cn } from '~/lib/utils';
import ImageHeader from '~/components/image-header';
import { Button } from '~/components/buttons';
import { ScrollArea } from '~/components/ui';
import Loading from '~/components/loading';

import { DateRangeForm } from './DateRangeForm';
import { MobileFilters } from './MobileFilters';
import { MultiCheckbox } from './MultiCheckbox';
import { type EventItem, EventsList } from './EventsList';
import { SearchInput } from './SearchInput';

type Cat = (typeof eventCategoryEnum.enumValues)[number];
const INITIAL_BATCH_SIZE = 15;

interface PageSearchParams {
  q?: string;
  category?: string | string[];
  start?: string;
  end?: string;
}

export default async function EventsPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: PageSearchParams;
}) {
  const text = (await getTranslations(locale)).Events;

  // Normalize multi-select params
  const categories = toArray(searchParams.category).filter(Boolean) as Cat[];
  const startDate = parseDate(searchParams.start);
  const endDate = parseDate(searchParams.end);
  const query = (searchParams.q ?? '').trim().toLowerCase();

  // Build base query - fetch only initial batch
  let raw = await db.query.events.findMany({
    where: (e, { and, gte, lte }) =>
      and(
        startDate ? gte(e.startDate, startDate.toISOString()) : undefined,
        endDate ? lte(e.startDate, endDate.toISOString()) : undefined
      ),
    orderBy: (e) => [desc(e.startDate)],
    limit: INITIAL_BATCH_SIZE + 1, // +1 to check if there are more
  });

  // Category filter (multi)
  if (categories.length) {
    raw = raw.filter((e) => categories.includes(e.category as Cat));
  }

  // Text search (title, description, location, and category)
  if (query) {
    raw = raw.filter(
      (e) =>
        (e.title.toLowerCase().includes(query.toLowerCase()) ||
          e.description?.toLowerCase().includes(query.toLowerCase())) ??
        e.location?.toLowerCase().includes(query.toLowerCase()) ??
        e.category.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Check if there are more items
  const hasMore = raw.length > INITIAL_BATCH_SIZE;
  const initialItems = hasMore ? raw.slice(0, INITIAL_BATCH_SIZE) : raw;
  const initialCursor = hasMore
    ? initialItems[initialItems.length - 1]?.startDate ?? null
    : null;

  // Serialize for client component
  const serializedItems: EventItem[] = initialItems.map((e) => ({
    id: e.id,
    title: e.title,
    description: e.description,
    category: e.category,
    startDate: e.startDate,
    endDate: e.endDate,
    location: e.location,
    locationUrl: e.locationUrl,
    images: e.images,
  }));

  // Build filter params for the client component
  const filterParams = {
    categories: categories.length ? categories : undefined,
    start: searchParams.start,
    end: searchParams.end,
    query: query || undefined,
  };

  return (
    <>
      <ImageHeader title={text.title} src="slideshow/image01.jpg" />
      <section className="container mb-0 mt-8 flex gap-8">
        {/* Desktop Sidebar - hidden on mobile */}
        <aside
          className={cn(
            'hidden w-[290px] shrink-0 flex-col gap-2 xl:flex',
            'sticky top-[88px] self-start'
          )}
        >
          <div className="flex items-baseline justify-between pb-2">
            <h2 className="font-serif text-2xl font-bold leading-none text-primary-700">
              {text.filterBy}
            </h2>
            <Button
              asChild
              variant="outline"
              className="rounded-sm bg-neutral-50 px-4 py-2 text-sm text-primary-700 hover:bg-primary-700 hover:text-neutral-50"
            >
              <Link
                scroll={false}
                href={buildHref(locale, {
                  q: undefined,
                  category: [],
                  start: undefined,
                  end: undefined,
                })}
              >
                {text.clearAllFilters}
              </Link>
            </Button>
          </div>

          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="flex flex-col gap-2 pr-4">
              <FilterSection label={text.filter.date}>
                <DateRangeForm
                  locale={locale}
                  categories={categories}
                  query={query}
                  start={searchParams.start}
                  end={searchParams.end}
                  text={{
                    startDate: text.filter.startDate,
                    endDate: text.filter.endDate,
                    day: text.filter.day,
                    month: text.filter.month,
                    year: text.filter.year,
                  }}
                />
              </FilterSection>

              <FilterSection label={text.filter.category}>
                <MultiCheckbox
                  param="category"
                  options={eventCategoryEnum.enumValues}
                  selected={categories}
                  locale={locale}
                  textMap={text.categories}
                />
              </FilterSection>
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <section className="flex grow flex-col space-y-6">
          {/* Search + Mobile Filters */}
          <search className="flex w-full items-center gap-4">
            <Suspense fallback={<Loading />}>
              <SearchInput
                defaultValue={query}
                placeholder={text.searchPlaceholder}
              />
            </Suspense>

            {/* Mobile Filters Button - shows on < xl */}
            <div className="flex-shrink-0">
              <Suspense fallback={<Loading />}>
                <MobileFilters
                  locale={locale}
                  categories={categories}
                  categoryOptions={eventCategoryEnum.enumValues}
                  query={query}
                  start={searchParams.start}
                  end={searchParams.end}
                  text={{
                    filters: text.filter.title,
                    filterBy: text.filterBy,
                    clearAllFilters: text.clearAllFilters,
                    filter: text.filter,
                    categories: text.categories,
                  }}
                />
              </Suspense>
            </div>
          </search>

          {/* Events List */}
          <div className="flex-1 rounded-md">
            <Suspense fallback={<Loading />}>
              <EventsList
                initialItems={serializedItems}
                initialCursor={initialCursor}
                initialHasMore={hasMore}
                locale={locale}
                filterParams={filterParams}
                text={{
                  noEventsFound: text.noEventsFound,
                  noMoreEvents: text.noMoreEvents,
                }}
              />
            </Suspense>
          </div>
        </section>
      </section>
    </>
  );
}

/* ---------------------- Filter Section Component ---------------------- */
function FilterSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded border border-primary-100 bg-neutral-50 p-4">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold text-primary-300">{label}</h3>
      </div>
      {children}
    </section>
  );
}

/* ---------------------- Helpers ---------------------- */
function toArray(v: string | string[] | undefined): string[] {
  return Array.isArray(v) ? v : v ? [v] : [];
}

function parseDate(d?: string) {
  if (!d) return undefined;
  const date = new Date(d);
  return isNaN(date.getTime()) ? undefined : date;
}

function buildHref(locale: string, updates: Record<string, unknown>): string {
  const params = new URLSearchParams();

  Object.entries(updates).forEach(([k, v]) => {
    if (v === undefined || (Array.isArray(v) && v.length === 0)) {
      return;
    }

    if (Array.isArray(v)) {
      v.forEach((item) => {
        if (item) params.append(k, String(item));
      });
    } else {
      params.set(k, String(v));
    }
  });

  const qs = params.toString();
  return `/${locale}/events${qs ? `?${qs}` : ''}`;
}
