import { cn } from '~/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'bg-gray-100 dark:bg-gray-800 animate-pulse rounded-md',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
