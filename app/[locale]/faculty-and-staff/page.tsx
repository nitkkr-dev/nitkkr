'use client';

import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import FacultyCard from './faculty-card';

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
    <div className="container my-16 flex gap-10">
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
          <AiOutlineSearch className="text-3xl text-neutral-400" />
          <input
            type="search"
            placeholder="Search by Name / Email"
            className="ml-2 basis-[100%] bg-transparent font-sans text-2xl font-normal text-neutral-700 placeholder-neutral-400 focus:outline-none"
          />
        </div>
        {/* Faculty Cards */}
        <div className="mt-6 flex flex-col gap-3 self-stretch">
          {facultyList.map((faculty) => (
            <FacultyCard key={faculty.id} {...faculty} />
          ))}
        </div>
      </div>
    </div>
  );
}
