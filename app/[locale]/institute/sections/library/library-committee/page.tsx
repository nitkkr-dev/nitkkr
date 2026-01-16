import { Suspense } from 'react';

import Heading from '~/components/heading';
import Loading from '~/components/loading';
import GenericTable from '~/components/ui/generic-table';
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
        <GenericTable
          headers={[
            { key: 'name', label: text.name },
            { key: 'generalDesignation', label: text.generalDesignation },
            {
              key: 'libraryCommitteeDesignation',
              label: text.libraryCommitteeDesignation,
            },
          ]}
          tableData={libraryCommitteeData.map((entry, index) => ({
            srNo: index + 1,
            name: entry.faculty.person.name,
            generalDesignation: entry.faculty.designation,
            libraryCommitteeDesignation: entry.libraryCommitteeDesignation,
          }))}
          getCount={Promise.resolve([])}
        />
      </Suspense>
    </section>
  );
}
