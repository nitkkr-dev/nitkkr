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
  itemClassName,
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
        <CarouselContent className="flex w-full justify-center">
          {children.map((child, index) => (
            <CarouselItem key={index} className={cn('w-full', itemClassName)}>
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
