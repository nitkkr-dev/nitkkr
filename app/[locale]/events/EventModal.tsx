'use client';

import Image from 'next/image';
import { MdAccessTime, MdCalendarToday, MdLocationOn } from 'react-icons/md';

import { GalleryCarousel } from '~/components/carousels';
import { Dialog, DialogContent, ScrollArea } from '~/components/ui';

import type { EventItem } from './EventsList';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
  locale: string;
}

export function EventModal({ event, onClose, locale }: EventModalProps) {
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
    <Dialog open={!!event} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="z-[100] flex max-h-[90vh] max-w-[95vw] flex-col overflow-y-auto rounded-xl border border-primary-500 
          bg-background p-1 shadow-xl sm:p-2 md:max-w-[80vw] lg:max-w-[800px] lg:p-4"
      >
        {event && (
          <>
            {/* Title */}
            <h2 className="mb-1 mt-6 break-words px-8 text-center font-serif text-lg font-bold text-primary-700 sm:mb-2 sm:mt-2 sm:px-4 sm:text-2xl lg:text-3xl">
              {event.title}
            </h2>

            {/* Image Carousel */}
            {event.images.length > 0 && (
              <GalleryCarousel
                className="mb-2 w-full overflow-hidden rounded-lg px-6 sm:mb-4 lg:px-10"
                itemClassName="basis-full"
              >
                {event.images.map((img, index) => (
                  <Image
                    alt={`Image ${index + 1} of ${event.title}`}
                    height={400}
                    key={index}
                    src={img}
                    width={900}
                    className="h-48 w-full rounded-lg object-cover sm:h-56 md:h-64 lg:h-72"
                  />
                ))}
              </GalleryCarousel>
            )}

            {/* Description */}
            {event.description && (
              <div className="h-40 px-4 sm:h-40 sm:px-9 lg:h-48">
                <ScrollArea className="h-full">
                  <p className="pl-4 pr-4 text-justify text-sm leading-relaxed text-neutral-900 sm:text-base lg:text-lg">
                    {event.description}
                  </p>
                </ScrollArea>
              </div>
            )}

            {/* Date & Location */}
            <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-2 px-8 font-serif sm:gap-x-6">
              <span className="flex items-center gap-2 text-sm text-primary-300 sm:text-lg">
                <MdCalendarToday className="text-lg" />
                {formatDate(event.startDate, event.endDate)}
              </span>

              {event.location && (
                <span className="flex items-center gap-2 text-sm text-primary-300 sm:text-lg">
                  <MdLocationOn className="text-lg" />
                  {event.locationUrl ? (
                    <a
                      href={event.locationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {event.location}
                    </a>
                  ) : (
                    event.location
                  )}
                </span>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
