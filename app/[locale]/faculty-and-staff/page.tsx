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
    <section
      className={cn(
        'container my-6 grid gap-x-4 space-y-6 xl:gap-x-8',
        'sm:grid-cols-[auto,50%] lg:grid-cols-[2fr,1fr] xl:grid-cols-[30%,auto] xl:grid-rows-[2.5rem,auto]'
      )}
    >
      <search
        className={cn(
          'h-fit xl:row-span-2 xl:inline xl:rounded xl:p-4',
          'xl:sticky xl:top-[88px]', // DEPENDS-ON: header.tsx
          'xl:border xl:border-primary-700 xl:bg-neutral-50'
        )}
      >
        <Suspense fallback={<Loading />}>
          <Departments />
        </Suspense>
      </search>

      <SearchInput defaultValue={query} placeholder={text.placeholder} />

      <ol className="space-y-4 max-xl:sm:col-span-2">
        <Suspense fallback={<Loading />} key={`${query}-${departmentName}`}>
          <FacultyList
            deptartmentHeadText={text.departmentHead}
            locale={locale}
          />
        </Suspense>
      </ol>
    </section>
  );
}

const Departments = async () => {
  const departments = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });

  return <Tabs departments={departments} />;
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
