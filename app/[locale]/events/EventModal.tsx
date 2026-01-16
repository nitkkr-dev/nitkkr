'use client';

import Image from 'next/image';
import { MdCalendarToday, MdLocationOn, MdOpenInNew } from 'react-icons/md';

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

  // Extract filename from URL for document button label (without extension)
  const getDocumentName = (url: string, index: number) => {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      const filename = pathname.split('/').pop();
      if (filename) {
        // Decode URI and remove extension
        const decoded = decodeURIComponent(filename);
        const nameWithoutExt = decoded.replace(/\.[^/.]+$/, '');
        return nameWithoutExt || decoded;
      }
    } catch {
      // If URL parsing fails, use generic name
    }
    return `Document ${index + 1}`;
  };

  return (
    <Dialog open={!!event} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="z-[100] w-[95vw] max-w-3xl overflow-hidden rounded-xl border border-primary-500 bg-background p-0 shadow-xl">
        {event && (
          <div className="flex flex-col p-2">
            {/* Title */}
            <h2 className="mt-2 text-center font-serif text-lg font-bold text-primary-700 sm:text-xl lg:text-2xl">
              {event.title}
            </h2>

            {/* Image Carousel */}
            {event.images.length > 0 && (
              <div className="w-full overflow-hidden rounded-lg">
                <GalleryCarousel className="w-full" itemClassName="basis-full">
                  {event.images.map((img, index) => (
                    <div
                      key={index}
                      className="relative h-48 w-full sm:h-56 md:h-64 lg:h-72"
                    >
                      <Image
                        alt={`Image ${index + 1} of ${event.title}`}
                        fill
                        src={img}
                        className="rounded-lg object-cover"
                        sizes="(max-width: 768px) 95vw, 768px"
                      />
                    </div>
                  ))}
                </GalleryCarousel>
              </div>
            )}

            {/* Description - Scrollable */}
            {event.description && (
              <ScrollArea className="mx-7 mt-4 max-h-32 sm:mx-10 lg:max-h-36">
                <p className="pl-3 pr-4 text-justify text-xs leading-relaxed text-neutral-900 sm:text-base">
                  {event.description}
                </p>
              </ScrollArea>
            )}

            {/* Date & Location */}
            <div className="mx-9 mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 pl-1 font-serif sm:mx-12 ">
              <span className="flex items-center gap-1.5 text-sm text-primary-300 sm:text-base lg:text-lg">
                <MdCalendarToday className="flex-shrink-0" />
                {formatDate(event.startDate, event.endDate)}
              </span>

              {event.location && (
                <span className="flex items-center gap-1.5 text-sm text-primary-300 sm:text-base lg:text-lg">
                  <MdLocationOn className="flex-shrink-0" />
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

            {/* Documents - Scrollable */}
            {event.documents && event.documents.length > 0 && (
              <ScrollArea className="mx-7 mt-2 max-h-12 sm:mx-10 sm:mt-4 sm:max-h-20">
                <div className="grid grid-cols-2 gap-2 pl-3 pr-4">
                  {event.documents.map((doc, index) => (
                    <a
                      key={index}
                      href={doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-primary-50 flex items-center justify-center gap-1.5 rounded border border-primary-300 bg-neutral-50 px-2 py-1.5 text-xs font-medium text-primary-700 transition-colors hover:border-primary-500 sm:px-3 sm:py-2 sm:text-sm"
                    >
                      <span className="truncate">
                        {getDocumentName(doc, index)}
                      </span>
                      <MdOpenInNew className="flex-shrink-0 text-sm" />
                    </a>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
