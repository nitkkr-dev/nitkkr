import { notFound, redirect } from 'next/navigation';

import { Card, CardHeader } from '~/components/ui';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { canManageNotifications, getServerAuthSession } from '~/server/auth';
import { getNotificationForEdit } from '~/server/actions/notifications';

import { NotificationForm } from '../../NotificationForm';

export default async function EditNotificationPage({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  // Check authorization
  const session = await getServerAuthSession();
  if (!canManageNotifications(session)) {
    redirect(`/${locale}/notifications`);
  }

  const notificationId = parseInt(id, 10);
  if (isNaN(notificationId)) {
    notFound();
  }

  // Fetch notification data
  const notification = await getNotificationForEdit(notificationId);
  if (!notification) {
    notFound();
  }

  const text = (await getTranslations(locale)).Notifications;

  return (
    <>
      <ImageHeader title={text.editNotification} src="slideshow/image01.jpg" />
      <section className="container my-8">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <h2 className="text-xl font-bold text-primary-700">
              {text.editNotification}
            </h2>
          </CardHeader>
          <div className="p-6">
            <NotificationForm
              locale={locale}
              notificationId={notificationId}
              initialData={{
                title: notification.title,
                content: notification.content,
                categories: notification.categories,
                documents: notification.documents,
                createdAt: notification.createdAt,
              }}
              text={{
                notificationTitle: text.notificationTitle,
                notificationContent: text.notificationContent,
                notificationCategories: text.notificationCategories,
                notificationDate: text.notificationDate,
                documents: text.documents,
                uploadDocument: text.uploadDocument,
                save: text.save,
                cancel: text.cancel,
                categories: text.categories,
              }}
            />
          </div>
        </Card>
      </section>
    </>
  );
}
