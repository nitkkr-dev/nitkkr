import { arrayOverlaps } from 'drizzle-orm';
import Image from 'next/image';
import { MdCall, MdEmail } from 'react-icons/md';

import EventSection from '~/components/events/event-section';
import FICGroup from '~/components/fic-group';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import Gallery from '~/components/ui/gallery';
import { getTranslations } from '~/i18n/translations';
import { db, type eventCategoryEnum } from '~/server/db';
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

  const eventCategory: (typeof eventCategoryEnum.enumValues)[number] =
    'thought-lab';

  const rawEvents = await db.query.events
    .findMany({
      columns: {
        id: true,
        title: true,
        categories: true,
        startDate: true,
        endDate: true,
        time: true,
        description: true,
        images: true,
        location: true,
      },
      where: (event) => arrayOverlaps(event.categories, [eventCategory]),
      limit: 3,
    })
    .catch(() => []);

  // Ensure endDate and time are never null
  const events = rawEvents.map((event) => ({
    ...event,
    endDate: event.endDate ?? '',
    time: event.time ?? '',
    description: event.description ?? '',
    location: event.location ?? '',
  }));

  return (
    <>
      <ImageHeader
        title={text.ThoughtLab.title}
        headings={[
          { label: text.ThoughtLab.tabs.purpose, href: '#purpose' },
          { label: text.ThoughtLab.tabs.benefits, href: '#benefits' },
          { label: text.ThoughtLab.tabs.events, href: '#events' },
          {
            label: text.ThoughtLab.tabs.facultyMembers,
            href: '#facultyMembers',
          },
          {
            label: text.ThoughtLab.tabs.studentSecretaries,
            href: '#studentSecretaries',
          },
          { label: text.ThoughtLab.tabs.contact, href: '#contact' },
        ]}
        src="student-activities/thought-lab/welcome-bk-shivani.jpeg"
      />

      <section className="container mt-12">
        {/* About Description */}
        <p className="mb-6 text-justify">{text.ThoughtLab.about}</p>

        {/* Vision & Mission Section */}
        <section className="container my-16">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
            {/* LEFT: Vision & Mission */}
            <div className="w-full space-y-10 lg:w-1/2">
              {/* Vision */}
              <section id="vision">
                <h3>{text.ThoughtLab.vision.heading.toUpperCase()}</h3>
                <p className=" leading-relaxed ">
                  {text.ThoughtLab.vision.points}
                </p>
              </section>

              {/* Mission */}
              <section id="mission">
                <h3>{text.ThoughtLab.mission.heading.toUpperCase()}</h3>
                <ul className="list-disc space-y-3 pl-6 text-neutral-900 lg:text-lg">
                  {text.ThoughtLab.mission.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </section>
            </div>

            {/* RIGHT: Image */}
            <div className="flex w-full flex-shrink-0 justify-end lg:w-1/2">
              <Image
                src={text.ThoughtLab.VisionMissionImage.src}
                alt={text.ThoughtLab.VisionMissionImage.alt}
                width={500}
                height={300}
                className="h-32 w-full max-w-md rounded-xl object-cover sm:h-auto sm:w-80 md:w-96 lg:w-full"
              />
            </div>
          </div>
        </section>
      </section>

      {/* Purpose */}
      <section className="container my-10">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#purpose"
          id="purpose"
          text={text.ThoughtLab.purpose.heading.toUpperCase()}
        />
        <article className="rounded-lg border border-primary-500 bg-shade-light p-2 md:p-4">
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <ul className="list-disc space-y-2 pl-5">
                  {text.ThoughtLab.purpose.points.map((item, index) => (
                    <li
                      key={index}
                      className="text-[16px] font-normal leading-snug md:text-[20px]"
                    >
                      <span className="font-sans text-sm lg:text-base xl:text-lg">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Benefits */}
      <section className="container my-10">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#benefits"
          id="benefits"
          text={text.ThoughtLab.benefits.heading.toUpperCase()}
        />
        <article className="rounded-lg border border-primary-500 bg-shade-light p-2 md:p-4">
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <ul className="list-disc space-y-2 pl-5">
                  {text.ThoughtLab.benefits.points.map((item, index) => (
                    <li
                      key={index}
                      className="text-[16px] font-normal leading-snug md:text-[20px]"
                    >
                      <span className="font-sans text-sm lg:text-base xl:text-lg">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Events */}
      {events.length > 0 && (
        <section className="container">
          <Heading
            glyphDirection="rtl"
            heading="h3"
            href="#events"
            id="events"
            text={text.ThoughtLab.events.heading.toUpperCase()}
          />
          <EventSection events={events} locale={locale} showViewAll={false} />
        </section>
      )}

      {/* Faculty Member */}
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#facultyMembers"
          id="facultyMembers"
          text={`${text.ThoughtLab.faculty_members.heading.toUpperCase()}`}
        />
        {text.Institute.cells.iic.employes &&
          (() => {
            const thoughtLabFacultyEmployeeIds = ['131', '1594', '1609'];
            const iicDesignations =
              text.ThoughtLab.faculty_members.employees.map((e) => e.position);
            const facultyData = thoughtLabFacultyEmployeeIds.map((id, idx) => ({
              employeeId: id,
              designation: iicDesignations[idx] ?? '',
            }));

            return <FICGroup facultyData={facultyData} />;
          })()}
      </section>

      {/* Student Secretaries */}
      <section className="container">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#studentSecretaries"
          id="studentSecretaries"
          text={` ${text.ThoughtLab.student_secretaries.heading.toUpperCase()}`}
        />
      </section>

      {/* Contact Us */}
      <section className="container mb-4 mt-10">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#contact"
          id="contact"
          text={text.ThoughtLab.contact.heading.toUpperCase()}
        />

        <section className="mt-2">
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-20">
            {/* Email */}
            <div className="flex flex-col items-center">
              <a
                href="mailto:scoe@nitkkr.ac.in"
                className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-500 bg-shade-light text-primary-700 transition hover:bg-primary-100 md:h-20 md:w-20"
                aria-label="Email SCoE"
              >
                <MdEmail className="text-3xl sm:text-4xl md:text-5xl" />
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <a
                href="tel:+911744233300"
                className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-500 bg-shade-light text-primary-700 transition hover:bg-primary-100 md:h-20 md:w-20"
                aria-label="Call SCoE"
              >
                <MdCall className="text-3xl sm:text-4xl md:text-5xl" />
              </a>
            </div>
          </div>
        </section>
      </section>

      {/* Gallery */}
      <section className="container">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#gallery"
          id="gallery"
          text={text.ThoughtLab.gallery.heading.toUpperCase()}
        />
        <Gallery
          base={getS3Url()}
          images={galleryImages}
          viewMoreText={text.Main.viewMore}
        />
      </section>
    </>
  );
}
