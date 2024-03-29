import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselProps,
} from '~/components/ui';
import { cn } from '~/lib/utils';

const CustomCarousel = ({
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
        <CarouselContent>
          {children.map((child, index) => (
            <CarouselItem
              key={index}
              className={cn('sm:basis-1/3 lg:basis-1/4', itemClassName)}
            >
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

export default CustomCarousel;
