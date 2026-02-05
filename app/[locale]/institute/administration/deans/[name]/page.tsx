import Image from 'next/image';
import Link from 'next/link';
import { MdEmail, MdOutlineLocalPhone } from 'react-icons/md';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import ImageHeader from '~/components/image-header';
import Loading from '~/components/loading';
import GenericTable from '~/components/ui/generic-table';
import { db, deans } from '~/server/db';

import DeanCard from '../deans-card';

export async function generateStaticParams() {
  return await db.select({ name: deans.domain }).from(deans);
}

export default async function DeanCorner({
  params: { locale, name: deanTitle },
}: {
  params: {
    locale: string;
    name: (typeof deans.domain.enumValues)[number];
  };
}) {
  const text = (await getTranslations(locale)).DeansPage;

  // Fetch dean data from database
  const dean = await db.query.deans.findFirst({
    where: (deans, { eq }) => eq(deans.domain, deanTitle),
    with: {
      faculty: {
        columns: {
          officeAddress: true,
          employeeId: true,
        },
        with: {
          person: {
            columns: {
              email: true,
              id: true,
              name: true,
              telephone: true,
              img: true,
            },
          },
        },
      },
    },
    columns: {
      activityLogs: true,
      message: true,
      associateFacultyIds: true,
      staffIds: true,
      facultyInchargeIds: true,
      contactNo: true,
      email: true,
    },
  });

  if (!dean) notFound();

  // Fetch associate deans data
  const associateDeans = await db.query.faculty.findMany({
    where: (faculty, { inArray }) =>
      inArray(faculty.id, dean.associateFacultyIds),
    columns: {
      designation: true,
      employeeId: true,
    },
    with: {
      person: {
        columns: {
          name: true,
          email: true,
          telephone: true,
          img: true,
        },
      },
    },
  });

  // Fetch faculty incharges data
  const facultyIncharges = await db.query.faculty.findMany({
    where: (faculty, { inArray }) =>
      inArray(faculty.id, dean.facultyInchargeIds),
    columns: {
      designation: true,
      employeeId: true,
    },
    with: {
      person: {
        columns: {
          name: true,
          email: true,
          telephone: true,
          img: true,
        },
      },
    },
  });

  // Fetch staff data
  const staffData = await db.query.staff.findMany({
    where: (staffTable, { inArray }) => inArray(staffTable.id, dean.staffIds),
    columns: {
      designation: true,
      personalEmail: true,
    },
    with: {
      person: {
        columns: {
          name: true,
          telephone: true,
        },
      },
    },
  });

  return (
    <>
      {/* ---------- HEADER ---------- */}
      <ImageHeader
       title={`${text.title[0]} (${deanTitle.replace(/-/g, ' ').toUpperCase()})`}

        headings={[
          { label: text.sections[0], href: '#message-from-dean' },
          { label: text.sections[1], href: '#associate-deans' },
          { label: text.sections[2], href: '#faculty-incharges' },
          { label: text.sections[3], href: '#responsibilities' },
          { label: text.sections[4], href: '#staff' },
        ]}
        src="student-activities/header.jpg"
      />

      {/* ---------- DEAN'S PROFILE ---------- */}
      <section className="container mb-10 mt-4" id="dean-profile">
        <Heading
          glyphDirection="dual"
          heading="h3"
          text={`${text.title[0]} (${deanTitle.replace(/-/g, ' ').toUpperCase()})`}
        />
        <DeanCard
          image={dean.faculty.person.img ?? 'fallback/user-image.jpg'}
          name={dean.faculty.person.name}
          phone={dean.contactNo ?? '-'}
          mobile={dean.faculty.person.telephone}
          email={dean.faculty.person.email}
          labels={{ ...text.labels, faxNo: '-' }}
        />
      </section>

      {/* ---------- DEAN'S MESSAGE ---------- */}
      <section className="container px-6 sm:px-10" id="message-from-dean">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#message-from-dean"
          text={text.title[1]}
        />
        <p>{dean.message}</p>
      </section>

      {/* ---------- ASSOCIATE DEANS ---------- */}
      <section className="container" id="associate-deans">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#associate-deans"
          text={text.title[2]}
        />
        <ul className="flex w-full flex-col flex-wrap items-center gap-4 sm:gap-5 md:flex-row md:justify-between md:gap-6">
          {associateDeans.map((ad, index) => (
            <li
              key={index}
              className="flex w-[95%] flex-row items-center gap-2 rounded-lg border border-primary-500 bg-neutral-50 p-2 transition-shadow duration-300 hover:shadow-lg sm:w-[90%] sm:gap-3 sm:p-3 md:w-[48%] md:gap-4 md:p-4"
            >
              <Image
                src={ad.person.img ?? 'fallback/user-image.jpg'}
                alt={ad.person.name}
                width={200}
                height={200}
                className="h-16 w-16 flex-shrink-0 rounded-lg object-cover sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-36 lg:w-36"
              />
              <section className="min-w-0 flex-1 space-y-1 break-words text-left sm:space-y-2 md:space-y-3 lg:space-y-4">
                <div>
                  <h3 className="m-0 text-sm font-semibold text-primary-700 sm:text-base md:text-lg lg:text-xl">
                    {ad.person.name}
                  </h3>
                  <span className="block text-xs text-neutral-700 sm:text-sm md:text-base lg:text-lg">
                    {ad.designation}
                  </span>
                </div>
                <section className="space-y-0.5 sm:space-y-1">
                  <span className="flex items-center gap-1 text-[10px] sm:gap-1.5 sm:text-xs md:text-sm lg:gap-2 lg:text-base">
                    <MdEmail className="flex-shrink-0 text-primary-700" />
                    <Link
                      href={`mailto:${ad.person.email}`}
                      className="break-all text-neutral-700 hover:text-primary-700 hover:underline"
                    >
                      {ad.person.email}
                    </Link>
                  </span>
                  <span className="flex items-center gap-1 text-[10px] sm:gap-1.5 sm:text-xs md:text-sm lg:gap-2 lg:text-base">
                    <MdOutlineLocalPhone className="flex-shrink-0 text-primary-700" />
                    <span className="break-all text-neutral-700">
                      {ad.person.telephone}
                    </span>
                  </span>
                </section>
              </section>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- FACULTY INCHARGES ---------- */}
      <section className="container" id="faculty-incharges">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#faculty-incharges"
          text={text.title[3]}
        />
        <ul className="flex w-full flex-col flex-wrap items-center gap-4 sm:gap-5 md:flex-row md:justify-between md:gap-6">
          {facultyIncharges.map((fi, index) => (
            <li
              key={index}
              className="flex w-[95%] flex-row items-center gap-2 rounded-lg border border-primary-500 bg-neutral-50 p-2 transition-shadow duration-300 hover:shadow-lg sm:w-[90%] sm:gap-3 sm:p-3 md:w-[48%] md:gap-4 md:p-4"
            >
              <Image
                src={fi.person.img ?? 'fallback/user-image.jpg'}
                alt={fi.person.name}
                width={200}
                height={200}
                className="h-16 w-16 flex-shrink-0 rounded-lg object-cover sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-36 lg:w-36"
              />
              <section className="min-w-0 flex-1 space-y-1 break-words text-left sm:space-y-2 md:space-y-3 lg:space-y-4">
                <div>
                  <h3 className="m-0 text-sm font-semibold text-primary-700 sm:text-base md:text-lg lg:text-xl">
                    {fi.person.name}
                  </h3>
                  <span className="block text-xs text-neutral-700 sm:text-sm md:text-base lg:text-lg">
                    {fi.designation}
                  </span>
                </div>
                <section className="space-y-0.5 sm:space-y-1">
                  <span className="flex items-center gap-1 text-[10px] sm:gap-1.5 sm:text-xs md:text-sm lg:gap-2 lg:text-base">
                    <MdEmail className="flex-shrink-0 text-primary-700" />
                    <Link
                      href={`mailto:${fi.person.email}`}
                      className="break-all text-neutral-700 hover:text-primary-700 hover:underline"
                    >
                      {fi.person.email}
                    </Link>
                  </span>
                  <span className="flex items-center gap-1 text-[10px] sm:gap-1.5 sm:text-xs md:text-sm lg:gap-2 lg:text-base">
                    <MdOutlineLocalPhone className="flex-shrink-0 text-primary-700" />
                    <span className="break-all text-neutral-700">
                      {fi.person.telephone}
                    </span>
                  </span>
                </section>
              </section>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- RESPONSIBILITIES ---------- */}
      <section id="responsibilities" className="container">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#responsibilities"
          text={text.title[4]}
        />
        <ul className="mt-8 list-disc space-y-4 rounded-lg border border-primary-500 bg-[#FFFFFF] p-8 font-sans text-lg font-normal drop-shadow">
          {dean.activityLogs.map((responsibility, index) => (
            <li key={index} className="my-2">
              {responsibility}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- STAFF ---------- */}
      <section id="staff" className="container">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#staff"
          text={text.title[5]}
        />
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'name', label: text.staff.name },
              { key: 'designation', label: text.staff.designation },
              { key: 'contactNo', label: text.staff.contactNo },
              { key: 'email', label: text.staff.email },
            ]}
            tableData={staffData.map((s) => ({
              name: s.person.name,
              designation: s.designation,
              contactNo: s.person.telephone || '-',
              email: s.personalEmail ?? '-',
            }))}
            pageParamName="copyrightsPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
    </>
  );
}
