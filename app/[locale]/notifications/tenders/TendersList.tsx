'use client';

import Link from 'next/link';
import { useState } from 'react';
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
import { deleteTenderAction } from '~/server/actions/tenders';
import type { TenderWithStatus } from '~/server/services/tenders';
import type { TendersTranslations } from '~/i18n/translate/tenders';

import { TenderStatusBadge } from './TenderStatusBadge';

interface TendersListProps {
  tenders: TenderWithStatus[];
  locale: string;
  canManage: boolean;
  text: TendersTranslations;
  isArchived: boolean;
}

export function TendersList({
  tenders,
  locale,
  canManage,
  text,
  isArchived,
}: TendersListProps) {
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [items, setItems] = useState(tenders);

  const formatDate = (date: Date | null) => {
    if (!date) return '—';
    return new Date(date).toLocaleDateString(locale, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const handleDelete = async (id: number) => {
    if (!confirm(text.confirmDelete)) return;

    setDeletingId(id);
    try {
      const result = await deleteTenderAction(id);
      if (result.success) {
        setItems((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Failed to delete tender:', error);
      alert(text.messages.deleteError);
    } finally {
      setDeletingId(null);
    }
  };

  if (items.length === 0) {
    return (
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center">
        <p className="text-neutral-600">
          {isArchived ? text.noArchivedTenders : text.noLiveTenders}
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-200">
      <Table>
        <TableHeader>
          <TableRow className="bg-primary-50">
            <TableHead className="w-16">{text.tableHeaders.serialNo}</TableHead>
            <TableHead>{text.tableHeaders.title}</TableHead>
            <TableHead className="w-28">
              {text.tableHeaders.startDate}
            </TableHead>
            <TableHead className="w-28">{text.tableHeaders.endDate}</TableHead>
            <TableHead className="w-32">
              {text.tableHeaders.extendedDate}
            </TableHead>
            <TableHead className="w-24">{text.tableHeaders.status}</TableHead>
            <TableHead className="w-28">{text.tableHeaders.document}</TableHead>
            {canManage && <TableHead className="w-24">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((tender, index) => (
            <TableRow key={tender.id} className="hover:bg-neutral-50">
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div className="max-w-xs">
                  <p className="font-medium text-neutral-900">{tender.title}</p>
                  {tender.description && (
                    <p className="mt-1 line-clamp-2 text-sm text-neutral-600">
                      {tender.description}
                    </p>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-sm text-neutral-600">
                {formatDate(tender.startDate)}
              </TableCell>
              <TableCell className="text-sm text-neutral-600">
                {formatDate(tender.endDate)}
              </TableCell>
              <TableCell className="text-sm text-neutral-600">
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
                {tender.pdfLink ? (
                  <a
                    href={tender.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-primary-200 inline-flex items-center gap-1.5 rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-colors"
                  >
                    <FaFilePdf className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      {tender.pdfName ?? text.viewDocument}
                    </span>
                    <MdOpenInNew className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-neutral-400">—</span>
                )}
              </TableCell>
              {canManage && (
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
                      onClick={() => handleDelete(tender.id)}
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
  );
}
