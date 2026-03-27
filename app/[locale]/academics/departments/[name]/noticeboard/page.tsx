// Revalidate every 5 minutes
export const revalidate = 300;

import Link from 'next/link';
import React from 'react';
import { desc, inArray } from 'drizzle-orm';
import { FaPlus } from 'react-icons/fa';

import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import { cn } from '~/lib/utils';
import { parseDate } from '~/lib/helpers';
import ImageHeader from '~/components/image-header';
import { Button } from '~/components/buttons';
import { ScrollArea } from '~/components/ui';
import { DateRangeFilter, SearchInput } from '~/components/inputs';
import { FilterSection } from '~/components/filter-section';
import { notificationDepartments } from '~/server/db/schema/notifications.schema';
import { getHodDepartmentId, getServerAuthSession } from '~/server/auth';
import { type NotificationItem } from '~/server/actions/notifications';
import { NotificationsList } from '~/app/notifications/NotificationsList';

const INITIAL_BATCH_SIZE = 20;

interface PageSearchParams {
  q?: string;
  start?: string;
  end?: string;
}

export default async function DepartmentNoticeboardPage({
  params: { locale, name },
  searchParams,
}: {
  params: { locale: string; name: string };
  searchParams: PageSearchParams;
}) {
  const text = (await getTranslations(locale)).Notifications;

  const session = await getServerAuthSession();
  const hodDepartmentId = await getHodDepartmentId(session);

  const query = (searchParams.q ?? '').trim().toLowerCase();
  const startDate = parseDate(searchParams.start);
  const endDate = parseDate(searchParams.end);

  // Get department
  const department = await db.query.departments.findFirst({
    where: (d, { eq }) => eq(d.urlName, name),
    columns: { id: true, name: true, urlName: true },
  });

  if (!department) return null;

  // HoD can manage notifications
  const canManage = hodDepartmentId === department.id;

  // Get notification IDs for this department
  const deptMatches = await db
    .selectDistinct({
      notificationId: notificationDepartments.notificationId,
    })
    .from(notificationDepartments)
    .where(inArray(notificationDepartments.departmentId, [department.id]));

  const notificationIds = deptMatches.map((m) => m.notificationId);

  let raw = await db.query.notifications.findMany({
    where: (n, { and, gte, lte }) =>
      and(
        notificationIds.length ? inArray(n.id, notificationIds) : undefined,
        startDate ? gte(n.createdAt, startDate) : undefined,
        endDate ? lte(n.createdAt, endDate) : undefined
      ),
    orderBy: (n) => [desc(n.createdAt)],
    limit: INITIAL_BATCH_SIZE + 1,
  });

  // Search
  if (query) {
    raw = raw.filter(
      (n) =>
        n.title.toLowerCase().includes(query) ||
        n.content?.toLowerCase().includes(query)
    );
  }

  const hasMore = raw.length > INITIAL_BATCH_SIZE;
  const initialItems = hasMore ? raw.slice(0, INITIAL_BATCH_SIZE) : raw;

  const initialCursor = hasMore
    ? initialItems[initialItems.length - 1]?.createdAt.toISOString() ?? null
    : null;

  const serializedItems: NotificationItem[] = initialItems.map((n) => ({
    id: n.id,
    title: n.title,
    categories: n.categories,
    createdAt: n.createdAt.toISOString(),
  }));

  const filterParams = {
    departmentIds: [department.id],
    start: searchParams.start,
    end: searchParams.end,
    query: query || undefined,
  };

  return (
    <>
      <ImageHeader
        title={`${department.name} Noticeboard`}
        src="slideshow/image01.jpg"
      />

      {/* Add Notification Button for HoD */}
      {canManage && (
        <div className="container mt-4 flex justify-end">
          <Button asChild className="gap-2 px-4 py-2">
            <Link
              href={`/${locale}/academics/departments/${department.urlName}/noticeboard/add`}
            >
              <FaPlus className="size-3" />
              {text.addNotification}
            </Link>
          </Button>
        </div>
      )}

      <section className="container mb-0 mt-8 flex gap-12">
        {/* Sidebar */}
        <aside
          className={cn(
            'hidden w-[290px] shrink-0 flex-col gap-2 xl:flex',
            'sticky top-[88px] self-start'
          )}
        >
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="flex flex-col gap-2">
              <FilterSection locale={locale} label={text.filter.date}>
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
            </div>
          </ScrollArea>
        </aside>

        {/* Main */}
        <section className="flex grow flex-col space-y-6">
          {/* Search */}
          <search className="w-full items-center gap-4 py-2 max-xl:flex">
            <SearchInput
              defaultValue={query}
              placeholder={text.searchPlaceholder}
              inputId="notification-search"
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
              canManage={canManage}
              editBasePath={`/${locale}/academics/departments/${department.urlName}/noticeboard/edit`}
              text={{
                noNotificationsFound: text.noNotificationsFound,
                noMoreNotifications: text.noMoreNotifications,
                edit: text.edit,
                delete: text.delete,
              }}
            />
          </div>
        </section>
      </section>
    </>
  );
}
