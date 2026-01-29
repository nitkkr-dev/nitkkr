import { redirect } from 'next/navigation';

import { Card, CardHeader } from '~/components/ui';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { canManageNotifications, getServerAuthSession } from '~/server/auth';

import { NotificationForm } from '../NotificationForm';

export default async function AddNotificationPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Check authorization
  const session = await getServerAuthSession();
  if (!canManageNotifications(session)) {
    redirect(`/${locale}/notifications`);
  }

  const text = (await getTranslations(locale)).Notifications;

  return (
    <>
      <ImageHeader title={text.addNotification} src="slideshow/image01.jpg" />
      <section className="container my-8">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <h2 className="text-xl font-bold text-primary-700">
              {text.addNotification}
            </h2>
          </CardHeader>
          <div className="p-6">
            <NotificationForm
              locale={locale}
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
