import { redirect } from 'next/navigation';

import { Dialog } from '~/components/dialog';
import { Card, CardHeader } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { canManageNotifications, getServerAuthSession } from '~/server/auth';

import { NotificationForm } from '../../../notifications/NotificationForm';

export default async function AddNotificationModal({
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
    <Dialog className="w-full max-w-2xl">
      <Card className="max-h-[90vh] overflow-y-auto">
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
    </Dialog>
  );
}
