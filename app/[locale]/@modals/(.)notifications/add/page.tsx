import { redirect } from 'next/navigation';

import { Dialog } from '~/components/dialog';
import { Card, CardHeader, ScrollArea } from '~/components/ui';
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
    <Dialog className="h-[100vh] w-[100vw]">
      <Card className="flex h-full flex-col">
        <CardHeader className="shrink-0">
          <h2 className="text-xl font-bold text-primary-700">
            {text.addNotification}
          </h2>
        </CardHeader>
        <ScrollArea className="flex-1">
          <div className="p-6 pt-0">
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
        </ScrollArea>
      </Card>
    </Dialog>
  );
}
