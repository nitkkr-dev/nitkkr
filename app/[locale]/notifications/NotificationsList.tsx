'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { groupBy } from '~/lib/utils';
import Loading from '~/components/loading';
import {
  deleteNotification,
  loadMoreNotifications,
  type LoadMoreParams,
  type NotificationItem,
} from '~/server/actions/notifications';

import { NotificationModal } from './NotificationModal';

interface NotificationsListProps {
  initialItems: NotificationItem[];
  initialCursor: string | null;
  initialHasMore: boolean;
  locale: string;
  filterParams: LoadMoreParams;
  /** Whether the current user can manage (add/edit/delete) notifications */
  canManage?: boolean;
  text: {
    noNotificationsFound: string;
    noMoreNotifications: string;
    edit?: string;
    delete?: string;
  };
}

export function NotificationsList({
  initialItems,
  initialCursor,
  initialHasMore,
  locale,
  filterParams,
  canManage = false,
  text,
}: NotificationsListProps) {
  const [items, setItems] = useState(initialItems);
  const [cursor, setCursor] = useState(initialCursor);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Reset when filter params or initial data change
  useEffect(() => {
    setItems(initialItems);
    setCursor(initialCursor);
    setHasMore(initialHasMore);
  }, [initialItems, initialCursor, initialHasMore]);

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this notification?')) return;

    setDeletingId(id);
    try {
      const result = await deleteNotification(id);
      if (result.success) {
        setItems((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Failed to delete notification:', error);
      alert('Failed to delete notification');
    } finally {
      setDeletingId(null);
    }
  };

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
              <li
                key={n.id}
                className="hover:bg-primary-50 group flex items-center justify-between gap-2 rounded px-2 py-1"
              >
                <button
                  onClick={() => setSelectedId(n.id)}
                  className="flex flex-1 items-start gap-2 text-left"
                >
                  <MdOutlineKeyboardArrowRight className="text-primary-600 mt-1 size-4 transition-transform group-hover:translate-x-1" />
                  <p className="truncate">{n.title}</p>
                </button>

                {/* Edit/Delete buttons - Only visible to CCN */}
                {canManage && (
                  <div className="flex shrink-0 items-center gap-2">
                    <Link
                      href={`/${locale}/notifications/edit/${n.id}`}
                      className="text-primary-600 hover:text-primary-800 rounded p-1 hover:bg-primary-100"
                      title={text.edit ?? 'Edit'}
                    >
                      <FaEdit className="size-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(n.id)}
                      disabled={deletingId === n.id}
                      className="text-red-600 hover:bg-red-100 hover:text-red-800 rounded p-1 disabled:opacity-50"
                      title={text.delete ?? 'Delete'}
                    >
                      <FaTrash className="size-4" />
                    </button>
                  </div>
                )}
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

      {/* Notification Modal */}
      <NotificationModal
        notificationId={selectedId}
        onClose={() => setSelectedId(null)}
        locale={locale}
      />
    </>
  );
}
