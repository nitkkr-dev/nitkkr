import Image from 'next/image';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

import Heading from '~/components/heading';
import { cn } from '~/lib/utils';
import { db, deans } from '~/server/db';
export async function generateStaticParams() {
  return await db.select({ name: deans.domain }).from(deans);
}

export default function Dean({
  params: { locale },
}: {
  params: { locale: string; name: (typeof deans.domain.enumValues)[number] };
}) {
  const dean = {
    title: 'Dean, Academic',
    name: 'Prof. Rishi Pal Chauhan',
    contact: {
      email: ['chauhanrpc@nitkkr.ac.in', 'dean_academic@nitkkr.ac.in'],
      address: 'CT-401, NIT Campus Kurukshetra-136119 Haryana, India',
      phone: ['01744-233546', '01744-233494', '91-9896075913'],
    },
    image: '',
    responsibilities: [
      'Admission and enrolment of students',
      'Finalization of Academic calendar, time-tables, registration of students for course work and examinations, classroom arrangements and all other requirements for proper conduct of class work',
      'Conduct of class tests and co-coordinating the finalization of session’s evaluations and for ensuring the timely declaration of results',
      'Supervision of the maintenance of up-to-date academic records of all categories of students',
      'Publication and distribution of the syllabi',
      'Organizing meetings of all the Institute level academic bodies',
      'Arranging the issue of all academic certificates, medals and prizes to the students',
      'To arrange for the conduct of those examinations which are to be conducted by the Institute as stipulated in the Institute regulations',
      'To formulate policies for the conduct of research and steps to maintain suitable standards by implementing the Board of Governors/Senate decisions',
      'To execute the policy of the Senate in the conduct of P.G., PhD and other research programmes including the examination of the thesis',
      'To coordinate the conduct of the convocation',
      'All proposals to modify the teaching programmes will be considered by BOAC, for which Dean (Academic) is the Chairman and if approved will be sent to the Senate for formal approval',
      'To admit sponsored Early Faculty Induction Programme and Quality Improvement Programme candidates',
      'To suggest the Director take suitable steps from time to time to strive for high academic standards',
    ],
  };

  return (
    <>
      <header className="container">
        <Heading glyphDirection="dual" heading="h1" text={dean.title} />
      </header>
      <section
        className={cn(
          'container',
          'rounded-xl border border-primary-700 bg-neutral-50 p-8',
          'max-w-[512px] sm:max-w-[512px] md:max-w-[800px] lg:max-w-[1024px]'
        )}
      >
        <div className="lg:flex lg:justify-between">
          <Image
            src={dean.image}
            alt={dean.name}
            height={80}
            width={80}
            className={cn(
              'size-48 md:size-64 lg:size-72',
              'mx-auto mb-4 rounded bg-neutral-200 lg:m-0'
            )}
          />

          <aside className="m-auto flex flex-col items-center justify-center space-y-3 lg:items-end">
            <h3 className="mb-8">{dean.name}</h3>

            <p>
              <MdLocationOn className="mr-2 inline-block fill-primary-500" />
              {dean.contact.address}
            </p>

            <p>
              <MdPhone className="mr-2 inline-block fill-primary-500" />
              {dean.contact.phone.join(', ')}
            </p>
            <p>
              <MdEmail className="mr-2 inline-block fill-primary-500" />{' '}
              {dean.contact.email.join(', ')}
            </p>
          </aside>
        </div>

        <div className="container">
          <Heading glyphDirection="ltr" heading="h3" text="Responsibilities" />
          <ul className="list-[upper-roman]">
            {dean.responsibilities.map((responsibility, index) => (
              <li key={index}>
                <p className="my-2">{responsibility}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
