// Revalidate every 5 minutes (has DB calls)

export const revalidate = 300;

/* ---------------- External ---------------- */
import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { count } from 'drizzle-orm';

/* ---------------- Internal (~/) ---------------- */
import { ClearFiltersButton, DepartmentsClient, PreserveParamsLink } from '~/app/faculty-and-staff/client-components';
import { MobileFilters } from '~/components/mobile-filters';
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
import { YearFilterClient } from './utils/year-dropdown';

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
    year?: string | string[];
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

  const selectedYears = Array.isArray(searchParams.year)
    ? searchParams.year
    : searchParams.year
    ? [searchParams.year]
    : [];

  const departments = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });

  const degrees = await db
    .selectDistinct({ degree: majors.degree })
    .from(majors);

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


  // Generate years array for mobile filters
  const currentYear = new Date().getFullYear();
  const yearOptions = [];
  const yearTextMap: Record<string, string> = {};
  for (let year = currentYear; year >= 1976; year--) {
    const yearStr = String(year);
    yearOptions.push(yearStr);
    yearTextMap[yearStr] = yearStr;
  }

  // Generate semester text map
  const semesterOptions = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const semesterTextMap: Record<string, string> = {
    '1': `${text.semester} 1`,
    '2': `${text.semester} 2`,
    '3': `${text.semester} 3`,
    '4': `${text.semester} 4`,
    '5': `${text.semester} 5`,
    '6': `${text.semester} 6`,
    '7': `${text.semester} 7`,
    '8': `${text.semester} 8`,
  };

  // prepare majors list for mobile by filtering according to selected department/degree
  const filteredMajorsForMobile = majorsData.filter((m) => {
    if (selectedDepartments.length) {
      const deptUrl = m.department?.urlName ?? '';
      if (!selectedDepartments.includes(deptUrl)) return false;
    }
    if (selectedDegrees.length) {
      if (!selectedDegrees.includes(m.degree)) return false;
    }
    return true;
  });

  const majorOptionsForMobile = filteredMajorsForMobile.map((m) => m.name);
  const majorTextMapForMobile = Object.fromEntries(
    filteredMajorsForMobile.map((m) => [m.name, m.name])
  );


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

      {/* Mobile Filters - Only visible on mobile/tablet */}
      <div className="lg:hidden">
        <MobileFilters
        locale={locale}
        basePath="/academics/curricula"
        department={{
          selected: selectedDepartments,
          rows: departments,
          title: text.department,
        }}
        degreeLevel={{
          options: degrees.map((d) => d.degree) as readonly string[],
          selected: selectedDegrees,
          textMap: Object.fromEntries(
            degrees.map((d) => [d.degree, d.degree])
          ),
          title: text.degree,
        }}
        majors={{
          options: majorOptionsForMobile as readonly string[],
          selected: selectedMajors,
          textMap: majorTextMapForMobile,
          title: text.majors,
        }}
        semester={{
          options: ['1', '2', '3', '4', '5', '6', '7', '8'] as readonly string[],
          selected: selectedSemesters,
          textMap: semesterTextMap,
          title: text.semester,
        }}
        yearDropdown={{
          options: yearOptions as readonly string[],
          selected: selectedYears.length > 0 ? selectedYears[0] : null,
          textMap: yearTextMap,
          title: text.year ?? 'Year',
        }}
        text={{
          filters: text.filterBy,
          filterBy: text.filterBy,
          clearAllFilters: 'Clear All Filters',
          filter: {
            date: 'Date',
            startDate: 'Start Date',
            endDate: 'End Date',
            day: 'Day',
            month: 'Month',
            year: 'Year',
          },
        }}
      />
      </div>

      {/* Desktop Filters - Only visible on desktop */}
      <div className="hidden lg:block">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary-700">{text.filterBy}</h2>
        <Suspense fallback={<Loading />}>
            <YearFilterClient />
          </Suspense>
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
              <Departments departments={departments} />
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
                <Degrees degreesData={degrees} />
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
                <Semesters searchParams={searchParams} semesterOptions={semesterOptions} semesterTextMap={semesterTextMap} />
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
              <Majors searchParams={searchParams} majorsData={majorsData} />
            </Suspense>
          </ScrollArea>
        </div>

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
      selectedYears={selectedYears}
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
  selectedYears,
}: {
  page: number;
  locale: string;
  selectedDepartments: string[];
  selectedDegrees: string[];
  selectedMajors: string[];
  selectedSemesters: string[];
  selectedYears: string[];
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
  const normalizedYears = selectedYears.map((y) => y);

  const coursesData = await db.query.courses.findMany({
    columns: { code: true, title: true, introduction_year: true },
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
    ({ code, title, introduction_year, coursesToMajors }) =>
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

          const yearMatch =
            normalizedYears.length === 0 ||
            normalizedYears.includes(String(introduction_year));

          return (
            departmentMatch &&
            degreeMatch &&
            majorMatch &&
            semesterMatch &&
            yearMatch
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
            year: introduction_year,
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
    { key: 'year', label: text.year ?? 'Year' },
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

const Departments = ({
  departments,
}: {
  departments: { id: number; name: string; urlName: string }[];
}) => {
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

const Degrees = ({
  degreesData,
}: {
  degreesData: { degree: string }[];
}) => {
  return (
    <FilterListClient
      paramName="degree"
      options={degreesData.map((d) => ({
        label: d.degree,
        value: d.degree,
      }))}
    />
  );
};
const Majors = ({
  searchParams,
  majorsData,
}: {
  searchParams: {
    department?: string | string[];
    degree?: string | string[];
  };
  majorsData: {
    id: number;
    name: string;
    degree: string;
    department: { urlName: string };
  }[];
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
        value: m.name,
      }))}
    />
  );
};

const Semesters = ({
  searchParams,
  semesterOptions,
  semesterTextMap,
}: {
  searchParams: {
    semester?: string | string[];
  };
  semesterOptions: string[];
  semesterTextMap: Record<string, string>;
}) => {
  // Get selected semesters from URL
  const selectedSemesters = Array.isArray(searchParams.semester)
    ? searchParams.semester
    : searchParams.semester
    ? [searchParams.semester]
    : [];

  // Build semester options using passed data
  const semestersData = semesterOptions.map((sem) => ({
    label: semesterTextMap[sem],
    value: sem,
  }));

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
