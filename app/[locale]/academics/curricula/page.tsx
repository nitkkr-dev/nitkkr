// Revalidate every 5 minutes (has DB calls)

export const revalidate = 300;

/* ---------------- External ---------------- */
import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { count } from 'drizzle-orm';

/* ---------------- Internal (~/) ---------------- */
import { ClearFiltersButton, DepartmentsClient, PreserveParamsLink } from '~/app/faculty-and-staff/client-components';
import search from '~/app/search/search';
import Heading from '~/components/heading';
import Loading from '~/components/loading';
import { ScrollArea } from '~/components/ui/scroll-area';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { courses, db } from '~/server/db';
import { majors } from '~/server/db/schema/majors.schema';

/* ---------------- Relative ---------------- */
import { FilterListClient } from './utils/FilterListClient';
interface Option {
  label: string;
  value: string;
}



export default async function Curricula({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: {
    department?: string | string[];
    page?: string;
    degree?: string | string[];
    major?: string | string[];
    semester?: string | string[];
  };
}) {
  const { department: departmentName, page: pageParam } = searchParams;

  const text = (await getTranslations(locale)).Curricula;

  const page = isNaN(Number(pageParam ?? '1'))
    ? 1
    : Math.max(Number(pageParam ?? '1'), 1);

  const selectedDepartments = Array.isArray(departmentName) ? departmentName : departmentName ? [departmentName] : [];

  const selectedDegrees = Array.isArray(searchParams.degree)
    ? searchParams.degree
    : searchParams.degree
    ? [searchParams.degree]
    : [];

  const selectedMajors = Array.isArray(searchParams.major)
    ? searchParams.major
    : searchParams.major
    ? [searchParams.major]
    : [];

  const selectedSemesters = Array.isArray(searchParams.semester)
  ? searchParams.semester
  : searchParams.semester
  ? [searchParams.semester]
  : [];


  return (
    <>
      <Heading
        className="container"
        glyphDirection="dual"
        heading="h2"
        text={text.pageTitle}
      />
      
      <main className="container mt-8">
  <search className="container mb-10">
    <Suspense fallback={<Loading />}>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary-700">{text.filterBy}</h2>
        <ClearFiltersButton />
      </div>

      {/* Filters Row */}
      <div className="flex flex-col lg:flex-row gap-4">

        {/* Department */}
        <div className="flex-1 rounded-lg border border-primary-100 bg-neutral-50 p-5 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-primary-700">
            {text.department}
          </h3>

          <ScrollArea className="h-64 pr-2">
            <Suspense fallback={<Loading />}>
              <Departments />
            </Suspense>
          </ScrollArea>
        </div>

        {/* Middle Column (Degree + Semester as separate cards) */}
        <div className="flex-1 flex flex-col gap-4">

          {/* Degree Card */}
          <div className="flex-1 rounded-lg border border-primary-100 bg-neutral-50 p-5 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-primary-700">
              {text.degree}
            </h3>

            <ScrollArea className="h-32 pr-2">
              <Suspense fallback={<Loading />}>
                <Degrees />
              </Suspense>
            </ScrollArea>
          </div>

          {/* Semester Card */}
          <div className="flex-1 rounded-lg border border-primary-100 bg-neutral-50 p-5 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-primary-700">
              {text.semester}
            </h3>

            <ScrollArea className="h-16 pr-2">
              <Suspense fallback={<Loading />}>
                <Semesters searchParams={searchParams} locale={locale} />
              </Suspense>
            </ScrollArea>
          </div>

        </div>

        {/* Majors */}
        <div className="flex-1 rounded-lg border border-primary-100 bg-neutral-50 p-5 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-primary-700">
            {text.majors}
          </h3>

          <ScrollArea className="h-64 pr-2">
            <Suspense fallback={<Loading />}>
              <Majors searchParams={searchParams} />
            </Suspense>
          </ScrollArea>
        </div>

      </div>

    </Suspense>
  </search>

  <Suspense fallback={<Loading />}>
    <Courses
      page={page}
      locale={locale}
      selectedDepartments={selectedDepartments}
      selectedDegrees={selectedDegrees}
      selectedMajors={selectedMajors}
      selectedSemesters={selectedSemesters}
    />
  </Suspense>
</main>


    </>
  );
}
const Courses = async ({
  page,
  locale,
  selectedDepartments,
  selectedDegrees,
  selectedMajors,
  selectedSemesters,
}: {
  page: number;
  locale: string;
  selectedDepartments: string[];
  selectedDegrees: string[];
  selectedMajors: string[];
  selectedSemesters: string[];
}) => {
  const text = (await getTranslations(locale)).Curricula;

  const normalizedDepartments = selectedDepartments.map((d) =>
    d.toLowerCase()
  );
  const normalizedDegrees = selectedDegrees.map((d) =>
    d.toLowerCase()
  );
  const normalizedMajors = selectedMajors.map((m) =>
    m.toLowerCase()
  );

  const normalizedSemesters = selectedSemesters;

  const coursesData = await db.query.courses.findMany({
    columns: { code: true, title: true },
    with: {
      coursesToMajors: {
        columns: {
          semester: true, 
          lectureCredits: true,
          practicalCredits: true,
          tutorialCredits: true,
        },
        with: {
          major: {
            columns: {
              name: true,
              degree: true,
            },
            with: {
              department: {
                columns: {
                  name: true,
                  urlName: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const tableData = coursesData.flatMap(
    ({ code, title, coursesToMajors }) =>
      coursesToMajors
        .filter(({ major, semester }) => {
          const departmentMatch =
            normalizedDepartments.length === 0 ||
            normalizedDepartments.includes(
              major.department.urlName.toLowerCase()
            );

          const degreeMatch =
            normalizedDegrees.length === 0 ||
            normalizedDegrees.includes(
              major.degree.toLowerCase()
            );

          const majorMatch =
            normalizedMajors.length === 0 ||
            normalizedMajors.includes(
              major.name.toLowerCase()
            );

          const semesterMatch =
            normalizedSemesters.length === 0 ||
            normalizedSemesters.includes(String(semester)); 

          return (
            departmentMatch &&
            degreeMatch &&
            majorMatch &&
            semesterMatch
          );
        })
        .map(
          ({
            lectureCredits,
            practicalCredits,
            tutorialCredits,
            major,
            semester,
          }) => ({
            code,
            title,
            major: major.name,
            department: major.department.name,
            degree: major.degree,
            semester,
            credits: `${lectureCredits}-${tutorialCredits}-${practicalCredits}`,
            totalCredits:
              lectureCredits +
              practicalCredits +
              Math.floor(tutorialCredits / 2),
            syllabus: `/${locale}/academics/curricula/${code}`,
          })
        )
  );

  const headers = [
    { key: 'code', label: text.code },
    { key: 'title', label: text.title },
    { key: 'major', label: text.major },
    { key: 'department', label: text.department },
    { key: 'degree', label: text.degree },
    { key: 'semester', label: text.semester },
    { key: 'credits', label: text.credits },
    { key: 'totalCredits', label: text.totalCredits },
    { key: 'syllabus', label: text.syllabus },
  ];

  return (
    <GenericTable
      headers={headers}
      tableData={tableData}
      currentPage={page}
      itemsPerPage={10}
      getCount={db.select({ count: count() }).from(courses)}
    />
  );
};

const Departments = async () => {
  const departments = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });

  return (
    <FilterListClient
      paramName="department"
      options={departments.map((d) => ({
        label: d.name,
        value: d.urlName,
      }))}
    />
  );
};

const Degrees = async () => {
  const degrees = await db
    .selectDistinct({ degree: majors.degree })
    .from(majors);

  return (
    <FilterListClient
      paramName="degree"
      options={degrees.map((d) => ({
        label: d.degree,
        value: d.degree,
      }))}
    />
  );
};

const Majors = async ({
  searchParams,
}: {
  searchParams: {
    department?: string | string[];
    degree?: string | string[];
  };
}) => {
  const selectedDepartments = Array.isArray(searchParams.department)
    ? searchParams.department
    : searchParams.department
    ? [searchParams.department]
    : [];

  const selectedDegrees = Array.isArray(searchParams.degree)
    ? searchParams.degree
    : searchParams.degree
    ? [searchParams.degree]
    : [];

  const majorsData = await db.query.majors.findMany({
    columns: {
      id: true,
      name: true,
      degree: true, // ✅ include degree
    },
    with: {
      department: {
        columns: {
          urlName: true,
        },
      },
    },
  });

  const filteredMajors = majorsData.filter((m) => {
    const departmentMatch =
      selectedDepartments.length === 0 ||
      selectedDepartments.includes(m.department.urlName);

    const degreeMatch =
      selectedDegrees.length === 0 ||
      selectedDegrees.includes(m.degree);

    return departmentMatch && degreeMatch;
  });

  return (
    <FilterListClient
      paramName="major"
      options={filteredMajors.map((m) => ({
        label: m.name,
        value: m.name, // better if you add urlName in schema
      }))}
    />
  );
};

const Semesters = async ({
  searchParams,
  locale,
}: {
  searchParams: {
    semester?: string | string[];
  };
  locale: string;
}) => {
  const text = (await getTranslations(locale)).Curricula;
  
  // Get selected semesters from URL
  const selectedSemesters = Array.isArray(searchParams.semester)
    ? searchParams.semester
    : searchParams.semester
    ? [searchParams.semester]
    : [];

  // Static semester list (adjust if your system is different)
  const semestersData = [
    { label: `${text.semester} 1`, value: '1' },
    { label: `${text.semester} 2`, value: '2' },
    { label: `${text.semester} 3`, value: '3' },
    { label: `${text.semester} 4`, value: '4' },
    { label: `${text.semester} 5`, value: '5' },
    { label: `${text.semester} 6`, value: '6' },
    { label: `${text.semester} 7`, value: '7' },
    { label: `${text.semester} 8`, value: '8' },
  ];

  // If nothing selected → show all
  // If selected → keep only matching
  const filteredSemesters =
    selectedSemesters.length === 0
      ? semestersData
      : semestersData.filter((s) =>
          selectedSemesters.includes(s.value)
        );

  return (
    <FilterListClient
      paramName="semester"
      options={filteredSemesters}
    />
  );
};


