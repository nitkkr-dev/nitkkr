'use server';

import {
  and,
  arrayOverlaps,
  desc,
  eq,
  gte,
  inArray,
  lt,
  lte,
} from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { canManageNotifications, getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';
import {
  notificationCategoryEnum,
  notificationClubs,
  notificationDepartments,
  notificationHostels,
  notifications,
} from '~/server/db/schema';

type Cat = (typeof notificationCategoryEnum.enumValues)[number];
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

  // Add category filter at DB level
  if (categories?.length) {
    conditions.push(
      arrayOverlaps(notifications.categories, categories as Cat[])
    );
  }

  // Fetch batch + 1 to check if there are more
  let results = await db.query.notifications.findMany({
    where: conditions.length ? and(...conditions) : undefined,
    orderBy: [desc(notifications.createdAt)],
    limit: BATCH_SIZE + 1,
  });

  // Apply text search in-memory (can't easily do full-text search in Drizzle)
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

// ==================== Notification Management (CCN Only) ====================

/**
 * Zod validation schema for notification data
 */
const notificationSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(256, 'Title must be 256 characters or less'),
  content: z.string().optional(),
  categories: z
    .array(z.enum(notificationCategoryEnum.enumValues))
    .min(1, 'At least one category is required'),
  notificationDate: z.string().optional(), // ISO date string for the notification date
  documents: z.array(z.string()).optional(), // Array of document URLs
});

export type NotificationFormData = z.infer<typeof notificationSchema>;

export interface ActionResult {
  success: boolean;
  message: string;
  id?: number;
}

/**
 * Add a new notification to the database.
 * Only authorized users (CCN) can add notifications.
 *
 * @param data - The notification data to add
 * @returns ActionResult indicating success or failure
 */
export async function addNotification(
  data: NotificationFormData
): Promise<ActionResult> {
  const session = await getServerAuthSession();

  if (!canManageNotifications(session)) {
    return { success: false, message: 'Not authorized to add notifications' };
  }

  const validation = notificationSchema.safeParse(data);
  if (!validation.success) {
    return {
      success: false,
      message: validation.error.errors[0]?.message ?? 'Invalid data',
    };
  }

  try {
    const notificationDate = validation.data.notificationDate
      ? new Date(validation.data.notificationDate)
      : new Date();

    const result = await db
      .insert(notifications)
      .values({
        title: validation.data.title,
        content: validation.data.content ?? null,
        categories: validation.data.categories,
        documents: validation.data.documents ?? [],
        createdAt: notificationDate,
        updatedAt: new Date(),
      })
      .returning({ id: notifications.id });

    revalidatePath('/');
    revalidatePath('/[locale]/notifications', 'page');

    return {
      success: true,
      message: 'Notification added successfully',
      id: result[0]?.id,
    };
  } catch (error) {
    console.error('Failed to add notification:', error);
    // Check for unique constraint violation
    if (error instanceof Error && error.message.includes('unique constraint')) {
      return {
        success: false,
        message: 'A notification with this title already exists',
      };
    }
    return { success: false, message: 'Failed to add notification' };
  }
}

/**
 * Update an existing notification in the database.
 * Only authorized users (CCN) can update notifications.
 *
 * @param id - The notification ID to update
 * @param data - The updated notification data
 * @returns ActionResult indicating success or failure
 */
export async function updateNotification(
  id: number,
  data: NotificationFormData
): Promise<ActionResult> {
  const session = await getServerAuthSession();

  if (!canManageNotifications(session)) {
    return {
      success: false,
      message: 'Not authorized to update notifications',
    };
  }

  const validation = notificationSchema.safeParse(data);
  if (!validation.success) {
    return {
      success: false,
      message: validation.error.errors[0]?.message ?? 'Invalid data',
    };
  }

  try {
    const updateData: {
      title: string;
      content: string | null;
      categories: typeof validation.data.categories;
      documents: string[];
      updatedAt: Date;
      createdAt?: Date;
    } = {
      title: validation.data.title,
      content: validation.data.content ?? null,
      categories: validation.data.categories,
      documents: validation.data.documents ?? [],
      updatedAt: new Date(),
    };

    // Only update createdAt if a new date was provided
    if (validation.data.notificationDate) {
      updateData.createdAt = new Date(validation.data.notificationDate);
    }

    const result = await db
      .update(notifications)
      .set(updateData)
      .where(eq(notifications.id, id))
      .returning({ id: notifications.id });

    if (result.length === 0) {
      return { success: false, message: 'Notification not found' };
    }

    revalidatePath('/');
    revalidatePath('/[locale]/notifications', 'page');

    return {
      success: true,
      message: 'Notification updated successfully',
      id: result[0]?.id,
    };
  } catch (error) {
    console.error('Failed to update notification:', error);
    if (error instanceof Error && error.message.includes('unique constraint')) {
      return {
        success: false,
        message: 'A notification with this title already exists',
      };
    }
    return { success: false, message: 'Failed to update notification' };
  }
}

/**
 * Delete a notification from the database.
 * Only authorized users (CCN) can delete notifications.
 *
 * @param id - The notification ID to delete
 * @returns ActionResult indicating success or failure
 */
export async function deleteNotification(id: number): Promise<ActionResult> {
  const session = await getServerAuthSession();

  if (!canManageNotifications(session)) {
    return {
      success: false,
      message: 'Not authorized to delete notifications',
    };
  }

  try {
    const result = await db
      .delete(notifications)
      .where(eq(notifications.id, id))
      .returning({ id: notifications.id });

    if (result.length === 0) {
      return { success: false, message: 'Notification not found' };
    }

    revalidatePath('/');
    revalidatePath('/[locale]/notifications', 'page');

    return { success: true, message: 'Notification deleted successfully' };
  } catch (error) {
    console.error('Failed to delete notification:', error);
    return { success: false, message: 'Failed to delete notification' };
  }
}

/**
 * Get a notification by ID for editing.
 * Only authorized users (CCN) can access this.
 *
 * @param id - The notification ID to fetch
 * @returns The notification data or null if not found/unauthorized
 */
export async function getNotificationForEdit(id: number): Promise<{
  id: number;
  title: string;
  content: string | null;
  categories: string[];
  documents: string[];
  createdAt: string;
} | null> {
  const session = await getServerAuthSession();

  if (!canManageNotifications(session)) {
    return null;
  }

  const notification = await db.query.notifications.findFirst({
    where: (n, { eq }) => eq(n.id, id),
    columns: {
      id: true,
      title: true,
      content: true,
      categories: true,
      documents: true,
      createdAt: true,
    },
  });

  if (!notification) return null;

  return {
    ...notification,
    createdAt: notification.createdAt.toISOString(),
  };
}
