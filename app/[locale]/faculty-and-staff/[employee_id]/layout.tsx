import { union } from 'drizzle-orm/pg-core';
import Image from 'next/image';
import { type ReactNode } from 'react';
import { MdCall, MdLocationOn, MdMail } from 'react-icons/md';
import Link from 'next/link';

import { getServerAuthSession } from '~/server/auth';
import { db, faculty, staff } from '~/server/db';
import { PathnameAwareSuspense, Tabs } from '~/app/profile/client-utils';
import { getTranslations } from '~/i18n/translations';

export async function generateStaticParams() {
  const facultyIds = db
    .select({ employee_id: faculty.employeeId })
    .from(faculty);
  const staffIds = db.select({ employee_id: staff.employeeId }).from(staff);
  return await union(facultyIds, staffIds);
}

export default async function FacultyOrStaffLayout({
  children,
  params: { locale, employee_id: employeeId },
}: {
  children: ReactNode;
  params: { locale: string; employee_id: string };
}) {
  const auth = await getServerAuthSession();
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
    where: (faculty, { eq }) => eq(faculty.employeeId, employeeId),
    columns: {
      id: true,
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
            src={`assets/images/faculty/'${faculty.id}.jpg`}
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
            src={`/faculty-and-staff/'${faculty.id}.svg`}
          />
        </section>
        <article className="rounded-2xl drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)] max-xl:pt-3 xl:bg-shade-light xl:p-5">
          <ul className="grid h-full grid-cols-3 gap-5 xl:ml-16">
            {['PUBLICATIONS', 'PATENTS', 'BOOKS'].map((item) => (
              <li
                key={item}
                className="flex h-full flex-col justify-around rounded-2xl bg-primary-700 p-3 max-xl:aspect-square"
              >
                <h4 className="my-auto text-center text-shade-light">
                  {
                    faculty[
                      item.toLowerCase() as 'publications' | 'patents' | 'books'
                    ].length
                  }
                </h4>
                <p className="mb-auto text-center font-light text-shade-light">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <section className="container mb-6 grid grid-cols-2 justify-between max-md:gap-6 md:flex">
        {Object.entries({
          'Google Scholar': 'googleScholarId',
          Orcid: 'orcidId',
          'Research Gate': 'researchGateId',
          Scopus: 'scopusId',
        }).map(([key, value]) => {
          if (value in faculty) {
            return (
              <Link
                key={key}
                className="flex aspect-square flex-col justify-evenly rounded-2xl bg-shade-light drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)] md:w-[23%] lg:w-[20%]"
                // @ts-expect-error - Ignore type checking for key
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                href={faculty[value] ?? ''}
              >
                <Image
                  alt={key}
                  src={`/faculty-and-staff/${key}.svg`}
                  height={0}
                  width={0}
                  className="mx-auto h-[50%] w-[50%]"
                />
                <h5 className="mx-auto">{key}</h5>
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
          basePath={`faculty-and-staff/${employeeId}`}
        />
        <ol className="flex flex-col justify-between max-md:hidden md:min-w-72 lg:min-w-80 xl:min-w-96">
          <Tabs
            locale={locale}
            tabs={tabs}
            defaultPath="qualifications"
            basePath={`faculty-and-staff/${employeeId}`}
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
