import Image from 'next/image';
import Link from 'next/link';
import { MdEmail, MdOutlineLocalPhone } from 'react-icons/md';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import ImageHeader from '~/components/image-header';

import DirectorCard from './director-card';

export default async function DirectorCorner({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).DirectorPage;

  return (
    <>
      {/* ---------- HEADER ---------- */}
      <ImageHeader
        title={text.pageTitle}
        headings={[
          { label: text.sections[0], href: '#director-profile' },
          { label: text.sections[1], href: '#brief-cv-of-director' },
          { label: text.sections[2], href: '#director-message' },
          { label: text.sections[3], href: '#director-office' },
          { label: text.sections[4], href: '#previous-directors' },
        ]}
        src="student-activities/header.jpg"
      />

      {/* ---------- DIRECTOR’S PROFILE ---------- */}
      <section className="container mb-10 mt-4" id="director-profile">
        <Heading
          glyphDirection="dual"
          heading="h2"
          href="#director-profile"
          text={text.title[0]}
        />
        <DirectorCard
          image="assets/director.jpeg"
          name={text.Director.name}
          position={text.Director.position}
          phone={text.Director.phone}
          fax={text.Director.fax}
          mobile={text.Director.mobile}
          email={text.Director.email}
          labels={text.labels}
        />
      </section>

      {/* ---------- BRIEF CV OF DIRECTOR ---------- */}
      <section className="container px-6 sm:px-10" id="brief-cv-of-director">
        <Heading
          glyphDirection="dual"
          heading="h2"
          href="#brief-cv-of-director"
          text={text.title[1]}
        />
        {text.cv.map((item, index) => (
          <p key={index} className="mb-4">
            {item}
          </p>
        ))}
      </section>

      {/* ---------- DIRECTOR’S MESSAGE ---------- */}
      <section className="container px-6 sm:px-10" id="director-message">
        <Heading
          glyphDirection="dual"
          heading="h2"
          href="#director-message"
          text={text.title[2]}
        />
        {text.DirectorMessage.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </section>

      {/* ---------- DIRECTOR’S OFFICE / EMPLOYEES ---------- */}
      <section className="container" id="director-office">
        <Heading
          glyphDirection="rtl"
          heading="h2"
          href="#director-office"
          text={text.title[3]}
        />
        <ul className="flex w-full flex-col flex-wrap items-center gap-4 sm:gap-5 md:flex-row md:justify-between md:gap-6">
          {text.employes.map((employe, index) => (
            <li
              key={index}
              className="flex w-[95%] flex-row items-center gap-2 rounded-lg border border-primary-500 bg-neutral-50 p-2 transition-shadow duration-300 hover:shadow-lg sm:w-[90%] sm:gap-3 sm:p-3 md:w-[48%] md:gap-4 md:p-4"
            >
              <Image
                src={employe.image}
                alt={employe.name}
                width={200}
                height={200}
                className="h-16 w-16 flex-shrink-0 rounded-lg object-cover sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-36 lg:w-36"
              />
              <section className="min-w-0 flex-1 space-y-1 break-words text-left sm:space-y-2 md:space-y-3 lg:space-y-4">
                <div>
                  <h2 className="m-0 text-sm font-semibold text-primary-700 sm:text-base md:text-lg lg:text-xl">
                    {employe.name}
                  </h2>
                  <span className="block text-xs text-neutral-700 sm:text-sm md:text-base lg:text-lg">
                    {employe.position}
                  </span>
                </div>
                <section className="space-y-0.5 sm:space-y-1">
                  <span className="flex items-center gap-1 text-[10px] sm:gap-1.5 sm:text-xs md:text-sm lg:gap-2 lg:text-base">
                    <MdEmail className="flex-shrink-0 text-primary-700" />
                    <Link
                      href={`mailto:${employe.email}`}
                      className="break-all text-neutral-700 hover:text-primary-700 hover:underline"
                    >
                      {employe.email}
                    </Link>
                  </span>
                  <span className="flex items-center gap-1 text-[10px] sm:gap-1.5 sm:text-xs md:text-sm lg:gap-2 lg:text-base">
                    <MdOutlineLocalPhone className="flex-shrink-0 text-primary-700" />
                    <span className="break-all text-neutral-700">
                      {employe.phone}
                    </span>
                  </span>
                </section>
              </section>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- PREVIOUS DIRECTORS ---------- */}
      <section id="previous-directors" className="container">
        <Heading
          glyphDirection="dual"
          heading="h2"
          href="#previous-directors"
          text={text.title[4]}
        />
        {text.preDirectors.map((director, index) => (
          <div key={index} className="mb-6">
            <DirectorCard
              name={director.name}
              position={director.position}
              phone={director.phone}
              fax={director.fax}
              mobile={director.mobile}
              email={director.email}
              image={director.image}
              labels={text.labels}
            />
          </div>
        ))}
      </section>
    </>
  );
}
