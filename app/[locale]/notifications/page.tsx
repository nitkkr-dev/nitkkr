import Link from 'next/link';
import React, { Suspense } from 'react';
import { MdOutlineKeyboardArrowRight, MdSearch } from 'react-icons/md';

import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import { cn, groupBy } from '~/lib/utils';
import ImageHeader from '~/components/image-header';
import { Button } from '~/components/buttons';
import Loading from '~/components/loading';
import { ScrollArea } from '~/components/ui';
import { notifications as notificationsSchema } from '~/server/db';

import { DateRangeForm } from './DateRangeForm';
import { MultiCheckbox } from './MultiCheckbox';
import { SearchInput } from './SearchInput';

type Cat = (typeof notificationsSchema.category.enumValues)[number];

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

  // Build base query (server-side filtering except textual search & multi-cat)
  let raw = await db.query.notifications.findMany({
    where: (n, { and, gte, lte }) =>
      and(
        startDate ? gte(n.createdAt, startDate) : undefined,
        endDate ? lte(n.createdAt, endDate) : undefined
      ),
  });

  // Category filter (multi)
  if (categories.length) {
    raw = raw.filter((n) => categories.includes(n.category as Cat));
  }

  // Department filter (multi via foreign key, if departmentId present)
  if (departments.length) {
    const deptIds = departmentRows
      .filter((d) => departments.includes(d.urlName))
      .map((d) => d.id);
    raw = raw.filter((n) => n.departmentId && deptIds.includes(n.departmentId));
  }

  // Text search (title)
  if (query) {
    raw = raw.filter((n) =>
      n.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Format dates for grouping
  const list = raw
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .map((n) => ({
      ...n,
      createdAtStr: n.createdAt.toLocaleDateString(locale, {
        dateStyle: 'long',
        numberingSystem: locale === 'hi' ? 'deva' : 'roman',
      }),
    }));

  return (
    <>
      <ImageHeader title={text.title} src="slideshow/image01.jpg" />
      <section className="container mt-12 flex gap-8">
        {/* Desktop Sidebar - hidden on mobile */}
        <aside
          className={cn(
            'hidden w-[290px] shrink-0 flex-col gap-2 xl:flex',
            'sticky top-[88px]'
          )}
        >
          <div className="flex items-baseline justify-between pb-2">
            <h2 className="font-serif text-2xl font-bold leading-none text-primary-700">
              Filter By
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
                Clear All Filters
              </Link>
            </Button>
          </div>

          <ScrollArea className="max-h-[calc(100vh-180px)]">
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
        {/* Main Content - matches sidebar height */}
        <section className="flex min-h-[600px] grow flex-col space-y-6 xl:max-h-[calc(100vh-180px)]">
          {/* Search + Mobile Filters */}
          <search className="flex shrink-0 gap-4 max-sm:flex-col">
            <SearchInput
              defaultValue={query}
              placeholder="Search by Notification/Date"
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

          {/* Notifications List - scrollable, fills remaining height */}
          <ScrollArea className="flex-1">
            <Suspense fallback={<Loading />}>
              <NotificationsListRenderable items={list} locale={locale} />
            </Suspense>
          </ScrollArea>
        </section>
      </section>
    </>
  );
}

/* ---------------------- Render Notifications List ---------------------- */
function NotificationsListRenderable({
  items,
  locale,
}: {
  items: {
    id: number;
    title: string;
    category: Cat;
    createdAtStr: string;
  }[];
  locale: string;
}) {
  if (!items.length) {
    return (
      <p className="p-6 text-center text-neutral-500">
        No notifications found.
      </p>
    );
  }

  return Array.from(groupBy(items, 'createdAtStr')).map(
    ([createdAtStr, group], idx) => (
      <div key={idx} className="mb-6">
        <h5 className="mb-2 font-semibold text-primary-700">{createdAtStr}</h5>
        <ul className="space-y-2">
          {group.map((n) => (
            <li key={n.id}>
              <Link
                href={`/${locale}/noticeboard/${n.id}`}
                className="hover:bg-primary-50 group flex items-start gap-2 rounded px-2 py-1"
              >
                <MdOutlineKeyboardArrowRight className="text-primary-600 mt-1 size-4 transition-transform group-hover:translate-x-1" />
                <p className="truncate">{n.title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <hr className="mt-4 opacity-20" />
      </div>
    )
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
