'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail, MdPhone } from 'react-icons/md';

import { Button } from '~/components/buttons';
import {
  AutoplayCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/carousels';

interface HeroCarouselProps {
  slideshow: {
    image: string;
    title?: string;
    subtitle?: string;
  }[];
  title: {
    primary: string;
    secondary: string;
  };
}

export default function HeroCarousel({ slideshow, title }: HeroCarouselProps) {
  return (
    <AutoplayCarousel autoplayOptions={{ delay: 7000 }}>
      <CarouselContent>
        {slideshow.map(({ image, title: slideTitle, subtitle }, index) => (
          <CarouselItem key={index} className="relative max-h-screen">
            <figure className="relative h-full overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent to-neutral-800/80" />

              {/* Animated Background Image */}
              <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.8,
                  ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
                }}
                className="h-full w-full"
              >
                <Image
                  alt={`slide ${index + 1}`}
                  className="h-full w-full object-cover"
                  height={1080}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  width={1920}
                  src={image}
                />
              </motion.div>

              {/* Animated Title Overlay */}
              <motion.article
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="absolute inset-x-0 top-[35%] z-20 mx-auto text-center drop-shadow-md"
              >
                <h4 className="text-shade-light">{title.secondary}</h4>
                <h1 className="text-lg text-shade-light md:text-4xl lg:text-6xl">
                  {title.primary}
                </h1>
              </motion.article>

              {/* Animated Caption */}
              {slideTitle && (
                <motion.figcaption
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8,
                    ease: 'easeOut',
                  }}
                  className="container absolute inset-x-0 bottom-0 z-20 justify-start pb-8 lg:block"
                >
                  <article className="max-w-[90%]">
                    <h4 className="pl-2 text-sm text-neutral-100 md:text-2xl">
                      {slideTitle}
                    </h4>
                    <p className="line-clamp-1 pl-2 text-xs text-neutral-100 md:text-lg">
                      {subtitle}
                    </p>
                  </article>
                </motion.figcaption>
              )}
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Arrows */}
      <section className="container absolute inset-0 top-[50%] flex h-0 justify-between">
        <CarouselPrevious className="static text-neutral-100 drop-shadow-2xl" />
        <CarouselNext className="static text-neutral-100 drop-shadow-2xl" />
      </section>

      {/* Animated Social Links */}
      <section className="container absolute inset-x-0 bottom-0 hidden h-0 justify-end lg:flex">
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: 'easeOut',
          }}
          className="absolute bottom-0 flex flex-col space-y-4 pb-8"
        >
          {[
            { href: 'mailto:director@nitkkr.ac.in', icon: MdEmail },
            { href: 'tel:+911742238570', icon: MdPhone },
            {
              href: 'https://www.linkedin.com/school/national-institute-of-technology-kurukshetra-haryana',
              icon: BsLinkedin,
            },
          ].map(({ href, icon: Icon }, index) => (
            <motion.a
              href={href}
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 1.2 + index * 0.1,
                ease: 'easeOut',
              }}
            >
              <Button
                className="size-16 rounded-full border border-shade-light text-neutral-900 backdrop-blur-md hover:bg-shade-light/20"
                variant="icon"
              >
                <Icon className="size-5 text-shade-light lg:size-8" />
              </Button>
            </motion.a>
          ))}
        </motion.section>
      </section>
    </AutoplayCarousel>
  );
}
