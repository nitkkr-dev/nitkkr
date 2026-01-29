import Link from 'next/link';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import Gallery from '~/components/ui/gallery';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { getS3Url, listFolderImages } from '~/server/s3';

// Define a type for secretary members
type SecretaryMember = {
  name: string;
  designation: string;
};

export default async function ThoughtLab({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = await getTranslations(locale);

  const galleryImages = await listFolderImages(
    'student-activities/thought-lab/'
  );

  // Prepare table data for secretaries
  const facultyMembers = text.ThoughtLab.secretaries.faculty_secretaries.members.map(
    (member: SecretaryMember, idx: number) => ({
      sno: idx + 1,
      name: member.name,
      designation: member.designation,
    })
  );
  const facultyCount = facultyMembers.length;
  const studentMembers = text.ThoughtLab.secretaries.student_secretaries.members.map(
    (member: SecretaryMember, idx: number) => ({
      sno: facultyCount + idx + 1,
      name: member.name,
      designation: member.designation,
    })
  );
  const allSecretaries = [...facultyMembers, ...studentMembers];

  // Always show serial number column, and use translation for label
  const tableHeaders = [
    { key: 'sno', label: text.ThoughtLab.table.sno },
    { key: 'name', label: text.ThoughtLab.table.name },
    { key: 'designation', label: text.ThoughtLab.table.designation },
  ];

  return (
    <>
      <ImageHeader
        title={text.ThoughtLab.title}
        src="student-activities/thought-lab/welcome-bk-shivani.jpeg"
      />

      <section className="container">
        {/* Main Title with dual elephants */}
        <Heading
          glyphDirection="dual"
          heading="h3"
          text={text.ThoughtLab.title.toUpperCase()}
        />

        {/* About Description */}
        <p className="mb-6">{text.ThoughtLab.about}</p>

        {/* Vision & Mission Section */}
        <section className="mt-4 flex rounded bg-shade-light p-2">
          <ul>
            <li className="p-3">
              <h4>{text.ThoughtLab.vision.heading}</h4>
              {text.ThoughtLab.vision.points.map((item: string, index: number) => (
                <p className="mb-1" key={index}>
                  {item}
                </p>
              ))}
            </li>
            <li className="p-3">
              <h4>{text.ThoughtLab.mission.heading}</h4>
              {text.ThoughtLab.mission.points.map((item: string, index: number) => (
                <p className="mb-1" key={index}>
                  {item}
                </p>
              ))}
            </li>
          </ul>
        </section>
      </section>

      {/* Faculty & Student Secretaries */}
      <section className="container">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          text={`${text.ThoughtLab.secretaries.faculty_secretaries.heading.toUpperCase()} & ${text.ThoughtLab.secretaries.student_secretaries.heading.toUpperCase()}`}
        />
        <p className="mb-4">{text.ThoughtLab.secretariesSession}</p>

        <GenericTable
          headers={tableHeaders}
          tableData={allSecretaries}
          showSerialNo={false}
        />
      </section>

      {/* Purpose */}
      <section className="container">
        <Heading glyphDirection="ltr" heading="h3" text={text.ThoughtLab.purpose.heading.toUpperCase()} />
        <ul className="list-disc space-y-2 pl-5">
          {text.ThoughtLab.purpose.points.map((item: string, index: number) => (
            <li
              key={index}
              className="text-[20px] leading-snug md:text-[20px] text-[16px] md:text-[20px] font-normal"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="container">
        <Heading glyphDirection="ltr" heading="h3" text={text.ThoughtLab.benefits.heading.toUpperCase()} />
        <ul className="list-disc space-y-2 pl-5">
          {text.ThoughtLab.benefits.points.map((item: string, index: number) => (
            <li
              key={index}
              className="text-[20px] leading-snug md:text-[20px] text-[16px] md:text-[20px] font-normal"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Us */}
      <section className="container">
        <Heading glyphDirection="ltr" heading="h3" text={text.ThoughtLab.contact.heading.toUpperCase()} />
        <p>{text.ThoughtLab.contact.office}</p>
        <p className="mt-2">
          {text.ThoughtLab.contact.websiteLabel}{' '}
          <Link
            href={text.ThoughtLab.contact.website}
            className="text-primary-600 hover:text-primary-800 underline"
          >
            {text.ThoughtLab.contact.website}
          </Link>
        </p>
      </section>

      {/* Gallery */}
      <section className="container">
        <Heading glyphDirection="ltr" heading="h3" text={text.ThoughtLab.gallery.heading} />
        <Gallery
          base={getS3Url()}
          images={galleryImages}
          viewMoreText={text.Main.viewMore}
        />
      </section>
    </>
  );
}
