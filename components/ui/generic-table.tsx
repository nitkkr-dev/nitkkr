'use client';

import { Suspense } from 'react';

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

interface GenericTableProps<T extends Record<string, unknown>> {
  headers: HeaderConfig[];
  tableData: T[];
  currentPage: number;
  itemsPerPage?: number;
  getCount: Promise<{ count: number }[]>; // changed type
}

export default function GenericTable<T extends Record<string, unknown>>({
  headers,
  tableData,
  currentPage,
  itemsPerPage = 10,
  getCount,
}: GenericTableProps<T>) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = tableData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="container">
      <div className="max-h-96 w-full overflow-x-auto">
        <Table scrollAreaClassName="h-[23rem] min-w-[500px]">
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              {headers.map((header, index) => (
                <TableHead key={index}>{header.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            <Suspense
              fallback={
                <TableRow>
                  <TableCell colSpan={headers.length + 1}>
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
                  <TableCell>{startIndex + rowIndex + 1}</TableCell>

                  {headers.map((header, colIndex) => (
                    <TableCell key={colIndex}>
                      {String(item[header.key])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </Suspense>
          </TableBody>
        </Table>
      </div>

      <div className="mt-6">
        <PaginationWithLogic currentPage={currentPage} query={getCount} />
      </div>
    </section>
  );
}
