import { notFound, redirect } from 'next/navigation';

import { getTranslations } from '~/i18n/translations';
import { canManageNotifications, getServerAuthSession } from '~/server/auth';
import { getTenderById } from '~/server/services/tenders';
import ImageHeader from '~/components/image-header';

import { TenderForm } from '../../TenderForm';

export default async function EditTenderPage({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  // Check if user can manage tenders (CCN only)
  const session = await getServerAuthSession();
  const canManage = canManageNotifications(session);

  if (!canManage) {
    redirect(`/${locale}/notifications/tenders`);
  }

  const tenderId = parseInt(id, 10);
  if (isNaN(tenderId)) {
    notFound();
  }

  const tender = await getTenderById(tenderId);
  if (!tender) {
    notFound();
  }

  const text = (await getTranslations(locale)).Tenders;

  return (
    <>
      <ImageHeader
        title={text.editTender}
        src="assets/academics.png"
        headings={[
          { label: 'Home', href: `/${locale}` },
          { label: 'Notifications', href: `/${locale}/notifications` },
          { label: text.title, href: `/${locale}/notifications/tenders` },
          {
            label: text.editTender,
            href: `/${locale}/notifications/tenders/edit/${id}`,
          },
        ]}
      />

      <main className="container mx-auto max-w-3xl px-4 py-8">
        <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
          <h1 className="mb-6 text-xl font-bold text-primary-700">
            {text.editTender}
          </h1>
          <TenderForm locale={locale} tender={tender} text={text} />
        </div>
      </main>
    </>
  );
}
