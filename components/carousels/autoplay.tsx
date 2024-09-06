'use client';

import Autoplay, { type AutoplayOptionsType } from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

import { Carousel, type CarouselProps } from '~/components/carousels';

const AutoplayCarousel = ({
  autoplayOptions,
  carouselProps,
  children,
}: {
  autoplayOptions?: AutoplayOptionsType;
  carouselProps?: CarouselProps;
  children: React.ReactNode;
}) => {
  return (
    <Carousel
      className="w-full"
      opts={{ loop: true, align: 'center' }}
      onHoverKeyboardControls
      plugins={[Autoplay(autoplayOptions), Fade()]}
      {...carouselProps}
    >
      {children}
    </Carousel>
  );
};

export { AutoplayCarousel };
