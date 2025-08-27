'use server';

import { eq, sql } from 'drizzle-orm';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { type ReactNode } from 'react';
import {
  MdCall,
  MdLocationOn,
  MdMail,
  MdOutlineAdd,
  MdOutlineDelete,
  MdOutlineEdit,
} from 'react-icons/md';
import 'server-only';
import { string } from 'zod';

import { PathnameAwareSuspense, Tabs } from '~/app/profile/client-utils';
import { Button } from '~/components/buttons';
import { WorkInProgressStatus } from '~/components/status';
import { ScrollArea } from '~/components/ui';
import { getTranslations, type Translations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import {
  awardsAndRecognitions,
  continuingEducation,
  db,
  developmentProgramsOrganised,
  doctorates,
  experience,
  faculty,
  ipr,
  majors,
  outreachActivities,
  persons,
  publications,
  qualifications,
  researchProjects,
  studentAcademicDetails,
  students,
} from '~/server/db';

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
      label: text.tabs.publications,
      href: 'publications',
    },
    {
      label: text.tabs.projects,
      href: 'projects',
    },
    {
      label: text.tabs.researchScholars,
      href: 'researchScholars',
    },
    {
      label: text.tabs.awardsAndRecognitions,
      href: 'awardsAndRecognitions',
    },
    {
      label: text.tabs.developmentProgramsOrganised,
      href: 'developmentProgramsOrganised',
    },
    {
      label: text.tabs.ipr,
      href: 'ipr',
    },
    {
      label: text.tabs.outreachActivities,
      href: 'outreachActivities',
    },
    {
      label: text.tabs.continuingEducation,
      href: 'continuingEducation',
    },
  ];
  const facultyDescriptionTmp = await db.query.faculty.findFirst({
    where: (faculty, { eq }) =>
      !employeeId ? eq(faculty.id, id!) : eq(faculty.employeeId, employeeId),
    columns: {
      id: true,
      employeeId: true,
      officeAddress: true,
      designation: true,
      googleScholarId: true,
      linkedInId: true,
      researchGateId: true,
      scopusId: true,
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
    extras: {
      publications: db
        .$count(
          publications,
          sql`publications.faculty_id = faculty.employee_id` // drzzle orm bug https://github.com/drizzle-team/drizzle-orm/issues/3546
        )
        .as('publications'),
      continuingEducation: db
        .$count(
          continuingEducation,
          sql`continuing_education.faculty_id = faculty.employee_id`
        )
        .as('continuingEducation'),
    },
  });

  /**
   * Count publications based on text content analysis
   * @param employeeId Faculty's employee ID
   * @returns Number of individual publications
   */
  async function countPublicationsByText(employeeId: string): Promise<number> {
    // Get all publication records for this faculty member
    const publicationRecords = await db
      .select({ details: publications.details })
      .from(publications)
      .where(eq(publications.facultyId, employeeId));

    // Initialize counter
    let totalPublications = 0;

    // Process each publication record
    for (const record of publicationRecords) {
      if (!record.details) continue;

      // Split by newline characters
      const lines = record.details
        .split('\n')
        // Remove empty lines
        .filter((line) => line.trim().length > 0);

      // Each non-empty line is considered a separate publication
      totalPublications += lines.length;
    }

    return totalPublications;
  }

  if (!facultyDescriptionTmp) {
    return notFound();
  }

  // Get publication count by analyzing text content
  const realPublicationsCount = await countPublicationsByText(
    facultyDescriptionTmp.employeeId
  );

  const facultyDescription = {
    doctoralStudents: 0, // Doctoral Student count not implemented
    ...facultyDescriptionTmp, // Original faculty details
    publications: realPublicationsCount, // Use the new count method
  };

  return (
    <>
      <section className="container mb-6 mt-24 grid gap-3 xl:grid-cols-[calc(50%-0.75rem),0%,calc(50%-0.75rem)]">
        <article className="flex flex-grow flex-col rounded-2xl bg-shade-light p-5 drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)]">
          <h2 className="mb-0 text-primary-700 max-xl:mr-[8rem]">
            {facultyDescription.person.name}
          </h2>
          <span className="flex items-center justify-between">
            <h5 className="text-neutral-900">
              {facultyDescription.designation}
            </h5>
            {id && (
              <Button
                variant="primary"
                className="mr-5 !rounded-sm pr-1 max-xl:hidden"
                asChild
              >
                <Link href={`/${locale}/profile/edit?personal=true`}>
                  <MdOutlineEdit size={24} className="cursor-pointer" />
                  Edit Profile
                </Link>
              </Button>
            )}
          </span>
          {id && (
            <Button
              variant="primary"
              className="absolute left-0 top-0 z-10 mt-4 w-[calc(100%-9rem)] translate-y-[-200%] sm:w-[calc(100%-12rem)] lg:w-[calc(100%-15rem)] xl:hidden"
              asChild
            >
              <Link href={`/${locale}/profile/edit?personal=true`}>
                <MdOutlineEdit size={24} className="cursor-pointer" />
                Edit Profile
              </Link>
            </Button>
          )}
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
                {facultyDescription.person.email}
              </p>
            </li>
            <li>
              <p>
                <MdCall
                  size={28}
                  className="mr-[12px] inline text-primary-700"
                />
                {`+${facultyDescription.person.countryCode ?? 91} ${facultyDescription.person.telephone} (off-Direct no) `}
                {facultyDescription.person.alternateTelephone &&
                  `+${facultyDescription.person.alternateCountryCode ?? 91} ${facultyDescription.person.alternateTelephone} (Mob)`}
              </p>
            </li>
            <li>
              <p>
                <MdLocationOn
                  size={28}
                  className="mr-[12px] inline text-primary-700"
                />
                {facultyDescription.officeAddress === ''
                  ? 'Not Available'
                  : facultyDescription.officeAddress}
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
              facultyDescription.employeeId === '114' ||
              facultyDescription.employeeId === '1083'
                ? `faculty-and-staff/${facultyDescription.employeeId}/0.jpg`
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
                    {facultyDescription[
                      key as keyof typeof text.intellectualContributions
                    ] ?? 0}
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
        {(
          Object.entries(text.externalLinks) as [
            keyof typeof text.externalLinks,
            string,
          ][]
        ).map(([key, value]) => {
          if (key in facultyDescription) {
            return (
              <Link
                key={key}
                className="flex aspect-square flex-col justify-evenly rounded-2xl bg-shade-light drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)] md:w-[23%] lg:w-[20%]"
                href={facultyDescription[key] ?? ''}
              >
                <Image
                  alt={key}
                  src={`faculty-and-staff/${key}.svg`}
                  height={0}
                  width={0}
                  className="mx-auto h-[50%] w-[50%]"
                />
                <h5 className="mx-auto">{value}</h5>
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
        <article
          className=" grid w-full grid-cols-2 rounded-2xl max-md:h-[28rem] md:bg-shade-light md:px-5 md:py-6"
          style={{
            gridTemplateRows: 'auto 1fr',
            gridTemplateColumns: 'auto 1fr',
          }}
        >
          <PathnameAwareSuspense defaultPathname="qualifications">
            {children}
          </PathnameAwareSuspense>
        </article>
      </section>
    </>
  );
}

const facultyTables = {
  qualifications: qualifications,
  experience: experience,
  projects: researchProjects,
  publications: publications,
  continuingEducation: continuingEducation,
  awardsAndRecognitions: awardsAndRecognitions,
  developmentProgramsOrganised: developmentProgramsOrganised,
  ipr: ipr,
  outreachActivities: outreachActivities,
} as const;

async function FacultySectionComponent({
  locale,
  facultySection,
  id,
  employeeId,
}: {
  locale: string;
  facultySection: keyof Translations['FacultyAndStaff']['tabs'];
} & ({ id: number; employeeId?: never } | { id?: never; employeeId: string })) {
  const text = (await getTranslations(locale)).FacultyAndStaff;
  // Get the appropriate table for the faculty section
  const table =
    facultySection in facultyTables
      ? facultyTables[facultySection as keyof typeof facultyTables]
      : undefined;

  const result = (await (async () => {
    if (facultySection === 'researchScholars') {
      return await fetchResearchScholars(id, employeeId);
    } else if (id) {
      const data = await fetchSectionByFacultyId(
        id,
        facultySection === 'projects' ? 'researchProjects' : facultySection,
        !table
      );
      return data;
    }
    // Using employee ID
    else if (employeeId) {
      // Standard faculty tables
      if (table !== undefined) {
        return await db
          .select()
          .from(table)
          .where(eq(table.facultyId, employeeId));
      } else {
        return (
          await db.query.customTopics.findFirst({
            where: (customTopics, { eq, and }) =>
              and(
                eq(customTopics.facultyId, employeeId),
                eq(customTopics.name, facultySection)
              ),
            columns: {},
            with: {
              customInformation: true,
            },
          })
        )?.customInformation;
      }
    }
    return [];
  })()) as {
    title?: string;
    universityName?: string;
    specialization?: string;
    organizationName?: string;
    designation?: string;
    details?: string;
    field?: string;
    awardingAgency?: string;
    type?: string;
    people?: string;
    location?: string;
    role?: string;
    date?: string;
    startDate?: string;
    createdOn?: string;
    endedOn?: Date;
    status?: string;
    fundingAgency?: string;
    endDate?: string;
    tag?: string;
    caption?: string;
    id: number;
    degree?: string;
    description?: string;
  }[];

  if (!result || facultySection === 'researchScholars') {
    return (
      <div className="[&>*]:!h-full">
        <WorkInProgressStatus locale={locale} />
      </div>
    );
  }

  const uniqueTags = Array.from(
    new Set(result.filter((item) => item.tag).map((item) => item.tag))
  ) as string[];

  const tagStyle =
    `
            .tag-filter:has(#filter-all:checked) ~ .rounded-2xl ul li {
              display: flex;
            }

            .tag-filter:has(.filter-input:checked:not(#filter-all))
              ~ .rounded-2xl
              ul
              li {
              display: none;
            }

            /* Hide tags when any specific filter is selected */
            .tag-filter:has(.filter-input:checked:not(#filter-all))
              ~ .rounded-2xl
              ul
              li
              .tag-badge {
              display: none !important;
            }

            /* Show tags only when 'all' is selected */
            .tag-filter:has(#filter-all:checked)
              ~ .rounded-2xl
              ul
              li
              .tag-badge {
              display: inline !important;
            }

          ` +
    uniqueTags
      .map((tag) => {
        const safeTagId = `filter-${tag.replace(/\s+/g, '-')}`;
        return `
        .tag-filter:has(#${safeTagId}:checked) ~ .rounded-2xl ul li[data-tag="${tag}"] {
          display: flex;
        }`;
      })
      .join('\n');

  return (
    <>
      <h4 className="w-fit max-md:hidden mr-4">{text.tabs[facultySection]}</h4>
      {uniqueTags.length > 0 && (
        <>
          <style>{tagStyle}</style>
          <form className="tag-filter mb-4 mr-2 flex h-fit w-fit gap-2">
            {['all', ...uniqueTags].map((tag) => {
              const safeTagId = `filter-${tag.replace(/\s+/g, '-')}`;
              return (
                <fieldset key={tag} className="flex items-center">
                  <input
                    type="radio"
                    id={safeTagId}
                    name="tag"
                    value={tag}
                    defaultChecked={tag === 'all'}
                    className="filter-input peer hidden"
                  />
                  <label
                    htmlFor={safeTagId}
                    className="cursor-pointer rounded-lg border bg-shade-light px-3 py-1.5 font-serif text-sm font-medium text-primary-700 transition-colors hover:border-primary-700 peer-checked:bg-primary-700 peer-checked:text-shade-light"
                  >
                    {tag in text.tags
                      ? text.tags[tag as keyof typeof text.tags]
                      : tag}
                  </label>
                </fieldset>
              );
            })}
          </form>
        </>
      )}
      { /* TODO: kuch to kar rahe the hogya*/ }
      {id && (
        <span className='flex items-center justify-between px-4'>
          {id && (
            <Button variant="primary" className="mb-4 ml-auto p-1" asChild>
              <Link href={`/${locale}/profile/edit?topic=${facultySection}`}>
                <MdOutlineAdd size={28} className="cursor-pointer" />
                Add{' '}
              </Link>
            </Button>
          )}
        </span>
      )}
      <ScrollArea className="col-span-2 rounded-2xl">
        <ul className="mb-3 grid gap-y-6 px-1">
          {result.map((item, index) => (
            <li
              key={index}
              className="flex flex-col gap-2 rounded-xl bg-shade-light p-5 shadow-[0px_4px_12px_0px_rgba(0,15,31,0.1)]"
              data-tag={item.tag}
            >
              <span className="flex w-full items-center justify-between">
                <h5 className="font-bold">
                  {facultySection === 'qualifications' ||
                  facultySection === 'developmentProgramsOrganised'
                    ? item.degree
                    : facultySection === 'experience'
                      ? item.designation
                      : item.title}
                </h5>

                {id ? (
                  <>
                    <Link
                      href={`/${locale}/profile/edit?topic=${facultySection}&id=${item.id}`}
                      className="ml-auto"
                    >
                      <MdOutlineEdit
                        size={28}
                        className="cursor-pointer text-primary-700"
                      />
                    </Link>
                    <Link
                      href={`/${locale}/profile/delete?topic=${facultySection}&id=${item.id}`}
                    >
                      <MdOutlineDelete
                        size={28}
                        className="cursor-pointer text-primary-700"
                      />
                    </Link>
                  </>
                ) : null}
              </span>
              <p className="whitespace-pre-wrap">
                {item.details ??
                  item.field ??
                  item.specialization ??
                  item.awardingAgency ??
                  item.type ??
                  item.description ??
                  item.degree}
              </p>
              <p className="text-neutral-600">
                {item.people ??
                  item.location ??
                  item.universityName ??
                  item.organizationName ??
                  item.role ??
                  item.caption}
              </p>
              <p className="text-neutral-400 lg:text-base">
                {item.date ?? item.startDate}
                {item.startDate && item.endDate && ' - '}
                {item.endDate ??
                  (item.endedOn ? item.endedOn.toDateString() : item.status)}
                {item.tag && (
                  <span
                    className={cn(
                      'tag-badge mx-2 rounded-sm px-1 text-neutral-900',
                      facultySection === 'publications'
                        ? 'bg-warning/20 text-warning'
                        : 'bg-error/20 text-error'
                    )}
                  >
                    {item.tag}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </>
  );
}

async function fetchResearchScholars(id?: number, employeeId?: string) {
  const baseQuery = () =>
    db.select({
      title: doctorates.title,
      details: doctorates.type,
      createdOn: doctorates.createdOn,
      endedOn: doctorates.endedOn,
      degree: majors.degree,
      people: persons.name,
    });
  const query = (
    employeeId
      ? baseQuery().from(doctorates)
      : baseQuery()
          .from(faculty)
          .innerJoin(
            doctorates,
            eq(doctorates.supervisorId, faculty.employeeId)
          )
  )
    .innerJoin(students, eq(students.id, doctorates.studentId))
    .innerJoin(persons, eq(persons.id, students.id))
    .innerJoin(
      studentAcademicDetails,
      eq(studentAcademicDetails.id, students.id)
    )
    .innerJoin(majors, eq(majors.id, studentAcademicDetails.majorId));

  return employeeId
    ? await query.where(eq(doctorates.supervisorId, employeeId))
    : await query.where(eq(faculty.id, id!));
}

type SectionKey = keyof typeof facultyTables | 'researchProjects';

async function fetchSectionByFacultyId(
  id: number,
  section: SectionKey,
  customColumn: boolean
) {
  const facultyData = await db.query.faculty.findFirst({
    where: (faculty, { eq }) => eq(faculty.id, id),
    columns: {},
    with: {
      ...(customColumn
        ? {
            customTopics: {
              where: (customTopics, { eq }) => eq(customTopics.name, section),
              columns: {},
              with: { customInformation: true },
            },
          }
        : {
            [section]: true,
          }),
    },
  });

  return customColumn // @ts-expect-error - broken type inference
    ? (facultyData?.customTopics[0]?.customInformation as {
        id: number;
        description: string | null;
        title: string;
        startDate: string | null;
        endDate: string | null;
        topicId: number;
        caption: string | null;
      }[])
    : (
        facultyData as unknown as {
          [K in SectionKey]?: { title: string }[];
        }
      )?.[section];
}

export { FacultyOrStaffComponent, FacultySectionComponent };
