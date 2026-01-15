import Link from 'next/link';
import { Suspense } from 'react';

import { Button } from '~/components/buttons';
import Loading from '~/components/loading';
import { NotificationItemWithModal } from '~/components/notifications/notification-item-with-modal';
import { ScrollArea } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn, groupBy } from '~/lib/utils';
import { db, type notifications as notificationsTable } from '~/server/db';

type NotificationCategory =
  (typeof notificationsTable.category.enumValues)[number];

type EducationType = 'ug' | 'pg' | 'phd';

export interface NotificationsPanelProps {
  locale: string;
  /** Filter by notification category */
  category?: NotificationCategory;
  /** Filter by club ID */
  clubId?: number;
  /** Filter by department ID */
  departmentId?: number;
  /** Filter by hostel ID */
  hostelId?: number;
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
  clubId,
  departmentId,
  hostelId,
  educationType,
  startDate,
  endDate,
  className,
  showViewAll = true,
  viewAllHref,
  viewAllText,
}: NotificationsPanelProps) {
  const text = (await getTranslations(locale)).Notifications;
  const filterKey = `${category}-${clubId}-${departmentId}-${hostelId}-${educationType}-${startDate?.toISOString()}-${endDate?.toISOString()}`;

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
              clubId={clubId}
              departmentId={departmentId}
              hostelId={hostelId}
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
  clubId?: number;
  departmentId?: number;
  hostelId?: number;
  educationType?: EducationType;
  startDate?: Date;
  endDate?: Date;
  noNotificationsText: string;
}

const NotificationsList = async ({
  locale,
  category,
  clubId,
  departmentId,
  hostelId,
  educationType,
  startDate,
  endDate,
  noNotificationsText,
}: NotificationsListProps) => {
  const notifications = (
    await db.query.notifications.findMany({
      where: (notification, { eq, and, gte, lte }) => {
        const conditions = [];

        if (category) {
          conditions.push(eq(notification.category, category));
        }
        if (clubId !== undefined) {
          conditions.push(eq(notification.clubId, clubId));
        }
        if (departmentId !== undefined) {
          conditions.push(eq(notification.departmentId, departmentId));
        }
        if (hostelId !== undefined) {
          conditions.push(eq(notification.hostelId, hostelId));
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
