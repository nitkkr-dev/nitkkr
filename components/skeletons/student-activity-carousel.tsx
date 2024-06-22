import { GalleryCarousel } from '~/components/carousels';
import { Skeleton } from '~/components/skeletons';
import { Card, CardDescription, CardTitle } from '~/components/ui';
import { cn } from '~/lib/utils';

export const StudentActivityCarouselSkeleton = () => {
  return (
    <GalleryCarousel>
      {Array.from({ length: 6 }).map((_, index) => (
        <Card
          className="mx-auto flex aspect-square size-48 flex-col p-3 drop-shadow hover:drop-shadow-xl sm:size-56 md:size-64"
          key={index}
        >
          <CardTitle
            className={cn(
              'flex items-center justify-center gap-2 text-neutral-900',
              'text-lg sm:text-xl md:text-2xl'
            )}
          >
            <Skeleton className="aspect-square size-6 rounded-md sm:size-7 md:size-8" />
            <Skeleton className="h-6 w-[300px] sm:h-7 md:h-8" />
          </CardTitle>
          <CardDescription className="grow">
            <Skeleton className="size-full rounded-md object-cover" />
          </CardDescription>
        </Card>
      ))}
    </GalleryCarousel>
  );
};
