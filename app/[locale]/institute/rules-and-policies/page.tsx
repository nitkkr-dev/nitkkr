import Heading from '~/components/heading';
import FormLinksGroup from '~/components/form-link/form-links-group';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';

// Revalidate every hour (static content updates rarely)
export const revalidate = 3600;

export default async function RulesAndPolicies({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Institute.rulesAndPolicies;

  return (
    <>
      <ImageHeader
        title={text.title}
        src="isaac-s3-images/institute/image01.jpg"
      />

      <section className="container py-8 md:py-12" id="recruitment-rules">
        <Heading
          text={text.sections.recruitment.title}
          glyphDirection="ltr"
          heading="h3"
          href="#recruitment-rules"
        />

        <FormLinksGroup items={text.sections.recruitment.links} />
      </section>

      <section className="container py-8 md:py-12" id="service-rules">
        <Heading
          text={text.sections.service.title}
          glyphDirection="ltr"
          heading="h3"
          href="#service-rules"
        />

        <FormLinksGroup items={text.sections.service.links} />
      </section>

      <section className="container py-8 md:py-12" id="rules-and-policies">
        <Heading
          text={text.sections.policies.title}
          glyphDirection="ltr"
          heading="h3"
          href="#rules-and-policies"
        />

        <FormLinksGroup items={text.sections.policies.links} />
      </section>
    </>
  );
}
