import React from 'react';
import Link from 'next/link';
import { arrayOverlaps, desc, eq, inArray } from 'drizzle-orm';

import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import { cn } from '~/lib/utils';
import { buildHref, parseDate, toArray } from '~/lib/helpers';
import ImageHeader from '~/components/image-header';
import { Button } from '~/components/buttons';
import { ScrollArea } from '~/components/ui';
import { notificationDepartments } from '~/server/db/schema/notifications.schema';
import { type NotificationItem } from '~/server/actions/notifications';
import {
  DateRangeFilter,
  MultiCheckbox,
  SearchInput,
} from '~/components/inputs';
import { MobileFilters } from '~/components/mobile-filters';
import { FilterSection } from '~/components/filter-section';

import { NotificationsList } from '../../notifications/NotificationsList';

const DEGREE_LEVELS = ['ug', 'pg', 'phd'] as const;

const INITIAL_BATCH_SIZE = 20;

interface PageSearchParams {
  q?: string;
  department?: string | string[];
  degreeLevel?: string | string[];
  start?: string;
  end?: string;
}

export default async function AdmissionPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: PageSearchParams;
}) {
  const text = (await getTranslations(locale)).Admission;

  // Normalize multi-select params
  const departments = toArray(searchParams.department).filter(Boolean);
  const degreeLevels = toArray(searchParams.degreeLevel).filter(Boolean);
  const startDate = parseDate(searchParams.start);
  const endDate = parseDate(searchParams.end);
  const query = (searchParams.q ?? '').trim().toLowerCase();

  // Fetch departments for filter list
  const departmentRows = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });

  // Get department IDs for filtering
  const deptIds = departments.length
    ? departmentRows
        .filter((d) => departments.includes(d.urlName))
        .map((d) => d.id)
    : [];

  // Get notification IDs that match department filter via junction table
  let filteredNotificationIds: number[] | undefined;
  if (deptIds.length) {
    const deptMatches = await db
      .selectDistinct({
        notificationId: notificationDepartments.notificationId,
      })
      .from(notificationDepartments)
      .where(inArray(notificationDepartments.departmentId, deptIds));
    filteredNotificationIds = deptMatches.map((m) => m.notificationId);

    if (filteredNotificationIds.length === 0) {
      filteredNotificationIds = [-1]; // Use impossible ID to return no results
    }
  }

  // Build base query - always filter by 'admission' category
  let raw = await db.query.notifications.findMany({
    where: (n, { and, gte, lte }) =>
      and(
        // Always filter by admission category
        arrayOverlaps(n.categories, ['admission']),
        startDate ? gte(n.createdAt, startDate) : undefined,
        endDate ? lte(n.createdAt, endDate) : undefined,
        filteredNotificationIds
          ? inArray(n.id, filteredNotificationIds)
          : undefined,
        // Degree level (educationType) filter — single value at DB level
        degreeLevels.length === 1
          ? eq(n.educationType, degreeLevels[0] as 'ug' | 'pg' | 'phd')
          : undefined
      ),
    orderBy: (n) => [desc(n.createdAt)],
    limit: INITIAL_BATCH_SIZE + 1,
  });

  // For multiple degree levels, filter in memory
  if (degreeLevels.length > 1) {
    raw = raw.filter(
      (n) => n.educationType && degreeLevels.includes(n.educationType)
    );
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
    categories: n.categories,
    createdAt: n.createdAt.toISOString(),
  }));

  // Build filter params for the client component (for infinite scroll)
  const filterParams = {
    categories: ['admission'] as string[],
    departmentIds: deptIds.length ? deptIds : undefined,
    educationType: degreeLevels.length === 1 ? degreeLevels[0] : undefined,
    start: searchParams.start,
    end: searchParams.end,
    query: query || undefined,
  };

  return (
    <>
      <ImageHeader title={text.title} src="slideshow/image01.jpg" />

      <section className="container mb-0 mt-8 flex min-h-screen gap-12">
        {/* Desktop Sidebar - hidden on mobile */}
        <aside
          className={cn(
            'hidden w-[290px] shrink-0 flex-col gap-2 xl:flex',
            'sticky top-[88px] self-start'
          )}
        >
          <div className="flex items-baseline justify-between py-2">
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
                  department: [],
                  degreeLevel: [],
                  start: undefined,
                  end: undefined,
                })}
              >
                {text.clearAllFilters}
              </Link>
            </Button>
          </div>

          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="flex flex-col gap-2">
              <FilterSection label={text.filter.date}>
                <DateRangeFilter
                  locale={locale}
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

              <MultiCheckbox
                param="degreeLevel"
                options={DEGREE_LEVELS}
                selected={degreeLevels}
                locale={locale}
                textMap={text.degreeLevel}
                title={text.filter.degreeLevel}
                basePath="/academics/admission"
              />

              <MultiCheckbox
                param="department"
                options={departmentRows.map((d) => d.urlName)}
                selected={departments}
                locale={locale}
                textMap={Object.fromEntries(
                  departmentRows.map((d) => [d.urlName, d.name])
                )}
                title={text.filter.department}
                basePath="/academics/admission"
              />
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <section className="flex grow flex-col space-y-6">
          {/* Search + Mobile Filters */}
          <search className="w-full items-center gap-4 py-2 max-xl:flex">
            <SearchInput
              defaultValue={query}
              placeholder={text.searchPlaceholder}
              inputId="admission-search"
            />

            {/* Mobile Filters Button - shows on < xl */}
            <div className="flex-shrink-0">
              <MobileFilters
                locale={locale}
                basePath="/academics/admission"
                start={searchParams.start}
                end={searchParams.end}
                degreeLevel={{
                  options: DEGREE_LEVELS,
                  selected: degreeLevels,
                  textMap: text.degreeLevel,
                  title: text.filter.degreeLevel,
                }}
                department={{
                  selected: departments,
                  rows: departmentRows,
                  title: text.filter.department,
                }}
                text={{
                  filters: text.filter.title,
                  filterBy: text.filterBy,
                  clearAllFilters: text.clearAllFilters,
                  filter: text.filter,
                }}
              />
            </div>
          </search>

          {/* Admissions List */}
          <div className="flex-1 rounded-md">
            <NotificationsList
              initialItems={serializedItems}
              initialCursor={initialCursor}
              initialHasMore={hasMore}
              locale={locale}
              filterParams={filterParams}
              canManage={false}
              text={{
                noNotificationsFound: text.noNotificationsFound,
                noMoreNotifications: text.noMoreNotifications,
                edit: '',
                delete: '',
              }}
            />
          </div>
        </section>
      </section>
    </>
  );
}
