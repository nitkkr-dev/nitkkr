'use client';

import { useState } from 'react';

import { BouncyArrowButton } from '~/components/buttons';
import EventCard from '~/components/events/event-card';
import EventOverlay from '~/components/events/event-overlay';
import { cn } from '~/lib/utils';

interface EventItem {
  title: string;
  categories?: string[];
  startDate: string | Date;
  endDate?: string | Date;
  time?: string;
  description: string;
  images: string[];
  location?: string;
  id: number;
}

interface EventSectionProps {
  events: EventItem[];
  locale: string;
  showViewAll?: boolean;
  viewAllText?: string;
  viewAllHref?: string;
}

export default function EventSection({
  events,
  locale,
  viewAllText,
  viewAllHref,
  showViewAll = true,
}: EventSectionProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const handleEventClick = (event: EventItem) => {
    setSelectedEvent(event);
    setSelectedId(event.id);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center gap-6 max-lg:items-center sm:gap-6 lg:flex-row xl:gap-10">
        {events.map((event, index) => (
          <button
            key={event.id}
            onClick={() => handleEventClick(event)}
            className={index >= 2 ? 'hidden lg:block' : ''}
          >
            <EventCard
              title={event.title}
              startDate={event.startDate}
              image={event.images[0]}
            />
          </button>
        ))}
      </div>
      {showViewAll && (
        <BouncyArrowButton
          buttonProps={{
            className: cn(
              'px-2 py-1 md:px-4 md:py-2',
              'mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8',
              'inline-flex items-center gap-1 md:gap-2',
              'rounded-md border font-bold text-primary-700'
            ),
            variant: 'outline',
          }}
          linkProps={{ href: viewAllHref ?? '#' }}
          text={viewAllText ?? ''}
        />
      )}

      <EventOverlay
        eventId={selectedId}
        title={selectedEvent?.title ?? ''}
        categories={selectedEvent?.categories ?? []}
        startDate={selectedEvent?.startDate ?? ''}
        endDate={selectedEvent?.endDate ?? ''}
        time={selectedEvent?.time ?? ''}
        description={selectedEvent?.description ?? ''}
        images={selectedEvent?.images ?? []}
        location={selectedEvent?.location ?? ''}
        onClose={() => setSelectedId(null)}
        locale={locale}
      />
    </div>
  );
}
