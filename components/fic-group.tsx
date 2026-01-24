import Image from 'next/image';
import Link from 'next/link';
import { inArray } from 'drizzle-orm';
import { MdEmail, MdOutlineLocalPhone } from 'react-icons/md';

import { db } from '~/server/db';
import { faculty } from '~/server/db/schema';

interface FICGroupProps {
  facultyData: {
    employeeId: string;
    designation: string;
  }[];
}

export default async function FICGroup({ facultyData }: FICGroupProps) {
  // Extract employee IDs from the input
  const employeeIds = facultyData.map((f) => f.employeeId);

  // Fetch faculty members from database
  const facultyMembers = await db.query.faculty.findMany({
    where: inArray(faculty.employeeId, employeeIds),
    columns: {
      employeeId: true,
    },
    with: {
      person: {
        columns: {
          name: true,
          email: true,
          telephone: true,
          countryCode: true,
          img: true,
        },
      },
    },
  });

  // Create a map for quick lookup of designations
  const designationMap = new Map(
    facultyData.map((f) => [f.employeeId, f.designation])
  );

  // Combine faculty data with designations
  const enrichedFaculty = facultyMembers.map((member) => ({
    ...member,
    displayDesignation: designationMap.get(member.employeeId) ?? '',
  }));

  return (
    <ul
      className={`flex w-full flex-col flex-wrap items-center gap-4 sm:gap-5 md:flex-row md:gap-6 ${
        enrichedFaculty.length === 1
          ? 'md:justify-center'
          : 'md:justify-between'
      }`}
    >
      {enrichedFaculty.map((member) => (
        <li
          key={member.employeeId}
          className="flex w-[95%] flex-row items-center gap-2 rounded-lg border border-primary-500 bg-neutral-50 p-2 transition-shadow duration-300 hover:shadow-lg sm:w-[90%] sm:gap-3 sm:p-3 md:w-[48%] md:gap-4 md:p-4"
        >
          <Image
            src={member.person.img ?? `fallback/user-image.jpg`} // # TODO: Change to member.person.imageUrl when available
            alt={member.person.name}
            width={200}
            height={200}
            className="h-24 w-24 flex-shrink-0 rounded-lg object-cover sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44"
          />
          <section className="min-w-0 flex-1 space-y-1 break-words text-left sm:space-y-2 md:space-y-3 lg:space-y-4">
            <div>
              <h3 className="m-0 text-sm font-semibold text-primary-700 sm:text-base md:text-lg lg:text-xl">
                {member.person.name}
              </h3>
              <span className="block text-xs text-neutral-700 sm:text-sm md:text-base lg:text-lg">
                {member.displayDesignation}
              </span>
            </div>
            <section className="space-y-0.5 sm:space-y-1">
              <span className="flex items-center gap-1 text-xs sm:gap-1.5 sm:text-xs md:text-sm lg:gap-2 lg:text-base">
                <MdEmail className="flex-shrink-0 text-primary-700" />
                <Link
                  href={`mailto:${member.person.email}`}
                  className="break-all text-neutral-700 hover:text-primary-700 hover:underline"
                >
                  {member.person.email}
                </Link>
              </span>
              <span className="flex items-center gap-1 text-[10px] sm:gap-1.5 sm:text-xs md:text-sm lg:gap-2 lg:text-base">
                <MdOutlineLocalPhone className="flex-shrink-0 text-primary-700" />
                <span className="break-all text-neutral-700">
                  {member.person.countryCode
                    ? `${member.person.countryCode} ${member.person.telephone}`
                    : member.person.telephone}
                </span>
              </span>
            </section>
          </section>
        </li>
      ))}
    </ul>
  );
}
