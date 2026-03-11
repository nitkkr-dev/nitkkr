import { redirect } from 'next/navigation';

import { getTranslations } from '~/i18n/translations';
import { getHodDepartmentId, getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';
import ImageHeader from '~/components/image-header';
import { NotificationForm } from '~/app/notifications/NotificationForm';

export default async function AddDepartmentNotificationPage({
  params: { locale, name },
}: {
  params: { locale: string; name: string };
}) {
  const session = await getServerAuthSession();
  const hodDepartmentId = await getHodDepartmentId(session);

  // Get department
  const department = await db.query.departments.findFirst({
    where: (d, { eq }) => eq(d.urlName, name),
    columns: { id: true, name: true, urlName: true },
  });

  if (!department) {
    redirect(`/${locale}/academics/departments`);
  }

  // Only HoD of this department allowed
  if (hodDepartmentId !== department.id) {
    redirect(`/${locale}/academics/departments/${name}/noticeboard`);
  }

  const text = (await getTranslations(locale)).Notifications;

  return (
    <>
      <ImageHeader
        title={`Add ${department.name} Notification`}
        src="assets/academics.png"
      />

      <main className="container mx-auto max-w-3xl px-4 py-8">
        <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
          <h1 className="mb-6 text-xl font-bold text-primary-700">
            Add Notification
          </h1>

          <NotificationForm
            locale={locale}
            text={text}
          />

        </div>
      </main>
    </>
  );
}