import { redirect } from 'next/navigation';

import { getTranslations } from '~/i18n/translations';
import { canManageNotifications, getServerAuthSession } from '~/server/auth';
import ImageHeader from '~/components/image-header';

import { TenderForm } from '../TenderForm';

export default async function AddTenderPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Check if user can manage tenders (CCN only)
  const session = await getServerAuthSession();
  const canManage = canManageNotifications(session);

  if (!canManage) {
    redirect(`/${locale}/notifications/tenders`);
  }

  const text = (await getTranslations(locale)).Tenders;

  return (
    <>
      <ImageHeader
        title={text.addTender}
        src="assets/academics.png"
        headings={[
          { label: 'Home', href: `/${locale}` },
          { label: 'Notifications', href: `/${locale}/notifications` },
          { label: text.title, href: `/${locale}/notifications/tenders` },
          {
            label: text.addTender,
            href: `/${locale}/notifications/tenders/add`,
          },
        ]}
      />

      <main className="container mx-auto max-w-3xl px-4 py-8">
        <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
          <h1 className="mb-6 text-xl font-bold text-primary-700">
            {text.addTender}
          </h1>
          <TenderForm locale={locale} text={text} />
        </div>
      </main>
    </>
  );
}
