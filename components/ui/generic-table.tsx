'use client';

import { isValidElement, Suspense } from 'react';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
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

interface GenericTableProps<T extends Record<string, unknown>> {
  headers: HeaderConfig[];
  tableData: T[];
  currentPage?: number;
  itemsPerPage?: number;
  getCount?: Promise<{ count: number }[]>;
  pageParamName?: string;
  showSerialNo?: boolean;
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
}: GenericTableProps<T>) {
  const searchParams = useSearchParams();
  const currentPage =
    propCurrentPage ?? (Number(searchParams.get(pageParamName)) || 1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = tableData.slice(startIndex, startIndex + itemsPerPage);
  const totalCount = tableData.length;
  const noOfPages = Math.ceil(totalCount / itemsPerPage);

  return (
    <section className="container">
      <div className="max-h-96 w-full overflow-x-auto">
        <Table scrollAreaClassName="h-[23rem] min-w-[500px]">
          <TableHeader>
            <TableRow>
              {showSerialNo && <TableHead>No.</TableHead>}
              {headers.map((header, index) => (
                <TableHead key={index}>{header.label}</TableHead>
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
