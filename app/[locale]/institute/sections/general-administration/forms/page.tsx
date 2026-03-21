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

        <FormLinksGroup items={text.links} />
      </section>
    </>
  );
}
