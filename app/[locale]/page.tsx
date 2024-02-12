import DirectorsCorner from './directors-corner';
import Notifications from './notifications';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <main className="w-full">
      <Notifications />
      <DirectorsCorner locale={locale} />
    </main>
  );
}
