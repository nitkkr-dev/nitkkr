import { Suspense } from 'react';

import Heading from '~/components/heading';
import Loading from '~/components/loading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function libraryCommittee({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const libraryCommitteeData = await db.query.libraryCommittee.findMany({
    with: {
      faculty: {
        columns: {
          id: true,
          designation: true,
        },
        with: {
          person: {
            columns: {
              name: true,
            },
          },
        },
      },
    },
  });
  const text = (await getTranslations(locale)).Section.Library.libraryCommittee;

  return (
    <section className="container">
      <Heading
        glyphDirection="dual"
        heading="h2"
        text={text.libraryCommitteeTitle}
        href="#library-committee"
        id="library-committee"
      />
      <Suspense fallback={<Loading />}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{text.srNo}</TableHead>
              <TableHead>{text.name}</TableHead>
              <TableHead>{text.generalDesignation}</TableHead>
              <TableHead>{text.libraryCommitteeDesignation}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {libraryCommitteeData.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{index}</TableCell>
                <TableCell>{entry.faculty.person.name}</TableCell>
                <TableCell>{entry.faculty.designation}</TableCell>
                <TableCell>{entry.libraryCommitteeDesignation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Suspense>
    </section>
  );
}
