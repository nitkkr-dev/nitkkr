import Link from 'next/link';
import { Suspense } from 'react';
import { FaPlus } from 'react-icons/fa';

import { getTranslations } from '~/i18n/translations';
import { canManageNotifications, getServerAuthSession } from '~/server/auth';
import { Button } from '~/components/buttons';
import ImageHeader from '~/components/image-header';
import Loading from '~/components/loading';
import { getArchivedTenders, getLiveTenders } from '~/server/services/tenders';

import { TendersList } from './TendersList';

// Revalidate every hour
export const revalidate = 3600;

interface PageSearchParams {
  tab?: 'live' | 'archived';
}

export default async function TendersPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: PageSearchParams;
}) {
  const text = (await getTranslations(locale)).Tenders;
  const activeTab = searchParams.tab ?? 'live';

  // Check if user can manage tenders (CCN only)
  const session = await getServerAuthSession();
  const canManage = canManageNotifications(session);

  // Fetch tenders based on active tab
  const tenders =
    activeTab === 'archived'
      ? await getArchivedTenders()
      : await getLiveTenders();

  return (
    <>
      <ImageHeader
        title={text.title}
        src="assets/academics.png"
        headings={[
          { label: 'Home', href: `/${locale}` },
          { label: 'Notifications', href: `/${locale}/notifications` },
          { label: text.title, href: `/${locale}/notifications/tenders` },
        ]}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Header with Add button */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-primary-700">{text.title}</h1>

          {canManage && (
            <Link href={`/${locale}/notifications/tenders/add`}>
              <Button className="flex items-center gap-2">
                <FaPlus className="h-4 w-4" />
                {text.addTender}
              </Button>
            </Link>
          )}
        </div>

        {/* Tab Buttons */}
        <div className="mb-6 flex gap-2">
          <Link
            href={`/${locale}/notifications/tenders?tab=live`}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'live'
                ? 'text-white bg-primary-700'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {text.liveTenders}
          </Link>
          <Link
            href={`/${locale}/notifications/tenders?tab=archived`}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'archived'
                ? 'text-white bg-primary-700'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {text.archivedTenders}
          </Link>
        </div>

        {/* Tenders List */}
        <Suspense fallback={<Loading />}>
          <TendersList
            tenders={tenders}
            locale={locale}
            canManage={canManage}
            text={text}
            isArchived={activeTab === 'archived'}
          />
        </Suspense>
      </main>
    </>
  );
}
