'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MdCalendarToday, MdLocationOn } from 'react-icons/md';

import { NoResultStatus } from '~/components/status';

export interface EventItem {
  id: number;
  title: string;
  description: string | null;
  category: string;
  startDate: string;
  endDate: string | null;
  location: string | null;
  locationUrl: string | null;
  images: string[];
}

interface FilterParams {
  categories?: string[];
  start?: string;
  end?: string;
  query?: string;
}

interface EventsApiResponse {
  items: EventItem[];
  cursor: string | null;
  hasMore: boolean;
}

interface EventsListProps {
  initialItems: EventItem[];
  initialCursor: string | null;
  initialHasMore: boolean;
  locale: string;
  filterParams: FilterParams;
  text: {
    noEventsFound: string;
    noMoreEvents: string;
  };
}

export function EventsList({
  initialItems,
  initialCursor,
  initialHasMore,
  locale,
  filterParams,
  text,
}: EventsListProps) {
  const [items, setItems] = useState<EventItem[]>(initialItems);
  const [cursor, setCursor] = useState<string | null>(initialCursor);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  // Reset when filter params change
  useEffect(() => {
    setItems(initialItems);
    setCursor(initialCursor);
    setHasMore(initialHasMore);
  }, [initialItems, initialCursor, initialHasMore]);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore || !cursor) return;

    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      params.set('cursor', cursor);
      if (filterParams.query) params.set('q', filterParams.query);
      if (filterParams.start) params.set('start', filterParams.start);
      if (filterParams.end) params.set('end', filterParams.end);
      if (filterParams.categories?.length) {
        filterParams.categories.forEach((c) => params.append('category', c));
      }

      const res = await fetch(`/${locale}/events/api?${params.toString()}`);
      const data = (await res.json()) as EventsApiResponse;

      setItems((prev) => [...prev, ...data.items]);
      setCursor(data.cursor);
      setHasMore(data.hasMore);
    } catch (error) {
      console.error('Failed to load more events:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, cursor, filterParams, locale]);

  // Infinite scroll observer
  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          void loadMore();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(loader);
    return () => observer.disconnect();
  }, [loadMore, hasMore, isLoading]);

  if (items.length === 0) {
    return <NoResultStatus locale={locale} />;
  }

  const formatDate = (startDate: string, endDate: string | null) => {
    const start = new Date(startDate);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };

    if (!endDate) {
      return start.toLocaleDateString(locale, options);
    }

    const end = new Date(endDate);
    return `${start.toLocaleDateString(locale, options)} - ${end.toLocaleDateString(locale, options)}`;
  };

  return (
    <>
      <ol className="space-y-4">
        {items.map((event) => (
          <li
            className="overflow-hidden rounded-lg border-[1px] border-primary-500 bg-neutral-50"
            key={event.id}
          >
            <Link
              className="flex gap-4 p-4 sm:gap-6 sm:p-5"
              href={`/${locale}/events/${event.id}`}
            >
              <main className="flex flex-1 flex-col">
                <h4 className="mb-2 font-serif text-xl font-bold tracking-wide text-primary-700 sm:text-2xl">
                  {event.title}
                </h4>
                {event.description && (
                  <p className="mb-3 line-clamp-3 text-justify text-sm text-neutral-900 sm:text-lg">
                    {event.description}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="flex items-center gap-1.5 font-serif text-lg text-primary-300">
                    <MdCalendarToday className="text-lg" />
                    {formatDate(event.startDate, event.endDate)}
                  </span>
                  {event.location && (
                    <span className="flex items-center gap-1.5 font-serif text-lg text-primary-300">
                      <MdLocationOn className="text-lg" />
                      {event.locationUrl ? (
                        <a
                          href={event.locationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {event.location}
                        </a>
                      ) : (
                        event.location
                      )}
                    </span>
                  )}
                </div>
              </main>

              {event.images.length > 0 && (
                <Image
                  alt={event.title}
                  className="h-24 w-28 flex-shrink-0 rounded object-cover sm:h-40 sm:w-56"
                  height={160}
                  src={event.images[0]}
                  width={224}
                />
              )}
            </Link>
          </li>
        ))}
      </ol>

      {/* Loader / End message */}
      <div ref={loaderRef} className="py-4 text-center">
        {isLoading && (
          <div className="flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-700 border-t-transparent"></div>
          </div>
        )}
        {!hasMore && items.length > 0 && (
          <p className="text-sm text-neutral-500">{text.noMoreEvents}</p>
        )}
      </div>
    </>
  );
}
