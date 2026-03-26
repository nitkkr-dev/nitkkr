import React from 'react';
import {
  MdAccessTime,
  MdCalendarToday,
  MdGroup,
  MdLocationOn,
} from 'react-icons/md';
import Image from 'next/image';

import { Dialog, DialogContent } from '../ui';
import { GalleryCarousel } from '../carousels';

interface EventOverlayProps {
  eventId: number | null;
  title: string;
  categories: string[];
  startDate: string | Date;
  endDate: string | Date;
  time: string;
  description: string;
  images: string[];
  location: string;
  onClose: () => void;
  locale: string;
}

export default function EventOverlay({
  eventId,
  title,
  categories,
  startDate,
  endDate,
  time,
  description,
  images,
  location,
  onClose,
}: EventOverlayProps) {
  return (
    <Dialog open={eventId !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="border-red-200 max-h-[80svh] w-[95vw] max-w-[900px] rounded-lg border bg-[#f4efe8] p-4 px-6">
        {/* Header */}
        <div className="sm:items-start sm:justify-between">
          <h2 className="text-red-600 mb-0 font-serif text-xl font-bold sm:text-2xl">
            {title}
          </h2>
        </div>

        {/* Image Carousel */}
        {images.length > 0 && (
          <div className="w-full overflow-hidden rounded-lg">
            <GalleryCarousel className="w-full" itemClassName="basis-full">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative h-40 w-full sm:h-52 md:h-64 lg:h-72"
                >
                  <Image
                    alt={`Image ${index + 1} of ${title}`}
                    fill
                    src={img}
                    className="rounded-lg object-cover"
                    sizes="(max-width: 640px) 95vw, (max-width: 1024px) 80vw, 900px"
                  />
                </div>
              ))}
            </GalleryCarousel>
          </div>
        )}

        {/* Description */}
        <div className="text-gray-700 max-h-[150px] overflow-y-auto pr-2 text-sm leading-relaxed sm:text-base">
          {description}
        </div>

        {/* Event Info */}
        <div className="flex flex-col gap-3 sm:gap-1">
          <div className="flex flex-col gap-3 text-sm font-medium text-primary-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 sm:text-base">
            {startDate && (
              <div className="flex items-center gap-2">
                <MdCalendarToday size={18} />
                <span>
                  {new Date(startDate).toDateString()}
                  {endDate ? ` - ${new Date(endDate).toDateString()}` : ''}
                </span>
              </div>
            )}

            <div className="flex flex-row gap-6">
              {location && (
                <div className="flex items-center gap-2">
                  <MdLocationOn size={18} />
                  <span className="break-words">{location}</span>
                </div>
              )}

              {time && (
                <div className="flex items-center gap-2">
                  <MdAccessTime size={18} />
                  {time}
                </div>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className=" flex flex-wrap items-center gap-2 text-sm font-medium text-primary-300 sm:text-base">
            <MdGroup size={18} />
            <span className="break-words">{categories.join(', ')}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
