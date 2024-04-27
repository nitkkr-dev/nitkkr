'use client';

import { type InferSelectModel } from 'drizzle-orm';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { useDebounceCallback } from 'usehooks-ts';

import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs';
import { Button } from '~/components/ui';
import { type departments as departmentsTable } from '~/server/db';

export const Tabs = ({
  departments,
}: {
  departments: Pick<
    InferSelectModel<typeof departmentsTable>,
    'id' | 'name' | 'urlName'
  >[];
}) => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const currentDepartmentUrl = searchParams.get('department') ?? undefined;

  return (
    <>
      <Select
        defaultValue={
          currentDepartmentUrl && `department=${currentDepartmentUrl}`
        }
        onValueChange={(value) =>
          window.history.replaceState(null, '', `?query=${query}&${value}`)
        }
      >
        <SelectTrigger className="px-4 py-5 xl:hidden">
          <SelectValue placeholder="Choose a department" />
        </SelectTrigger>
        <SelectContent>
          {departments.map(({ name, urlName }, index) => (
            <SelectItem key={index} value={`department=${urlName}`}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <ol className="hidden w-full space-y-4 xl:inline">
        {departments.map(({ name, urlName }, index) => (
          <li key={index}>
            <Button
              active={urlName === currentDepartmentUrl}
              className="font-semibold text-shade-dark"
              variant={'link'}
              onClick={() =>
                window.history.replaceState(null, '', `?department=${urlName}`)
              }
            >
              {name}
            </Button>
          </li>
        ))}
      </ol>
    </>
  );
};

export const FilteredFacultyList = ({
  departments,
  departmentHeads,
  deptartmentHeadText,
  faculty,
  locale,
}: {
  departments: Map<string, number>;
  departmentHeads: Set<number>;
  deptartmentHeadText: string;
  faculty: {
    employeeId: string;
    id: number;
    person: {
      email: string;
      name: string;
      telephone: string;
    };
    departmentId: number;
    designation:
      | 'Assistant Professor Grade-I'
      | 'Assistant Professor Grade-II'
      | 'Associate Professor'
      | 'Professor';
  }[];
  locale: string;
}) => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const currentDepartmentId = departments.get(
    searchParams.get('department') ?? ''
  );
  return faculty
    .filter(
      ({ person, departmentId }) =>
        person.name.toLowerCase().includes(query.toLowerCase()) &&
        (!currentDepartmentId || departmentId === currentDepartmentId)
    )
    .map((faculty, index) => (
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
                {departmentHeads.has(faculty.id) && ` (${deptartmentHeadText})`}
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
    ));
};

export const SearchInput = ({
  defaultValue,
  placeholder,
}: {
  defaultValue?: string;
  placeholder: string;
}) => {
  const debounceCallback = useDebounceCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      window.history.replaceState(null, '', `?query=${event.target.value}`);
    },
    100
  );
  return (
    <Input
      className="!my-0 max-xl:order-first max-sm:!mb-4"
      defaultValue={defaultValue}
      id="faculty-or-staff"
      onChange={debounceCallback}
      placeholder={placeholder}
    />
  );
};
