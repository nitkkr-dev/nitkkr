// Revalidate every hour (has DB calls, rarely changes)
export const revalidate = 3600;

import { Suspense } from 'react';

import Heading from '~/components/heading';
import Loading from '~/components/loading';
import ImageHeader from '~/components/image-header';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

async function fetchOfficersByCategory() {
  const allOfficers = await db.query.otherOfficers.findMany({
    with: {
      faculty: {
        with: {
          person: true, // Include person relation from faculty
        },
      },
    },
  });

  // Group by category
  const grouped = allOfficers.reduce(
    (acc, officer) => {
      const category = officer.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push({
        name: officer.faculty?.person?.name || 'N/A',
        designation: officer.designation,
      });
      return acc;
    },
    {} as Record<string, { name: string; designation: string }[]>
  );

  return grouped;
}

export default async function OfficersPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const officersData = await fetchOfficersByCategory();
  const text = (await getTranslations(locale)).otherOfficersPage;
  const OFFICER_CATEGORIES = [
    {
      key: 'head-of-department',
      title: text.categories[0],
      id: 'head-of-department',
    },
    {
      key: 'chairman',
      title: text.categories[1],
      id: 'chairman',
    },
    {
      key: 'professor-in-charge',
      title: text.categories[2],
      id: 'professor-in-charge',
    },
    {
      key: 'faculty-in-charge',
      title: text.categories[3],
      id: 'faculty-in-charge',
    },
    {
      key: 'faculty-in-charge-student-club',
      title: text.categories[4],
      id: 'faculty-in-charge-student-club',
    },
    {
      key: 'members-library-committee',
      title: text.categories[5],
      id: 'members-library-committee',
    },
    {
      key: 'members-institute-handbook',
      title: text.categories[6],
      id: 'members-institute-handbook',
    },
    {
      key: 'members-sports-committee',
      title: text.categories[7],
      id: 'members-sports-committee',
    },
    {
      key: 'members-admission-committee',
      title: text.categories[8],
      id: 'members-admission-committee',
    },
    {
      key: 'members-grievance-cell',
      title: text.categories[9],
      id: 'members-grievance-cell',
    },
    {
      key: 'members-canteen-committee',
      title: text.categories[10],
      id: 'members-canteen-committee',
    },
    {
      key: 'members-clubs-committee',
      title: text.categories[11],
      id: 'members-clubs-committee',
    },
    {
      key: 'members-proctorial-board',
      title: text.categories[12],
      id: 'members-proctorial-board',
    },
    {
      key: 'members-examination-committee',
      title: text.categories[13],
      id: 'members-examination-committee',
    },
    {
      key: 'members-disciplinary-committee',
      title: text.categories[14],
      id: 'members-disciplinary-committee',
    },
    {
      key: 'members-anti-ragging-committee',
      title: text.categories[15],
      id: 'members-anti-ragging-committee',
    },
    {
      key: 'members-nirf-nba-naac',
      title: text.categories[16],
      id: 'members-nirf-nba-naac',
    },
    {
      key: 'coordinator',
      title: text.categories[17],
      id: 'coordinator',
    },
    {
      key: 'co-coordinator',
      title: text.categories[18],
      id: 'co-coordinator',
    },
    {
      key: 'nodal-officer',
      title: text.categories[19],
      id: 'nodal-officer',
    },
  ] as const;
  return (
    <>
      <ImageHeader title={text.title} src="student-activities/header.jpg" />
      {OFFICER_CATEGORIES.map((category) => {
        const categoryData = officersData[category.key] || [];

        // Skip rendering if no data for this category
        if (categoryData.length === 0) return null;

        return (
          <section key={category.key} className="container" id={category.id}>
            <Heading
              glyphDirection="dual"
              heading="h3"
              href={`#${category.id}`}
              text={category.title}
            />
            <section className="container">
              <Suspense fallback={<Loading />}>
                <GenericTable
                  headers={[
                    { key: 'name', label: text.facultyName },
                    { key: 'designation', label: text.designation },
                  ]}
                  tableData={categoryData.map((item) => ({
                    name: item.name,
                    designation: item.designation || 'N/A',
                  }))}
                  pageParamName={`${category.key}Page`}
                  getCount={Promise.resolve([])}
                />
              </Suspense>
            </section>
          </section>
        );
      })}
    </>
  );
}
