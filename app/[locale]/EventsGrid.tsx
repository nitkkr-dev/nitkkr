'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Card, CardContent, CardDescription, CardTitle } from '~/components/ui';
import { cn } from '~/lib/utils';

import { EventModal } from './events/EventModal';
import type { EventItem } from './events/EventsList';

interface EventsGridProps {
  events: EventItem[];
  locale: string;
  s3Url: string;
}

export function EventsGrid({ events, locale, s3Url }: EventsGridProps) {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <>
      <ol className="z-elevated grid grid-cols-1 grid-rows-6 gap-6 lg:grid-cols-5 lg:grid-rows-3">
        {events.map((event, index) => (
          <li
            key={event.id}
            className={cn(
              index % 3 === 0 || index === 4
                ? 'lg:col-span-3'
                : 'lg:col-span-2',
              'h-[448px] cursor-pointer list-none'
            )}
            onClick={() => setSelectedEvent(event)}
          >
            <Card
              className={cn(
                'flex h-full flex-col border-0 bg-shade-light transition-shadow hover:shadow-lg'
              )}
            >
              <Image
                alt={event.title}
                className="h-64 w-full rounded-t-md object-cover"
                height={0}
                src={
                  event.images.length > 0
                    ? event.images[0]
                    : `${s3Url}/events/${event.startDate.slice(0, 4)}/${event.startDate.slice(5, 7)}/${event.title}/image01.jpg`
                }
                width={0}
              />
              <CardContent className="relative pt-3">
                <time className="absolute -top-10 right-8 flex h-20 w-16 flex-col items-center justify-center bg-primary-500 bg-opacity-90 text-shade-light">
                  <span className="font-serif text-2xl">
                    {new Intl.DateTimeFormat('en-GB', {
                      day: '2-digit',
                    }).format(new Date(event.startDate))}
                  </span>
                  <span className="font-serif text-xl">
                    {new Intl.DateTimeFormat('en-GB', { month: 'short' })
                      .format(new Date(event.startDate))
                      .substring(0, 3)
                      .toUpperCase()}
                  </span>
                </time>
                <CardTitle className="mr-20 lg:text-2xl">
                  {event.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {event.description}
                </CardDescription>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        locale={locale}
      />
    </>
  );
}
