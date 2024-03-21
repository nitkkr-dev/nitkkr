import DirectorsCorner from '~/app/directors-corner';
import Notifications from '~/app/notifications';
import Visualizer from '~/components/inputs/Visualizer';
import Slideshow from '~/components/slideshow';

export default function Home({
  params: { locale },
  searchParams: { notificationCategory = 'academic' },
}: {
  params: { locale: string };
  searchParams: {
    notificationCategory?: 'academic' | 'tender' | 'workshop' | 'recruitment';
  };
}) {
  return (
    <main className="w-full">
      <Slideshow
        images={[
          {
            image:
              'https://nitkkr.ac.in/wp-content/uploads/2023/11/IMG20220903190255-1-scaled.jpg',
            title: 'NIT KKR deemed the First Ever NIT With All Green Campus!',
            subtitle:
              'Over 900 Acres of green foliage planted alongside the campus walls, the campus of the esteemed...',
          },
          {
            image:
              'https://nitkkr.ac.in/wp-content/uploads/2022/01/24131961_285405678647849_426967072086000359_o.jpg',
          },
          {
            image:
              'https://nitkkr.ac.in/wp-content/uploads/2022/12/IMG_0496-scaled.jpg',
          },
        ]}
      />
      <Notifications category={notificationCategory} locale={locale} />
      <Visualizer />
      <DirectorsCorner locale={locale} />
    </main>
  );
}
