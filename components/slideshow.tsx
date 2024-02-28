'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Slideshow({
  images,
}: {
  images: { image: string; title?: string; subtitle?: string }[];
}) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <article
      className="relative overflow-x-hidden"
      onMouseEnter={() => window.addEventListener('keydown', handleKeyDown)}
      onMouseLeave={() => window.removeEventListener('keydown', handleKeyDown)}
    >
      <section
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map(({ image, title, subtitle }, index) => (
          <figure className="relative" key={index}>
            <Image
              alt={`slide ${index + 1}`}
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
        ))}
      </section>

      <button
        className="absolute inset-y-0 p-4 opacity-60 hover:opacity-100"
        onClick={prevSlide}
      >
        <FaChevronLeft className="my-auto text-neutral-100" size={40} />
      </button>

      <button
        className="absolute inset-y-0 right-0 p-4 opacity-60 hover:opacity-100"
        onClick={nextSlide}
      >
        <FaChevronRight className="my-auto text-neutral-100" size={40} />
      </button>
    </article>
  );
}
