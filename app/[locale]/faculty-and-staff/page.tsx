'use client';
// import WorkInProgress from '~/components/work-in-progress';
// import Breadcrumbs from '~/components/breadcrumb';
import { useState } from 'react';

import FacultyCard from '~/components/faculty-card';

interface FacultyProps {
  profileImage: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  id: number;
}

export default function FacultyAndStaff({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const [facultyList, setFacultyList] = useState<FacultyProps[]>([
    {
      profileImage:
        'https://s3-alpha-sig.figma.com/img/6698/6d20/c7aa47a52ea27a318d8cb53424a5e808?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNeY~2a8t85zJ-C5kvhI5xs6pVrmFYQg~9z367Cqzlpy9cn6fLBEp9IoEpsvC4wclpaWw9BZ0azdAa~t2HE0-B9gkfqGS4ABg69JE9whHNqFslgrk6yCDMG21zt9YcQShVd7OwYDLYBDAy7ChO2MWyhBfowI93P4sLxKhN~B~m44wrmCdxPbgnM60qHx8O02tfWa6L79w~FRc4FF-AzoypfBMaVveEPLFEhqfKrOjF~K3G8By3yx0-0WP1VNoHgTX06Jqw1Uf7LdB76OzGblx~2Dyn4UB9zW1bQxpBiKb8Fefk5fSStS3p2wZuKpk4dfUKkP0locrEfrt7rTEKhFFg__',
      name: 'Arun Goel',
      designation: 'Professor (Head of the Department)',
      email: 'drarun_goel@yahoo.co.in',
      phone: '01744-233349, 01744-233300',
      id: 1,
    },
    {
      profileImage:
        'https://s3-alpha-sig.figma.com/img/6698/6d20/c7aa47a52ea27a318d8cb53424a5e808?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNeY~2a8t85zJ-C5kvhI5xs6pVrmFYQg~9z367Cqzlpy9cn6fLBEp9IoEpsvC4wclpaWw9BZ0azdAa~t2HE0-B9gkfqGS4ABg69JE9whHNqFslgrk6yCDMG21zt9YcQShVd7OwYDLYBDAy7ChO2MWyhBfowI93P4sLxKhN~B~m44wrmCdxPbgnM60qHx8O02tfWa6L79w~FRc4FF-AzoypfBMaVveEPLFEhqfKrOjF~K3G8By3yx0-0WP1VNoHgTX06Jqw1Uf7LdB76OzGblx~2Dyn4UB9zW1bQxpBiKb8Fefk5fSStS3p2wZuKpk4dfUKkP0locrEfrt7rTEKhFFg__',
      name: 'Arun Goel',
      designation: 'Professor (Head of the Department)',
      email: 'drarun_goel@yahoo.co.in',
      phone: '01744-233349, 01744-233300',
      id: 2,
    },
    {
      profileImage:
        'https://s3-alpha-sig.figma.com/img/6698/6d20/c7aa47a52ea27a318d8cb53424a5e808?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNeY~2a8t85zJ-C5kvhI5xs6pVrmFYQg~9z367Cqzlpy9cn6fLBEp9IoEpsvC4wclpaWw9BZ0azdAa~t2HE0-B9gkfqGS4ABg69JE9whHNqFslgrk6yCDMG21zt9YcQShVd7OwYDLYBDAy7ChO2MWyhBfowI93P4sLxKhN~B~m44wrmCdxPbgnM60qHx8O02tfWa6L79w~FRc4FF-AzoypfBMaVveEPLFEhqfKrOjF~K3G8By3yx0-0WP1VNoHgTX06Jqw1Uf7LdB76OzGblx~2Dyn4UB9zW1bQxpBiKb8Fefk5fSStS3p2wZuKpk4dfUKkP0locrEfrt7rTEKhFFg__',
      name: 'Arun Goel',
      designation: 'Professor (Head of the Department)',
      email: 'drarun_goel@yahoo.co.in',
      phone: '01744-233349, 01744-233300',
      id: 3,
    },
    {
      profileImage:
        'https://s3-alpha-sig.figma.com/img/6698/6d20/c7aa47a52ea27a318d8cb53424a5e808?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNeY~2a8t85zJ-C5kvhI5xs6pVrmFYQg~9z367Cqzlpy9cn6fLBEp9IoEpsvC4wclpaWw9BZ0azdAa~t2HE0-B9gkfqGS4ABg69JE9whHNqFslgrk6yCDMG21zt9YcQShVd7OwYDLYBDAy7ChO2MWyhBfowI93P4sLxKhN~B~m44wrmCdxPbgnM60qHx8O02tfWa6L79w~FRc4FF-AzoypfBMaVveEPLFEhqfKrOjF~K3G8By3yx0-0WP1VNoHgTX06Jqw1Uf7LdB76OzGblx~2Dyn4UB9zW1bQxpBiKb8Fefk5fSStS3p2wZuKpk4dfUKkP0locrEfrt7rTEKhFFg__',
      name: 'Arun Goel',
      designation: 'Professor (Head of the Department)',
      email: 'drarun_goel@yahoo.co.in',
      phone: '01744-233349, 01744-233300',
      id: 4,
    },
    {
      profileImage:
        'https://s3-alpha-sig.figma.com/img/6698/6d20/c7aa47a52ea27a318d8cb53424a5e808?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNeY~2a8t85zJ-C5kvhI5xs6pVrmFYQg~9z367Cqzlpy9cn6fLBEp9IoEpsvC4wclpaWw9BZ0azdAa~t2HE0-B9gkfqGS4ABg69JE9whHNqFslgrk6yCDMG21zt9YcQShVd7OwYDLYBDAy7ChO2MWyhBfowI93P4sLxKhN~B~m44wrmCdxPbgnM60qHx8O02tfWa6L79w~FRc4FF-AzoypfBMaVveEPLFEhqfKrOjF~K3G8By3yx0-0WP1VNoHgTX06Jqw1Uf7LdB76OzGblx~2Dyn4UB9zW1bQxpBiKb8Fefk5fSStS3p2wZuKpk4dfUKkP0locrEfrt7rTEKhFFg__',
      name: 'Arun Goel',
      designation: 'Professor (Head of the Department)',
      email: 'drarun_goel@yahoo.co.in',
      phone: '01744-233349, 01744-233300',
      id: 5,
    },
    {
      profileImage:
        'https://s3-alpha-sig.figma.com/img/6698/6d20/c7aa47a52ea27a318d8cb53424a5e808?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNeY~2a8t85zJ-C5kvhI5xs6pVrmFYQg~9z367Cqzlpy9cn6fLBEp9IoEpsvC4wclpaWw9BZ0azdAa~t2HE0-B9gkfqGS4ABg69JE9whHNqFslgrk6yCDMG21zt9YcQShVd7OwYDLYBDAy7ChO2MWyhBfowI93P4sLxKhN~B~m44wrmCdxPbgnM60qHx8O02tfWa6L79w~FRc4FF-AzoypfBMaVveEPLFEhqfKrOjF~K3G8By3yx0-0WP1VNoHgTX06Jqw1Uf7LdB76OzGblx~2Dyn4UB9zW1bQxpBiKb8Fefk5fSStS3p2wZuKpk4dfUKkP0locrEfrt7rTEKhFFg__',
      name: 'Arun Goel',
      designation: 'Professor (Head of the Department)',
      email: 'drarun_goel@yahoo.co.in',
      phone: '01744-233349, 01744-233300',
      id: 6,
    },
    {
      profileImage:
        'https://s3-alpha-sig.figma.com/img/6698/6d20/c7aa47a52ea27a318d8cb53424a5e808?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNeY~2a8t85zJ-C5kvhI5xs6pVrmFYQg~9z367Cqzlpy9cn6fLBEp9IoEpsvC4wclpaWw9BZ0azdAa~t2HE0-B9gkfqGS4ABg69JE9whHNqFslgrk6yCDMG21zt9YcQShVd7OwYDLYBDAy7ChO2MWyhBfowI93P4sLxKhN~B~m44wrmCdxPbgnM60qHx8O02tfWa6L79w~FRc4FF-AzoypfBMaVveEPLFEhqfKrOjF~K3G8By3yx0-0WP1VNoHgTX06Jqw1Uf7LdB76OzGblx~2Dyn4UB9zW1bQxpBiKb8Fefk5fSStS3p2wZuKpk4dfUKkP0locrEfrt7rTEKhFFg__',
      name: 'Arun Goel',
      designation: 'Professor (Head of the Department)',
      email: 'drarun_goel@yahoo.co.in',
      phone: '01744-233349, 01744-233300',
      id: 7,
    },
    {
      profileImage:
        'https://s3-alpha-sig.figma.com/img/6698/6d20/c7aa47a52ea27a318d8cb53424a5e808?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNeY~2a8t85zJ-C5kvhI5xs6pVrmFYQg~9z367Cqzlpy9cn6fLBEp9IoEpsvC4wclpaWw9BZ0azdAa~t2HE0-B9gkfqGS4ABg69JE9whHNqFslgrk6yCDMG21zt9YcQShVd7OwYDLYBDAy7ChO2MWyhBfowI93P4sLxKhN~B~m44wrmCdxPbgnM60qHx8O02tfWa6L79w~FRc4FF-AzoypfBMaVveEPLFEhqfKrOjF~K3G8By3yx0-0WP1VNoHgTX06Jqw1Uf7LdB76OzGblx~2Dyn4UB9zW1bQxpBiKb8Fefk5fSStS3p2wZuKpk4dfUKkP0locrEfrt7rTEKhFFg__',
      name: 'Arun Goel',
      designation: 'Professor (Head of the Department)',
      email: 'drarun_goel@yahoo.co.in',
      phone: '01744-233349, 01744-233300',
      id: 8,
    },
    {
      profileImage:
        'https://s3-alpha-sig.figma.com/img/6698/6d20/c7aa47a52ea27a318d8cb53424a5e808?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNeY~2a8t85zJ-C5kvhI5xs6pVrmFYQg~9z367Cqzlpy9cn6fLBEp9IoEpsvC4wclpaWw9BZ0azdAa~t2HE0-B9gkfqGS4ABg69JE9whHNqFslgrk6yCDMG21zt9YcQShVd7OwYDLYBDAy7ChO2MWyhBfowI93P4sLxKhN~B~m44wrmCdxPbgnM60qHx8O02tfWa6L79w~FRc4FF-AzoypfBMaVveEPLFEhqfKrOjF~K3G8By3yx0-0WP1VNoHgTX06Jqw1Uf7LdB76OzGblx~2Dyn4UB9zW1bQxpBiKb8Fefk5fSStS3p2wZuKpk4dfUKkP0locrEfrt7rTEKhFFg__',
      name: 'Arun Goel',
      designation: 'Professor (Head of the Department)',
      email: 'drarun_goel@yahoo.co.in',
      phone: '01744-233349, 01744-233300',
      id: 9,
    },
  ]);
  const allDepartments = [
    'Computer Engineering',
    'Computer Application',
    'Chemistry',
    'Civil Engineering',
    'Electrical Engineering',
    'Electronical and Communication Engineering',
    'School of Renewable Energy and Efficiency',
    'Mathematics',
    'Mechanical Engineering',
    'Physics',
    'School of VLSI Design and Embedded System',
  ];
  return (
    <div className="mx-auto mb-16 mt-[110px] flex w-max flex-wrap gap-10">
      {/* BREADCRUMB + ALL DEPARTMENTS LIST */}
      <div className="flex flex-col items-start pt-16">
        {/* All Departments */}
        <div className="sticky top-[110px] flex w-[350px] flex-col items-start justify-center gap-9 rounded-xl border border-neutral-400 bg-shade-light p-5 2xl:w-[480px]">
          <p className="font-sans text-xl font-bold text-primary-700">
            All Departments
          </p>
          {allDepartments.map((department) => (
            <p
              className="font-sans text-lg font-bold text-shade-dark"
              key={department}
            >
              {department}
            </p>
          ))}
        </div>
      </div>
      {/* SEARCH BAR + FACULTY CARDS */}
      <div className="flex w-[835px] flex-col items-start pt-16 2xl:w-[1148px]">
        {/* Search bar */}
        <div className="flex h-16 items-center gap-[10px] self-stretch rounded-xl border border-neutral-400 bg-neutral-50 p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <mask
              id="mask0_1345_2845"
              // style="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="28"
              height="28"
            >
              <rect width="28" height="28" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1345_2845)">
              <path
                d="M11.0833 18.6667C8.96389 18.6667 7.17014 17.9326 5.70208 16.4646C4.23403 14.9965 3.5 13.2028 3.5 11.0833C3.5 8.96389 4.23403 7.17014 5.70208 5.70208C7.17014 4.23403 8.96389 3.5 11.0833 3.5C13.2028 3.5 14.9965 4.23403 16.4646 5.70208C17.9326 7.17014 18.6667 8.96389 18.6667 11.0833C18.6667 11.9389 18.5306 12.7458 18.2583 13.5042C17.9861 14.2625 17.6167 14.9333 17.15 15.5167L23.6833 22.05C23.8972 22.2639 24.0042 22.5361 24.0042 22.8667C24.0042 23.1972 23.8972 23.4694 23.6833 23.6833C23.4694 23.8972 23.1972 24.0042 22.8667 24.0042C22.5361 24.0042 22.2639 23.8972 22.05 23.6833L15.5167 17.15C14.9333 17.6167 14.2625 17.9861 13.5042 18.2583C12.7458 18.5306 11.9389 18.6667 11.0833 18.6667ZM11.0833 16.3333C12.5417 16.3333 13.7812 15.8229 14.8021 14.8021C15.8229 13.7812 16.3333 12.5417 16.3333 11.0833C16.3333 9.625 15.8229 8.38542 14.8021 7.36458C13.7812 6.34375 12.5417 5.83333 11.0833 5.83333C9.625 5.83333 8.38542 6.34375 7.36458 7.36458C6.34375 8.38542 5.83333 9.625 5.83333 11.0833C5.83333 12.5417 6.34375 13.7812 7.36458 14.8021C8.38542 15.8229 9.625 16.3333 11.0833 16.3333Z"
                fill="#A8A8A8"
              />
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search by Name / Email"
            className="ml-2 basis-[100%] bg-transparent font-sans text-2xl font-normal text-neutral-700 placeholder-neutral-400 focus:outline-none"
          />
        </div>
        {/* Faculty Cards */}
        <div className="mt-6 flex flex-col gap-3 self-stretch">
          {facultyList.map((faculty) => (
            <FacultyCard
              key={faculty.id}
              profileImage={faculty.profileImage}
              name={faculty.name}
              designation={faculty.designation}
              email={faculty.email}
              phone={faculty.phone}
              id={faculty.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
