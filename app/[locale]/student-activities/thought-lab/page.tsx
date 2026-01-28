import Image from 'next/image';
import Link from 'next/link';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import Gallery from '~/components/ui/gallery';
import { getTranslations } from '~/i18n/translations';
import { getS3Url, listFolderImages } from '~/server/s3';

export default async function ThoughtLab({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = await getTranslations(locale);

  const galleryImages = await listFolderImages(
    'student-activities/thought-lab/'
  );

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
        <p className="mb-6">
          A Thought Laboratory (Thought Lab) has been set up in our institute,
          which was inaugurated by the Hon&apos;ble Governor of Haryana on May
          10, 2022. The idea of Thought Lab is to train people on how to
          cultivate positive and creative thoughts and contribute positively at
          their own homes, organizations, and within society as a whole.
        </p>

        {/* Vision & Mission Section */}
        <section className="mt-4 flex rounded bg-shade-light p-2">
          <ul>
            <li className="p-3">
              <h4>Vision</h4>
              {text.ThoughtLab.vision.map((item, index) => (
                <p className="mb-1" key={index}>
                  {item}
                </p>
              ))}
            </li>
            <li className="p-3">
              <h4>Mission</h4>
              {text.ThoughtLab.mission.map((item, index) => (
                <p className="mb-1" key={index}>
                  {item}
                </p>
              ))}
            </li>
          </ul>

          {/* <Image
            src="student-activities/thought-lab/VISASA.jpeg"
            alt="Thought Lab"
            className="m-2 size-0 rounded-md lg:size-60"
            height={128}
            width={128}
          /> */}
        </section>
      </section>

      {/* Faculty & Student Secretaries */}
      <section className="container">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          text="FACULTY & STUDENT SECRETARIES"
        />
        <p className="mb-4">
          Faculty &amp; Student Secretaries of Thought Lab for Session 2025-26
        </p>

        <div className="overflow-x-auto rounded-md border border-primary-500 bg-neutral-50 p-4 shadow-sm">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-primary-300">
                <th className="px-4 py-2">S.No.</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Designation</th>
              </tr>
            </thead>
            <tbody>
              {text.ThoughtLab.secretaries.faculty_secretaries.map(
                (member, index) => (
                  <tr key={index} className="border-b border-neutral-200">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{member.name}</td>
                    <td className="px-4 py-2">{member.designation}</td>
                  </tr>
                )
              )}
              {text.ThoughtLab.secretaries.student_secretaries.map(
                (member, index) => (
                  <tr key={index} className="border-b border-neutral-200">
                    <td className="px-4 py-2">
                      {text.ThoughtLab.secretaries.faculty_secretaries.length +
                        index +
                        1}
                    </td>
                    <td className="px-4 py-2">{member.name}</td>
                    <td className="px-4 py-2">{member.designation}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Purpose */}
      <section className="container">
        <Heading glyphDirection="ltr" heading="h3" text="PURPOSE" />
        <ul className="list-disc space-y-2 pl-5">
          {text.ThoughtLab.purpose.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="container">
        <Heading glyphDirection="ltr" heading="h3" text="BENEFITS" />
        <ul className="list-disc space-y-2 pl-5">
          {text.ThoughtLab.benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Contact Us */}
      <section className="container">
        <Heading glyphDirection="ltr" heading="h3" text="CONTACT US" />
        <p>{text.ThoughtLab.contact.office}</p>
        <p className="mt-2">
          Website:{' '}
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
        <Heading glyphDirection="ltr" heading="h3" text="IMAGE GALLERY" />
        <Gallery
          base={getS3Url()}
          images={galleryImages}
          viewMoreText={text.Main.viewMore}
        />
      </section>
    </>
  );
}
