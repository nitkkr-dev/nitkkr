'use server';

import { desc } from 'drizzle-orm';

import { db, type eventCategoryEnum } from '~/server/db';

type Cat = (typeof eventCategoryEnum.enumValues)[number];
const BATCH_SIZE = 15;

interface LoadMoreEventsParams {
  cursor: string; // ISO date string
  categories?: string[];
  start?: string;
  end?: string;
  query?: string;
}

export async function loadMoreEvents(params: LoadMoreEventsParams) {
  const { cursor, categories = [], start, end, query } = params;

  const startDate = start ? new Date(start) : undefined;
  const endDate = end ? new Date(end) : undefined;
  const cursorDate = new Date(cursor);

  // Fetch next batch: items with startDate < cursor (before the cursor)
  let raw = await db.query.events.findMany({
    where: (e, { and, gte, lte, lt }) =>
      and(
        lt(e.startDate, cursorDate.toISOString()), // Cursor-based pagination
        startDate ? gte(e.startDate, startDate.toISOString()) : undefined,
        endDate ? lte(e.startDate, endDate.toISOString()) : undefined
      ),
    orderBy: (e) => [desc(e.startDate)],
    limit: BATCH_SIZE + 1, // +1 to check if more exist
  });

  // Apply category filter (multi-select)
  if (categories.length) {
    raw = raw.filter((e) => categories.includes(e.category as Cat));
  }

  // Apply text search (title, description, location, category)
  if (query) {
    const q = query.toLowerCase();
    raw = raw.filter(
      (e) =>
        (e.title.toLowerCase().includes(q) ||
          e.description?.toLowerCase().includes(q)) ??
        e.location?.toLowerCase().includes(q) ??
        e.category.toLowerCase().includes(q)
    );
  }

  // Check if there are more items
  const hasMore = raw.length > BATCH_SIZE;
  const items = hasMore ? raw.slice(0, BATCH_SIZE) : raw;
  const nextCursor = hasMore
    ? items[items.length - 1]?.startDate ?? null
    : null;

  // Serialize for client
  return {
    items: items.map((e) => ({
      id: e.id,
      title: e.title,
      description: e.description,
      category: e.category,
      startDate: e.startDate,
      endDate: e.endDate,
      location: e.location,
      locationUrl: e.locationUrl,
      images: e.images,
    })),
    cursor: nextCursor,
    hasMore,
  };
}
