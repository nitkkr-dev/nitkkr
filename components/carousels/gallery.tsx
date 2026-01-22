import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselProps,
} from '~/components/carousels';
import { cn } from '~/lib/utils';

const GalleryCarousel = ({
  carouselProps,
  children,
  className,
  itemClassName = 'shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5',
}: {
  carouselProps?: CarouselProps;
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
}) => {
  return (
    <article className={cn('container relative px-10 mx-2', className)}>
      <Carousel opts={{ align: 'start', loop: true }} {...carouselProps}>
        <CarouselContent className="flex gap-4">
          {children.map((child, index) => (
            <CarouselItem key={index} className={itemClassName}>
              {child}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="m-2 -left-6 text-primary-500 md:-left-10" />
        <CarouselNext className="m-2 -right-6 text-primary-500 md:-right-10" />
      </Carousel>
    </article>
  );
};

export { GalleryCarousel };
