import { Suspense } from 'react';

import Loading from '~/components/loading';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { db } from '~/server/db';

import { FilteredFacultyList, SearchInput, Tabs } from './client-utils';

export default async function FacultyAndStaff({
  params: { locale },
  searchParams: { department: departmentName, query },
}: {
  params: { locale: string };
  searchParams: { department?: string; query?: string };
}) {
  const text = (await getTranslations(locale)).FacultyAndStaff;

  return (
    <section className="container my-6 flex gap-8">
      <search
        className={cn(
          'hidden h-fit w-[30%] rounded p-4 xl:inline',
          'sticky top-[88px]', // DEPENDS-ON: header.tsx
          'border border-primary-700 bg-neutral-50'
        )}
      >
        <Suspense fallback={<Loading className="max-xl:hidden" />}>
          <Departments />
        </Suspense>
      </search>

      <section className="grow space-y-6">
        <search className="flex gap-4 max-sm:flex-col">
          <SearchInput defaultValue={query} placeholder={text.placeholder} />

          <Suspense fallback={<Loading className="xl:hidden" />}>
            <Departments select />
          </Suspense>
        </search>

        <ol className="space-y-4">
          <Suspense fallback={<Loading />} key={`${query}-${departmentName}`}>
            <FacultyList
              deptartmentHeadText={text.departmentHead}
              locale={locale}
            />
          </Suspense>
        </ol>
      </section>
    </section>
  );
}

const Departments = async ({ select = false }: { select?: boolean }) => {
  const departments = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });

  return <Tabs select={select} departments={departments} />;
};

const FacultyList = async ({
  deptartmentHeadText,
  locale,
}: {
  deptartmentHeadText: string;
  locale: string;
}) => {
  const departments = new Map<string, number>();
  const departmentHeads = new Set<number>();
  await db.query.departments
    .findMany({
      columns: { id: true, urlName: true },
    })
    .then(
      async (departmentsArray) =>
        await Promise.all(
          departmentsArray.map(async (department) => {
            departments.set(department.urlName, department.id);
          })
        )
    );

  await db.query.departmentHeads
    .findMany({
      where: (departmentHead, { eq }) => eq(departmentHead.isActive, true),
      columns: { facultyId: true },
    })
    .then(
      async (departmentHeadsArray) =>
        await Promise.all(
          departmentHeadsArray.map(async (departmentHead) => {
            departmentHeads.add(departmentHead.facultyId);
          })
        )
    );

  //const currentDepartmentId = departments.get(department ?? '');

  const faculty = await db.query.faculty.findMany({
    columns: {
      designation: true,
      employeeId: true,
      id: true,
      departmentId: true,
    },
    // where: currentDepartment
    //   ? (faculty, { eq }) => eq(faculty.departmentId, currentDepartment.id)
    //   : undefined,
    with: { person: { columns: { email: true, name: true, telephone: true } } },
  });
  return (
    <FilteredFacultyList
      departments={departments}
      departmentHeads={departmentHeads}
      deptartmentHeadText={deptartmentHeadText}
      faculty={faculty}
      locale={locale}
    />
  );
};
