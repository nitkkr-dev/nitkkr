import React from 'react';
import Image from 'next/image';

import { Card } from '../ui';

interface EventCardProps {
  title: string;
  categories?: string[];
  startDate: string | Date;
  endDate?: string | Date;
  time?: string;
  description?: string;
  image: string;
  location?: string;
  id?: number;
  rows?: number;
}

export default function EventCard({ startDate, title, image }: EventCardProps) {
  return (
    <Card className="flex aspect-[420/382] w-[330px] flex-col overflow-hidden rounded-2xl border border-primary-700 shadow-lg sm:w-[420px] lg:w-[300px] xl:w-[420px]">
      {/* Image Section */}
      <div className="relative aspect-[3/2] w-full">
        <Image src={image} alt="Event Image" fill className="object-cover" />

        {/* Date Badge */}
        {startDate && (
          <div className="absolute right-0 top-0 min-w-32 rounded-bl-xl bg-primary-700 px-4 py-1 font-serif text-xl tracking-wide text-[#ffffff] opacity-80">
            {new Date(startDate).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
            })}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="bg-gray-100 flex flex-1 items-center justify-center px-5 py-4">
        <p className="line-clamp-3 text-center font-serif text-base leading-snug text-primary-700 sm:text-lg">
          {title}
        </p>
      </div>
    </Card>
  );
}
