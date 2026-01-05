'use client';

import { useState } from 'react';
import Image from 'next/image';

import { GalleryCarousel } from '~/components/carousels';
import {
  Card,
  CardContent,
  Dialog,
  DialogClose,
  DialogContent,
} from '~/components/ui';

interface ClubEvent {
  id: number;
  title: string;
  date: string;
  image: [string];
  description: string;
}

export default function EventsSection({
  events,
  locale,
  display_name,
  s3BaseUrl,
}: {
  events: ClubEvent[];
  locale: string;
  display_name: string;
  s3BaseUrl: string;
}) {
  const [selectedEvent, setSelectedEvent] = useState<ClubEvent | null>(null);

  return (
    <>
      <ul className="w-fulls grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, i) => (
          <li key={i} className="w-auto">
            <div
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer"
            >
              <Card className="flex h-64 w-full flex-col justify-between border-none">
                <CardContent
                  className="relative flex h-full w-full justify-center rounded-lg bg-neutral-700 bg-cover bg-center p-4 bg-blend-overlay"
                  style={{
                    backgroundImage: `url(${s3BaseUrl}/${event.image[0]})`,
                  }}
                >
                  <h1 className="my-auto text-4xl font-bold text-background">
                    {event.title}
                  </h1>
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
          className="F z-[100] mx-4 mx-auto flex max-w-[90vw] flex-col items-center rounded-xl border border-primary-500 
  bg-background p-8 shadow-xl md:max-w-[80vw]
  lg:max-w-[1100px]"
        >
          {selectedEvent && (
            <>
              <h2 className="text-primary-800 mb-4 self-center text-3xl font-bold">
                {selectedEvent.title}
              </h2>

              <GalleryCarousel
                className="mb-6 w-full overflow-hidden rounded-lg"
                itemClassName=""
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

              <p className="text-gray-700 text-base leading-relaxed">
                {selectedEvent.description}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
