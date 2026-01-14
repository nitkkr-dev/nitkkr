// Revalidate every 5 minutes (has DB calls)
export const revalidate = 300;

import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import { Button } from '~/components/buttons';
import { Input } from '~/components/inputs';
import Loading from '~/components/loading';
import { NoResultStatus } from '~/components/status';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { db } from '~/server/db';
import { ScrollArea } from '~/components/ui/scroll-area';

import { MobileFilters } from './MobileFilters';
import { MultiCheckbox } from './MultiCheckbox';

// Helper to convert to array
function toArray(v: string | string[] | undefined): string[] {
  return Array.isArray(v) ? v : v ? [v] : [];
}

// Build href for clear all
function buildHref(locale: string, updates: Record<string, unknown>): string {
  const params = new URLSearchParams();

  Object.entries(updates).forEach(([k, v]) => {
    if (v === undefined || (Array.isArray(v) && v.length === 0)) {
      return;
    }

    if (Array.isArray(v)) {
      v.forEach((item) => {
        if (item) params.append(k, String(item));
      });
    } else {
      params.set(k, String(v));
    }
  });

  const qs = params.toString();
  return `/${locale}/faculty-and-staff${qs ? `?${qs}` : ''}`;
}

// Designation options
const DESIGNATION_OPTIONS = ['faculty', 'staff'] as const;

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

  // Normalize multi-select params
  const designations = toArray(designation).filter(Boolean);
  const departments = toArray(departmentName).filter(Boolean);

  // Fetch departments for filter list
  const departmentRows = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });

  // Create text map for designations
  const designationTextMap: Record<string, string> = {
    faculty: 'Faculty',
    staff: 'Staff',
  };

  return (
    <section className="container mb-0 mt-8 flex gap-8">
      {/* Desktop Sidebar - hidden on mobile */}
      <aside
        className={cn(
          'hidden w-[290px] shrink-0 flex-col gap-2 xl:flex',
          'sticky top-[88px] self-start'
        )}
      >
        <div className="flex items-baseline justify-between pb-2">
          <h2 className="font-serif text-2xl font-bold leading-none text-primary-700">
            {text.filterBy}
          </h2>
          <Button
            asChild
            variant="outline"
            className="rounded-sm bg-neutral-50 px-4 py-2 text-sm text-primary-700 hover:bg-primary-700 hover:text-neutral-50"
          >
            <Link
              href={buildHref(locale, {
                query: undefined,
                designation: [],
                department: [],
              })}
            >
              {text.clearAllFilters}
            </Link>
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="flex flex-col gap-2 pr-4">
            {/* Designation Filter */}
            <FilterSection label={text.designation}>
              <MultiCheckbox
                param="designation"
                options={DESIGNATION_OPTIONS}
                selected={designations}
                locale={locale}
                textMap={designationTextMap}
              />
            </FilterSection>

            {/* Department Filter */}
            <FilterSection label={text.department}>
              <MultiCheckbox
                param="department"
                options={departmentRows.map((d) => d.urlName)}
                selected={departments}
                locale={locale}
                textMap={Object.fromEntries(
                  departmentRows.map((d) => [d.urlName, d.name])
                )}
              />
            </FilterSection>
          </div>
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <section className="flex grow flex-col space-y-6">
        {/* Search + Mobile Filters */}
        <search className="flex w-full items-center gap-4">
          <Input
            className="min-w-0 flex-1"
            debounceTo="query"
            debounceEvery={100}
            defaultValue={query}
            id="faculty-or-staff"
            placeholder={text.placeholder}
          />

          {/* Mobile Filters Button - shows on < xl */}
          <div className="flex-shrink-0">
            <MobileFilters
              locale={locale}
              designations={designations}
              departments={departments}
              departmentRows={departmentRows}
              designationOptions={DESIGNATION_OPTIONS}
              designationTextMap={designationTextMap}
              text={{
                filters: text.filterBy,
                filterBy: text.filterBy,
                clearAllFilters: text.clearAllFilters,
                designation: text.designation,
                department: text.department,
              }}
            />
          </div>
        </search>

        {/* Faculty and Staff List */}
        <ol className="space-y-4">
          <Suspense
            fallback={<Loading />}
            key={`${query ?? ''}-${departments.join(',')}-${designations.join(',')}`}
          >
            {(designations.length === 0 || designations.includes('staff')) && (
              <StaffList
                department={departmentName}
                locale={locale}
                query={query}
              />
            )}
            {(designations.length === 0 || designations.includes('faculty')) && (
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

/* ---------------------- Filter Section Component ---------------------- */
function FilterSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded border border-primary-100 bg-neutral-50 p-4">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold text-primary-300">{label}</h3>
      </div>
      {children}
    </section>
  );
}

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
