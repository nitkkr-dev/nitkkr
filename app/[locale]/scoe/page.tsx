import Image from 'next/image';
import Link from 'next/link';
import { MdCall, MdEmail, MdOutlineLocalPhone } from 'react-icons/md';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import GenericTable from '~/components/ui/generic-table';
import NotificationsPanelProps from '~/components/notifications/notifications-panel';
export default async function SCoE({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams?: {
    labsPage?: string;
    coursesPage?: string;
  };
}) {
  const text = (await getTranslations(locale)).SCoE;

  const CoursesData = [
    { courseName: 'Automation and PLC Programming' },
    { courseName: 'Industrial Robotics and Automation' },
    { courseName: 'Digital Manufacturing Systems' },
    { courseName: 'CAD / CAM and Advanced Manufacturing' },
    { courseName: 'Industry 4.0 and Smart Factories' },
    { courseName: 'Advanced CNC Machining and Tooling' },
    { courseName: 'Mechatronics and Embedded Systems' },
  ];

  const LaboratoriesData = [
    { LaboratoriesName: 'Robotics Lab' },
    { LaboratoriesName: 'Manufacturing Lab' },
    { LaboratoriesName: 'CAD Lab' },
    { LaboratoriesName: 'Mechatronics Lab' },
    { LaboratoriesName: 'Embedded Systems Lab' },
  ];

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
      <section className="container" id="notifications">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#notifications"
          id="notifications"
          text={text.Notifications.title.toUpperCase()}
        />
        <NotificationsPanelProps
          locale={locale}
          category="academic"
          showViewAll={true}
          viewAllHref={`/${locale}/notifications?category=scoe`}
        />
      </section>
      <section className="container my-16">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-start">
          {/* LEFT: Vision & Mission */}
          <div className="w-full space-y-10 lg:w-1/2">
            {/* Vision */}
            <section id="vision">
              <h3>
                {text.Vision.title.toUpperCase()}
              </h3>
              <p className=" leading-relaxed ">{text.Vision.description}</p>
            </section>

            {/* Mission */}
            <section id="mission">
              <h3>
                {text.Mission.title.toUpperCase()}
              </h3>
              <ul className="list-disc space-y-3 pl-6 lg:text-lg text-neutral-900">
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
              className="h-32 w-full sm:h-auto sm:w-80 md:w-96 lg:w-full max-w-md rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#head"
          id="head"
          text={text.Head.title}
        />
        <ul
          className={`flex w-full flex-col flex-wrap items-center space-y-7
  md:flex-row lg:space-y-0
  ${
    text.Head.facultyIncharge.length === 1
      ? 'md:justify-center'
      : 'md:justify-between'
  }`}
        >
          {text.Head.facultyIncharge.map((faculty, idx) => (
            <li
              key={idx}
              className="flex w-[70%] flex-col items-center rounded-lg border border-primary-500 bg-neutral-50 p-4 sm:w-full sm:flex-row lg:w-[48%]"
            >
              <Image
                src={faculty.image}
                alt={faculty.name}
                width={200}
                height={200}
                className="h-52 w-52 rounded-lg "
              />
              <section className="ml-6 mt-4 w-full min-w-0 space-y-8 break-words text-center md:mt-0 lg:text-left">
                <div>
                  <h2 className="m-0 text-start text-base sm:text-lg md:text-xl">
                    {faculty.name}
                    <span className="block text-sm sm:text-base md:text-lg text-neutral-900">
                      {faculty.title}
                    </span>
                  </h2>
                </div>
                <section>
                  <span className="flex items-center space-x-2">
                    <MdEmail className="text-primary-700" />
                    <Link
                      href={`mailto:${faculty.email}`}
                      className="text-neutral-600 break-all hover:text-primary-700 hover:underline"
                    >
                      {faculty.email}
                    </Link>
                  </span>
                  <span className="mt-2 flex items-center space-x-2">
                    <MdOutlineLocalPhone className="text-primary-700" />
                    <span className="text-neutral-600 break-all">
                      {faculty.phone}
                    </span>
                  </span>
                </section>
              </section>
            </li>
          ))}
        </ul>
      </section>
      {/* features */}
      <section className="container">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#features"
          id="features"
          text={text.Features.title.toUpperCase()}
        />
        {/* Box */}
        <div className="rounded-xl border border-primary-300 bg-neutral-50 px-8 py-3 lg:text-lg">
          <ul className="list-disc text-neutral-900">
            {text.Features.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      \{/* laboratories */}
      <section className="container">
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
        serialNoLabel="Sr. No."
      />
      {/* Courses */}
      <section className="container  mt-10">
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
        serialNoLabel="Sr. No."
      />
      {/* how to apply */}
      <section className="container">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#how-to-apply"
          id="how-to-apply"
          text={text.How_to_Apply.title.toUpperCase()}
        />
        <div className="px-4">
          <ol className="list-decimal pl-6 space-y-2 lg:text-lg text-neutral-900">
            {text.How_to_Apply.registrationSteps.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </section>
      {/* for queries */}
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#for-queries"
          id="for-queries"
          text={text.For_Queries.title.toUpperCase()}
        />

        <section className="my-16">
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-20">
            {/* Email */}
            <div className="flex flex-col items-center">
              <a
                href="mailto:scoe@nitkkr.ac.in"
                className="flex h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 items-center justify-center rounded-full border border-primary-500 text-primary-700 transition hover:bg-primary-100"
                aria-label="Email SCoE"
              >
                <MdEmail className="text-3xl sm:text-4xl md:text-5xl" />
              </a>
              <span className="mt-4 text-sm sm:text-base text-neutral-700">scoe@nitkkr.ac.in</span>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <a
                href="tel:+911744233300"
                className="flex h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 items-center justify-center rounded-full border border-primary-500 text-primary-700 transition hover:bg-primary-100"
                aria-label="Call SCoE"
              >
                <MdCall className="text-3xl sm:text-4xl md:text-5xl" />
              </a>
              <span className="mt-4 text-sm sm:text-base text-neutral-700">01744-233300</span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
