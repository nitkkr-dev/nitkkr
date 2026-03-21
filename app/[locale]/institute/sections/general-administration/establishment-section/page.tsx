import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';

// Revalidate every hour (static content updates rarely)
export const revalidate = 3600;

export default async function EstablishmentSection({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.GeneralAdministration
    .establishmentSection;

  const staffData: {
    name: string;
    responsibility: string;
  }[] = [];

  return (
    <>
      <ImageHeader
        title={text.title}
        src="isaac-s3-images/institute/image01.jpg"
        headings={[
          { label: text.aboutTitle, href: '#about' },
          { label: text.functionsTitle, href: '#functions' },
          { label: text.staffTitle, href: '#staff' },
        ]}
      />

      <article className="container" id="about">
        <Heading
          text={text.aboutTitle}
          glyphDirection="dual"
          heading="h3"
          href="#about"
        />
        <p className="text-justify leading-7">{text.about}</p>
      </article>

      <article className="container" id="functions">
        <Heading
          text={text.functionsTitle}
          glyphDirection="rtl"
          heading="h3"
          href="#functions"
        />

        <section className="border-primary-200 rounded-md border bg-neutral-50 p-4 md:p-6">
          <ul className="list-inside list-disc space-y-2 text-justify leading-7">
            {text.functions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>

      <section className="container" id="staff">
        <Heading
          text={text.staffTitle}
          glyphDirection="dual"
          heading="h3"
          href="#staff"
        />
        <GenericTable
          headers={[
            { key: 'name', label: text.staffHeaders.name },
            {
              key: 'responsibility',
              label: text.staffHeaders.responsibility,
            },
          ]}
          tableData={staffData}
          serialNoLabel={text.staffHeaders.srNo}
        />
      </section>
    </>
  );
}
