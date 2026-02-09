import Image from 'next/image';
import { MdCall, MdEmail } from 'react-icons/md';

import ImageHeader from '~/components/image-header';
import Heading from '~/components/heading';
import { getS3Url } from '~/server/s3';
import { cn } from '~/lib/utils';
import FICGroup from '~/components/fic-group';
import { getTranslations } from '~/i18n/translations';

const nccofficers = [
  {
    employeeId: '1576',
    designation: 'Associate NCC Officer (ANO) NCC (Army Wing) FSFS'
  },
  {
    employeeId: '1221',
    designation: 'Associate NCC Officer (ANO) NCC (Army Wing) FSFS'
  },
  {
    employeeId: '1223',
    designation: 'Associate NCC Officer (ANO) NCC (Army Wing) FSFS'
  }
]

export default async function ncc({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const s3BaseUrl = getS3Url();
  const text = (await (getTranslations(locale))).NCC
  return (
    <>
      <ImageHeader
        title={text.title}
        headings={[
          {
            label: text.headings.organisationalDetails,
            href: '#organisationaldetails',
          },
          {
            label: text.headings.events,
            href: '#events',

          },
          { label: text.headings.nccOfficers, href: '#nccofficers' },
          { label: text.headings.moreAboutNcc, href: '#moreaboutncc' },
          {
            label: text.headings.nccCamps,
            href: '#ncccamps',
          },
          { label: text.headings.contactUs, href: '#contact-us' },
        ]}
        src="student-activities/header.jpg"
      />

      <section className="container">
        <section className='mb-5 mt-10'>
          <p
            style={{ whiteSpace: 'pre-line' }}
            className={cn('max-md:rounded-t md:w-full md:rounded-r')}
          >
            {text.description}
          </p>
        </section>
      </section>

      <section className="container my-10">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#features"
          id="features"
          text={text.headings.organisationalDetails.toUpperCase()}
        />
        <article className="rounded-lg border border-primary-500 bg-shade-light p-2 md:p-4">
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <ul>
                  {text.organisationalDetails.points.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Image
                        src={`${s3BaseUrl}/research/feather_bullet.png`}
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

      {/* Events */}
      <section className='container my-10'>
        <Heading glyphDirection="ltr" heading="h2" text={text.headings.events} id="events" />
      </section>

      <section className='container my-10'>
        <Heading
          glyphDirection="rtl"
          heading="h2"
          text={text.headings.nccOfficers.toUpperCase()}
          id="nccofficers"
        />
        <FICGroup facultyData={nccofficers} />
      </section>


      <section className='container my-10'>
        <Heading
          glyphDirection="ltr"
          heading="h2"
          text={text.headings.moreAboutNcc.toUpperCase()}
          id="moreaboutncc"
        />
        <article className="rounded-lg border text-lg border-primary-500 bg-shade-light p-2 md:p-4">
          <p>{text.moreAbout.intro}</p>

          <p>
            {text.moreAbout.trainingAreasTitle}
          </p>
          <ul className="list-disc pl-6">
            {text.moreAbout.trainingAreas.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p>
            {text.moreAbout.classroomTopicsTitle}
          </p>
          <ul className="list-disc pl-6">
            {text.moreAbout.classroomTopics.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p>
            {text.moreAbout.socialActivitiesTitle}
          </p>
          <ul className="list-disc pl-6">
            {text.moreAbout.socialActivities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p>{text.moreAbout.examInfo}</p>
        </article>
      </section>

      <section className='container my-10'>
        <Heading
          glyphDirection="rtl"
          heading="h2"
          text={text.headings.nccCamps.toUpperCase()}
          id="ncccamps"
        />
        <article className="rounded-lg border text-lg border-primary-500 bg-shade-light p-2 md:p-4">
          <p>{text.nccCamps.campsInfo}</p>
          <p className="mt-6">{text.nccCamps.eligibility.title}</p>
          <p>
            {text.nccCamps.eligibility.bCertificate.title}
          </p>
          <ul className="list-decimal pl-6">
            {text.nccCamps.eligibility.bCertificate.points.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mt-6">
            {text.nccCamps.eligibility.cCertificate.title}
          </p>
          <ul className="list-decimal pl-6">
            {text.nccCamps.eligibility.cCertificate.points.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>{text.nccCamps.certificateValue}</p>
          <p>
            {text.nccCamps.financialAssistance.title}
          </p>
          <p>{text.nccCamps.financialAssistance.description}</p>
        </article>
      </section>

      <section className='container my-10'>
        <Heading
          glyphDirection="ltr"
          heading="h3"
          text={text.headings.contactUs.toUpperCase()}
          id="contact-us"
        />
        <section className="mt-2">
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-20">
            <div className="flex flex-col items-center">
              <a
                href={`mailto:${text.contact.email}`}
                className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-500 bg-shade-light text-primary-700 transition hover:bg-primary-100 md:h-32 md:w-32"
                aria-label="Email Ncc"
              >
                <MdEmail className="text-3xl sm:text-4xl md:text-5xl" />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href={`tel:${text.contact.phone}`}
                className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-500 bg-shade-light text-primary-700 transition hover:bg-primary-100 md:h-32 md:w-32"
                aria-label="Call Ncc"
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
