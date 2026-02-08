import Image from 'next/image';
import { MdCall, MdEmail } from 'react-icons/md';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';

interface Event {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  description: string;
  image: string;
}

export default async function NSS({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).NSS;
  const base = getS3Url();

  // Sample events data - replace with actual data from database/CMS
  // const eventsData: Event[] = [
  //   {
  //     id: '1',
  //     title: 'Dance Battle in NIT',
  //     date: '21',
  //     month: 'OCT',
  //     day: 'Wed',
  //     description:
  //       'Aayush Kumar from bihar does dancing battle in the QAT this weekend...',
  //     image: `${base}/nss/dance-battle.jpg`,
  //   },
  //   {
  //     id: '2',
  //     title: 'Inter-NIT Tournament Results Out!',
  //     date: '02',
  //     month: 'SEP',
  //     day: 'Mon',
  //     description:
  //       'The 2023-24 Inter NIT Tournaments in all sports have concluded recently, with the teams of Nit Kurukshetra putting forth a valiant effort and allowing for a great...',
  //     image: `${base}/nss/inter-nit-tournament.jpg`,
  //   },
  //   {
  //     id: '3',
  //     title: 'Danger in Kkr',
  //     date: '01',
  //     month: 'JAN',
  //     day: 'Fri',
  //     description:
  //       'Meteor strikes the land of Kurukshetra on the fourth of July. Scientists there has struck a huge...',
  //     image: `${base}/nss/meteor.jpg`,
  //   },
  // ];

  return (
    <>
      <ImageHeader title={text.welcome} src="slideshow/image01.jpg" />

      {/* DESCRIPTION SECTION */}
      <section className="container">
        <section className="mb-5 mt-10">
          <p className="mb-5 text-justify leading-relaxed text-neutral-900 lg:text-lg">
            {text.description}
          </p>
        </section>
      </section>

      {/* EVENTS SECTION */}
      <section className="container my-10" id="events">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#events"
          id="events"
          text={text.Events.title}
        />
      </section>

      {/* CONTACT SECTION */}
      <section className="container mb-4 mt-10" id="contact">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#contact"
          id="contact"
          text={text.Contact.title}
        />

        <section className="mt-8">
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-20">
            {/* Email */}
            <div className="flex flex-col items-center">
              <a
                href="mailto:nss@nitkkr.ac.in"
                className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary-700 bg-shade-light text-primary-700 transition hover:bg-primary-100 md:h-32 md:w-32"
                aria-label="Email NSS"
              >
                <MdEmail className="text-3xl sm:text-4xl md:text-5xl" />
              </a>
              <p className="mt-2 text-center text-sm font-medium">Email</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <a
                href="tel:+911744233300"
                className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary-700 bg-shade-light text-primary-700 transition hover:bg-primary-100 md:h-32 md:w-32"
                aria-label="Call NSS"
              >
                <MdCall className="text-3xl sm:text-4xl md:text-5xl" />
              </a>
              <p className="mt-2 text-center text-sm font-medium">Phone</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
