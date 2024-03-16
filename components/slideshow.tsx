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
    <article className="relative overflow-x-hidden">
      <Carousel
        className=" w-full"
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
                  className="h-full w-full object-cover"
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

        <section className="container absolute inset-0 top-[50%] flex h-0 min-w-full justify-between">
          <CarouselPrevious
            className="static ml-4 opacity-60 hover:opacity-100 focus-visible:ring-0 focus-visible:ring-offset-0 md:ml-6 xl:ml-8"
            variant={'ghost'}
          />
          <CarouselNext
            className="static mr-4 opacity-60 hover:opacity-100 focus-visible:ring-0 focus-visible:ring-offset-0 md:mr-6 xl:mr-8"
            variant={'ghost'}
          />
        </section>
      </Carousel>
    </article>
  );
}
