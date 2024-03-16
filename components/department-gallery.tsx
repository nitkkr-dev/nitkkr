import React from 'react';
import Link from 'next/link';

import { getTranslations } from '~/i18n/translations';

import { Card, CardFooter } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Heading from './heading';

export default async function DepartmentGallery({
  locale,
}: {
  locale: string;
}) {
  const text = (await getTranslations(locale)).Departments;
  return (
    <section id="#gallery" className="container">
      <Heading glyphDirection={'ltr'} href={''}>
        <h1 className="mt-5 text-3xl font-semibold text-primary-500">
          {text.sectionTitles[8].toLocaleUpperCase()}
        </h1>
      </Heading>

      <Carousel
        className="max-w-x my-5 w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 7 }).map((_, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
              <div className="group relative">
                {/* this url will be replaced url from database, thus have used inline style */}
                <Card
                  className="w-full rounded-md border-none"
                  style={{
                    backgroundImage: `url('https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <CardFooter className="relative z-10 h-64 opacity-0 transition-opacity duration-300 hover:bg-neutral-900 hover:bg-opacity-25 group-hover:opacity-100">
                    <h5 className="mt-auto text-neutral-50">
                      Computer Science Students Hold National conference of CS
                      In NIT KKR...
                    </h5>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="bg-root text-primary-500 hover:scale-105"
          variant={'ghost'}
        />
        <CarouselNext
          className="bg-root text-primary-500 hover:scale-105"
          variant={'ghost'}
        />
      </Carousel>
      <Link
        href="/gallery"
        className="mx-[32vw] mb-5 block w-fit rounded-md border border-primary-700 text-center hover:text-background"
      >
        <p className="px-2 pt-1 text-primary-700">View Full Gallery &rarr;</p>
      </Link>
    </section>
  );
}
