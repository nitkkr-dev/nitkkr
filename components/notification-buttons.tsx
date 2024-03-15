'use client';
import Link from 'next/link';
import React from 'react';

import { cn, getKeys } from '~/lib/utils';

const NotificationButtons = ({
  category: currentCategory,
  text,
}: {
  category: 'academic' | 'tenders' | 'workshops' | 'recruitement';
  text: {
    title: string;
    categories: {
      academic: string;
      tenders: string;
      workshops: string;
      recruitement: string;
    };
    viewAll: string;
  };
}) => {
  return (
    <ol
      className={cn(
        'flex rounded-t-xl bg-primary-700 p-1 sm:p-2',
        'lg:w-[30%] lg:flex-col lg:justify-between lg:bg-transparent lg:p-0'
      )}
    >
      {getKeys(text.categories).map((category, index) => (
        <li className="flex-auto lg:flex-initial" key={index}>
          <Link
            className="flex"
            href={{ query: { notificationCategory: category } }}
            scroll={false}
          >
            <button
              className={cn(
                'flex-auto rounded-xl py-2 text-center font-serif text-neutral-50 transition active:bg-primary-100',
                'lg:button lg:border lg:p-8 lg:text-2xl lg:drop-shadow-2xl',
                category === currentCategory
                  ? 'bg-primary-300 lg:bg-primary-700 lg:text-neutral-50'
                  : 'lg:bg-opacity-60'
              )}
            >
              {text.categories[category]}
            </button>
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default NotificationButtons;
