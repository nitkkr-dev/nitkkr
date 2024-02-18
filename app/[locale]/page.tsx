import DirectorsCorner from './directors-corner';
import Notifications from './notifications';
import Events from './events';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <main className="w-full">
      <Notifications />
      <Events />
      <DirectorsCorner locale={locale} />
    </main>
  );
}
