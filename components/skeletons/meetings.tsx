import { Skeleton } from '~/components/skeletons';
import { TableCell, TableRow } from '~/components/ui';

export const MeetingsSkeleton = () => {
  return (
    <>
      <TableRow>
        <TableCell>
          <Skeleton className="h-4 w-[30px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[150px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[400px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="mx-auto h-4 w-[20px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="mx-auto h-4 w-[20px]" />
        </TableCell>
      </TableRow>
    </>
  );
};
