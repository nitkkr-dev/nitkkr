'use client';

import { useState } from 'react';
import Image from 'next/image';

import { env } from '~/lib/env/client';
import { cn } from '~/lib/utils';

interface FacultyImageProps {
  employeeId: string;
  facultyId: number;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  /** The image URL from the persons.img field */
  imageUrl?: string | null;
}

const PHOTO_EXTENSIONS = ['jpg', 'png', 'webp'] as const;
const FALLBACK_IMAGE = 'fallback/user-image.jpg';

export function FacultyImage({
  employeeId,
  facultyId,
  alt,
  className,
  width,
  height,
  fill,
  sizes,
  imageUrl,
}: FacultyImageProps) {
  const [currentExtIndex, setCurrentExtIndex] = useState(0);
  const [useFallback, setUseFallback] = useState(false);

  const handleError = () => {
    // If we have an imageUrl from DB and it fails, go to fallback
    if (imageUrl) {
      setUseFallback(true);
      return;
    }

    if (currentExtIndex < PHOTO_EXTENSIONS.length - 1) {
      // Try next extension
      setCurrentExtIndex((prev) => prev + 1);
    } else {
      // All extensions failed, use fallback
      setUseFallback(true);
    }
  };

  // Prioritize imageUrl from DB, then try legacy path, then fallback
  const imageSrc = useFallback
    ? FALLBACK_IMAGE
    : imageUrl
      ? imageUrl
      : `${env.NEXT_PUBLIC_AWS_S3_URL}/faculty-and-staff/${employeeId}/${facultyId}.${PHOTO_EXTENSIONS[currentExtIndex]}`;

  if (fill) {
    return (
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className={cn('object-cover', className)}
        sizes={sizes}
        onError={handleError}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width ?? 200}
      height={height ?? 200}
      className={cn('object-cover', className)}
      onError={handleError}
    />
  );
}
