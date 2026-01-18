// Revalidate every hour (has DB calls, rarely changes)
export const revalidate = 3600;

import { Suspense } from 'react';

import Heading from '~/components/heading';
import Loading from '~/components/loading';
import ImageHeader from '~/components/image-header';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

const OFFICER_CATEGORIES = [
  {
    key: 'head-of-department',
    title: 'Head of Department',
    id: 'head-of-department',
  },
  {
    key: 'chairman',
    title: 'Chairman',
    id: 'chairman',
  },
  {
    key: 'professor-in-charge',
    title: 'Professor In-Charge',
    id: 'professor-in-charge',
  },
  {
    key: 'faculty-in-charge',
    title: 'Faculty In-Charge',
    id: 'faculty-in-charge',
  },
  {
    key: 'faculty-in-charge-student-club',
    title: 'Faculty In-Charge (Student Clubs)',
    id: 'faculty-in-charge-student-club',
  },
  {
    key: 'members-library-committee',
    title: 'Library Committee Members',
    id: 'members-library-committee',
  },
  {
    key: 'members-institute-handbook',
    title: 'Institute Handbook Committee Members',
    id: 'members-institute-handbook',
  },
  {
    key: 'members-sports-committee',
    title: 'Sports Committee Members',
    id: 'members-sports-committee',
  },
  {
    key: 'members-admission-committee',
    title: 'Admission Committee Members',
    id: 'members-admission-committee',
  },
  {
    key: 'members-grievance-cell',
    title: 'Grievance Cell Members',
    id: 'members-grievance-cell',
  },
  {
    key: 'members-canteen-committee',
    title: 'Canteen Committee Members',
    id: 'members-canteen-committee',
  },
  {
    key: 'members-clubs-committee',
    title: 'Clubs Committee Members',
    id: 'members-clubs-committee',
  },
  {
    key: 'members-proctorial-board',
    title: 'Proctorial Board Members',
    id: 'members-proctorial-board',
  },
  {
    key: 'members-examination-committee',
    title: 'Examination Committee Members',
    id: 'members-examination-committee',
  },
  {
    key: 'members-disciplinary-committee',
    title: 'Disciplinary Committee Members',
    id: 'members-disciplinary-committee',
  },
  {
    key: 'members-anti-ragging-committee',
    title: 'Anti-Ragging Committee Members',
    id: 'members-anti-ragging-committee',
  },
  {
    key: 'members-nirf-nba-naac',
    title: 'NIRF/NBA/NAAC Members',
    id: 'members-nirf-nba-naac',
  },
  {
    key: 'coordinator',
    title: 'Coordinators',
    id: 'coordinator',
  },
  {
    key: 'co-coordinator',
    title: 'Co-Coordinators',
    id: 'co-coordinator',
  },
  {
    key: 'nodal-officer',
    title: 'Nodal Officers',
    id: 'nodal-officer',
  },
] as const;

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

export default async function OfficersPage() {
  const officersData = await fetchOfficersByCategory();

  return (
    <>
      <ImageHeader title="other officers" src="student-activities/header.jpg" />
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
                    { key: 'name', label: 'Faculty Name' },
                    { key: 'designation', label: 'Designation' },
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
