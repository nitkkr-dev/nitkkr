import React from 'react';

import type { CarouselProps } from '~/components/carousels';

// import type { CarouselProps } from '~/components/carousels';
import { LazyLoadBoundary } from './LazyLoadBoundary';
import { DynamicLazy } from './DynamicLazy';

// Match the actual EventItem type from event-section.tsx
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

interface EventSectionProps extends React.JSX.IntrinsicAttributes {
  events: EventItem[];
  locale: string;
  showViewAll?: boolean;
  viewAllText?: string;
  viewAllHref?: string;
}

const EventsGallery = DynamicLazy<EventSectionProps>(() =>
  import('../events/event-section').then((mod) => ({ default: mod.default }))
);

interface GalleryCarouselProps extends React.JSX.IntrinsicAttributes {
  carouselProps?: CarouselProps;
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
}

const GalleryBelowFold = DynamicLazy<GalleryCarouselProps>(() =>
  import('../carousels/gallery').then((mod) => ({
    default: mod.GalleryCarousel,
  }))
);

export function ExampleEventsGallery() {
  return (
    <LazyLoadBoundary
      trigger="interaction"
      fallback={<div>Loading Gallery...</div>}
    >
      <EventsGallery events={[]} locale="en" />
    </LazyLoadBoundary>
  );
  // All examples above demonstrate different trigger modes and usage patterns.
}
