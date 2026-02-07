// Revalidate every 5 minutes (has DB calls)
import Image from 'next/image';
import { MdCall, MdEmail } from 'react-icons/md';

import ImageHeader from '~/components/image-header';
import Heading from '~/components/heading';
import { getS3Url } from '~/server/s3';
import { cn } from '~/lib/utils';

import EventsSection from './event-section';



interface nccEvent {
  id: number;
  title: string;
  date: {
    day: number;
    month: string;
  };
  image: [string];
  description: string;
}

const events = [
  {
    id: 0,
    title: 'Saarang',
    date: {
      day: 21,
      month: 'OCT',
    },
    image: [
      'student-activities/clubs/spicmacay/6.jpg',
      'student-activities/clubs/spicmacay/10.jpg',
      'student-activities/clubs/spicmacay/3.jpg',
    ],
    description:
      'Saarang is one of SPICMACAY NIT Kurukshetra’s flagship cultural events, showcasing the vibrant diversity of Indian classical music and dance. It brings together student performers and promotes traditional art forms through themed performances, often held during Confluence, the annual cultural fest.',
  },
  {
    id: 1,
    title: 'Virasat',
    date: {
      day: 21,
      month: 'OCT',
    },
    image: ['student-activities/clubs/spicmacay/10.jpg'],
    description:
      'Virasat is a prestigious series under SPICMACAY that invites renowned classical artists to the campus, offering students a direct experience of India’s rich cultural heritage. The event features live performances, interactive sessions, and workshops, celebrating the timeless traditions of music, dance, and art.',
  },
  {
    id: 2,
    title: 'JAM Project',
    date: {
      day: 21,
      month: 'OCT',
    },
    image: ['student-activities/clubs/spicmacay/3.jpg'],
    description:
      'The JAM Project is a grand performance event organized by SPICMACAY, where club members—especially juniors—showcase their talents through classical and fusion performances. It serves as a platform to celebrate and appreciate new talent, featuring vibrant acts that blend tradition with creativity, and marks a key highlight in the club’s yearly calendar.',
  },
  {
    id: 3,
    title: 'Workshops',
    date: {
      day: 21,
      month: 'OCT',
    },
    image: ['student-activities/clubs/spicmacay/1.jpg'],
    description:
      'SPICMACAY regularly conducts instrumental and vocal workshops to help students explore classical music practically. These sessions are guided by skilled artists or senior members and focus on instruments like harmonium, tabla, and vocals, creating an inclusive space for learning and collaboration.',
  },
  {
    id: 4,
    title: 'Battle Street',
    date: {
      day: 21,
      month: 'OCT',
    },
    image: ['student-activities/clubs/spicmacay/2.jpg'],
    description:
      'Battle Street is an electrifying face-to-face dance battle event where dancers compete in intense 1v1 showdowns. Organized as part of the cultural fest, it features a high-energy environment with freestyle, hip-hop, and street dance styles. Participants go head-to-head in knockout rounds, judged live on the spot, showcasing their skills, rhythm, and stage presence in front of an enthusiastic crowd.',
  },
] as unknown as nccEvent[];

export default async function ncc({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const s3BaseUrl = getS3Url();
  const nccofficers = [
    {
      image: 'fallback/user-image.jpg',
      name: 'Arun Gupta',
      title: 'Professor (Head of the Department)',
      desc: 'Associate NCC Officer (ANO) NCC (Army Wing) FSFS',
    },
    {
      image: 'fallback/user-image.jpg',
      name: 'Arun Gupta',
      title: 'Professor (Head of the Department)',
      desc: 'Associate NCC Officer (ANO) NCC (Army Wing) FSFS',
    },
    {
      image: 'fallback/user-image.jpg',
      name: 'Arun Gupta',
      title: 'Professor (Head of the Department)',
      desc: 'Associate NCC Officer (ANO) NCC (Army Wing) FSFS',
    },
    {
      image: 'fallback/user-image.jpg',
      name: 'Arun Gupta',
      title: 'Professor (Head of the Department)',
      desc: 'Associate NCC Officer (ANO) NCC (Army Wing) FSFS',
    },
  ];

  const moreabout = {
    intro: `Selection & Reservation: The induction of students in NCC is based on physical fitness,
psychology and general aptitude. 33% seats are reserved for girl students. Institutional Training is
imparted beyond class hours or in the morning or in the evening by defence officers from NCCBn,
cadets get payment for refreshment as per NCC rules.`,
    headings: {
      trainingarea: 'Training Areas are',
      expertslecture: 'Classroom lectures by experts on topics like',
      socialactivities:
        'Cadets may have to participate in social activities, like',
    },
    trainingAreas: [
      'Drill',
      'Map reading',
      'Weapon training',
      'Physical fitness etc.',
    ],

    classroomTopics: ['Field Craft', 'Battle craft', 'First aids etc'],

    socialActivities: [
      'Anti dowry awareness',
      'Tree plantation',
      'Disaster Relief',
      'Blood Donation',
      'AIDS Awareness',
      'Adult Education',
      'Pulse polio',
      'Yoga',
    ],

    examInfo: `In the month of February, certificate examinations for 2nd year and 3rd year NCC cadets
are conducted by NCC directorate.`,
  };

  const nccCamps = {
    campsInfo: `It is compulsory for the cadets to undergo at least two training camps of NCC, each of
about 10 days duration, in 2nd year and 3rd year. The aim of NCC camp is to expose the cadets to a
regimental way of life along with physical and mental hardship for the overall development of their
personality. Regular Army officers organize the different types of NCC camps.`,

    eligibility: {
      title: 'Eligibility for Certificate Examinations',

      bCertificate: {
        title: 'Eligibility to appear in the ‘B’ certificate examination',
        points: [
          'The cadet must have attended at least 75% of total parades held in the first year in the Institute.',
          'The cadet must have attended at least 75% of total parades held in the second year.',
          'The cadet must have attended one NCC training camp in 2nd year.',
        ],
      },

      cCertificate: {
        title: 'Eligibility to appear in the ‘C’ certificate examination',
        points: [
          'The cadet should have passed ‘B’ certificate examination.',
          'The cadet should have attended at least 75% of total parades held in the 3rd year.',
          'The cadet must have attended one NCC Annual Training Camp (ATC) in 3rd year.',
        ],
      },
    },

    certificateValue: `Three years training of NCC in the institute and camp exposure enables cadets
to obtain ‘B’ and ‘C’ certificates of NCC after qualifying the respective examinations, conducted by
NCC Directorate. These certificates are of immense value for the students in moulding their future
career.`,

    financialAssistance: {
      title: 'Financial Assistance',
      description: `NCC also offers financial assistance to meritorious and needy students in the form
of scholarships awarded by the DG NCC and other organizations.`,
    },
  };

  const text = {
    title: 'National Cadet Corps(NCC)',
    headings: {
      OrganisationalDetails: 'Organisational Details',
      NCCOfficers: 'NCC Officers',
      Moreaboutncc: 'More About NCC',
      ncccamps: 'NCC Camps',
      contactus: 'Contact Us',
    },
    desc: `The NCC is a vibrant youth organization, which has made a commendable contribution in producing responsible and patriotic citizens.From a small beginning, today it has grown to the largest youth organization.NCC motivates and trains upcoming generations to render their meaningful contribution towards national integration and development.

The Institute had applied to NCC directorate for three companies(one company strength is 160 cadet) of NCC each in Army, Air Force and Navy in Fully Self Finance Scheme(FSFS) category.Apart from regular NCC(Army wing), the Institute has been allotted 50 seats in NCC(Air Force wing) and 160 seats in NCC(Army wing).The enrollment in Air Force(NCC) was started from the academic year 2022-23 and enrollment in NCC FSFS(Army wing) started from Academic Year 2023-24.`,
    organisationaldetails: {
      title: 'Organisational Details',
      points: [
        'DG NCC: New Delhi under Ministry of Defence, Govt of India (GoI)',
        'State NCC Directorate: HR, HP, PB and CHD',
        'NCC Group HQ: Ambala',
        'NCC Battalion: Kurukshetra (Army), Karnal (Air Force) and Faridabad (Navy)',
        'Institute: National Institute of Technology, Kurukshetra (Haryana)',
      ],
    },
  };
  return (
    <>
      <ImageHeader
        title={text.title}
        headings={[
          {
            label: text.headings.OrganisationalDetails,
            href: '#organisationaldetails',
          },
          { label: text.headings.NCCOfficers, href: '#nccofficers' },
          { label: text.headings.Moreaboutncc, href: '#moreaboutncc' },
          {
            label: text.headings.ncccamps,
            href: '#ncccamps',
          },
          { label: text.headings.contactus, href: '#contact-us' },
        ]}
        src="student-activities/header.jpg"
      />

      <main className="container mt-6">
        <article className="drop-shadow">
          <p
            style={{ whiteSpace: 'pre-line' }}
            className={cn('max-md:rounded-t md:w-full md:rounded-r')}
          >
            {text.desc}
          </p>
        </article>

        <Heading
          glyphDirection="rtl"
          heading="h2"
          id="organisationaldetails"
          text={text.headings.OrganisationalDetails.toUpperCase()}
        />
        <section className="mt-2 flex rounded border border-primary-500 bg-shade-light p-4">
          <ul className="list-disc pl-6">
            {text.organisationaldetails.points.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Events */}
        <Heading glyphDirection="ltr" heading="h2" text="EVENTS" id="events" />
        <EventsSection events={events} locale={locale} s3BaseUrl={s3BaseUrl} />

        <Heading
          glyphDirection="rtl"
          heading="h2"
          text={text.headings.NCCOfficers.toUpperCase()}
          id="nccofficers"
        />
        <ul className="flex w-full flex-col flex-wrap items-center space-y-7 md:flex-row md:justify-between lg:space-y-4">
          {nccofficers.map((officer, idx) => (
            <li
              key={idx}
              className="flex w-[80%] flex-col items-center rounded-lg border border-primary-500 bg-neutral-50 p-2 sm:w-full sm:flex-row lg:w-[48%]"
            >
              <Image
                src={officer.image}
                alt={officer.name}
                width={100}
                height={100}
                className="h-40 w-40 rounded-lg "
              />
              <section className="ml-6 mt-4 space-y-8 text-center md:mt-0 lg:text-left">
                <>
                  <h2 className="text-gray-800 m-0 text-start text-2xl">
                    {officer.name}
                  </h2>
                  <span className="text-gray-600 text-lg">{officer.title}</span>
                </>
                <section>
                  <span className="flex items-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_10956_14702"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="44"
                        height="44"
                      >
                        <rect width="44" height="44" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_10956_14702)">
                        <path
                          d="M17.9232 25.6667L22.0089 23.1458L26.0946 25.6667L25.0171 20.9L28.6089 17.7375L23.8946 17.325L22.0089 12.8333L20.1232 17.325L15.4089 17.7375L19.0008 20.9L17.9232 25.6667ZM9.4375 38.5V9.16667C9.4375 8.15833 9.7892 7.29514 10.4926 6.57708C11.196 5.85903 12.0416 5.5 13.0293 5.5H30.9885C31.9763 5.5 32.8218 5.85903 33.5253 6.57708C34.2287 7.29514 34.5804 8.15833 34.5804 9.16667V38.5L22.0089 33L9.4375 38.5ZM13.0293 32.9083L22.0089 28.9667L30.9885 32.9083V9.16667H13.0293V32.9083Z"
                          fill="#C5291D"
                        />
                      </g>
                    </svg>
                    <span className="text-gray-600">{officer.desc}</span>
                  </span>
                </section>
              </section>
            </li>
          ))}
        </ul>

        <Heading
          glyphDirection="ltr"
          heading="h2"
          text={text.headings.Moreaboutncc.toUpperCase()}
          id="moreaboutncc"
        />
        <section className="rounded-lg border border-primary-500 bg-neutral-50 p-6 text-sm leading-relaxed">
          <p>{moreabout.intro}</p>

          <p className="mt-4 font-semibold">
            {moreabout.headings.trainingarea}
          </p>
          <ul className="list-disc pl-6">
            {moreabout.trainingAreas.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p className="mt-4 font-semibold">
            {moreabout.headings.expertslecture}
          </p>
          <ul className="list-disc pl-6">
            {moreabout.classroomTopics.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p className="mt-4 font-semibold">
            {moreabout.headings.socialactivities}
          </p>
          <ul className="list-disc pl-6">
            {moreabout.socialActivities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p className="mt-4">{moreabout.examInfo}</p>
        </section>

        <Heading
          glyphDirection="rtl"
          heading="h2"
          text={text.headings.ncccamps.toUpperCase()}
          id="ncccamps"
        />
        <section className="rounded-lg border border-primary-500 bg-neutral-50 p-6 text-sm leading-relaxed">
          <p>{nccCamps.campsInfo}</p>
          <p className="mt-4 font-semibold">{nccCamps.eligibility.title}</p>
          <p className="mt-2 font-semibold">
            {nccCamps.eligibility.bCertificate.title}
          </p>
          <ul className="list-decimal pl-6">
            {nccCamps.eligibility.bCertificate.points.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">
            {nccCamps.eligibility.cCertificate.title}
          </p>
          <ul className="list-decimal pl-6">
            {nccCamps.eligibility.cCertificate.points.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">{nccCamps.certificateValue}</p>
          <p className="mt-4 font-semibold">
            {nccCamps.financialAssistance.title}
          </p>
          <p>{nccCamps.financialAssistance.description}</p>
        </section>

        <Heading
          glyphDirection="ltr"
          heading="h3"
          text={text.headings.contactus.toUpperCase()}
          id="contact-us"
        />
        <div className="flex w-full items-center justify-center gap-20">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-primary-500">
            <MdEmail className="text-5xl text-primary-700" />
          </div>
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-primary-500">
            <MdCall className="text-5xl text-primary-700" />
          </div>
        </div>
      </main>
    </>
  );
}
