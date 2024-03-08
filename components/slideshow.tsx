'use client';

import type { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

export default function Slideshow({
  images,
}: {
  images: { image: string; title?: string; subtitle?: string }[];
}) {
  const options: EmblaOptionsType = { loop: true, align: 'center' };

  return (
    <article className="overflow-x-hidden">
      <Carousel
        className="relative w-full"
        opts={options}
        onHoverKeyboardControls
        plugins={[
          Autoplay({
            delay: 7000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map(({ image, title, subtitle }, index) => (
            <CarouselItem key={index} className="relative max-h-screen">
              <figure>
                <Image
                  alt={`slide ${index + 1}`}
                  className="h-full"
                  height={1080}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  width={1920}
                  src={image}
                />
                {title && (
                  <figcaption className="container absolute inset-x-0 bottom-0 min-w-full bg-gradient-to-b from-transparent to-neutral-800 py-6">
                    <h4 className="text-neutral-100">{title}</h4>
                    <p className="text-neutral-100">{subtitle}</p>
                  </figcaption>
                )}
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="absolute left-[10%]  top-[50%] opacity-60 hover:opacity-100"
          variant={'default'}
        />
        <CarouselNext
          className="absolute right-[10%] top-[50%] opacity-60 hover:opacity-100"
          variant={'default'}
        />
      </Carousel>
    </article>
  );
}
