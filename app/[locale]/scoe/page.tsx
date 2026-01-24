import Image from 'next/image';
import { MdCall, MdEmail } from 'react-icons/md';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import GenericTable from '~/components/ui/generic-table';
import NotificationsPanel from '~/components/notifications/notifications-panel';
import FICGroup from '~/components/fic-group';
import { getS3Url } from '~/server/s3';
export default async function SCoE({
  params: { locale },
}: {
  params: { locale: string };
  searchParams?: {
    labsPage?: string;
    coursesPage?: string;
  };
}) {
  const text = (await getTranslations(locale)).SCoE;
  const base = getS3Url();

  const CoursesData = text.Courses.list.map((course) => ({
    courseName: course,
  }));

  const LaboratoriesData = text.Laboratories.list.map((lab) => ({
    LaboratoriesName: lab,
  }));

  return (
    <>
      <ImageHeader
        title={text.welcome}
        headings={[
          { label: text.Notifications.title, href: '#notifications' },
          { label: text.Vision.title, href: '#vision' },
          { label: text.Mission.title, href: '#mission' },
          { label: text.Head.title, href: '#head' },
          { label: text.Features.title, href: '#features' },
          { label: text.Laboratories.title, href: '#laboratories' },
          { label: text.Courses.title, href: '#courses' },
          { label: text.How_to_Apply.title, href: '#how-to-apply' },
          { label: text.For_Queries.title, href: '#for-queries' },
        ]}
        src="slideshow/image01.jpg"
      />
      {/* ADMISSION */}
      <section className="container">
        <section className="mb-5 mt-10">
          {text.admission.process.content.map((paragraph, index) => (
            <p key={index} className="mb-5">
              {paragraph}
            </p>
          ))}
        </section>
      </section>
      {/* notifications */}
      <section className="container my-10" id="notifications">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#notifications"
          id="notifications"
          text={text.Notifications.title.toUpperCase()}
        />
        <NotificationsPanel
          locale={locale}
          category="scoe"
          showViewAll={true}
          viewAllHref={`/${locale}/notifications?category=miscellaneous`}
        />
      </section>
      <section className="container my-16">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-start">
          {/* LEFT: Vision & Mission */}
          <div className="w-full space-y-10 lg:w-1/2">
            {/* Vision */}
            <section id="vision">
              <h3>{text.Vision.title.toUpperCase()}</h3>
              <p className=" leading-relaxed ">{text.Vision.description}</p>
            </section>

            {/* Mission */}
            <section id="mission">
              <h3>{text.Mission.title.toUpperCase()}</h3>
              <ul className="list-disc space-y-3 pl-6 text-neutral-900 lg:text-lg">
                {text.Mission.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* RIGHT: Image */}
          <div className="flex w-full justify-center lg:w-1/2">
            <Image
              src={text.VisionMissionImage.src}
              alt={text.VisionMissionImage.alt}
              width={500}
              height={300}
              className="h-32 w-full max-w-md rounded-xl object-cover sm:h-auto sm:w-80 md:w-96 lg:w-full"
            />
          </div>
        </div>
      </section>
      {/* HEAD OF SCOE */}
      <section className="container my-4">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#head"
          id="head"
          text={text.Head.title}
        />
        <FICGroup
          facultyData={[
            {
              employeeId: '88',
              designation: text.Head.designation,
            },
          ]}
        />
      </section>
      {/* features */}
      <section className="container my-10">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#features"
          id="features"
          text={text.Features.title.toUpperCase()}
        />
        <article className="rounded-lg border border-primary-500 bg-shade-light p-2 md:p-4">
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <ul>
                  {text.Features.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Image
                        src={`${base}/research/feather_bullet.png`}
                        alt="bullet"
                        width={20}
                        height={20}
                        className="size-4 rotate-90 sm:size-5 md:size-6 lg:size-7 xl:size-9"
                      />
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
      {/* laboratories */}
      <section className="container my-4">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#laboratories"
          id="laboratories"
          text={text.Laboratories.title.toUpperCase()}
        />
      </section>
      <GenericTable
        headers={[
          {
            key: 'LaboratoriesName',
            label: text.Laboratories.LaboratoriesName,
          },
        ]}
        tableData={LaboratoriesData}
        showSerialNo={true}
        serialNoLabel={text.Laboratories.srNo}
      />
      {/* Courses */}
      <section className="container mt-10">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#courses"
          id="courses"
          text={text.Courses.title.toUpperCase()}
        />
      </section>
      <GenericTable
        headers={[{ key: 'courseName', label: text.Courses.courseName }]}
        tableData={CoursesData}
        showSerialNo={true}
        serialNoLabel={text.Courses.srNo}
      />
      {/* how to apply */}
      <section className="container my-10">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#how-to-apply"
          id="how-to-apply"
          text={text.How_to_Apply.title.toUpperCase()}
        />
        <article className="rounded-lg border border-primary-500 bg-shade-light p-2 md:p-4">
          <div className="mt-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <ol className="list-decimal space-y-2 pl-6 text-neutral-900 lg:text-lg">
                  {text.How_to_Apply.registrationSteps.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* for queries */}
      <section className="container mb-4 mt-10">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#for-queries"
          id="for-queries"
          text={text.For_Queries.title.toUpperCase()}
        />

        <section className="mt-2">
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-20">
            {/* Email */}
            <div className="flex flex-col items-center">
              <a
                href="mailto:scoe@nitkkr.ac.in"
                className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-500 bg-shade-light text-primary-700 transition hover:bg-primary-100 md:h-32 md:w-32"
                aria-label="Email SCoE"
              >
                <MdEmail className="text-3xl sm:text-4xl md:text-5xl" />
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <a
                href="tel:+911744233300"
                className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-500 bg-shade-light text-primary-700 transition hover:bg-primary-100 md:h-32 md:w-32"
                aria-label="Call SCoE"
              >
                <MdCall className="text-3xl sm:text-4xl md:text-5xl" />
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
