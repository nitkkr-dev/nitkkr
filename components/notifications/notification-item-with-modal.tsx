'use client';

import { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { NotificationModal } from '~/components/notifications/notification-modal';

interface NotificationItemProps {
  id: number;
  title: string;
  locale: string;
}

export function NotificationItemWithModal({
  id,
  title,
  locale,
}: NotificationItemProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <>
      <button
        onClick={() => setSelectedId(id)}
        className="inline-flex max-w-full items-start gap-1 text-left"
      >
        <MdOutlineKeyboardArrowRight className="mt-0.5 size-4 shrink-0 text-primary-700 sm:mt-1 md:size-5 lg:size-6" />
        <p className="line-clamp-2 text-sm sm:line-clamp-1 sm:text-base md:text-lg">
          {title}
        </p>
      </button>

      <NotificationModal
        notificationId={selectedId}
        onClose={() => setSelectedId(null)}
        locale={locale}
      />
    </>
  );
}
