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
  itemClassName = 'sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5',
}: {
  carouselProps?: CarouselProps;
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
}) => {
  return (
    <article className={cn('container relative px-10 lg:px-14', className)}>
      <Carousel
        className="static"
        opts={{
          align: 'start',
          loop: true,
        }}
        {...carouselProps}
      >
        <CarouselContent className="flex justify-center">
          {children.map((child, index) => (
            <CarouselItem key={index} className={itemClassName}>
              {child}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 text-primary-500" />
        <CarouselNext className="right-0 text-primary-500 " />
      </Carousel>
    </article>
  );
};

export { GalleryCarousel };
