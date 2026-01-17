'use server';

import { and, desc, gte, inArray, lt, lte } from 'drizzle-orm';
import { redirect } from 'next/navigation';

import { db } from '~/server/db';
import {
  notificationClubs,
  notificationDepartments,
  notificationHostels,
  notifications,
} from '~/server/db/schema';

const BATCH_SIZE = 20;

export interface NotificationItem {
  id: number;
  title: string;
  categories: string[];
  createdAt: string;
}

export interface LoadMoreResult {
  items: NotificationItem[];
  nextCursor: string | null;
  hasMore: boolean;
}

export interface LoadMoreParams {
  cursor?: string;
  categories?: string[];
  departments?: string[];
  departmentIds?: number[];
  clubIds?: number[];
  hostelIds?: number[];
  start?: string;
  end?: string;
  query?: string;
}

export async function loadMoreNotifications(
  params: LoadMoreParams
): Promise<LoadMoreResult> {
  const {
    cursor,
    categories,
    departmentIds,
    clubIds,
    hostelIds,
    start,
    end,
    query,
  } = params;

  const cursorDate = cursor ? new Date(cursor) : undefined;
  const startDate = start ? new Date(start) : undefined;
  const endDate = end ? new Date(end) : undefined;

  // Build base conditions
  const conditions = [];
  if (startDate) conditions.push(gte(notifications.createdAt, startDate));
  if (endDate) conditions.push(lte(notifications.createdAt, endDate));
  if (cursorDate) conditions.push(lt(notifications.createdAt, cursorDate));

  // Get notification IDs that match department/club/hostel filters via junction tables
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
      return { items: [], nextCursor: null, hasMore: false };
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
      return { items: [], nextCursor: null, hasMore: false };
    }

    // Intersect with existing filter
    if (filteredNotificationIds) {
      filteredNotificationIds = filteredNotificationIds.filter((id) =>
        clubNotificationIds.includes(id)
      );
      if (filteredNotificationIds.length === 0) {
        return { items: [], nextCursor: null, hasMore: false };
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
      return { items: [], nextCursor: null, hasMore: false };
    }

    // Intersect with existing filter
    if (filteredNotificationIds) {
      filteredNotificationIds = filteredNotificationIds.filter((id) =>
        hostelNotificationIds.includes(id)
      );
      if (filteredNotificationIds.length === 0) {
        return { items: [], nextCursor: null, hasMore: false };
      }
    } else {
      filteredNotificationIds = hostelNotificationIds;
    }
  }

  // Add junction table filter to conditions
  if (filteredNotificationIds) {
    conditions.push(inArray(notifications.id, filteredNotificationIds));
  }

  // Fetch batch + 1 to check if there are more
  let results = await db.query.notifications.findMany({
    where: conditions.length ? and(...conditions) : undefined,
    orderBy: [desc(notifications.createdAt)],
    limit: BATCH_SIZE + 1,
  });

  // Apply in-memory filters (category, text search)
  if (categories?.length) {
    results = results.filter((n) =>
      n.categories.some((cat) => categories.includes(cat))
    );
  }

  if (query) {
    const lowerQuery = query.toLowerCase();
    results = results.filter(
      (n) =>
        n.title.toLowerCase().includes(lowerQuery) ||
        n.content?.toLowerCase().includes(lowerQuery)
    );
  }

  const hasMore = results.length > BATCH_SIZE;
  const items = hasMore ? results.slice(0, BATCH_SIZE) : results;
  const nextCursor = hasMore
    ? items[items.length - 1]?.createdAt.toISOString()
    : null;

  // Serialize for client
  const serializedItems: NotificationItem[] = items.map((n) => ({
    id: n.id,
    title: n.title,
    categories: n.categories,
    createdAt: n.createdAt.toISOString(),
  }));

  return {
    items: serializedItems,
    nextCursor,
    hasMore,
  };
}

// Full notification details for modal
export interface NotificationDetails {
  id: number;
  title: string;
  content: string | null;
  categories: string[];
  documents: string[];
  createdAt: string;
}

export async function getNotificationById(
  id: number
): Promise<NotificationDetails | null> {
  const notification = await db.query.notifications.findFirst({
    where: (n, { eq }) => eq(n.id, id),
  });

  if (!notification) return null;

  return {
    id: notification.id,
    title: notification.title,
    content: notification.content,
    categories: notification.categories,
    documents: notification.documents,
    createdAt: notification.createdAt.toISOString(),
  };
}

export async function applyDateFilter(formData: FormData) {
  const locale = formData.get('locale')?.toString() ?? 'en';
  const startDay = formData.get('start-day')?.toString();
  const startMonth = formData.get('start-month')?.toString();
  const startYear = formData.get('start-year')?.toString();
  const endDay = formData.get('end-day')?.toString();
  const endMonth = formData.get('end-month')?.toString();
  const endYear = formData.get('end-year')?.toString();

  const categories = formData.getAll('category') as string[];
  const departments = formData.getAll('department') as string[];
  const q = formData.get('q')?.toString();

  const startVal =
    startYear && startMonth && startDay
      ? `${startYear}-${startMonth.padStart(2, '0')}-${startDay.padStart(2, '0')}`
      : undefined;
  const endVal =
    endYear && endMonth && endDay
      ? `${endYear}-${endMonth.padStart(2, '0')}-${endDay.padStart(2, '0')}`
      : undefined;

  const params = new URLSearchParams();
  if (startVal) params.set('start', startVal);
  if (endVal) params.set('end', endVal);
  if (q) params.set('q', q);
  categories.forEach((c) => params.append('category', c));
  departments.forEach((d) => params.append('department', d));

  const qs = params.toString();
  redirect(`/${locale}/notifications${qs ? `?${qs}` : ''}`);
}
