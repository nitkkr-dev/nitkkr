import Link from 'next/link';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import { getS3Url } from '~/server/s3';

export default async function ElectricalMaintenance({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.ElectricalMaintenance;

  const s3URL = getS3Url() + '/institute/sections/electrical-maintenance/';

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'electrical-maintenance'),
  }))!;

  const relatedLinks = [
    `${locale}/forms/electricity-user-details`,
    s3URL + 'Electricity-Connection-Format.pdf',
    s3URL + 'Disconnection-Format.pdf',
    `${locale}/forms/electricity-complaint-form`,
    `${locale}/forms/telephone-complaint-form`,
  ];

  return (
    <>
      <ImageHeader
        title={text.title}
        headings={[
          { label: text.about, href: '#about' },
          { label: text.related, href: '#related' },
        ]}
        src="institute/sections/electrical-maintenance/header.jpg"
      />
      <section className="container" id="about">
        <Heading
          glyphDirection="dual"
          heading="h2"
          href="#about"
          text={text.about}
        />
        <p>{section?.aboutUs}</p>
        <h4>{text.responsibilities}</h4>
        <ul className="mt-1 list-inside list-decimal">
          {text.responsibilitiesList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="container" id="related">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#related"
          text={text.related}
        />
        <ul className="flex flex-wrap gap-5 text-primary-700 max-md:justify-between md:gap-8">
          {text.relatedList.map((item, i) => (
            <li key={item} className="w-32 hover:text-primary-500 md:w-48">
              <Link href={relatedLinks[i]}>{item}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
