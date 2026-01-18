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
              <h3 className="text-red-700  mb-4 text-3xl">
                {text.Vision.title.toUpperCase()}
              </h3>
              <p className=" leading-relaxed ">{text.Vision.description}</p>
            </section>

            {/* Mission */}
            <section id="mission">
              <h3 className="text-red-700 mb-4 font-serif text-3xl">
                {text.Mission.title.toUpperCase()}
              </h3>
              <ul className="text-black list-disc space-y-3 pl-6 text-lg">
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
              className="rounded-xl object-cover"
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
                  <h2 className="m-0 text-start text-lg md:text-xl">
                    {faculty.name}
                    <span className="block text-lg text-neutral-900">
                      {faculty.title}
                    </span>
                  </h2>
                </div>
                <section>
                  <span className="flex items-center space-x-2">
                    <MdEmail className="text-primary-700" />
                    <Link
                      href={`mailto:${faculty.email}`}
                      className="text-gray-600 break-all hover:text-primary-700 hover:underline"
                    >
                      {faculty.email}
                    </Link>
                  </span>
                  <span className="mt-2 flex items-center space-x-2">
                    <MdOutlineLocalPhone className="text-primary-700" />
                    <span className="text-gray-600 break-all">
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
        <div className="border-red-300 rounded-xl border bg-neutral-50 px-8 py-3 text-lg">
          <ul className="text-black list-disc">
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
        <div className="border-red-300 rounded-xl border bg-neutral-50 px-10 py-5">
          <ol className="text-black list-inside list-decimal text-lg">
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

        <section className="container my-16">
          <div className="flex justify-center gap-20">
            {/* Email */}
            <a
              href="mailto:scoe@nitkkr.ac.in"
              className="hover:bg-primary-50 flex h-40 w-40 items-center justify-center rounded-full border border-primary-500 text-primary-700 transition"
              aria-label="Email SCoE"
            >
              <MdEmail className="text-5xl" />
            </a>

            {/* Phone */}
            <a
              href="tel:+911744233000"
              className="hover:bg-primary-50 flex h-40 w-40 items-center justify-center rounded-full border border-primary-500 text-primary-700 transition"
              aria-label="Call SCoE"
            >
              <MdCall className="text-5xl" />
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
