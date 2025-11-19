import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import ImageHeader from '~/components/image-header';

import DirectorCard from './director-card';
import EmployeCard from './employee-card';

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
      <section className="container mb-32 mt-10" id="director-profile">
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
        />
      </section>

      {/* ---------- BRIEF CV OF DIRECTOR ---------- */}
      <section className="px-6 sm:px-10" id="brief-cv-of-director">
        <Heading
          glyphDirection="dual"
          heading="h2"
          href="#brief-cv-of-director"
          text={text.title[1]}
        />
        {text.cv.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </section>

      {/* ---------- DIRECTOR’S MESSAGE ---------- */}
      <section className="px-6 sm:px-10" id="director-message">
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
      <section
        className="flex flex-wrap justify-center gap-6 sm:gap-8"
        id="director-office"
      >
        <Heading
          glyphDirection="rtl"
          heading="h2"
          href="#director-office"
          text={text.title[3]}
        />
        {text.employes.map((employe, index) => (
          <EmployeCard
            key={index}
            name={employe.name}
            position={employe.position}
            phone={employe.phone}
            email={employe.email}
            image={employe.image}
          />
        ))}
      </section>

      {/* ---------- PREVIOUS DIRECTORS ---------- */}
      <section id="previous-directors">
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
            />
          </div>
        ))}
      </section>
    </>
  );
}
