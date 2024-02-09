import DirectorsCorner from '@/app/directors-corner';
import Slideshow from '@/components/slideshow';

export default function Home() {
  return (
    <main className="w-full">
      <Slideshow />
      <DirectorsCorner />
    </main>
  );
}
