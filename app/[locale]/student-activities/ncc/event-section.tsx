'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { GalleryCarousel } from '~/components/carousels';
import { Card, CardContent, Dialog, DialogContent } from '~/components/ui';

interface NCCEvent {
  id: number;
  title: string;
  date: {
    day: number;
    month: string;
  };
  image: [string];
  description: string;
}

export default function EventsSection({
  events,
  s3BaseUrl,
}: {
  events: NCCEvent[];
  locale: string;
  s3BaseUrl: string;
}) {
  const [showAll, setShowAll] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<NCCEvent | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 767);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const visibleEvents = isMobile && !showAll ? events.slice(0, 2) : events;

  return (
    <>
      <ul className="w-fulls grid grid-cols-1 place-items-center gap-7 md:grid-cols-2 lg:grid-cols-3">
        {visibleEvents.map((event, i) => (
          <li key={i} className="w-auto">
            <div
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer"
            >
              <Card className="w-full max-w-sm overflow-hidden rounded-xl border-none shadow-md">
                {/* IMAGE SECTION */}
                <div className="relative h-48 w-full">
                  <img
                    src={`${s3BaseUrl}/${event.image[0]}`}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />

                  {/* DATE BADGE */}
                  <div className="absolute bottom-0 right-4 translate-y-1/2 bg-primary-700 bg-opacity-90 px-4 py-2 text-center text-neutral-50">
                    <p className="text-3xl font-bold leading-none">
                      {event.date.day}
                    </p>
                    <p className="text-sm uppercase">{event.date.month}</p>
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <CardContent className="space-y-1 bg-neutral-50 p-4 pt-4">
                  <h3 className="text-red-700 text-lg font-bold">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 text-sm">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </li>
        ))}
      </ul>

      <Dialog
        open={!!selectedEvent}
        onOpenChange={(open) => !open && setSelectedEvent(null)}
      >
        <DialogContent
          className="z-[100] mx-auto flex w-7/12 max-w-[90vw] flex-col items-center rounded-xl border border-primary-500 
bg-background p-8 shadow-xl md:max-w-[80vw]
lg:max-w-[1100px]"
        >
          {selectedEvent && (
            <>
              <h2 className="mb-4 w-full text-center text-3xl font-bold text-primary-700">
                {selectedEvent.title}
              </h2>

              <GalleryCarousel
                className="mb-6 w-full overflow-visible rounded-lg px-0"
                itemClassName="basis-full"
              >
                {selectedEvent.image.map((img, index) => (
                  <Image
                    alt={`Image ${index + 1} of ${selectedEvent.title}`}
                    height={400}
                    key={index}
                    src={`${s3BaseUrl}/${img}`}
                    width={1000}
                    className="h-40 w-full rounded-lg object-cover sm:h-60 md:h-80 lg:h-[400px]"
                  />
                ))}
              </GalleryCarousel>

              <p className="text-gray-700 w-full text-base leading-relaxed">
                {selectedEvent.description}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
      {isMobile && events.length > 2 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-md border border-primary-500 px-6 py-2 text-sm font-semibold text-primary-700 transition hover:bg-primary-100"
          >
            {showAll ? 'View Less' : 'View All'}
          </button>
        </div>
      )}
    </>
  );
}
