import { Suspense } from 'react';

import { getTranslations } from '~/i18n/translations';
import { canManageNotifications, getServerAuthSession } from '~/server/auth';
import ImageHeader from '~/components/image-header';
import Loading from '~/components/loading';
import { getAllTenders } from '~/server/actions/tenders';

import { TendersPageClient } from './TendersPageClient';

// Make page dynamic to ensure fresh data on each request
export const dynamic = 'force-dynamic';

export default async function TendersPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Tenders;

  // Check if user can manage tenders (CCN only)
  const session = await getServerAuthSession();
  const canManage = canManageNotifications(session);

  // Fetch ALL tenders once - client-side filtering handles live/archived tabs
  const allTenders = await getAllTenders();

  return (
    <>
      <ImageHeader title={text.title} src="assets/academics.png" />

      <Suspense fallback={<Loading />}>
        <TendersPageClient
          allTenders={allTenders}
          locale={locale}
          canManage={canManage}
          text={text}
        />
      </Suspense>
    </>
  );
}
