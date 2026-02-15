import NotificationsPanel from '~/components/notifications/notifications-panel';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';

export default async function StudentCouncil({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = await getTranslations(locale);

  return (
    <>
      <ImageHeader
        title={text.StudentCouncil.title}
        src="student-activities/thought-lab/welcome-bk-shivani.jpeg"
      />

      <section className="container">
        {/* Main Title with dual elephants */}
        <Heading
          glyphDirection="dual"
          heading="h3"
          text={text.StudentCouncil.title.toUpperCase()}
        />

        {/* About Description */}
        <p className="mb-6">{text.ThoughtLab.about}</p>
        <section className="container my-10" id="notifications">
          <Heading
            glyphDirection="ltr"
            heading="h3"
            href="#notifications"
            id="notifications"
            text={text.Notifications.title.toUpperCase()}
          />
          <NotificationsPanel
            locale={locale}
            category="scoe"
            showViewAll={true}
            viewAllHref={`/${locale}/notifications?category=miscellaneous`}
          />
        </section>
      </section>
    </>
  );
}
