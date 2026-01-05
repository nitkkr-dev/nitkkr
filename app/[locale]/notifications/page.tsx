import Link from 'next/link';
import React from 'react';
import { desc } from 'drizzle-orm';

import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import { cn } from '~/lib/utils';
import ImageHeader from '~/components/image-header';
import { Button } from '~/components/buttons';
import { ScrollArea } from '~/components/ui';
import { notifications as notificationsSchema } from '~/server/db';
import { type NotificationItem } from '~/server/actions/notifications';

import { DateRangeForm } from './DateRangeForm';
import { MultiCheckbox } from './MultiCheckbox';
import { NotificationsList } from './NotificationsList';
import { SearchInput } from './SearchInput';

type Cat = (typeof notificationsSchema.category.enumValues)[number];

const INITIAL_BATCH_SIZE = 20;

interface PageSearchParams {
  q?: string;
  category?: string | string[];
  department?: string | string[];
  start?: string;
  end?: string;
}

export default async function NotificationsPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: PageSearchParams;
}) {
  const text = (await getTranslations(locale)).Notifications;

  // Normalize multi-select params
  const categories = toArray(searchParams.category).filter(Boolean) as Cat[];
  const departments = toArray(searchParams.department).filter(Boolean);
  const startDate = parseDate(searchParams.start);
  const endDate = parseDate(searchParams.end);
  const query = (searchParams.q ?? '').trim().toLowerCase();

  // Fetch departments (names + urlName) for filter list
  const departmentRows = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });

  // Get department IDs for filtering
  const deptIds = departments.length
    ? departmentRows
        .filter((d) => departments.includes(d.urlName))
        .map((d) => d.id)
    : [];

  // Build base query - fetch only initial batch
  let raw = await db.query.notifications.findMany({
    where: (n, { and, gte, lte }) =>
      and(
        startDate ? gte(n.createdAt, startDate) : undefined,
        endDate ? lte(n.createdAt, endDate) : undefined
      ),
    orderBy: (n) => [desc(n.createdAt)],
    limit: INITIAL_BATCH_SIZE + 1, // +1 to check if there are more
  });

  // Category filter (multi)
  if (categories.length) {
    raw = raw.filter((n) => categories.includes(n.category as Cat));
  }

  // Department filter (multi via foreign key, if departmentId present)
  if (deptIds.length) {
    raw = raw.filter((n) => n.departmentId && deptIds.includes(n.departmentId));
  }

  // Text search (title and content)
  if (query) {
    raw = raw.filter(
      (n) =>
        n.title.toLowerCase().includes(query.toLowerCase()) ||
        n.content?.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Check if there are more items
  const hasMore = raw.length > INITIAL_BATCH_SIZE;
  const initialItems = hasMore ? raw.slice(0, INITIAL_BATCH_SIZE) : raw;
  const initialCursor = hasMore
    ? initialItems[initialItems.length - 1]?.createdAt.toISOString() ?? null
    : null;

  // Serialize for client component
  const serializedItems: NotificationItem[] = initialItems.map((n) => ({
    id: n.id,
    title: n.title,
    category: n.category,
    createdAt: n.createdAt.toISOString(),
  }));

  // Build filter params for the client component
  const filterParams = {
    categories: categories.length ? categories : undefined,
    departmentIds: deptIds.length ? deptIds : undefined,
    start: searchParams.start,
    end: searchParams.end,
    query: query || undefined,
  };

  return (
    <>
      <ImageHeader title={text.title} src="slideshow/image01.jpg" />
      <section className="container mb-0 mt-12 flex gap-8">
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
                  department: [],
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
              <FilterSection locale={locale} label={text.filter.date}>
                <DateRangeForm
                  locale={locale}
                  categories={categories}
                  departments={departments}
                  query={query}
                  start={searchParams.start}
                  end={searchParams.end}
                />
              </FilterSection>

              <FilterSection locale={locale} label={text.filter.category}>
                <MultiCheckbox
                  param="category"
                  options={notificationsSchema.category.enumValues}
                  selected={categories}
                  locale={locale}
                  textMap={text.categories}
                />
              </FilterSection>

              <FilterSection locale={locale} label={text.filter.department}>
                <MultiCheckbox
                  param="department"
                  options={departmentRows.map((d) => d.urlName)}
                  selected={departments}
                  locale={locale}
                  textMap={Object.fromEntries(
                    departmentRows.map((d) => [d.urlName, d.name])
                  )}
                />
              </FilterSection>
            </div>
          </ScrollArea>
        </aside>
        {/* Main Content */}
        <section className="flex grow flex-col space-y-6">
          {/* Search + Mobile Filters */}
          <search className="flex shrink-0 gap-4 max-sm:flex-col">
            <SearchInput
              defaultValue={query}
              placeholder={text.searchPlaceholder}
            />

            {/* Mobile Category Filter - shows on < xl */}
            <MultiCheckbox
              param="category"
              options={notificationsSchema.category.enumValues}
              selected={categories}
              locale={locale}
              textMap={text.categories}
              select
            />
            {/* Mobile Department Filter - shows on < xl */}
            <MultiCheckbox
              param="department"
              options={departmentRows.map((d) => d.urlName)}
              selected={departments}
              locale={locale}
              textMap={Object.fromEntries(
                departmentRows.map((d) => [d.urlName, d.name])
              )}
              select
            />
          </search>

          {/* Notifications List */}
          <div className="flex-1 rounded-md">
            <NotificationsList
              initialItems={serializedItems}
              initialCursor={initialCursor}
              initialHasMore={hasMore}
              locale={locale}
              filterParams={filterParams}
              text={{
                noNotificationsFound: text.noNotificationsFound,
                noMoreNotifications: text.noMoreNotifications,
              }}
            />
          </div>
        </section>
      </section>
    </>
  );
}

/* ---------------------- Filters Components ---------------------- */

function FilterSection({
  label,
  children,
  viewAllHref,
}: {
  label: string;
  children: React.ReactNode;
  viewAllHref?: string;
  locale?: string;
}) {
  return (
    <section className="rounded border border-primary-100 bg-neutral-50 p-4">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold text-primary-300">{label}</h3>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="text-xs font-medium text-primary-700"
          >
            View All
          </Link>
        )}
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
  return `/${locale}/notifications${qs ? `?${qs}` : ''}`;
}
