import Link from 'next/link';
import { Suspense } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { redirect } from 'next/navigation';

import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import { getS3Url } from '~/server/s3';
import { cn, groupBy } from '~/lib/utils';
import { Dialog, DialogContent, ScrollArea } from '~/components/ui';
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

function DateRangeForm({
  locale,
  categories,
  departments,
  query,
  start,
  end,
  compact = false,
}: {
  locale: string;
  categories?: string[];
  departments?: string[];
  query?: string;
  start?: string;
  end?: string;
  compact?: boolean;
}) {
  const startDate = start ? new Date(start) : undefined;
  const endDate = end ? new Date(end) : undefined;

  return (
    <form className={cn('flex flex-col gap-4', compact && 'text-xs')}>
      {/* Year Range Slider */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm font-semibold text-primary-700">
          <span>{startDate?.getFullYear() ?? 2000}</span>
          <span>{endDate?.getFullYear() ?? 2025}</span>
        </div>
        <div className="relative h-1 rounded-full bg-neutral-200">
          <div
            className="absolute h-full rounded-full bg-primary-700"
            style={{ left: '0%', right: '0%' }}
          />
          <div
            className="bg-white absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary-700"
            style={{ left: '0%' }}
          />
          <div
            className="bg-white absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary-700"
            style={{ left: '100%' }}
          />
        </div>
      </div>

      {/* Start Date */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-primary-700">
          Start date
        </label>
        <div className="grid grid-cols-3 gap-2">
          <input
            name="start-day"
            type="number"
            min="1"
            max="31"
            placeholder="Day"
            defaultValue={startDate?.getDate()}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            name="start-month"
            type="number"
            min="1"
            max="12"
            placeholder="Month"
            defaultValue={startDate ? startDate.getMonth() + 1 : undefined}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            name="start-year"
            type="number"
            min="2000"
            max="2100"
            placeholder="Year"
            defaultValue={startDate?.getFullYear()}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
        </div>
      </div>

      {/* End Date */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-primary-700">End</label>
        <div className="grid grid-cols-3 gap-2">
          <input
            name="end-day"
            type="number"
            min="1"
            max="31"
            placeholder="Day"
            defaultValue={endDate?.getDate()}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            name="end-month"
            type="number"
            min="1"
            max="12"
            placeholder="Month"
            defaultValue={endDate ? endDate.getMonth() + 1 : undefined}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            name="end-year"
            type="number"
            min="2000"
            max="2100"
            placeholder="Year"
            defaultValue={endDate?.getFullYear()}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
        </div>
      </div>

      <Button
        variant="primary"
        className="mt-2 w-full"
        formAction={async (formData) => {
          'use server';
          const startDay = formData.get('start-day')?.toString();
          const startMonth = formData.get('start-month')?.toString();
          const startYear = formData.get('start-year')?.toString();
          const endDay = formData.get('end-day')?.toString();
          const endMonth = formData.get('end-month')?.toString();
          const endYear = formData.get('end-year')?.toString();

          const startVal =
            startYear && startMonth && startDay
              ? `${startYear}-${startMonth.padStart(2, '0')}-${startDay.padStart(2, '0')}`
              : undefined;
          const endVal =
            endYear && endMonth && endDay
              ? `${endYear}-${endMonth.padStart(2, '0')}-${endDay.padStart(2, '0')}`
              : undefined;

          redirect(
            buildHref(locale, {
              start: startVal,
              end: endVal,
              category: categories,
              department: departments,
              q: query,
            })
          );
        }}
      >
        Apply
      </Button>
    </form>
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
