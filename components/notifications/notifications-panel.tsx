import Link from 'next/link';
import { Suspense } from 'react';
import { arrayOverlaps, inArray } from 'drizzle-orm';

import { Button } from '~/components/buttons';
import Loading from '~/components/loading';
import { NotificationItemWithModal } from '~/components/notifications/notification-item-with-modal';
import { ScrollArea } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn, groupBy } from '~/lib/utils';
import { db, type notifications as notificationsTable } from '~/server/db';
import {
  notificationClubs,
  notificationDepartments,
  notificationHostels,
} from '~/server/db/schema';

type NotificationCategory =
  (typeof notificationsTable.categories.enumValues)[number];

type EducationType = 'ug' | 'pg' | 'phd';

export interface NotificationsPanelProps {
  locale: string;
  /** Filter by notification category (matches if notification has this category) */
  category?: NotificationCategory;
  /** Filter by club IDs (matches if notification belongs to any of these clubs) */
  clubIds?: number[];
  /** Filter by department IDs (matches if notification belongs to any of these departments) */
  departmentIds?: number[];
  /** Filter by hostel IDs (matches if notification belongs to any of these hostels) */
  hostelIds?: number[];
  /** Filter by education type (ug, pg, phd) */
  educationType?: EducationType;
  /** Filter notifications created on or after this date */
  startDate?: Date;
  /** Filter notifications created on or before this date */
  endDate?: Date;
  /** Custom className for the section container */
  className?: string;
  /** Whether to show the "View All" footer button */
  showViewAll?: boolean;
  /** Custom link for the "View All" button */
  viewAllHref?: string;
  /** Custom text for the "View All" button */
  viewAllText?: string;
}

export default async function NotificationsPanel({
  locale,
  category,
  clubIds,
  departmentIds,
  hostelIds,
  educationType,
  startDate,
  endDate,
  className,
  showViewAll = true,
  viewAllHref,
  viewAllText,
}: NotificationsPanelProps) {
  const text = (await getTranslations(locale)).Notifications;
  const filterKey = `${category}-${clubIds?.join(',')}-${departmentIds?.join(',')}-${hostelIds?.join(',')}-${educationType}-${startDate?.toISOString()}-${endDate?.toISOString()}`;

  return (
    <section
      className={cn(
        'flex h-full flex-col rounded-b-xl bg-background/[0.6]',
        'shadow-[0px_4px_0px_#C5291D_inset] lg:shadow-[0px_8px_0px_#C5291D_inset,_-12px_22px_60px_rgba(0,_43,_91,_0.15)]',
        'rounded-t-xl drop-shadow-2xl',
        'p-3 sm:p-4 md:p-5 lg:px-6 lg:pt-8 xl:px-8',
        className
      )}
    >
      <ScrollArea type="always" className="flex-1 pr-2 sm:pr-3 md:pr-4">
        <ol className="space-y-2 sm:space-y-4 md:space-y-6">
          <Suspense fallback={<Loading />} key={filterKey}>
            <NotificationsList
              locale={locale}
              category={category}
              clubIds={clubIds}
              departmentIds={departmentIds}
              hostelIds={hostelIds}
              educationType={educationType}
              startDate={startDate}
              endDate={endDate}
              noNotificationsText={text.noNotificationsFound}
            />
          </Suspense>
        </ol>
      </ScrollArea>

      {showViewAll && (
        <footer className="mt-auto flex shrink-0 justify-center py-2 sm:py-3">
          <Button
            asChild
            className="p-2 font-bold text-primary-700 lg:p-3 lg:text-lg xl:p-4"
            variant="ghost"
          >
            <Link href={viewAllHref ?? `/${locale}/noticeboard`}>
              {viewAllText ?? text.viewAll}
            </Link>
          </Button>
        </footer>
      )}
    </section>
  );
}

interface NotificationsListProps {
  locale: string;
  category?: NotificationCategory;
  clubIds?: number[];
  departmentIds?: number[];
  hostelIds?: number[];
  educationType?: EducationType;
  startDate?: Date;
  endDate?: Date;
  noNotificationsText: string;
}

const NotificationsList = async ({
  locale,
  category,
  clubIds,
  departmentIds,
  hostelIds,
  educationType,
  startDate,
  endDate,
  noNotificationsText,
}: NotificationsListProps) => {
  // Get notification IDs that match junction table filters
  let filteredNotificationIds: number[] | undefined;

  if (departmentIds?.length) {
    const deptMatches = await db
      .selectDistinct({
        notificationId: notificationDepartments.notificationId,
      })
      .from(notificationDepartments)
      .where(inArray(notificationDepartments.departmentId, departmentIds));
    const deptNotificationIds = deptMatches.map((m) => m.notificationId);

    if (deptNotificationIds.length === 0) {
      return (
        <li className="py-8 text-center text-neutral-900">
          {noNotificationsText}
        </li>
      );
    }
    filteredNotificationIds = deptNotificationIds;
  }

  if (clubIds?.length) {
    const clubMatches = await db
      .selectDistinct({ notificationId: notificationClubs.notificationId })
      .from(notificationClubs)
      .where(inArray(notificationClubs.clubId, clubIds));
    const clubNotificationIds = clubMatches.map((m) => m.notificationId);

    if (clubNotificationIds.length === 0) {
      return (
        <li className="py-8 text-center text-neutral-900">
          {noNotificationsText}
        </li>
      );
    }

    if (filteredNotificationIds) {
      filteredNotificationIds = filteredNotificationIds.filter((id) =>
        clubNotificationIds.includes(id)
      );
      if (filteredNotificationIds.length === 0) {
        return (
          <li className="py-8 text-center text-neutral-900">
            {noNotificationsText}
          </li>
        );
      }
    } else {
      filteredNotificationIds = clubNotificationIds;
    }
  }

  if (hostelIds?.length) {
    const hostelMatches = await db
      .selectDistinct({ notificationId: notificationHostels.notificationId })
      .from(notificationHostels)
      .where(inArray(notificationHostels.hostelId, hostelIds));
    const hostelNotificationIds = hostelMatches.map((m) => m.notificationId);

    if (hostelNotificationIds.length === 0) {
      return (
        <li className="py-8 text-center text-neutral-900">
          {noNotificationsText}
        </li>
      );
    }

    if (filteredNotificationIds) {
      filteredNotificationIds = filteredNotificationIds.filter((id) =>
        hostelNotificationIds.includes(id)
      );
      if (filteredNotificationIds.length === 0) {
        return (
          <li className="py-8 text-center text-neutral-900">
            {noNotificationsText}
          </li>
        );
      }
    } else {
      filteredNotificationIds = hostelNotificationIds;
    }
  }

  const notifications = (
    await db.query.notifications.findMany({
      where: (notification, { eq, and, gte, lte }) => {
        const conditions = [];

        if (category) {
          conditions.push(arrayOverlaps(notification.categories, [category]));
        }
        if (filteredNotificationIds) {
          conditions.push(inArray(notification.id, filteredNotificationIds));
        }
        if (educationType) {
          conditions.push(eq(notification.educationType, educationType));
        }
        if (startDate) {
          conditions.push(gte(notification.createdAt, startDate));
        }
        if (endDate) {
          conditions.push(lte(notification.createdAt, endDate));
        }

        return conditions.length > 0 ? and(...conditions) : undefined;
      },
      orderBy: (notification, { desc }) => [desc(notification.createdAt)],
    })
  ).map((notification) => ({
    ...notification,
    createdAt: notification.createdAt.toLocaleString(locale, {
      dateStyle: 'long',
      numberingSystem: locale === 'hi' ? 'deva' : 'roman',
    }),
  }));

  if (notifications.length === 0) {
    return (
      <li className="py-8 text-center text-neutral-900">
        {noNotificationsText}
      </li>
    );
  }

  return Array.from(groupBy(notifications, 'createdAt')).map(
    ([createdAt, notifications], index) => (
      <li key={index}>
        <h5 className="text-sm font-semibold sm:text-base md:text-lg">
          {createdAt as string}
        </h5>
        <ul className="space-y-2 py-2 sm:space-y-4 sm:py-4 md:space-y-6 md:py-6">
          {notifications.map(({ id, title }, index) => (
            <li key={index}>
              <NotificationItemWithModal
                id={id}
                title={title}
                locale={locale}
              />
            </li>
          ))}
        </ul>
        <hr className="opacity-20" />
      </li>
    )
  );
};
