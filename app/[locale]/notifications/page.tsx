import Link from 'next/link';
import React, { Suspense } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import { cn, groupBy } from '~/lib/utils';
import { ScrollArea } from '~/components/ui';
import {
  Input,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs';
import { Button } from '~/components/buttons';
import Loading from '~/components/loading';
import { notifications as notificationsSchema } from '~/server/db';

import { DateRangeForm } from './DateRangeForm';

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

  // Mobile popup trigger condition (handled on client via ?popup=filters)
  const showPopup = 'popup' in searchParams && searchParams.popup === 'filters';

  return (
    <section className="container my-6 flex gap-8">
      {/* Desktop Sidebar - hidden on mobile */}
      <aside
        className={cn(
          'hidden w-[290px] shrink-0 flex-col gap-6 xl:flex',
          'sticky top-[88px] h-fit'
        )}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-primary-700">
            Filter By
          </h2>
          <Button asChild variant="ghost" className="text-xs text-primary-700">
            <Link
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
      </aside>

      {/* Main Content */}
      <section className="grow space-y-6">
        {/* Search + Mobile Filters */}
        <search className="flex gap-4 max-sm:flex-col">
          <Input
            id="notification-search"
            className="sm:grow"
            debounceTo="q"
            debounceEvery={300}
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
        <Suspense fallback={<Loading />}>
          <NotificationsListRenderable items={list} locale={locale} />
        </Suspense>
      </section>
    </section>
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

function MultiCheckbox({
  param,
  options,
  selected,
  locale,
  textMap,
  select = false,
}: {
  param: string;
  options: readonly string[];
  selected: string[];
  locale: string;
  textMap: Record<string, string>;
  select?: boolean;
}) {
  const getUpdatedValues = (option: string) => {
    return selected.includes(option)
      ? selected.filter((s) => s !== option)
      : [...selected, option];
  };

  return select ? (
    // Mobile Select Dropdown
    <Select navigate>
      <SelectTrigger className="px-4 py-5 sm:w-1/2 lg:w-1/3 xl:hidden">
        <SelectValue
          placeholder={
            selected.length ? `${selected.length} selected` : `Choose ${param}`
          }
        />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <div key={opt} className="flex items-center px-2 py-1">
            <input
              type="checkbox"
              id={`mobile-${param}-${opt}`}
              className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
              checked={selected.includes(opt)}
              readOnly
            />
            <Link
              href={buildHref(locale, {
                [param]: getUpdatedValues(opt),
              })}
              className="ml-2 w-full py-1"
            >
              {textMap[opt] ?? opt}
            </Link>
          </div>
        ))}
      </SelectContent>
    </Select>
  ) : (
    // Desktop Checkbox List
    <ScrollArea className="h-[200px]">
      <ol className="w-full space-y-2 pr-4">
        {options.map((opt) => {
          const isChecked = selected.includes(opt);
          return (
            <li key={opt}>
              <Link
                href={buildHref(locale, {
                  [param]: getUpdatedValues(opt),
                })}
                className={cn(
                  'flex w-full items-center rounded border p-2',
                  isChecked
                    ? 'bg-primary-50 border-primary-700'
                    : 'border-neutral-300'
                )}
              >
                <div className="flex w-full items-center">
                  <div className="mr-2">
                    <input
                      type="checkbox"
                      id={`${param}-${opt}`}
                      className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
                      checked={isChecked}
                      readOnly
                    />
                  </div>
                  <span className="font-semibold text-shade-dark">
                    {textMap[opt] ?? opt}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </ScrollArea>
  );
}

/* ---------------------- Helpers ---------------------- */
function toArray(v: string | string[] | undefined): string[] {
  return Array.isArray(v) ? v : v ? [v] : [];
}
function toggleMulti(current: string[], value: string) {
  return current.includes(value)
    ? current.filter((c) => c !== value)
    : [...current, value];
}
function parseDate(d?: string) {
  if (!d) return undefined;
  const date = new Date(d);
  return isNaN(date.getTime()) ? undefined : date;
}
function buildHref(locale: string, updates: Record<string, unknown>): string {
  const params = new URLSearchParams();
  Object.entries(updates).forEach(([k, v]) => {
    if (v === undefined) return;
    if (Array.isArray(v)) {
      v.forEach((item) => {
        if (item) params.append(k, String(item));
      });
    } else if (v) {
      params.set(k, String(v));
    }
  });
  const qs = params.toString();
  return `/${locale}/notifications${qs ? `?${qs}` : ''}`;
}
