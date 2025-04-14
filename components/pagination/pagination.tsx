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
  totalPages,
}: React.ComponentProps<'nav'> & {
  currentPage: number;
  totalPages : number;
}) => {

  return (
    <Pagination className={cn('mt-4 md:mt-5 xl:mt-6', className)}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            disabled={currentPage <= 1}
            href={{ query: { page: currentPage - 1 } }}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href={{ query: { page: 1 } }}
            isActive={currentPage == 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
        {totalPages > 1 && (currentPage < 4 || totalPages < 6) && (
          <PaginationItem>
            <PaginationLink
              href={{ query: { page: 2 } }}
              isActive={currentPage == 2}
            >
              2
            </PaginationLink>
          </PaginationItem>
        )}
        {totalPages > 2 && (currentPage < 4 || totalPages < 6) && (
          <PaginationItem>
            <PaginationLink
              href={{ query: { page: 3 } }}
              isActive={currentPage == 3}
            >
              3
            </PaginationLink>
          </PaginationItem>
        )}

        {totalPages > 5 && <PaginationEllipsis />}
        {currentPage > 3 && currentPage < totalPages - 2 && (
          <>
            <PaginationItem>
              <PaginationLink
                href={{ query: { page: currentPage } }}
                isActive={currentPage == currentPage}
              >
                {currentPage}
              </PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
          </>
        )}

        {totalPages > 5 && currentPage > totalPages - 3 && (
          <PaginationItem>
            <PaginationLink
              href={{ query: { page: totalPages - 2 } }}
              isActive={currentPage == totalPages - 2}
            >
              {totalPages - 2}
            </PaginationLink>
          </PaginationItem>
        )}
        {totalPages > 4 && (currentPage > totalPages - 3 || totalPages < 6) && (
          <PaginationItem>
            <PaginationLink
              href={{ query: { page: totalPages - 1 } }}
              isActive={currentPage == totalPages - 1}
            >
              {totalPages - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {totalPages > 3 && (
          <PaginationItem>
            <PaginationLink
              href={{ query: { page: totalPages } }}
              isActive={currentPage == totalPages}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            disabled={currentPage >= totalPages}
            href={{ query: { page: currentPage + 1 } }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
