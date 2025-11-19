import Link from 'next/link';
import { Suspense } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import { getS3Url } from '~/server/s3';
import { cn, groupBy } from '~/lib/utils';
import { Dialog, DialogContent, ScrollArea } from '~/components/ui';
import { Input } from '~/components/inputs';
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
    <article
      style={{
        backgroundImage: `linear-gradient(rgba(249,245,235,0.75) 0%, rgba(249,245,235,0.92) 70%, rgba(249,245,235,1) 100%), url('${getS3Url()}/assets/notifications-bg.jpg')`,
      }}
      className="bg-cover bg-no-repeat pb-16 pt-[72px]"
    >
      <header className="container mb-8">
        <h1 className="text-center font-serif text-4xl text-primary-700">
          {text.title}
        </h1>
      </header>

      <div className="container flex gap-8">
        {/* Desktop / large filter column */}
        <aside
          className={cn(
            'hidden w-[290px] shrink-0 flex-col gap-6 xl:flex',
            'sticky top-[88px] h-fit'
          )}
        >
          <FilterSection locale={locale} label={text.filter.date}>
            <DateRangeForm start={searchParams.start} end={searchParams.end} />
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

          <FilterSection
            locale={locale}
            label={text.filter.department}
            viewAllHref={
              departments.length
                ? buildHref(locale, { department: [] })
                : undefined
            }
          >
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
          <Button
            asChild
            variant="ghost"
            className="mt-2 text-sm font-semibold text-primary-700"
          >
            <Link
              href={buildHref(locale, {
                q: undefined,
                category: [],
                department: [],
                start: undefined,
                end: undefined,
              })}
            >
              {text.clearAll}
            </Link>
          </Button>
        </aside>

        {/* List area */}
        <main className="grow">
          {/* Search + mobile filter */}
          <div className="mb-4 flex gap-3 max-xl:flex-col xl:items-center">
            <Input
              id="notifications-search"
              className="xl:max-w-sm"
              debounceEvery={150}
              debounceTo="q"
              defaultValue={searchParams.q}
              placeholder={text.searchPlaceholder}
            />
            <div className="flex gap-2 xl:hidden">
              <Button asChild variant="secondary" className="px-4">
                <Link
                  href={buildHref(locale, { popup: 'filters' })}
                  scroll={false}
                >
                  {text.filter.title}
                </Link>
              </Button>
              <Button asChild variant="ghost" className="px-4 text-primary-700">
                <Link
                  href={buildHref(locale, {
                    q: undefined,
                    category: [],
                    department: [],
                    start: undefined,
                    end: undefined,
                  })}
                >
                  {text.clearAll}
                </Link>
              </Button>
            </div>
          </div>

          <ScrollArea className="h-[70vh] rounded-xl bg-background/70 p-4 shadow-[0_8px_24px_rgba(0,43,91,0.15)]">
            <Suspense fallback={<Loading />}>
              <NotificationsListRenderable locale={locale} items={list} />
            </Suspense>
          </ScrollArea>
        </main>
      </div>

      {/* Mobile filter popup */}
      {showPopup && (
        <Dialog open>
          <DialogContent className="border-primary-200 max-h-[90vh] w-[92vw] max-w-[420px] overflow-y-auto rounded-xl border bg-background p-6 shadow-2xl">
            <h3 className="mb-4 font-serif text-xl font-semibold text-primary-700">
              {text.filter.title}
            </h3>

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

            <FilterSection locale={locale} label={text.filter.date}>
              <DateRangeForm
                start={searchParams.start}
                end={searchParams.end}
                compact
              />
            </FilterSection>

            <div className="mt-4 flex justify-between">
              <Button asChild variant="primary" className="px-4">
                <Link href={buildHref(locale, { popup: undefined })}>
                  {text.saveSelection}
                </Link>
              </Button>
              <Button asChild variant="ghost" className="px-4 text-primary-700">
                <Link
                  href={buildHref(locale, {
                    q: undefined,
                    category: [],
                    department: [],
                    start: undefined,
                    end: undefined,
                    popup: undefined,
                  })}
                >
                  {text.clearAll}
                </Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </article>
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
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-sm font-bold text-primary-700">{label}</h3>
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
}: {
  param: string;
  options: string[];
  selected: string[];
  locale: string;
  textMap?: Record<string, string>;
}) {
  return (
    <ul className="space-y-2">
      {options.map((opt) => {
        const isSelected = selected.includes(opt);
        const next = toggleMulti(selected, opt);
        return (
          <li key={opt}>
            <Link
              href={buildHref(locale, { [param]: next })}
              className={cn(
                'flex items-center rounded border px-3 py-2 text-sm font-medium transition-colors',
                isSelected
                  ? 'bg-primary-50 border-primary-700'
                  : 'border-neutral-300 hover:bg-neutral-100'
              )}
            >
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 rounded border-neutral-300 text-primary-700"
                readOnly
                checked={isSelected}
              />
              {textMap?.[opt] ?? opt}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function DateRangeForm({
  start,
  end,
  compact = false,
}: {
  start?: string;
  end?: string;
  compact?: boolean;
}) {
  const baseCls =
    'w-full rounded border border-neutral-300 bg-white px-2 py-1 text-sm';
  return (
    <form action="" className={cn('flex flex-col gap-2', compact && 'text-xs')}>
      <label className="flex flex-col">
        <span className="mb-1 text-xs font-semibold text-neutral-600">
          Start
        </span>
        <input
          name="start"
          type="date"
          defaultValue={start ?? ''}
          className={baseCls}
        />
      </label>
      <label className="flex flex-col">
        <span className="mb-1 text-xs font-semibold text-neutral-600">End</span>
        <input
          name="end"
          type="date"
          defaultValue={end ?? ''}
          className={baseCls}
        />
      </label>
      <Button
        variant="primary"
        className="mt-1"
        formAction={(formData) => {
          'use server';
          // Redirect with updated query
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
