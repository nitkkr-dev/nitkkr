// Revalidate every hour (has DB calls, rarely changes)
export const revalidate = 3600;

import { MdArticle } from 'react-icons/md';

import ButtonGroup from '~/components/button-group';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function ElectricalMaintenance({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.ElectricalMaintenance;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'electrical-maintenance'),
  }))!;

  const links = [
    {
      text: text.links[0],
      href: 'https://isac-nitkkr-public.s3.ap-south-1.amazonaws.com/isaac-s3-images/institute/sections/electrical-maintenance/Electricity-Connection-Format.pdf',
      icon: MdArticle,
    },
    {
      text: text.links[1],
      href: 'https://isac-nitkkr-public.s3.ap-south-1.amazonaws.com/isaac-s3-images/institute/sections/electrical-maintenance/Disconnection-Format.pdf',
      icon: MdArticle,
    },
    {
      text: text.links[2],
      href: 'https://docs.google.com/forms/d/17Xnt3dMz2FPGUwQ6r3zw3aai6xj7wKsvsyz1QB6Vb9U/viewform?edit_requested=true',
      icon: MdArticle,
    },
    {
      text: text.links[3],
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSfvmiZ1DDMT7_fmnL-5bae8bnmx5iMSEN2yrznnJHehvkwobg/viewform',
      icon: MdArticle,
    },
  ];

  return (
    <>
      <ImageHeader
        title={section.name}
        headings={[
          { label: text.headings[0], href: '#about' },
          { label: text.headings[1], href: '#important-links' },
        ]}
        src="institute/sections/electrical-maintenance/header.jpg"
      />
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#about"
          id="about"
          text={text.headings[0].toUpperCase()}
        />
        <article>
          <div className="text-lg max-md:rounded-t md:w-full md:rounded-r">
            <p>{section.aboutUs}</p>

            <h4 className="mt-4">{text.responsibilitiesTitle}</h4>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              {text.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div id="important-links" className="mt-4">
            <ButtonGroup
              buttonArray={links.map(({ text, href, icon }) => ({
                label: text,
                href,
                icon,
              }))}
            />
          </div>
        </article>
      </section>
    </>
  );
}
