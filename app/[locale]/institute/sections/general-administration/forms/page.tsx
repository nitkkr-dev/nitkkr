import Heading from '~/components/heading';
import FormLinksGroup from '~/components/form-link/form-links-group';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';

// Revalidate every hour (static content updates rarely)
export const revalidate = 3600;

export default async function GeneralAdministrationForms({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.GeneralAdministration
    .forms;

  const formLinks = [
    'https://nitkkr.ac.in/wp-content/uploads/2022/12/1-APPLICATION-FOR-CASUAL-SPECIAL-CASUAL-COMPENSATORY-STATION-LEAVE-RH.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/12/2-Application-for-Earned-Leave.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/12/3-APPLICATION-FOR-COMMUTED-HALF-PAY-MATERNITY-LEAVE.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/12/4-APPLICATION-FOR-AVAILING-OF-LEAVE-TRAVEL-CONCESSION.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/12/5-Application-for-Institute-Health-Diary.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/12/6-Option-Form-for-Cashless-Medical-Insurance-Scheme.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/12/7-NOMINATION-FORM.pdf',
  ];

  const formItems = text.links.map((label, index) => ({
    label,
    href: formLinks[index] ?? '#',
  }));

  return (
    <>
      <ImageHeader
        title={text.title}
        src="isaac-s3-images/institute/image01.jpg"
      />

      <section className="container py-8 md:py-12" id="forms-list">
        <Heading
          text={text.listTitle}
          glyphDirection="ltr"
          heading="h3"
          href="#forms-list"
        />

        <FormLinksGroup items={formItems} />
      </section>
    </>
  );
}
