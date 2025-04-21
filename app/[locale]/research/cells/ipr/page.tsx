import Image from 'next/image';
import { MdEmail, MdOutlineLocalPhone } from 'react-icons/md';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';

export default async function IPR({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = await getTranslations(locale);
  const description =
    'In consonance with the National IPR Policy of Govt. of India 2016. In order to facilitate faculty, staff and students of Institute in a proactive manner in the generation, protection and transaction of Intellectual Property which offers potential scope for shared benefits to both institute and inventors, an IPR Cell has been established in NIT Kurukshetra. The IPR Cell at NIT Kurukshetra is a cornerstone of our commitment to advancing research and innovation. It provides comprehensive support to faculty, staff, and students by offering expert guidance on securing patents, copyrights, and design registrations. Through it’s working, the IPR Cell equips our academic community with the tools and knowledge necessary to protect and commercialise their intellectual assets. We invite you to explore our initiatives and join us in fostering an environment where academic excellence and pioneering research seamlessly converge.';

  const facultyInchage = [
    {
      image: 'fallback/user-image.jpg',
      name: 'Anshu Parashar',
      title: 'Computer Application',
      email: 'anshuparashar@nitkkr.ac.in',
      phone: '1234567890',
    },
    {
      image: 'fallback/user-image.jpg',
      name: 'Anshu Parashar',
      title: 'Computer Application',
      email: 'anshuparashar@nitkkr.ac.in',
      phone: '1234567890',
    },
  ];

  return (
    <>
      <article
        className="sm:h-76 md:h-84 lg:h-94 relative flex h-56 w-full bg-cover bg-center max-sm:static xl:h-[448px] 2xl:h-[540px]"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 245, 235, 0.2) 0%, rgba(249, 245, 235, 0.5) 50%,rgba(249, 245, 235, 0.75) 75%, rgba(249, 245, 235, 1) 100%), url('${getS3Url()}/student-activities/clubs/technobyte/1.jpg')`,
        }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1
            className="mx-2 my-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl"
            style={{ color: 'black' }}
          >
            Intellectual Property Rights
          </h1>
          <h1 className="mx-2 my-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <span style={{ color: 'black' }}>(IPR) Cell</span>
          </h1>
        </div>
      </article>

      <main className="container mt-12">
        <article className="drop-shadow">
          <p className="d:w-full max-md:rounded-t md:rounded-r">
            {description}
          </p>
        </article>
        {/*  Faculty incharge */}
        <div>
          <Heading
            glyphDirection="rtl"
            heading="h2"
            text={text.club.faculty.toUpperCase()}
          />
          <ul className="flex w-full flex-col flex-wrap items-center space-y-7 md:flex-row md:justify-between lg:space-y-0">
            {facultyInchage.map((faculty, idx) => (
              <li
                key={idx}
                className="flex w-[80%] flex-col items-center rounded-lg border border-primary-500 bg-neutral-50 p-4 sm:w-full sm:flex-row lg:w-[48%]"
              >
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  width={200}
                  height={200}
                  className="h-52  w-52 rounded-lg "
                />
                <section className="ml-6 mt-4 space-y-8 text-center md:mt-0 lg:text-left">
                  <>
                    <h2 className="text-gray-800 m-0 text-start text-2xl">
                      {faculty.name}
                    </h2>
                    <span className="text-gray-600 text-lg">
                      {faculty.title}
                    </span>
                  </>
                  <section>
                    <span className="flex items-center space-x-2">
                      <MdEmail className="text-primary-700" />
                      <span className="text-gray-600">{faculty.email}</span>
                    </span>
                    <span className="mt-2 flex items-center space-x-2">
                      <MdOutlineLocalPhone className="text-primary-700" />
                      <span className="text-gray-600">{faculty.phone}</span>
                    </span>
                  </section>
                </section>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
