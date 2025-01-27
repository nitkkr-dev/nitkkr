'use server';

import Image from 'next/image';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

import { LocalStorageLink } from '~/components/link';
import { cn } from '~/lib/utils';
import type {
  ClubsDocumentSchema,
  CommitteesDocumentSchema,
  CoursesDocumentSchema,
  DepartmentsDocumentSchema,
  FacultyDocumentSchema,
  SectionsDocumentSchema,
  StaffDocumentSchema,
} from '~/server/typesense';
import {
  isClubDocument,
  isCommitteeDocument,
  isCourseDocument,
  isDepartmentDocument,
  isFacultyDocument,
  isSectionDocument,
  isStaffDocument,
} from '~/server/typesense';

const SearchCard = ({
  document,
  locale,
}: {
  document:
    | ClubsDocumentSchema
    | CommitteesDocumentSchema
    | CoursesDocumentSchema
    | DepartmentsDocumentSchema
    | FacultyDocumentSchema
    | SectionsDocumentSchema
    | StaffDocumentSchema;
  locale: string;
}) => {
  if (isClubDocument(document))
    return <ClubCard document={document} locale={locale} />;
  else if (isCommitteeDocument(document))
    return <CommitteeCard document={document} locale={locale} />;
  else if (isCourseDocument(document))
    return <CourseCard document={document} locale={locale} />;
  else if (isDepartmentDocument(document))
    return <DepartmentCard document={document} locale={locale} />;
  else if (isFacultyDocument(document))
    return <FacultyCard document={document} locale={locale} />;
  else if (isSectionDocument(document))
    return <SectionCard document={document} locale={locale} />;
  else if (isStaffDocument(document))
    return <StaffCard document={document} locale={locale} />;
  else return <></>;
};

const ClubCard = ({
  document,
  locale,
}: {
  document: ClubsDocumentSchema;
  locale: string;
}) => (
  <LocalStorageLink
    href={`/${locale}/student-activities/clubs/${document.urlName}`}
    newItem={{
      title: document.name,
      href: `/${locale}/student-activities/clubs/${document.urlName}`,
      category: 'club',
    }}
    options={{ filter: true, unshift: true }}
    replace
    storageKey="recentSearches"
  >
    <article
      className={cn(
        'flex w-full flex-wrap gap-2 rounded-lg bg-shade-light p-3',
        'gap-4'
      )}
    >
      <header className="flex gap-2">
        <Image
          src={`clubs/${document.urlName}/nitlogo.png`}
          alt={document.alias ?? document.name}
          width={60}
          height={60}
          className="aspect-square min-h-full w-14 rounded object-cover py-2"
        />
        <div>
          <h5 className="text-primary-300">{document.alias}</h5>
          <p className="font-semibold">{document.name}</p>
        </div>
      </header>
      <p className="my-auto w-full text-neutral-600">{document.tagline}</p>
    </article>
  </LocalStorageLink>
);

const CommitteeCard = ({
  document,
  locale,
}: {
  document: CommitteesDocumentSchema;
  locale: string;
}) => (
  <LocalStorageLink
    href={`/${locale}/institute/administration/${document.committeeType}`}
    newItem={{
      title: document.name,
      href: `/${locale}/institute/administration/${document.committeeType}`,
      category: 'committee',
    }}
    options={{ filter: true, unshift: true }}
    replace
    storageKey="recentSearches"
  >
    <article className="w-full grid-cols-2 gap-x-5 rounded-lg bg-shade-light p-3 max-sm:flex-col sm:grid sm:items-center md:px-4">
      <header>
        <h5 className="text-primary-300">
          {document.servingAs}
          <strong className="block text-shade-dark">
            {document.committeeType}
          </strong>
        </h5>
      </header>
      <aside className="sm:my-auto">
        <p className="font-semibold">{document.name}</p>
        {document.nomination && (
          <p className="text-neutral-600">Nomination: {document.nomination}</p>
        )}
      </aside>
    </article>
  </LocalStorageLink>
);

const CourseCard = ({
  document,
  locale,
}: {
  document: CoursesDocumentSchema;
  locale: string;
}) => (
  <LocalStorageLink
    href={`/${locale}/academics/curricula/${document.code}`}
    newItem={{
      title: document.title,
      href: `/${locale}/academics/curricula/${document.code}`,
      category: 'course',
    }}
    options={{ filter: true, unshift: true }}
    replace
    storageKey="recentSearches"
  >
    <article className="grid w-full flex-wrap items-center gap-2 rounded-lg bg-shade-light p-3 sm:grid-cols-2 md:px-4">
      <header>
        <h5>{document.code}</h5>
        <p className="font-semibold text-primary-300">{document.title}</p>
      </header>
      <div>
        <p className="text-sm md:text-base">{"Bachelor's of Technology"}</p>
        <p className="text-sm text-primary-300 md:text-base">
          (B. Tech. - 4 years)
        </p>
      </div>
    </article>
  </LocalStorageLink>
);

const DepartmentCard = ({
  document,
  locale,
}: {
  document: DepartmentsDocumentSchema;
  locale: string;
}) => (
  <LocalStorageLink
    href={`/${locale}/academics/departments/${document.urlName}`}
    newItem={{
      title: document.name,
      href: `/${locale}/academics/departments/${document.urlName}`,
      category: 'department',
    }}
    options={{ filter: true, unshift: true }}
    replace
    storageKey="recentSearches"
  >
    <article className="w-full rounded-lg bg-shade-light p-3 md:px-4">
      <h5 className="text-primary-300">{document.name}</h5>
      {document.majors && (
        <p className="text-neutral-600">{document.majors.join(', ')}</p>
      )}
    </article>
  </LocalStorageLink>
);

const FacultyCard = ({
  document,
  locale,
}: {
  document: FacultyDocumentSchema;
  locale: string;
}) => (
  <LocalStorageLink
    href={`/${locale}/faculty-and-staff/${document.employeeId}`}
    newItem={{
      title: document.name,
      href: `/${locale}/faculty-and-staff/${document.employeeId}`,
      category: 'faculty',
    }}
    options={{ filter: true, unshift: true }}
    replace
    storageKey="recentSearches"
  >
    <article className="rounded-lg bg-shade-light p-3 sm:grid-cols-8 md:grid md:px-4">
      <header className="col-span-3 flex items-center gap-2">
        <Image
          src={`persons/${document.employeeId}/image.png`}
          alt={document.name}
          width={60}
          height={60}
          className="aspect-square h-14 min-w-14 rounded-lg border border-primary-700 object-cover"
        />
        <div className="ml-2">
          <h5 className="text-primary-300">{document.name}</h5>
          <p className="text-neutral-600">{document.designation}</p>
        </div>
      </header>

      <div className="sm:justify-x-evenly col-span-5 my-auto flex h-max flex-wrap items-center gap-x-10 gap-y-2 pt-2">
        <p className="text-neutral-600">
          <MdEmail className="mr-2 inline-block" />
          {document.email}
        </p>
        <p className="text-neutral-600">
          <MdPhone className="mr-2 inline-block" />
          {document.telephone}
        </p>
        {document.officeAddress && (
          <p className="text-neutral-600">
            <MdLocationOn className="mr-2 inline-block" />
            {document.officeAddress}
          </p>
        )}
      </div>
    </article>
  </LocalStorageLink>
);

const SectionCard = ({
  document,
  locale,
}: {
  document: SectionsDocumentSchema;
  locale: string;
}) => (
  <LocalStorageLink
    href={`/${locale}/institute/sections/${document.urlName}`}
    newItem={{
      title: document.name,
      href: `/${locale}/institute/sections/${document.urlName}`,
      category: 'section',
    }}
    options={{ filter: true, unshift: true }}
    replace
    storageKey="recentSearches"
  >
    <article className="w-full rounded-lg bg-shade-light p-3 md:px-4">
      <h5 className="text-primary-300">{document.name}</h5>
      <p className="text-neutral-600">{document.email}</p>
    </article>
  </LocalStorageLink>
);

const StaffCard = ({
  document,
  locale,
}: {
  document: StaffDocumentSchema;
  locale: string;
}) => (
  <LocalStorageLink
    href={`/${locale}/faculty-and-staff/${document.employeeId}`}
    newItem={{
      title: document.name,
      href: `/${locale}/faculty-and-staff/${document.employeeId}`,
      category: 'staff',
    }}
    options={{ filter: true, unshift: true }}
    replace
    storageKey="recentSearches"
  >
    <article className="rounded-lg bg-shade-light p-3 sm:grid-cols-8 md:grid md:px-4">
      <header className="col-span-3 flex items-center gap-2">
        <Image
          src={`persons/${document.employeeId}/image.png`}
          alt={document.name}
          width={60}
          height={60}
          className="aspect-square h-14 min-w-14 rounded-lg border border-primary-700 object-cover"
        />
        <div className="ml-2">
          <h5 className="text-primary-300">{document.name}</h5>
          <p className="text-neutral-600">{document.designation}</p>
        </div>
      </header>

      <div className="sm:justify-x-evenly col-span-5 my-auto flex h-max flex-wrap items-center gap-x-10 gap-y-2 pt-2">
        <p className="text-neutral-600">
          <MdEmail className="mr-2 inline-block" />
          {document.email}
        </p>
        <p className="text-neutral-600">
          <MdPhone className="mr-2 inline-block" />
          {document.telephone}
        </p>
      </div>
    </article>
  </LocalStorageLink>
);

export default SearchCard;
