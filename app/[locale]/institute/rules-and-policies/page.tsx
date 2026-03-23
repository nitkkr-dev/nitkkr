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

  const recruitmentRuleLinks = [
    'https://nitkkr.ac.in/wp-content/uploads/2022/02/Implementation-of-RRs-2019-of-Non_Faculty-dt.04.04.2019-12122019.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/02/F.35-5.2018-TS.III-dt.20.02.2019-12122019.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/02/2-Recruitment-Rules-RRs-for-NonTeaching-posts-in-NITs.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/02/2-Recruitment-Rules-RRs-for-NonTeaching-posts-in-NITs.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/02/3-Modified-Assured-Career-Prograssion-MACP-Scheme.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/02/4-Recruitment-Rules-for-the-faculty-posts-under-four-tier-flaxible-faculty-cadre-in-NITs.pdf',
  ];

  const serviceRuleLinks = [
    'https://nitkkr.ac.in/wp-content/uploads/2022/02/ACP_Rules.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/02/MOA.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/02/ReckRules.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/02/Teaching.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/02/Non_Teaching.pdf',
    'https://nitkkr.ac.in/?page_id=13706',
    'https://nitkkr.ac.in/wp-content/uploads/2022/02/CLR.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2023/10/CEI-Reservation-in-Teachers-Cadre-Act-2019-21102022_compressed.pdf',
  ];

  const policyLinks = [
    'https://nitkkr.ac.in/wp-content/uploads/2021/09/amended-statues-of-NITs.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/09/Code-of-Conduct-rulesnn.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/09/CPDA-Rules.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/09/DOC-RULES.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/09/grievance.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/09/SEXUAL-HARASMENT-RULES.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/09/CASHLESS-RULES.pdf',
  ];

  const recruitmentItems = text.sections.recruitment.links.map(
    (label, index) => ({
      label,
      href: recruitmentRuleLinks[index] ?? '#',
    })
  );

  const serviceItems = text.sections.service.links.map((label, index) => ({
    label,
    href: serviceRuleLinks[index] ?? '#',
  }));

  const policyItems = text.sections.policies.links.map((label, index) => ({
    label,
    href: policyLinks[index] ?? '#',
  }));

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

        <FormLinksGroup items={recruitmentItems} />
      </section>

      <section className="container py-8 md:py-12" id="service-rules">
        <Heading
          text={text.sections.service.title}
          glyphDirection="ltr"
          heading="h3"
          href="#service-rules"
        />

        <FormLinksGroup items={serviceItems} />
      </section>

      <section className="container py-8 md:py-12" id="rules-and-policies">
        <Heading
          text={text.sections.policies.title}
          glyphDirection="ltr"
          heading="h3"
          href="#rules-and-policies"
        />

        <FormLinksGroup items={policyItems} />
      </section>
    </>
  );
}
