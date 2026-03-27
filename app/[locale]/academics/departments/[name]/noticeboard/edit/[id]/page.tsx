import { redirect } from 'next/navigation';

import { getTranslations } from '~/i18n/translations';
import { getHodDepartmentId, getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';
import ImageHeader from '~/components/image-header';
import { NotificationForm } from '~/app/notifications/NotificationForm';
import { getNotificationForEdit } from '~/server/actions/notifications';

export default async function EditDepartmentNotificationPage({
  params: { locale, name, id },
}: {
  params: { locale: string; name: string; id: string };
}) {
  const session = await getServerAuthSession();
  const hodDepartmentId = await getHodDepartmentId(session);

  const department = await db.query.departments.findFirst({
    where: (d, { eq }) => eq(d.urlName, name),
    columns: { id: true, name: true },
  });

  if (!department) {
    redirect(`/${locale}/academics/departments`);
  }

  // Only HoD of this department allowed
  if (hodDepartmentId !== department.id) {
    redirect(`/${locale}/academics/departments/${name}/noticeboard`);
  }

  const notification = await getNotificationForEdit(Number(id));

  if (!notification) {
    redirect(`/${locale}/academics/departments/${name}/noticeboard`);
  }

  const text = (await getTranslations(locale)).Notifications;

  return (
    <>
      <ImageHeader
        title={`Edit ${department.name} Notification`}
        src="assets/academics.png"
      />

      <main className="container mx-auto max-w-3xl px-4 py-8">
        <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
          <h1 className="mb-6 text-xl font-bold text-primary-700">
            Edit Notification
          </h1>

          <NotificationForm
            locale={locale}
            text={text}
            initialData={notification}
          />
        </div>
      </main>
    </>
  );
}
