'use client';
import Visualizer from '@/components/inputs/Visualizer';

import DirectorsCorner from './directors-corner';
import Notifications from './notifications';

export default function Home({
  params: { locale },
  searchParams: { notificationCategory = 'academic' },
}: {
  params: { locale: string };
  searchParams: {
    notificationCategory?:
      | 'academic'
      | 'tenders'
      | 'workshops'
      | 'recruitement';
  };
}) {
  return (
    <main className="w-full">
      <Notifications category={notificationCategory} locale={locale} />
      <DirectorsCorner locale={locale} />
    </main>
  );
}
