'use client';

import { isValidElement, Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import {  FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { PaginationWithLogic } from '~/components/pagination/pagination';
import Loading from '~/components/loading';

interface HeaderConfig {
  key: string;
  label: string;
}

// Helper to check if value is a labeled link object { url: string, label: string }
interface LabeledLink {
  url: string;
  label: string;
}

const isLabeledLink = (value: unknown): value is LabeledLink => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'url' in value &&
    'label' in value &&
    typeof (value as LabeledLink).url === 'string' &&
    typeof (value as LabeledLink).label === 'string'
  );
};

type SortOrder = 'asc' | 'desc';

interface GenericTableProps<T extends Record<string, unknown>> {
  headers: HeaderConfig[];
  tableData: T[];
  currentPage?: number;
  itemsPerPage?: number;
  getCount?: Promise<{ count: number }[]>;
  pageParamName?: string;
  showSerialNo?: boolean;
  /** Enable sorting by a date field. Pass the key of the date field to sort by (e.g., 'created_at', 'date') */
  sortByDateField?: keyof T;
  /** Default sort order when sorting is enabled. Defaults to 'desc' */
  defaultSortOrder?: SortOrder;
}

// Helper function to check if a value is a valid URL (absolute or relative)
const isValidUrl = (value: unknown): boolean => {
  if (typeof value !== 'string') return false;

  // Check for absolute URLs
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    // Check for relative URLs (starts with /)
    return value.startsWith('/');
  }
};

export default function GenericTable<T extends Record<string, unknown>>({
  headers,
  tableData,
  currentPage: propCurrentPage,
  itemsPerPage = 10,
  pageParamName = 'page',
  showSerialNo = true,
  sortByDateField,
  defaultSortOrder = 'desc',
}: GenericTableProps<T>) {
  const searchParams = useSearchParams();
  const [sortOrder, setSortOrder] = useState<SortOrder>(defaultSortOrder);

  const sortedData = useMemo(() => {
    if (!sortByDateField) return tableData;

    return [...tableData].sort((a, b) => {
      const aValue = a[sortByDateField];
      const bValue = b[sortByDateField];

      // Handle Date objects, date strings, or timestamps
      const aDate = aValue instanceof Date ? aValue : new Date(String(aValue));
      const bDate = bValue instanceof Date ? bValue : new Date(String(bValue));

      if (sortOrder === 'asc') {
        return aDate.getTime() - bDate.getTime();
      }
      return bDate.getTime() - aDate.getTime();
    });
  }, [tableData, sortByDateField, sortOrder]);

  const currentPage =
    propCurrentPage ?? (Number(searchParams.get(pageParamName)) || 1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = sortedData.slice(startIndex, startIndex + itemsPerPage);
  const totalCount = sortedData.length;
  const noOfPages = Math.ceil(totalCount / itemsPerPage);

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <section className="container">
      <div className="max-h-96 w-full overflow-x-auto">
        <Table scrollAreaClassName="h-[23rem] min-w-[500px]">
          <TableHeader>
            <TableRow>
              {showSerialNo && <TableHead>No.</TableHead>}
              {headers.map((header, index) => (
                <TableHead key={index}>
                  {index === 0 && sortByDateField ? (
                    <button
                      onClick={toggleSortOrder}
                      className="flex items-center gap-1 hover:text-primary-700 transition-colors"
                      aria-label={`Sort by date ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
                    >
                      {header.label}
                      {sortOrder === 'asc' ? (
                        <FaChevronUp className="h-3 w-3" />
                      ) : (
                        <FaChevronDown className="h-3 w-3" />
                      )}
                    </button>
                  ) : (
                    header.label
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            <Suspense
              fallback={
                <TableRow>
                  <TableCell colSpan={headers.length + (showSerialNo ? 1 : 0)}>
                    <Loading />
                  </TableCell>
                </TableRow>
              }
            >
              {visibleData.map((item, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className="text-neutral-700 hover:bg-neutral-50"
                >
                  {showSerialNo && (
                    <TableCell>{startIndex + rowIndex + 1}</TableCell>
                  )}

                  {headers.map((header, colIndex) => {
                    const cellValue = item[header.key];
                    const labeledLink = isLabeledLink(cellValue);
                    const isLink = isValidUrl(cellValue);

                    return (
                      <TableCell key={colIndex}>
                        {isValidElement(cellValue) ? (
                          cellValue
                        ) : labeledLink ? (
                          <Link
                            href={cellValue.url}
                            target="_blank"
                            className="text-primary flex items-center gap-2 hover:underline"
                          >
                            {cellValue.label}{' '}
                            <FiExternalLink className="h-4 w-4" />
                          </Link>
                        ) : isLink ? (
                          <Link
                            href={String(cellValue)}
                            className="bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors"
                          >
                            <FiExternalLink className="h-4 w-4" />
                          </Link>
                        ) : (
                          String(cellValue)
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </Suspense>
          </TableBody>
        </Table>
      </div>

      {noOfPages > 1 && (
        <div className="mt-6">
          <PaginationWithLogic
            currentPage={currentPage}
            totalCount={totalCount}
            pageParamName={pageParamName}
          />
        </div>
      )}
    </section>
  );
}
