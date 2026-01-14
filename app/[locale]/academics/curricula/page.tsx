import { count } from 'drizzle-orm';
import { Suspense } from 'react';

import Heading from '~/components/heading';
import Loading from '~/components/loading';
import GenericTable from '~/components/ui/generic-table'; // Adjust path as needed
import { getTranslations } from '~/i18n/translations';
import { courses, db } from '~/server/db';

export default async function Curricula({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { page?: string };
}) {
  const text = (await getTranslations(locale)).Curricula;

  const page = isNaN(Number(searchParams.page ?? '1'))
    ? 1
    : Math.max(Number(searchParams.page ?? '1'), 1);

  return (
    <>
      <Heading
        className="container"
        glyphDirection="dual"
        heading="h2"
        text={text.pageTitle}
      />

      <search className="container">
        {/* FIXME: Add input and filters here */}
      </search>

      <main className="container">
        <Suspense fallback={<Loading />}>
          <CoursesTable page={page} locale={locale} />
        </Suspense>
      </main>
    </>
  );
}

const CoursesTable = async ({
  page,
  locale,
}: {
  page: number;
  locale: string;
}) => {
  const text = (await getTranslations(locale)).Curricula;

  const coursesData = await db.query.courses.findMany({
    columns: { code: true, title: true },
    with: {
      coursesToMajors: {
        columns: {
          lectureCredits: true,
          practicalCredits: true,
          tutorialCredits: true,
        },
        with: { major: { columns: { name: true } } },
      },
    },
    limit: 10,
    offset: (page - 1) * 10,
  });

  // Transform data to flat structure for table
  const tableData = coursesData.flatMap(({ code, coursesToMajors, title }) =>
    coursesToMajors.map(
      ({ lectureCredits, practicalCredits, tutorialCredits, major }) => ({
        code,
        title,
        major: major.name,
        credits: `${lectureCredits}-${tutorialCredits}-${practicalCredits}`,
        totalCredits:
          lectureCredits + practicalCredits + Math.floor(tutorialCredits / 2),
        syllabus: `/en/academics/curricula/${code}`, // URL for the syllabus link
      })
    )
  );

  const headers = [
    { key: 'code', label: text.code },
    { key: 'title', label: text.title },
    { key: 'major', label: text.major },
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
