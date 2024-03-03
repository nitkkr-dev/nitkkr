'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function Slideshow({
  images,
}: {
  images: { image: string; title?: string; subtitle?: string }[];
}) {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      sliderRef.current?.slickPrev();
    } else if (event.key === 'ArrowRight') {
      sliderRef.current?.slickNext();
    }
  };

  return (
    <article
      className="relative overflow-x-hidden"
      onMouseEnter={() => window.addEventListener('keydown', handleKeyDown)}
      onMouseLeave={() => window.removeEventListener('keydown', handleKeyDown)}
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map(({ image, title, subtitle }, index) => (
          <figure className="relative max-h-screen" key={index}>
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
        ))}
      </Slider>

      <section className="container absolute inset-0 flex min-w-full justify-between">
        <button
          className="opacity-60 hover:opacity-100"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <FaChevronLeft className="text-neutral-100" size={40} />
        </button>

        <button
          className="opacity-60 hover:opacity-100"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <FaChevronRight className="text-neutral-100" size={40} />
        </button>
      </section>
    </article>
  );
}
