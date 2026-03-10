'use client';

import Link from 'next/link';
import { FaEdit, FaFilePdf, FaTrash } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import type { TenderWithStatus } from '~/server/actions/tenders';
import type { TendersTranslations } from '~/i18n/translate/tenders';

import { TenderStatusBadge } from './TenderStatusBadge';

interface TendersListProps {
  tenders: TenderWithStatus[];
  locale: string;
  canManage: boolean;
  text: TendersTranslations;
  isArchived: boolean;
  onDelete?: (id: number) => Promise<void>;
  deletingId?: number | null;
}

export function TendersList({
  tenders,
  locale,
  canManage,
  text,
  isArchived,
  onDelete,
  deletingId,
}: TendersListProps) {
  const formatDate = (date: Date | null) => {
    if (!date) return '—';
    return new Date(date).toLocaleDateString(locale, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  if (tenders.length === 0) {
    return (
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center">
        <p className="text-neutral-600">
          {isArchived ? text.noArchivedTenders : text.noLiveTenders}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-neutral-200">
      <div className="min-w-[800px]">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary-50">
              <TableHead className="w-16 whitespace-nowrap">
                {text.tableHeaders.serialNo}
              </TableHead>
              <TableHead className="min-w-[200px]">
                {text.tableHeaders.title}
              </TableHead>
              <TableHead className="w-28 whitespace-nowrap">
                {text.tableHeaders.startDate}
              </TableHead>
              <TableHead className="w-28 whitespace-nowrap">
                {text.tableHeaders.endDate}
              </TableHead>
              <TableHead className="w-32 whitespace-nowrap">
                {text.tableHeaders.extendedDate}
              </TableHead>
              <TableHead className="w-24 whitespace-nowrap">
                {text.tableHeaders.status}
              </TableHead>
              <TableHead className="w-32 whitespace-nowrap">
                {text.tableHeaders.document}
              </TableHead>
              {canManage && (
                <TableHead className="w-24 whitespace-nowrap">
                  {text.tableHeaders.actions}
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tenders.map((tender, index) => (
              <TableRow
                key={tender.id}
                className="text-neutral-700 hover:bg-neutral-50"
              >
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <div className="max-w-xs">
                    <p className="font-medium text-neutral-900">
                      {tender.title}
                    </p>
                    {tender.description && (
                      <p className="mt-1 line-clamp-2 text-sm text-neutral-600">
                        {tender.description}
                      </p>
                    )}
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-neutral-600">
                  {formatDate(tender.startDate)}
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-neutral-600">
                  {formatDate(tender.endDate)}
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-neutral-600">
                  {formatDate(tender.extendedDate)}
                </TableCell>
                <TableCell>
                  <TenderStatusBadge
                    status={tender.status}
                    endDate={tender.endDate}
                    extendedDate={tender.extendedDate}
                    text={text}
                  />
                </TableCell>
                <TableCell>
                  {tender.documents && tender.documents.length > 0 ? (
                    <div className="flex flex-col gap-1">
                      {tender.documents.map((doc, docIndex) => (
                        <a
                          key={`${doc.url}-${docIndex}`}
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:bg-primary-200 inline-flex items-center gap-1.5 whitespace-nowrap rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-colors"
                          title={doc.name}
                        >
                          <FaFilePdf className="h-4 w-4 flex-shrink-0" />
                          <span className="max-w-[80px] truncate">
                            {doc.name || text.viewDocument}
                          </span>
                          <MdOpenInNew className="h-3 w-3 flex-shrink-0" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <span className="text-neutral-400">—</span>
                  )}
                </TableCell>
                {canManage && onDelete && (
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/${locale}/notifications/tenders/edit/${tender.id}`}
                        className="text-primary-600 rounded p-1.5 transition-colors hover:bg-primary-100"
                        title={text.edit}
                      >
                        <FaEdit className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => onDelete(tender.id)}
                        disabled={deletingId === tender.id}
                        className="text-red-600 hover:bg-red-100 rounded p-1.5 transition-colors disabled:opacity-50"
                        title={text.delete}
                      >
                        <FaTrash className="h-4 w-4" />
                      </button>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
