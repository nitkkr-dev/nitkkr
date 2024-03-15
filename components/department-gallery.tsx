import React from 'react';
import Image from 'next/image';

import { getTranslations } from '~/i18n/translations';

import { Card, CardContent } from './ui/card';
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
    <div>
      <Heading glyphDirection={'ltr'} href={''}>
        <h1 className="mt-5 text-3xl font-semibold text-primary-500">
          {text.sectionTitles[8].toLocaleUpperCase()}
        </h1>
      </Heading>

      <Carousel
        className="max-w-x w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 7 }).map((_, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
              <div className="group">
                <Card className="w-full rounded-md border-primary-700 hover:border ">
                  <Image
                    alt="Computer Science Conference"
                    className="h-3/5 w-full rounded-md object-cover "
                    height={150}
                    src="https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130"
                    style={{
                      aspectRatio: '200/150',
                      objectFit: 'cover',
                    }}
                    width={200}
                  />
                  <CardContent>
                    <p className="mt-5 group-hover:text-primary-500">
                      Computer Science Students Hold National conference of CS
                      In NIT KKR...
                    </p>
                  </CardContent>
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
    </div>
  );
}
