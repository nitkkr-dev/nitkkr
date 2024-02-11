import DirectorsCorner from '@/app/directors-corner';
import Notifications from '@/app/notifications';

export default function Home() {
  return (
    <main className="w-full">
      <Notifications />
      <DirectorsCorner />
    </main>
  );
}
