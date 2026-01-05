'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { groupBy } from '~/lib/utils';
import Loading from '~/components/loading';
import {
  loadMoreNotifications,
  type LoadMoreParams,
  type NotificationItem,
} from '~/server/actions/notifications';

interface NotificationsListProps {
  initialItems: NotificationItem[];
  initialCursor: string | null;
  initialHasMore: boolean;
  locale: string;
  filterParams: LoadMoreParams;
  text: {
    noNotificationsFound: string;
    noMoreNotifications: string;
  };
}

export function NotificationsList({
  initialItems,
  initialCursor,
  initialHasMore,
  locale,
  filterParams,
  text,
}: NotificationsListProps) {
  const [items, setItems] = useState(initialItems);
  const [cursor, setCursor] = useState(initialCursor);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isLoading, setIsLoading] = useState(false);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Reset when filter params or initial data change
  useEffect(() => {
    setItems(initialItems);
    setCursor(initialCursor);
    setHasMore(initialHasMore);
  }, [initialItems, initialCursor, initialHasMore]);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore || !cursor) return;

    setIsLoading(true);
    try {
      const result = await loadMoreNotifications({
        ...filterParams,
        cursor,
      });

      setItems((prev) => [...prev, ...result.items]);
      setCursor(result.nextCursor);
      setHasMore(result.hasMore);
    } catch (error) {
      console.error('Failed to load more notifications:', error);
    } finally {
      setIsLoading(false);
    }
  }, [cursor, hasMore, isLoading, filterParams]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && hasMore && !isLoading) {
          void loadMore();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [hasMore, isLoading, loadMore]);

  if (!items.length) {
    return (
      <p className="p-6 text-center font-semibold text-neutral-800">
        {text.noNotificationsFound}
      </p>
    );
  }

  // Format and group items
  const formattedItems = items.map((n) => ({
    ...n,
    createdAtStr: new Date(n.createdAt).toLocaleDateString(locale, {
      dateStyle: 'long',
      numberingSystem: locale === 'hi' ? 'deva' : 'roman',
    }),
  }));

  const grouped = Array.from(groupBy(formattedItems, 'createdAtStr'));

  return (
    <>
      {grouped.map(([createdAtStr, group], idx) => (
        <div key={idx} className="mb-6">
          <h5 className="mb-2 font-semibold text-primary-700">
            {createdAtStr}
          </h5>
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
      ))}

      {/* Load more trigger */}
      <div ref={loadMoreRef} className="h-10 w-full">
        {isLoading && <Loading />}
        {!hasMore && items.length > 0 && (
          <p className="text-center text-sm font-medium text-neutral-800">
            {text.noMoreNotifications}
          </p>
        )}
      </div>
    </>
  );
}
