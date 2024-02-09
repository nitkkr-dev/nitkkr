'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Slideshow({ images }: { images: string[] }) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);

  const prevSlide = (): void => {
    setCurrentSlide((prev: number) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev: number) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        className={`prev absolute top-1/2 -translate-y-1/2 transform ${
          hovered ? 'opacity-100' : 'opacity-0'
        } z-10 transition-opacity duration-300`}
        onClick={prevSlide}
        style={{ marginLeft: '64px' }}
      >
        <FaChevronLeft className="text-white" style={{ fontSize: '40px' }} />
      </button>

      {images.map((image: string, index: number) => (
        <div
          className={`relative ${index === currentSlide ? '' : 'hidden'}`}
          key={index}
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
      <button
        className={`next absolute right-0 top-1/2 -translate-y-1/2 transform ${
          hovered ? 'opacity-100' : 'opacity-0'
        } z-10 transition-opacity duration-300`}
        onClick={nextSlide}
        style={{ marginRight: '64px' }}
      >
        <FaChevronRight className="text-white" style={{ fontSize: '40px' }} />
      </button>
    </div>
  );
}
