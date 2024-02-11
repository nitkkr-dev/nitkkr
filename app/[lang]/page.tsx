import DirectorsCorner from './directors-corner';
import Notifications from './notifications';

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <main className="w-full">
      <Notifications />
      <DirectorsCorner lang={lang} />
    </main>
  );
}
