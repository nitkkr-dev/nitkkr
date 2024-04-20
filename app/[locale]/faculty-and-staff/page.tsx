import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import { Button } from '~/components/buttons';
import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs';
import Loading from '~/components/loading';
import {
  DepartmentCardSkeleton,
  DepartmentNameSkeleton,
} from '~/components/skeletons';
import { NoResultStatus } from '~/components/status';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { db } from '~/server/db';

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
        <Suspense fallback={<DepartmentNameSkeleton />}>
          <Departments department={departmentName} />
        </Suspense>
      </search>

      <section className="grow space-y-6">
        <search className="flex gap-4 max-sm:flex-col">
          <Input
            className="sm:grow"
            debounceTo="query"
            debounceEvery={100}
            defaultValue={query}
            id="faculty-or-staff"
            placeholder={text.placeholder}
          />

          <Suspense fallback={<Loading className="xl:hidden" />}>
            <Departments department={departmentName} select />
          </Suspense>
        </search>

        <ol className="space-y-4">
          <Suspense
            fallback={Array.from({ length: 10 }).map((_, index) => (
              <DepartmentCardSkeleton key={index} />
            ))}
            key={`${query}-${departmentName}`}
          >
            <FacultyList
              department={departmentName}
              deptartmentHeadText={text.departmentHead}
              locale={locale}
              query={query}
            />
          </Suspense>
        </ol>
      </section>
    </section>
  );
}

const Departments = async ({
  department,
  select = false,
}: {
  department?: string;
  select?: boolean;
}) => {
  const departments = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });
  const currentDepartment = departments.find(
    ({ urlName }) => urlName === department
  );

  return select ? (
    <Select
      defaultValue={currentDepartment && `?department=${department}`}
      navigate
    >
      <SelectTrigger className="px-4 py-5 sm:w-1/2 lg:w-1/3 xl:hidden">
        <SelectValue placeholder="Choose a department" />
      </SelectTrigger>
      <SelectContent>
        {departments.map(({ name, urlName }, index) => (
          <SelectItem key={index} value={`?department=${urlName}`}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ) : (
    <ol className="w-full space-y-4">
      {departments.map(({ name, urlName }, index) => (
        <li key={index}>
          <Button
            active={urlName === currentDepartment?.urlName}
            asChild
            className="font-semibold text-shade-dark"
            variant="link"
          >
            <Link href={{ query: { department: urlName } }}>{name}</Link>
          </Button>
        </li>
      ))}
    </ol>
  );
};

const FacultyList = async ({
  department,
  deptartmentHeadText,
  locale,
  query,
}: {
  department?: string;
  deptartmentHeadText: string;
  locale: string;
  query?: string;
}) => {
  const departments = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });
  const departmentHeads = await db.query.departmentHeads.findMany({
    where: (departmentHead, { eq }) => eq(departmentHead.isActive, true),
  });
  const currentDepartment = departments.find(
    ({ urlName }) => urlName === department
  );

  const faculty = await db.query.faculty.findMany({
    columns: {
      designation: true,
      employeeId: true,
      id: true,
    },
    where: currentDepartment
      ? (faculty, { eq }) => eq(faculty.departmentId, currentDepartment.id)
      : undefined,
    with: { person: { columns: { email: true, name: true, telephone: true } } },
  });

  const filteredFaculty = faculty.filter(({ person }) =>
    person.name.toLowerCase().includes((query ?? '').toLowerCase())
  );

  return filteredFaculty.length === 0 ? (
    <NoResultStatus locale={locale} />
  ) : (
    filteredFaculty.map((faculty, index) => {
      const isDepartmentHead = departmentHeads.find(
        ({ facultyId }) => facultyId === faculty.id
      );

      return (
        <li
          className="rounded border border-primary-700 bg-neutral-50 hover:drop-shadow-md"
          key={index}
        >
          <Link
            className="flex gap-4 p-2 sm:p-3 md:p-4"
            href={`/${locale}/faculty-and-staff/${faculty.employeeId}`}
          >
            <Image
              alt={faculty.person.name}
              className="size-32 rounded lg:size-36 xl:size-40 2xl:size-44"
              height={0}
              src={`persons/${faculty.id}/image.png`}
              width={0}
            />
            <main>
              <header className="mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                <h4 className="mb-0">{faculty.person.name}</h4>
                <p>
                  {faculty.designation}
                  {isDepartmentHead && ` (${deptartmentHeadText})`}
                </p>
              </header>

              <ul>
                <li className="flex items-center gap-2">
                  <MdEmail className="fill-primary-700" />
                  {faculty.person.email}
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone className="fill-primary-700" />
                  {faculty.person.telephone}
                </li>
              </ul>
            </main>
          </Link>
        </li>
      );
    })
  );
};
