import Image from 'next/image';
import Link from 'next/link';
import { MdEmail, MdOutlineLocalPhone } from 'react-icons/md';

import { db } from '~/server/db';

interface DirectorCardProps {
  employeeId: string;
}

function formatPhoneNumber(countryCode?: string | null, phone?: string | null) {
  if (!phone) return '';
  if (!countryCode) return phone;

  const normalizedCode = countryCode.startsWith('+')
    ? countryCode
    : `+${countryCode}`;

  return `${normalizedCode} ${phone}`;
}

export default async function DirectorCard({ employeeId }: DirectorCardProps) {
  if (!employeeId) return null;

  // 🔹 Fetch faculty
  const facultyMember = await db.query.faculty.findFirst({
    where: (faculty, { eq }) => eq(faculty.employeeId, employeeId),
    columns: {
      designation: true,
    },
    with: {
      person: {
        columns: {
          name: true,
          email: true,
          telephone: true,
          countryCode: true,
          alternateTelephone: true,
          alternateCountryCode: true,
          img: true,
        },
      },
    },
  });

  // 🔹 Fetch staff if not faculty
  const staffMember = facultyMember
    ? null
    : await db.query.staff.findFirst({
        where: (staff, { eq }) => eq(staff.employeeId, employeeId),
        columns: {
          designation: true,
        },
        with: {
          person: {
            columns: {
              name: true,
              email: true,
              telephone: true,
              countryCode: true,
              alternateTelephone: true,
              alternateCountryCode: true,
              img: true,
            },
          },
        },
      });

  const member = facultyMember ?? staffMember;

  if (!member?.person) return null;

  const phone = formatPhoneNumber(
    member.person.countryCode,
    member.person.telephone
  );

  const mobile = formatPhoneNumber(
    member.person.alternateCountryCode,
    member.person.alternateTelephone
  );

  return (
    <ul className="flex w-full flex-col items-center gap-4 sm:gap-5 md:flex-row md:justify-center md:gap-6">
      <li className="flex w-[95%] flex-row items-center gap-2 rounded-lg border border-primary-500 bg-neutral-50 p-2 transition-shadow duration-300 hover:shadow-lg sm:w-[90%] sm:gap-3 sm:p-3 md:w-[48%] md:gap-4 md:p-4">
        {/* Image */}
        <Image
          src={member.person.img ?? 'fallback/user-image.jpg'}
          alt={member.person.name}
          width={200}
          height={200}
          className="h-24 w-24 flex-shrink-0 rounded-lg object-cover sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44"
        />

        {/* Info */}
        <section className="min-w-0 flex-1 space-y-1 break-words text-left sm:space-y-2 md:space-y-3 lg:space-y-4">
          {/* Name + Designation */}
          <div>
            <h3 className="m-0 text-sm font-semibold text-primary-700 sm:text-base md:text-lg lg:text-xl">
              {member.person.name}
            </h3>
            <span className="block text-xs text-neutral-700 sm:text-sm md:text-base lg:text-lg">
              {member.designation ?? ''}
            </span>
          </div>

          {/* Contact */}
          <section className="space-y-0.5 sm:space-y-1">
            {/* Email */}
            <span className="flex items-center gap-1 text-xs sm:gap-1.5 sm:text-xs md:text-sm lg:gap-2 lg:text-base">
              <MdEmail className="flex-shrink-0 text-primary-700" />
              <Link
                href={`mailto:${member.person.email}`}
                className="break-all text-neutral-700 hover:text-primary-700 hover:underline"
              >
                {member.person.email}
              </Link>
            </span>

            {/* Phone */}
            {phone && (
              <span className="flex items-center gap-1 text-xs sm:gap-1.5 sm:text-xs md:text-sm lg:gap-2 lg:text-base">
                <MdOutlineLocalPhone className="flex-shrink-0 text-primary-700" />
                <span className="break-all text-neutral-700">{phone}</span>
              </span>
            )}

            {/* Mobile */}
            {mobile && (
              <span className="flex items-center gap-1 text-xs sm:gap-1.5 sm:text-xs md:text-sm lg:gap-2 lg:text-base">
                <MdOutlineLocalPhone className="flex-shrink-0 text-primary-700" />
                <span className="break-all text-neutral-700">{mobile}</span>
              </span>
            )}
          </section>
        </section>
      </li>
    </ul>
  );
}
