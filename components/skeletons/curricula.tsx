import { Skeleton } from '~/components/skeletons';
import { TableCell, TableRow } from '~/components/ui';

export const CurriculaSkeleton = () => {
  return (
    <>
      <TableRow>
        <TableCell>
          <Skeleton className="h-4 w-[40px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[200px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[250px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[40px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[20px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="mx-auto h-4 w-[20px]" />
        </TableCell>
      </TableRow>
    </>
  );
};
