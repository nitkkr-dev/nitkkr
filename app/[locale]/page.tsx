import Notifications from '~/app/notifications';
import Heading from '~/components/heading';
import MessageCard from '~/components/message-card';
import Slideshow from '~/components/slideshow';
import { getTranslations } from '~/i18n/translations';
import { type notifications } from '~/server/schema';

export default async function Home({
  params: { locale },
  searchParams: { notificationCategory = 'academic' },
}: {
  params: { locale: string };
  searchParams: {
    notificationCategory?: (typeof notifications.category.enumValues)[number];
  };
}) {
  const text = (await getTranslations(locale)).Main;

  return (
    <>
      <style>
        {`.header-sticky-ness {
          position: fixed;
        }`}
      </style>

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

      <section className="container mb-32 mt-10" id="directors-corner">
        <Heading
          glyphDirection="rtl"
          heading="h2"
          href="#directors-corner"
          text={text.director.title}
        />
        <MessageCard
          image="director.jpg"
          locale={locale}
          more={text.director.more}
          name={text.director.name}
          quote={text.director.quote[0]}
          quoteBelow={text.director.quote[1]}
          readMorePath={`/${locale}/institute/director#message`}
        />
      </section>
    </>
  );
}
