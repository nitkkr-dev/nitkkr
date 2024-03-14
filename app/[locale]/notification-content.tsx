import Link from 'next/link';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

const NotificationContent = async ({
  currentCategory,
  locale,
}: {
  currentCategory: 'academic' | 'tenders' | 'workshops' | 'recruitement';
  locale: string;
}) => {
  const text = (await getTranslations(locale)).Notifications;
  const notifications = {
    academic: {
      localisedName: text.categories[0],
      items: [...Array<number>(40)].map(() => {
        return {
          label:
            'Information regarding specialization for the post of Technical Assistant (Ref.:Advt.No.03/2023 No.129)',
          value: '/',
        };
      }),
    },
    tenders: {
      localisedName: text.categories[1],
      items: [...Array<number>(4)].map(() => {
        return {
          label:
            'Information regarding specialization for the post of Technical Assistant (Ref.:Advt.No.03/2023 No.129)',
          value: '/',
        };
      }),
    },
    workshops: { localisedName: text.categories[2], items: [] },
    recruitement: { localisedName: text.categories[3], items: [] },
  };
  return (
    <ol>
      {notifications[currentCategory].items.map(({ label, value }, index) => (
        <li key={index}>
          <Link
            className={cn('inline-flex max-w-full', 'my-2 sm:my-4 xl:my-5')}
            href={`/${locale}/${value}`}
          >
            <MdOutlineKeyboardArrowRight className="my-auto size-4 text-primary-700 lg:size-6" />
            <p className="mb-0 truncate lg:text-lg">{label}</p>
          </Link>
          <hr className="opacity-20" />
        </li>
      ))}
    </ol>
  );
};

export default NotificationContent;
