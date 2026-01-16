'use client';

import { useEffect, useState } from 'react';
import { MdCalendarToday, MdOpenInNew } from 'react-icons/md';

import { Dialog, DialogContent, ScrollArea } from '~/components/ui';
import Loading from '~/components/loading';
import {
  getNotificationById,
  type NotificationDetails,
} from '~/server/actions/notifications';

interface NotificationModalProps {
  notificationId: number | null;
  onClose: () => void;
  locale: string;
}

export function NotificationModal({
  notificationId,
  onClose,
  locale,
}: NotificationModalProps) {
  const [notification, setNotification] = useState<NotificationDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (notificationId === null) {
      setNotification(null);
      return;
    }

    setIsLoading(true);
    getNotificationById(notificationId)
      .then((data) => {
        setNotification(data);
      })
      .catch((error) => {
        console.error('Failed to fetch notification:', error);
        setNotification(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [notificationId]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  // Extract filename from URL for document button label (without extension)
  const getDocumentName = (url: string, index: number) => {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      const filename = pathname.split('/').pop();
      if (filename) {
        // Decode URI and remove extension
        const decoded = decodeURIComponent(filename);
        const nameWithoutExt = decoded.replace(/\.[^/.]+$/, '');
        return nameWithoutExt || decoded;
      }
    } catch {
      // If URL parsing fails, use generic name
    }
    return `Document ${index + 1}`;
  };

  return (
    <Dialog
      open={notificationId !== null}
      onOpenChange={(open) => !open && onClose()}
    >
      <DialogContent className="flex max-h-[90vh] w-[95vw] max-w-[800px] flex-col gap-0 overflow-hidden rounded-lg border border-primary-500 bg-background p-0 shadow-xl">
        {isLoading ? (
          <div className="flex h-64 items-center justify-center">
            <Loading />
          </div>
        ) : notification ? (
          <>
            {/* Header with date and close button */}
            <div className="flex items-center justify-between border-primary-100 px-4 pt-3 sm:px-6">
              <span className="flex items-center font-serif text-base text-primary-300 sm:text-lg">
                <MdCalendarToday className="text-base sm:text-lg" />
                {formatDate(notification.createdAt)}
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-2 px-4 text-center font-serif text-lg font-bold leading-snug text-primary-700 sm:px-6 sm:text-xl lg:text-2xl">
              {notification.title}
            </h2>

            {/* Content */}
            {notification.content && (
              <div className="flex-1 overflow-hidden px-4 sm:px-6">
                <ScrollArea className="sm:h-54 h-56 lg:h-72">
                  <p className="whitespace-pre-wrap pr-4 text-justify text-sm leading-relaxed text-neutral-900 sm:text-base">
                    {notification.content}
                  </p>
                </ScrollArea>
              </div>
            )}

            {/* Documents */}
            {notification.documents.length > 0 && (
              <div className="px-4 py-4 sm:px-6">
                <div
                  className={`${
                    notification.documents.length > 2 ? 'h-32 sm:h-auto' : ''
                  } ${notification.documents.length > 6 ? 'sm:h-52' : ''}`}
                >
                  <ScrollArea className="h-full">
                    <div
                      className={`grid gap-3 pr-2 ${
                        notification.documents.length === 1
                          ? 'grid-cols-1'
                          : 'grid-cols-1 sm:grid-cols-2'
                      }`}
                    >
                      {notification.documents.map((doc, index) => (
                        <a
                          key={index}
                          href={doc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:bg-primary-50 flex items-center justify-center gap-2 rounded border border-primary-300 bg-neutral-50 px-4 py-2.5 text-sm font-medium text-primary-700 transition-colors hover:border-primary-500 sm:text-base"
                        >
                          <span className="truncate">
                            {getDocumentName(doc, index)}
                          </span>
                          <MdOpenInNew className="flex-shrink-0 text-base" />
                        </a>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex h-64 items-center justify-center">
            <p className="text-neutral-600">Notification not found</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
