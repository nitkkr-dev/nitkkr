// Revalidate every 5 minutes (has DB calls)
export const revalidate = 300;

/* ---------------- External ---------------- */
import { Suspense } from 'react';
import { and, count, eq, inArray, sql} from 'drizzle-orm';

/* ---------------- Internal (~/) ---------------- */
import { ClearFiltersButton } from '~/app/faculty-and-staff/client-components';
import { MobileFilters } from '~/components/mobile-filters';
import Heading from '~/components/heading';
import Loading from '~/components/loading';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { courses, coursesToMajors, db } from '~/server/db';
import { majors } from '~/server/db/schema/majors.schema';
import { departments as departmentsTable } from '~/server/db/schema/departments.schema';
import { MultiCheckbox } from '~/components/inputs';
/* ---------------- Relative ---------------- */
import { YearFilterClient } from '~/components/inputs/year-dropdown';

export default async function Curricula({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: {
    department?: string | string[];
    page?: string;
    degreeLevel?: string | string[];
    major?: string | string[];
    semester?: string | string[];
    year?: string | string[];
  };
}) {
  type Degree = typeof majors.$inferSelect.degree;
  const { department: departmentName, page: pageParam } = searchParams;

  const text = (await getTranslations(locale)).Curricula;

  const page = isNaN(Number(pageParam ?? '1'))
    ? 1
    : Math.max(Number(pageParam ?? '1'), 1);

  const selectedDepartments = Array.isArray(departmentName)
    ? departmentName
    : departmentName
      ? [departmentName]
      : [];

  const selectedDegrees = (
    Array.isArray(searchParams.degreeLevel)
      ? searchParams.degreeLevel
      : searchParams.degreeLevel
        ? [searchParams.degreeLevel]
        : []
  ) as Degree[];

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

  const departments = await db
    .selectDistinct({
      id: departmentsTable.id,
      name: departmentsTable.name,
      urlName: departmentsTable.urlName,
    })
    .from(departmentsTable)
    .innerJoin(
      majors,
      eq(majors.departmentId, departmentsTable.id)
    )
    .where(
      selectedDegrees.length > 0
        ? inArray(majors.degree, selectedDegrees)
        : undefined
    );

  const degrees = await db
    .selectDistinct({ degree: majors.degree })
    .from(majors)
    .innerJoin(
      departmentsTable,
      eq(majors.departmentId, departmentsTable.id)
    )
    .where(
      selectedDepartments.length > 0
        ? inArray(departmentsTable.urlName, selectedDepartments)
        : undefined
    );

  const majorsData = await db.query.majors.findMany({
    columns: {
      id: true,
      name: true,
      degree: true,
    },
    with: {
      department: {
        columns: {
          urlName: true,
        },
      },
    },
  });


  const yearsFromDb = await db.select({ year: sql<number>`DISTINCT introduction_year`, }).from(courses);
  
  const yearOptions = yearsFromDb.map((y) => String(y.year)).sort((a, b) => Number(b) - Number(a));

  const yearTextMap = Object.fromEntries(yearOptions.map((year) => [year, year]));

  const semestersFromDb = await db
    .selectDistinct({
      semester: coursesToMajors.semester,
    })
    .from(coursesToMajors)
    .innerJoin(
      majors,
      eq(coursesToMajors.majorId, majors.id)
    )
    .innerJoin(
      departmentsTable,
      eq(majors.departmentId, departmentsTable.id)
    )
    .where(
      and(
        selectedDepartments.length > 0
          ? inArray(departmentsTable.urlName, selectedDepartments)
          : undefined,
        selectedDegrees.length > 0
          ? inArray(majors.degree, selectedDegrees)
          : undefined,
        selectedMajors.length > 0
          ? inArray(majors.name, selectedMajors)
          : undefined
      )
    );

  const semesterOptions = [...new Set(semestersFromDb.map((c) => c.semester).filter(Boolean).map(String)),].sort((a, b) => Number(a) - Number(b));

  const semesterTextMap: Record<string, string> = Object.fromEntries(semesterOptions.map((sem) => [sem, `${text.semester} ${sem}`]));

  // 1. Filter the majors based on department/degree selections
  const filteredMajors = majorsData.filter((m) => {
    if (selectedDepartments.length) {
      const deptUrl = m.department?.urlName ?? '';
      if (!selectedDepartments.includes(deptUrl)) return false;
    }
    if (selectedDegrees.length) {
      if (!selectedDegrees.includes(m.degree)) return false;
    }
    return true;
  });

  // 2. Remove duplicate names (e.g., if CS has both B.Tech and M.Tech)
  const uniqueMajorNames = Array.from(new Set(filteredMajors.map((m) => m.name)));
  
  // 3. Create the text map for the Checkboxes
  const majorTextMap = Object.fromEntries(
    uniqueMajorNames.map((name) => [name, name])
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
                  options: uniqueMajorNames as readonly string[],
                  selected: selectedMajors,
                  textMap: majorTextMap,
                  title: text.majors,
                }}
                semester={{
                  options: semesterOptions as readonly string[],
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
                  filters: text.filters ?? text.filterBy,
                  filterBy: text.filterBy,
                  clearAllFilters: text.clearAllFilters ?? 'Clear All Filters',
                  filter: {
                    date: text.date ?? 'Date',
                    startDate: text.startDate ?? 'Start Date',
                    endDate: text.endDate ?? 'End Date',
                    day: text.day ?? 'Day',
                    month: text.month ?? 'Month',
                    year: text.year ?? 'Year',
                  },
                }}
              />
            </div>

            {/* Desktop Filters - Only visible on desktop */}
            <div className="hidden lg:block">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-primary-700">
                  {text.filterBy}
                </h2>
                <Suspense fallback={<Loading />}>
                  <YearFilterClient yearOptions={yearOptions} />
                </Suspense>
                <ClearFiltersButton />
              </div>

              {/* Filters Row */}
              <div className="flex flex-col gap-4 lg:flex-row">
                {/* Department */}
                <Suspense fallback={<Loading />}>
                  <MultiCheckbox
                    param="department"
                    options={
                      departments.map((d) => d.urlName) as readonly string[]
                    }
                    selected={selectedDepartments}
                    locale={locale}
                    textMap={Object.fromEntries(
                      departments.map((d) => [d.urlName, d.name])
                    )}
                    basePath="/academics/curricula"
                    variant="accordion"
                    scrollHeight="h-[256px]"
                    title={text.department}
                  />
                </Suspense>

                {/* Degree Card */}
                <Suspense fallback={<Loading />}>
                  <MultiCheckbox
                    param="degreeLevel"
                    options={degrees.map((d) => d.degree) as readonly string[]}
                    selected={selectedDegrees}
                    locale={locale}
                    textMap={Object.fromEntries(
                      degrees.map((d) => [d.degree, d.degree])
                    )}
                    basePath="/academics/curricula"
                    variant="accordion"
                    scrollHeight="h-[256px]"
                    title={text.degree}
                  />
                </Suspense>

                {/* Semester Card */}
                <Suspense fallback={<Loading />}>
                  <MultiCheckbox
                    param="semester"
                    options={semesterOptions as readonly string[]}
                    selected={selectedSemesters}
                    locale={locale}
                    textMap={semesterTextMap}
                    basePath="/academics/curricula"
                    variant="accordion"
                    scrollHeight="h-[256px]"
                    title={text.semester}
                  />
                </Suspense>

                {/* Majors */}
                <Suspense fallback={<Loading />}>
                  <MultiCheckbox
                    // NOTE: This key forces React to completely re-render the component when dependencies change
                    key={`majors-${selectedDepartments.join('-')}-${selectedDegrees.join('-')}`}
                    param="major"
                    options={uniqueMajorNames as readonly string[]}
                    selected={selectedMajors}
                    locale={locale}
                    textMap={majorTextMap}
                    basePath="/academics/curricula"
                    variant="accordion"
                    scrollHeight="h-[256px]"
                    title={text.majors}
                  />
                </Suspense>
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

  const normalizedDepartments = selectedDepartments.map((d) => d.toLowerCase());
  const normalizedDegrees = selectedDegrees.map((d) => d.toLowerCase());
  const normalizedMajors = selectedMajors.map((m) => m.toLowerCase());

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
            normalizedDegrees.includes(major.degree.toLowerCase());

          const majorMatch =
            normalizedMajors.length === 0 ||
            normalizedMajors.includes(major.name.toLowerCase());

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