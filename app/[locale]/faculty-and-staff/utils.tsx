import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Fragment, type ReactNode } from 'react';
import { MdCall, MdLocationOn, MdMail, MdOutlineEdit } from 'react-icons/md';

import { PathnameAwareSuspense, Tabs } from '~/app/profile/client-utils';
import { ScrollArea } from '~/components/ui';
import { getTranslations, Translations } from '~/i18n/translations';
import { groupBy } from '~/lib/utils';
import { db } from '~/server/db';

async function FacultyOrStaffComponent({
  children,
  employeeId,
  id,
  locale,
}: { locale: string; children?: ReactNode } & (
  | { id: number; employeeId?: never }
  | { id?: never; employeeId: string }
)) {
  const text = (await getTranslations(locale)).FacultyAndStaff;

  const tabs = [
    {
      label: text.tabs.qualifications,
      href: 'qualifications',
    },
    {
      label: text.tabs.experience,
      href: 'experience',
    },
    {
      label: text.tabs.projects,
      href: 'projects',
    },
    {
      label: text.tabs.educationCurrent,
      href: 'educationCurrent',
    },
    {
      label: text.tabs.publications,
      href: 'publications',
    },
    {
      label: text.tabs.scholars,
      href: 'scholars',
    },
    {
      label: text.tabs.awards,
      href: 'awards',
    },
  ];
  const faculty = await db.query.faculty.findFirst({
    where: (faculty, { eq }) =>
      !employeeId ? eq(faculty.id, id!) : eq(faculty.employeeId, employeeId),
    columns: {
      id: true,
      employeeId: true,
      officeAddress: true,
      designation: true,
      googleScholarId: true,
      orcidId: true,
      researchGateId: true,
      scopusId: true,
      publications: true,
      patents: true,
      books: true,
    },
    with: {
      person: {
        columns: {
          name: true,
          email: true,
          telephone: true,
          countryCode: true,
          alternateTelephone: true,
          alternateCountryCode: true,
        },
      },
    },
  });

  if (!faculty) {
    return <div>Faculty not found</div>;
  }

  return (
    <>
      <section className="container mb-6 mt-24 grid gap-3 xl:grid-cols-[calc(50%-0.75rem),0%,calc(50%-0.75rem)]">
        <article className="flex flex-grow flex-col rounded-2xl bg-shade-light p-5 drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)]">
          <h2 className="mb-0 mr-[7rem] text-primary-700 max-xl:mr-[8rem]">
            {faculty.person.name}
          </h2>
          <h5 className="text-neutral-900">{faculty.designation}</h5>
          <Image
            alt="0"
            width={200}
            height={200}
            className="absolute right-0 top-0 z-10 mr-3 size-32 translate-y-[-50%] rounded-full border-[1rem] border-background object-cover sm:mr-6 sm:size-40 lg:mr-8 lg:size-48 xl:hidden"
            src={`fallback/user-image.jpg`}
          />
          <ul className="flex h-full flex-col justify-center font-medium">
            <li>
              <p>
                <MdMail
                  size={28}
                  className="mr-[12px] inline text-primary-700"
                />
                {faculty.person.email}
              </p>
            </li>
            <li>
              <p>
                <MdCall
                  size={28}
                  className="mr-[12px] inline text-primary-700"
                />
                {`+${faculty.person.countryCode} ${faculty.person.telephone} (off-Direct no) `}
                {faculty.person.alternateTelephone &&
                  `+${faculty.person.alternateCountryCode} ${faculty.person.alternateTelephone} (Mob)`}
              </p>
            </li>
            <li>
              <p>
                <MdLocationOn
                  size={28}
                  className="mr-[12px] inline text-primary-700"
                />
                {faculty.officeAddress === ''
                  ? 'Not Available'
                  : faculty.officeAddress}
              </p>
            </li>
          </ul>
        </article>
        <section className="w-0 max-xl:hidden">
          <Image
            alt="0"
            width={200}
            height={200}
            className="absolute z-10 size-48 translate-x-[-50%] translate-y-[-50%] rounded-full border-[16px] border-background object-cover"
            src={
              faculty.employeeId === '114' || faculty.employeeId === '1083'
                ? `faculty-and-staff/${faculty.employeeId}/0.jpg`
                : `fallback/user-image.jpg`
            }
          />
        </section>
        <article className="rounded-2xl drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)] max-xl:pt-3 xl:bg-shade-light xl:p-5">
          <ul className="grid h-full grid-cols-3 gap-5 xl:ml-16">
            {Object.entries(text.intellectualContributions).map(
              ([key, value]) => (
                <li
                  key={key}
                  className="flex h-full flex-col justify-around rounded-2xl bg-primary-700 p-3 max-xl:aspect-square"
                >
                  <h4 className="my-auto text-center text-shade-light">
                    {faculty[
                      key.toLowerCase() as keyof typeof text.intellectualContributions
                    ]?.length || 0}
                  </h4>
                  <p className="mb-auto text-center font-light text-shade-light">
                    {value}
                  </p>
                </li>
              )
            )}
          </ul>
        </article>
      </section>
      <section className="container mb-6 grid grid-cols-2 justify-between max-md:gap-6 md:flex">
        {Object.entries(text.externalLinks).map(([key, value]) => {
          if (value in faculty) {
            return (
              <Link
                key={key}
                className="flex aspect-square flex-col justify-evenly rounded-2xl bg-shade-light drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)] md:w-[23%] lg:w-[20%]"
                href={
                  key == 'Orcid'
                    ? faculty.employeeId === '114'
                      ? 'https://in.linkedin.com/in/jitender-kumar-chhabra-372b871'
                      : faculty.employeeId === '1083'
                        ? 'https://in.linkedin.com/in/vikram-singh-802827166'
                        : ''
                    : (faculty[value as keyof typeof faculty] as string) ?? ''
                }
              >
                <Image
                  alt={key}
                  src={`faculty-and-staff/${(faculty.employeeId === '114' || faculty.employeeId === '1083') && key == 'Orcid' ? 'LinkedIn' : key}.svg`}
                  height={0}
                  width={0}
                  className="mx-auto h-[50%] w-[50%]"
                />
                <h5 className="mx-auto">
                  {(faculty.employeeId === '114' ||
                    faculty.employeeId === '1083') &&
                  key == 'Orcid'
                    ? 'LinkedIn'
                    : key}
                </h5>
              </Link>
            );
          }
        })}
      </section>

      <section className="container flex gap-y-4 max-md:flex-col md:h-[28rem] md:gap-x-4 lg:gap-x-8">
        <Tabs
          locale={locale}
          tabs={tabs}
          select
          defaultPath="qualifications"
          basePath={!employeeId ? 'profile' : `faculty-and-staff/${employeeId}`}
          pathLength={!employeeId ? 3 : 4}
        />
        <ol className="flex flex-col justify-between max-md:hidden md:min-w-72 lg:min-w-80 xl:min-w-96">
          <Tabs
            locale={locale}
            tabs={tabs}
            defaultPath="qualifications"
            basePath={
              !employeeId ? 'profile' : `faculty-and-staff/${employeeId}`
            }
            pathLength={!employeeId ? 3 : 4}
          />
        </ol>
        <article className="flex w-full flex-col rounded-2xl max-md:h-[28rem] md:bg-shade-light md:px-5 md:py-6">
          <PathnameAwareSuspense defaultPathname="qualifications">
            {children}
          </PathnameAwareSuspense>
        </article>
      </section>
    </>
  );
}

async function FacultySectionComponent({
  locale,
  facultySection,
  id,
  employeeId,
}: {
  locale: string;
  facultySection: keyof Translations['FacultyAndStaff']['tabs'];
} & ({ id: number; employeeId?: never } | { id?: never; employeeId: string })) {
  const title = (await getTranslations(locale)).FacultyAndStaff.tabs[
    facultySection
  ];

  const jkchabbraProfile = {
    qualifications: [
      {
        name: 'B.Tech (CSE)',
        value: '2nd Topper',
        caption: 'National Institute of Technology, Kurukshetra',
        year: '',
      },
      {
        name: 'M.Tech (CSE)',
        value: 'Gold Medalist',
        caption: 'National Institute of Technology, Kurukshetra',
        year: '',
      },
      {
        name: 'Ph.D. (S/w Engg)',
        value: '',
        caption: 'National Institute of Technology, Kurukshetra',
        year: '',
      },
    ],
    publications: [
      {
        name: 'Programming with C (4th Edition)',
        value: 'McGraw Hill',
        caption: 'Byron Gottfried, USA & Jitender Kumar Chhabra',
        year: '',
        tag: 'Book',
      },
      {
        name: 'Conceptual Programming Tips for Interviews and Competitive Exams',
        value: 'McGraw Hill',
        caption: 'Jitender Kumar Chhabra',
        year: '',
        tag: 'Book',
      },
    ],
    experience: [
      {
        name: 'Teaching & Research Experience',
        value: '30 years',
        caption: 'Professor, Computer Engineering, NIT Kurukshetra',
        year: '1995 - Present',
      },
    ],
    projects: [
      {
        name: 'Novel Approach for Secure Storage on External Media',
        value: 'DRDO, Govt of India',
        caption:
          'Design and development of a non-cryptographic secure storage and lossless retrieval system',
        year: 'Completed',
      },
    ],
    educationCurrent: [
      {
        name: 'Online Lecture Series on Data Structures & Algorithms',
        value: 'YouTube',
        caption: 'Channel: @JitenderKrChhabraProfCseNITKKR',
        year: 'Ongoing',
      },
    ],
    scholars: [
      {
        name: 'Ph.D. Supervision',
        value: '6 Completed, 1 Ongoing',
        caption: 'Ph.D. scholars under guidance at NIT Kurukshetra',
        year: '',
      },
    ],
    awards: [
      {
        name: 'Best Teacher Award',
        value: 'NIT Kurukshetra',
        caption: 'Awarded for excellence in teaching and research',
        year: '',
      },
    ],
  };
  const defaultProfileTabs = {
    qualifications: [
      {
        name: 'Ph.D.',
        value: 'Nanostructured Biomaterials',
        caption: 'Indian institute of Technology Madras',
        year: '2010',
      },
    ],
    publications: [
      {
        name: 'Sustainable finishes in textiles, Conference Proceedings',
        value:
          'International E-Conference on Sustainable Growth in Textiles (SGT-2021), Uttar Pradesh Textile Technology Institute, Kanpur',
        caption: 'RK Chhabra, Aakanksha Singh and J N Chakraborty',
        year: 'August 2023',
        tag: 'Conference',
      },
      {
        name: 'Sustainable finishes in textiles, Conference Proceedings',
        value:
          'International E-Conference on Sustainable Growth in Textiles (SGT-2021), Uttar Pradesh Textile Technology Institute, Kanpur',
        caption: 'RK Chhabra, Aakanksha Singh and J N Chakraborty',
        year: 'August 2023',
        tag: 'Conference',
      },
      {
        name: 'Sustainable finishes in textiles, Conference Proceedings',
        value:
          'International E-Conference on Sustainable Growth in Textiles (SGT-2021), Uttar Pradesh Textile Technology Institute, Kanpur',
        caption: 'RK Chhabra, Aakanksha Singh and J N Chakraborty',
        year: 'August 2023',
        tag: 'Journal',
      },
      {
        name: 'Sustainable finishes in textiles, Conference Proceedings',
        value:
          'International E-Conference on Sustainable Growth in Textiles (SGT-2021), Uttar Pradesh Textile Technology Institute, Kanpur',
        caption: 'RK Chhabra, Aakanksha Singh and J N Chakraborty',
        year: 'August 2023',
        tag: 'Journal',
      },
      {
        name: 'Sustainable finishes in textiles, Conference Proceedings',
        value:
          'International E-Conference on Sustainable Growth in Textiles (SGT-2021), Uttar Pradesh Textile Technology Institute, Kanpur',
        caption: 'RK Chhabra, Aakanksha Singh and J N Chakraborty',
        year: 'August 2023',
        tag: 'Book/Chapter',
      },
      {
        name: 'Sustainable finishes in textiles, Conference Proceedings',
        value:
          'International E-Conference on Sustainable Growth in Textiles (SGT-2021), Uttar Pradesh Textile Technology Institute, Kanpur',
        caption: 'RK Chhabra, Aakanksha Singh and J N Chakraborty',
        year: 'August 2023',
        tag: 'Book/Chapter',
      },
    ],
    experience: [
      {
        name: 'Teaching Experience',
        value: 'Biomechanics Biotransport',
        caption: 'Indian institute of Technology Madras',
        year: 'Feb. 2024 - Feb. 2024',
      },
    ],
    projects: [
      {
        name: 'Development of biodegradable bioplastic films from mango seed starch.',
        value: 'Nanostructured Biomaterials',
        caption: 'Indian institute of Technology Madras',
        year: '2010',
      },
    ],
    educationCurrent: [
      {
        name: 'Short Term Course On Fluidized Bed Technology For Waste Management : Design, Modeling and Simulation',
        value: 'Chemical Engineering Short Term Course',
        caption: 'Coordinator',
        year: 'Feb, 2024 - Feb, 2024',
      },
    ],
    scholars: [
      {
        name: 'MULTIFUNCTIONAL FINISHING OF COTTON USING β-CYCLODEXTRIN ASSISTED ESSENTIAL OILS.',
        value: 'Ph. D Scholar',
        caption: 'Deepika Jha',
        year: 'Enrolled: July 2023, Continuing',
      },
    ],
    awards: [
      {
        name: 'MRS-S Funding Support award.',
        value: 'Department Of Biotechnology',
        caption:
          'International Conference on Materials for Advanced Technologies, Singapore',
        year: '2017',
      },
    ],
  };
  const profileTabs =
    employeeId === '114' ? jkchabbraProfile : defaultProfileTabs;

  if (!profileTabs[facultySection]) {
    return notFound();
  }

  const hasTag = 'tag' in profileTabs[facultySection][0];

  const dataToDisplay = hasTag
    ? // @ts-expect-error - Ignore type checking for 'tag' key
      groupBy(profileTabs[facultySection], 'tag')
    : new Map([['key', profileTabs[facultySection]]]);

  return (
    <>
      <h4 className="max-md:hidden">{title}</h4>
      <ScrollArea className="rounded-2xl">
        {Array.from(dataToDisplay.entries()).map(([key, items]) => (
          <Fragment key={key}>
            {hasTag && <h5 className="mb-3 px-1 font-black">{key}</h5>}
            <ul className="mb-3 space-y-6 px-1">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col gap-3 rounded-xl bg-shade-light p-5 shadow-[0px_4px_12px_0px_rgba(0,15,31,0.1)]" //shadow-[0px_4px_12px_0px_rgba(0,15,31,0.1)]
                >
                  <span className="flex justify-between gap-4">
                    <h5 className="font-bold">{item.name}</h5>
                    {0 ? (
                      <MdOutlineEdit
                        size={28}
                        className="cursor-pointer text-primary-700"
                      />
                    ) : null}
                  </span>
                  <p>{item.value}</p>
                  <p className="text-neutral-600">{item.caption}</p>
                  <p className="text-neutral-400">{item.year}</p>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </ScrollArea>
    </>
  );
}

export { FacultyOrStaffComponent, FacultySectionComponent };
