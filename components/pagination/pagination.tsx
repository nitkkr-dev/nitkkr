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

export const PaginationWithLogic = async ({
  className,
  currentPage,
  query,
  ...props
}: React.ComponentProps<'nav'> & {
  currentPage: number;
  query: Promise<{ count: number }[]>;
}) => {
  const rows = await query;
  const noOfPages = Math.ceil(Number(rows[0].count) / 10);

  return (
    <Pagination className={cn('mt-4 md:mt-5 xl:mt-6', className)} {...props}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            disabled={currentPage <= 1}
            href={{ query: { meetingPage: currentPage - 1 } }}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href={{ query: { meetingPage: 1 } }}
            isActive={currentPage == 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
        {noOfPages > 1 && (currentPage < 4 || noOfPages < 6) && (
          <PaginationItem>
            <PaginationLink
              href={{ query: { meetingPage: 2 } }}
              isActive={currentPage == 2}
            >
              2
            </PaginationLink>
          </PaginationItem>
        )}
        {noOfPages > 2 && (currentPage < 4 || noOfPages < 6) && (
          <PaginationItem>
            <PaginationLink
              href={{ query: { meetingPage: 3 } }}
              isActive={currentPage == 3}
            >
              3
            </PaginationLink>
          </PaginationItem>
        )}

        {noOfPages > 5 && <PaginationEllipsis />}
        {currentPage > 3 && currentPage < noOfPages - 2 && (
          <>
            <PaginationItem>
              <PaginationLink
                href={{ query: { meetingPage: currentPage } }}
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
              href={{ query: { meetingPage: noOfPages - 2 } }}
              isActive={currentPage == noOfPages - 2}
            >
              {noOfPages - 2}
            </PaginationLink>
          </PaginationItem>
        )}
        {noOfPages > 4 && (currentPage > noOfPages - 3 || noOfPages < 6) && (
          <PaginationItem>
            <PaginationLink
              href={{ query: { meetingPage: noOfPages - 1 } }}
              isActive={currentPage == noOfPages - 1}
            >
              {noOfPages - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {noOfPages > 3 && (
          <PaginationItem>
            <PaginationLink
              href={{ query: { meetingPage: noOfPages } }}
              isActive={currentPage == noOfPages}
            >
              {noOfPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            disabled={currentPage >= noOfPages}
            href={{ query: { meetingPage: currentPage + 1 } }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
