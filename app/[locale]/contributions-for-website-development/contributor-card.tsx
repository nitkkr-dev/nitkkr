'use client';

import { useState } from 'react';
import Image from 'next/image';

import { cn } from '~/lib/utils';

interface ContributorCardProps {
  name: string;
  rollNumber: string;
  image?: string | null;
  rollNumberLabel: string;
}

const FALLBACK_IMAGE = 'fallback/user-image.jpg';

export default function ContributorCard({
  name,
  rollNumber,
  image,
  rollNumberLabel,
}: ContributorCardProps) {
  const [useFallback, setUseFallback] = useState(false);

  const imageSrc = useFallback || !image ? FALLBACK_IMAGE : image;

  return (
    <article
      className={cn(
        'border-primary-200 flex flex-col items-center rounded-xl border bg-neutral-50 p-4 shadow-sm transition-all duration-300 hover:border-primary-500 hover:shadow-lg',
        'w-full sm:w-64'
      )}
    >
      {/* Contributor Image */}
      <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-primary-100 shadow-md sm:h-32 sm:w-32">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 112px, 128px"
          onError={() => setUseFallback(true)}
        />
      </div>

      {/* Contributor Info */}
      <div className="text-center">
        <h4 className="mb-1 text-lg font-semibold text-primary-700 sm:text-xl">
          {name}
        </h4>
        <p className="text-sm text-neutral-600 sm:text-base">
          <span className="font-medium">{rollNumberLabel}:</span> {rollNumber}
        </p>
      </div>
    </article>
  );
}
