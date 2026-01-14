'use client';

import { useSearchParams } from 'next/navigation';

import { cn } from '~/lib/utils';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '.';

export const PaginationWithLogic = ({
  className,
  currentPage,
  totalCount,
  pageParamName = 'page',
  ...props
}: React.ComponentProps<'nav'> & {
  currentPage: number;
  totalCount: number;
  pageParamName?: string;
}) => {
  const searchParams = useSearchParams();
  const noOfPages = Math.ceil(totalCount / 10);

  const createHref = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(pageParamName, pageNumber.toString());
    return `?${params.toString()}`;
  };

  return (
    <Pagination className={cn('mt-4 md:mt-5 xl:mt-6', className)} {...props}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            disabled={currentPage <= 1}
            href={createHref(currentPage - 1)}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href={createHref(1)} isActive={currentPage == 1}>
            1
          </PaginationLink>
        </PaginationItem>
        {noOfPages > 1 && (currentPage < 4 || noOfPages < 6) && (
          <PaginationItem>
            <PaginationLink href={createHref(2)} isActive={currentPage == 2}>
              2
            </PaginationLink>
          </PaginationItem>
        )}
        {noOfPages > 2 && (currentPage < 4 || noOfPages < 6) && (
          <PaginationItem>
            <PaginationLink href={createHref(3)} isActive={currentPage == 3}>
              3
            </PaginationLink>
          </PaginationItem>
        )}

        {noOfPages > 5 && <PaginationEllipsis />}
        {currentPage > 3 && currentPage < noOfPages - 2 && (
          <>
            <PaginationItem>
              <PaginationLink
                href={createHref(currentPage)}
                isActive={currentPage == currentPage}
              >
                {currentPage}
              </PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
          </>
        )}

        {noOfPages > 5 && currentPage > noOfPages - 3 && (
          <PaginationItem>
            <PaginationLink
              href={createHref(noOfPages - 2)}
              isActive={currentPage == noOfPages - 2}
            >
              {noOfPages - 2}
            </PaginationLink>
          </PaginationItem>
        )}
        {noOfPages > 4 && (currentPage > noOfPages - 3 || noOfPages < 6) && (
          <PaginationItem>
            <PaginationLink
              href={createHref(noOfPages - 1)}
              isActive={currentPage == noOfPages - 1}
            >
              {noOfPages - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {noOfPages > 3 && (
          <PaginationItem>
            <PaginationLink
              href={createHref(noOfPages)}
              isActive={currentPage == noOfPages}
            >
              {noOfPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            disabled={currentPage >= noOfPages}
            href={createHref(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
