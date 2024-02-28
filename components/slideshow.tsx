'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Slideshow({ images }: { images: string[] }) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!hovered) return;
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hovered]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform opacity-60 transition-opacity duration-300 hover:opacity-100"
        onClick={prevSlide}
      >
        <FaChevronLeft className="text-white" size={40} />
      </button>

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image: string, index: number) => (
          <div
            className="relative w-full flex-shrink-0"
            key={index}
            style={{ flex: '0 0 auto', width: `${100 / images.length}%` }}
          >
            <Image
              alt={`slide ${index + 1}`}
              height={1080}
              loading={index === 0 ? 'eager' : 'lazy'}
              width={1920}
              src={image}
            />
          </div>
        ))}
      </div>

      <button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform opacity-60 transition-opacity duration-300 hover:opacity-100"
        onClick={nextSlide}
      >
        <FaChevronRight className="text-white" size={40} />
      </button>
    </div>
  );
}
