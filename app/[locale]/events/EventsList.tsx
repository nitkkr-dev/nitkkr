'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MdCalendarToday, MdLocationOn } from 'react-icons/md';

import { NoResultStatus } from '~/components/status';
import { loadMoreEvents } from '~/server/actions';

import { EventModal } from './EventModal';

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
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
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
      const data = await loadMoreEvents({
        cursor,
        categories: filterParams.categories,
        start: filterParams.start,
        end: filterParams.end,
        query: filterParams.query,
      });

      setItems((prev) => [...prev, ...data.items]);
      setCursor(data.cursor);
      setHasMore(data.hasMore);
    } catch (error) {
      console.error('Failed to load more events:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, cursor, filterParams]);

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
            className="cursor-pointer overflow-hidden rounded-lg border-[1px] border-primary-500 bg-neutral-50 transition-shadow hover:shadow-md"
            key={event.id}
            onClick={() => setSelectedEvent(event)}
          >
            <div className="flex items-stretch gap-3 p-3 sm:gap-6 sm:p-5">
              <main className="flex min-w-0 flex-1 flex-col">
                <h4 className="mb-1 font-serif text-base font-bold tracking-wide text-primary-700 sm:mb-2 sm:text-2xl">
                  {event.title}
                </h4>
                {event.description && (
                  <p className="mb-2 line-clamp-3 text-justify text-xs text-neutral-900 sm:mb-3 sm:text-lg">
                    {event.description}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 sm:gap-x-4">
                  <span className="flex items-center gap-1 font-serif text-xs text-primary-300 sm:gap-1.5 sm:text-lg">
                    <MdCalendarToday className="text-sm sm:text-lg" />
                    {formatDate(event.startDate, event.endDate)}
                  </span>
                  {event.location && (
                    <span className="flex items-center gap-1 font-serif text-xs text-primary-300 sm:gap-1.5 sm:text-lg">
                      <MdLocationOn className="text-sm sm:text-lg" />
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
                <div className="relative w-28 flex-shrink-0 sm:w-56">
                  <Image
                    alt={event.title}
                    className="absolute inset-0 h-full w-full rounded object-cover"
                    fill
                    src={event.images[0]}
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>

      {/* Loader / End message */}
      <div ref={loaderRef} className="py-4 text-center">
        {isLoading && (
          <div className="flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary-700 border-t-transparent"></div>
          </div>
        )}
        {!hasMore && items.length > 0 && (
          <p className="text-sm text-neutral-900 sm:text-base">
            {text.noMoreEvents}
          </p>
        )}
      </div>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        locale={locale}
      />
    </>
  );
}
