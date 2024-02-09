import DirectorsCorner from '@/app/directors-corner';
import Slideshow from '@/components/slideshow';

export default function Home() {
  return (
    <main className="w-full">
      <Slideshow
        images={[
          'https://nitkkr.ac.in/wp-content/uploads/2023/11/IMG20220903190255-1-scaled.jpg',
          'https://nitkkr.ac.in/wp-content/uploads/2022/01/24131961_285405678647849_426967072086000359_o.jpg',
        ]}
      />
      <DirectorsCorner />
    </main>
  );
}
