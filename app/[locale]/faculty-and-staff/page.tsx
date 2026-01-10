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
import { NoResultStatus } from '~/components/status';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { db } from '~/server/db';
import { ScrollArea } from '~/components/ui/scroll-area';

import {
  ClearFiltersButton,
  DepartmentsClient,
  MobileFilters,
  PreserveParamsLink,
} from './client-components';

export default async function FacultyAndStaff({
  params: { locale },
  searchParams: { department: departmentName, query, designation },
}: {
  params: { locale: string };
  searchParams: {
    department?: string | string[];
    query?: string;
    designation?: string | string[];
  };
}) {
  const text = (await getTranslations(locale)).FacultyAndStaff;

  const mobileDepartments = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });

  return (
    <section className="container my-6 flex gap-8">
      <search
        className={cn(
          'hidden h-fit w-[30%] rounded p-4 pt-0 xl:inline',
          'sticky top-[88px]' // DEPENDS-ON: header.tsx
          // 'border border-primary-700 bg-neutral-50'
        )}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary-700">Filter By</h2>
          <ClearFiltersButton />
        </div>
        <ScrollArea className="h-[calc(100vh-200px)]">
          {/* Designation Filter Box */}
          <div className="mb-6 rounded border border-primary-100 bg-neutral-50 p-4">
            <h3 className="mb-2 text-lg font-bold text-primary-700">
              Designation
            </h3>
            <Suspense fallback={<Loading className="max-xl:hidden" />}>
              <Designations designation={designation} />
            </Suspense>
          </div>

          {/* Department Filter Box */}
          <div className="mb-6 rounded border border-primary-100 bg-neutral-50 p-4">
            <h3 className="mb-2 text-lg font-bold text-primary-700">
              Department
            </h3>

            <Suspense fallback={<Loading className="max-xl:hidden" />}>
              <Departments department={departmentName} />
            </Suspense>
          </div>
        </ScrollArea>
      </search>

      <section className="grow space-y-6">
        <search className="flex w-full items-center gap-4">
          <Input
            className="min-w-0 flex-1"
            debounceTo="query"
            debounceEvery={100}
            defaultValue={query}
            id="faculty-or-staff"
            placeholder={text.placeholder}
          />

          <div className="flex-shrink-0">
            <MobileFilters
              departments={mobileDepartments}
              department={departmentName}
            />
          </div>
        </search>

        <ol className="space-y-4">
          <Suspense
            fallback={<Loading />}
            key={`${query ?? ''}-${Array.isArray(departmentName) ? departmentName.join(',') : departmentName ?? ''}-${Array.isArray(designation) ? designation.join(',') : designation ?? ''}`}
          >
            {(!designation || designation?.includes('staff')) && (
              <StaffList
                department={departmentName}
                locale={locale}
                query={query}
              />
            )}
            {(!designation || designation?.includes('faculty')) && (
              <FacultyList
                department={departmentName}
                deptartmentHeadText={text.departmentHead}
                locale={locale}
                query={query}
              />
            )}
          </Suspense>
        </ol>
      </section>
    </section>
  );
}

const Designations = ({
  designation,
  select = false,
}: {
  designation?: string | string[];
  select?: boolean;
}) => {
  const options = ['faculty', 'staff'];
  // Multi-select array
  const selectedDesignations = Array.isArray(designation)
    ? designation
    : designation
      ? [designation]
      : [];

  // Define the updated designation value based on selection
  const getUpdatedDesignations = (option: string) => {
    return selectedDesignations.includes(option)
      ? selectedDesignations.filter((d) => d !== option)
      : [...selectedDesignations, option];
  };

  return select ? (
    <Select navigate>
      <SelectTrigger className="px-4 py-5 sm:w-1/2 lg:w-1/3 xl:hidden">
        <SelectValue
          placeholder={
            selectedDesignations.length
              ? `${selectedDesignations.length} selected`
              : 'Choose a designation'
          }
        />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <div key={index} className="flex items-center px-2 py-1">
            <input
              type="checkbox"
              id={`mobile-designation-${option}`}
              className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
              checked={selectedDesignations.includes(option)}
              readOnly
            />
            <PreserveParamsLink
              paramToUpdate="designation"
              value={getUpdatedDesignations(option)}
              className="ml-2 w-full py-1"
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </PreserveParamsLink>
          </div>
        ))}
      </SelectContent>
    </Select>
  ) : (
    <ol className="w-full space-y-4">
      {options.map((option, index) => (
        <li key={index}>
          <PreserveParamsLink
            paramToUpdate="designation"
            value={getUpdatedDesignations(option)}
            className={cn(
              'flex w-full items-center rounded border p-3',
              selectedDesignations.includes(option)
                ? 'bg-primary-50 border-primary-700'
                : 'border-neutral-300'
            )}
          >
            <div className="flex w-full items-center">
              <div className="mr-2">
                <input
                  type="checkbox"
                  id={`designation-${option}`}
                  className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
                  checked={selectedDesignations.includes(option)}
                  readOnly
                />
              </div>
              <span className="font-semibold text-shade-dark">
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </span>
            </div>
          </PreserveParamsLink>
        </li>
      ))}
    </ol>
  );
};

const Departments = async ({
  department,
  select = false,
}: {
  department?: string | string[];
  select?: boolean;
}) => {
  const departments = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });

  // const selectedDepartments = Array.isArray(department)
  //   ? department
  //   : department
  //     ? [department]
  //     : [];

  // // Define the updated department value based on selection
  // const getUpdatedDepartments = (urlName: string) => {
  //   return selectedDepartments.includes(urlName)
  //     ? selectedDepartments.filter((d) => d !== urlName)
  //     : [...selectedDepartments, urlName];
  // };

  // return select ? (
  //   <Select navigate>
  //     <SelectTrigger className="px-4 py-5 sm:w-1/2 lg:w-1/3 xl:hidden">
  //       <SelectValue
  //         placeholder={
  //           selectedDepartments.length
  //             ? `${selectedDepartments.length} selected`
  //             : 'Choose a department'
  //         }
  //       />
  //     </SelectTrigger>
  //     <SelectContent>
  //       {departments.map(({ name, urlName }, index) => (
  //         <div key={index} className="flex items-center px-2 py-1">
  //           <input
  //             type="checkbox"
  //             id={`mobile-department-${urlName}`}
  //             className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
  //             checked={selectedDepartments.includes(urlName)}
  //             readOnly
  //           />
  //           <PreserveParamsLink
  //             paramToUpdate="department"
  //             value={getUpdatedDepartments(urlName)}
  //             className="ml-2 w-full py-1"
  //           >
  //             {name}
  //           </PreserveParamsLink>
  //         </div>
  //       ))}
  //     </SelectContent>
  //   </Select>
  // ) : (
  //   <ol className="w-full space-y-4">
  //     {departments.map(({ name, urlName }, index) => (
  //       <li key={index}>
  //         <PreserveParamsLink
  //           paramToUpdate="department"
  //           value={getUpdatedDepartments(urlName)}
  //           className={cn(
  //             'flex w-full items-center rounded border p-3',
  //             selectedDepartments.includes(urlName)
  //               ? 'bg-primary-50 border-primary-700'
  //               : 'border-neutral-300'
  //           )}
  //         >
  //           <div className="flex w-full items-center">
  //             <div className="mr-2">
  //               <input
  //                 type="checkbox"
  //                 id={`department-${urlName}`}
  //                 className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
  //                 checked={selectedDepartments.includes(urlName)}
  //                 readOnly
  //               />
  //             </div>
  //             <span className="font-semibold text-shade-dark">{name}</span>
  //           </div>
  //         </PreserveParamsLink>
  //       </li>
  //     ))}
  //   </ol>
  // );
  return (
    <DepartmentsClient
      departments={departments}
      department={department}
      select={select}
    />
  );
};

const FacultyList = async ({
  department,
  deptartmentHeadText,
  locale,
  query,
}: {
  department?: string | string[];
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

  const text = (await getTranslations(locale)).FacultyAndStaff;
  // Convert department parameter to array
  const departmentList = Array.isArray(department)
    ? department
    : department
      ? [department]
      : [];

  // Get department IDs for selected departments
  const selectedDepartmentIds = departmentList.length
    ? departments
        .filter((dept) => departmentList.includes(dept.urlName))
        .map((dept) => dept.id)
    : [];

  const faculty = await db.query.faculty.findMany({
    columns: {
      designation: true,
      employeeId: true,
      areasOfInterest: true,
      googleScholarId: true,
      linkedInId: true,
      researchGateId: true,
      scopusId: true,
      id: true,
    },
    where: selectedDepartmentIds.length
      ? (faculty, { inArray }) =>
          inArray(faculty.departmentId, selectedDepartmentIds)
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

      const profileExternalLinks = {
        googleScholarId: faculty.googleScholarId,
        linkedInId: faculty.linkedInId,
        researchGateId: faculty.researchGateId,
        scopusId: faculty.scopusId,
      };

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
              className="my-auto size-32 rounded lg:size-36 xl:size-40 2xl:size-44"
              height={0}
              src={`fallback/user-image.jpg`}
              width={0}
            />
            <main>
              <header className="mb-1 sm:mb-1 md:mb-2 lg:mb-3">
                <h4 className="mb-0">{faculty.person.name}</h4>
                <p>
                  {faculty.designation}
                  {isDepartmentHead && ` (${deptartmentHeadText})`}
                </p>
              </header>
              {/* Contact Information */}
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
              {/* Areas of Interest */}
              {faculty.areasOfInterest &&
                faculty.areasOfInterest.length > 0 && (
                  <div className="mt-2">
                    <ul className="list-none pl-5">
                      {faculty.areasOfInterest
                        .slice(0, 1)
                        .map((area, index) => (
                          <li key={index}>{area}</li>
                        ))}
                      {faculty.areasOfInterest.length > 1 && (
                        <li>
                          {faculty.areasOfInterest[1]}{' '}
                          {faculty.areasOfInterest.length > 2 && (
                            <span className="text-primary-700">
                              + {faculty.areasOfInterest.length - 2} more
                            </span>
                          )}
                        </li>
                      )}
                    </ul>
                  </div>
                )}
            </main>
            {/* Links */}
            {/* On large screen */}
            <div className="my-auto ml-auto flex hidden w-fit min-w-[168px] flex-col gap-2 border-l-[1px] border-primary-700 pl-4 md:flex">
              {(
                Object.entries(profileExternalLinks) as [
                  keyof typeof profileExternalLinks,
                  string,
                ][]
              ).map(([key, value]) => {
                if (key in profileExternalLinks) {
                  return (
                    <Link
                      key={key}
                      className="flex w-fit items-center justify-evenly gap-2 rounded-2xl"
                      href={profileExternalLinks[key] ?? ''}
                    >
                      <Image
                        alt={key}
                        src={`faculty-and-staff/${key}.svg`}
                        height={0}
                        width={0}
                        className="mx-auto h-8 w-8"
                      />
                      <span>{text.externalLinks[key]}</span>
                    </Link>
                  );
                }
              })}
            </div>
            {/* On small and medium screens */}
          </Link>
          <div className="mx-2 mt-2 flex flex-wrap justify-evenly gap-2 border-t-[1px] border-primary-700 pb-2 pt-3 sm:mx-3 sm:pb-3 sm:pt-4 md:hidden">
            {(
              Object.entries(profileExternalLinks) as [
                keyof typeof profileExternalLinks,
                string,
              ][]
            ).map(([key, value]) => {
              if (key in profileExternalLinks) {
                return (
                  <Link
                    key={key}
                    className="flex w-fit flex-col items-center gap-2 rounded-2xl"
                    href={profileExternalLinks[key] ?? ''}
                  >
                    <Image
                      alt={key}
                      src={`faculty-and-staff/${key}.svg`}
                      height={0}
                      width={0}
                      className="mx-auto h-12 w-12"
                    />
                    <span>{text.externalLinks[key]}</span>
                  </Link>
                );
              }
            })}
          </div>
        </li>
      );
    })
  );
};

const StaffList = async ({
  department,
  locale,
  query,
}: {
  department?: string | string[];
  locale: string;
  query?: string;
}) => {
  // Fetch departments
  const departments = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });
  // Convert parameters to arrays
  const departmentList = Array.isArray(department)
    ? department
    : department
      ? [department]
      : [];

  // Get department IDs for selected departments
  const selectedDepartmentIds = departmentList.length
    ? departments
        .filter((dept) => departmentList.includes(dept.urlName))
        .map((dept) => dept.id)
    : [];

  // Fetch staff with department and designation filters
  const staff = await db.query.staff.findMany({
    columns: {
      designation: true,
      employeeId: true,
      id: true,
    },
    where: selectedDepartmentIds.length
      ? (staff, { inArray }) =>
          inArray(staff.workingDepartmentId, selectedDepartmentIds)
      : undefined,
    with: { person: { columns: { email: true, name: true, telephone: true } } },
  });

  // Filter staff by name (and email) query
  const filteredStaff = staff.filter(
    ({ person }) =>
      person.name.toLowerCase().includes((query ?? '').toLowerCase()) ||
      person.email.toLowerCase().includes((query ?? '').toLowerCase())
  );

  return filteredStaff.length === 0 ? (
    <></>
  ) : (
    filteredStaff.map((staff, index) => (
      <li
        className="rounded border border-primary-700 bg-neutral-50 hover:drop-shadow-md"
        key={index}
      >
        <Link
          className="flex gap-4 p-2 sm:p-3 md:p-4"
          href={`/${locale}/faculty-and-staff/${staff.employeeId}`}
        >
          <Image
            alt={staff.person.name}
            className="size-32 rounded lg:size-36 xl:size-40 2xl:size-44"
            height={0}
            src={`fallback/user-image.jpg`}
            width={0}
          />
          <main>
            <header className="mb-1 sm:mb-2 md:mb-3 lg:mb-4">
              <h4 className="mb-0">{staff.person.name}</h4>
              <p>
                {staff.designation}
                <span className="ml-2 text-xs text-primary-700">(Staff)</span>
              </p>
            </header>
            <ul>
              <li className="flex items-center gap-2">
                <MdEmail className="fill-primary-700" />
                {staff.person.email}
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="fill-primary-700" />
                {staff.person.telephone}
              </li>
            </ul>
          </main>
        </Link>
      </li>
    ))
  );
};
