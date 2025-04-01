import { count } from 'drizzle-orm';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import Loading from '~/components/loading';
import { PaginationWithLogic } from '~/components/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
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

  const page = Number(searchParams.page?? '1')
  // console.log(page);
  
  const pagesCount = await db.select({count:count()}).from(courses);
  const totalPages = Math.ceil(pagesCount[0].count/10);
  // console.log(totalPages);
  
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{text.code}</TableHead>
                <TableHead>{text.title}</TableHead>
                <TableHead>{text.major}</TableHead>
                <TableHead>{text.credits}</TableHead>
                <TableHead>{text.totalCredits}</TableHead>
                <TableHead className="text-center">{text.syllabus}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <Courses page={page} />
            </TableBody>
          </Table>
        </Suspense>
        <PaginationWithLogic
          currentPage={page}
          totalPages={totalPages} 
        />
      </main>
    </>
  );
}

const Courses = async ({ page }: { page: number }) => {
  // fetch call for original db
  // const courses = await db.query.courses.findMany({
  //   columns: { code: true, title: true },
  //   with: {
  //     coursesToMajors: {
  //       columns: {
  //         lectureCredits: true,
  //         practicalCredits: true,
  //         tutorialCredits: true,
  //       },
  //       with: { major: { columns: { name: true } } },
  //     },
  //   },
  //   limit: 10,
  //   offset: (page - 1) * 10,
  // });

  // call for my setup db
  const courses = await db.query.courses.findMany({
    limit:10,
    offset:(page-1)*10,
  })


  return courses.map(({ code, coursesToMajors, title }) =>
    coursesToMajors.map(
      ({ lectureCredits, practicalCredits, tutorialCredits, major }, index) => (
        <TableRow key={index}>
          <TableCell>{code}</TableCell>
          <TableCell>{title}</TableCell>
          <TableCell>{major.name}</TableCell>
          <TableCell>{`${lectureCredits}-${tutorialCredits}-${practicalCredits}`}</TableCell>
          <TableCell>
            {lectureCredits +
              practicalCredits +
              Math.floor(tutorialCredits / 2)}
          </TableCell>
          <TableCell className="text-center">
            <Button asChild variant="link">
              <Link href={`curricula/${code}`}>
                <FaExternalLinkAlt />
              </Link>
            </Button>
          </TableCell>
        </TableRow>
      )
    )
  );
};
