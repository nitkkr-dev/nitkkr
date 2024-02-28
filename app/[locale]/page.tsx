import DirectorsCorner from '~/app/directors-corner';
import Notifications from '~/app/notifications';
import Slideshow from '~/components/slideshow';

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
      <Slideshow
        images={[
          'https://nitkkr.ac.in/wp-content/uploads/2023/11/IMG20220903190255-1-scaled.jpg',
          'https://nitkkr.ac.in/wp-content/uploads/2022/01/24131961_285405678647849_426967072086000359_o.jpg',
          'https://nitkkr.ac.in/wp-content/uploads/2022/12/IMG_0496-scaled.jpg',
        ]}
      />
      <Notifications category={notificationCategory} locale={locale} />
      <DirectorsCorner locale={locale} />
    </main>
  );
}
