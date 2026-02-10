'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { Button } from '~/components/buttons';
import {
  deleteTenderAction,
  type TenderWithStatus,
} from '~/server/actions/tenders';
import type { TendersTranslations } from '~/i18n/translate/tenders';

import { TendersList } from './TendersList';

interface TendersPageClientProps {
  allTenders: TenderWithStatus[];
  locale: string;
  canManage: boolean;
  text: TendersTranslations;
}

export function TendersPageClient({
  allTenders,
  locale,
  canManage,
  text,
}: TendersPageClientProps) {
  const [activeTab, setActiveTab] = useState<'live' | 'archived'>('live');
  const [tenders, setTenders] = useState(allTenders);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  // Filter tenders based on active tab (client-side filtering)
  const liveTenders = tenders.filter((tender) => tender.status === 'live');
  const archivedTenders = tenders.filter(
    (tender) => tender.status === 'archived'
  );

  const displayedTenders = activeTab === 'live' ? liveTenders : archivedTenders;

  // Handle delete - updates state for both tabs
  const handleDelete = async (id: number) => {
    if (!confirm(text.confirmDelete)) return;

    setDeletingId(id);
    try {
      const result = await deleteTenderAction(id);
      if (result.success) {
        setTenders((prev) => prev.filter((item) => item.id !== id));
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

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header with Add button */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-primary-700">{text.title}</h1>

        {canManage && (
          <Link href={`/${locale}/notifications/tenders/add`}>
            <Button className="flex items-center gap-2 px-4 py-2">
              <FaPlus className="h-4 w-4" />
              {text.addTender}
            </Button>
          </Link>
        )}
      </div>

      {/* Tab Buttons - client-side switching, no page reload */}
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setActiveTab('live')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'live'
              ? 'text-white bg-primary-700'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          {text.liveTenders} ({liveTenders.length})
        </button>
        <button
          onClick={() => setActiveTab('archived')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'archived'
              ? 'text-white bg-primary-700'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          {text.archivedTenders} ({archivedTenders.length})
        </button>
      </div>

      {/* Tenders List */}
      <TendersList
        tenders={displayedTenders}
        locale={locale}
        canManage={canManage}
        text={text}
        isArchived={activeTab === 'archived'}
        onDelete={handleDelete}
        deletingId={deletingId}
      />
    </main>
  );
}
