import { inArray } from 'drizzle-orm';

import StudentCard from '~/components/student-card';
import { db } from '~/server/db';
import { students } from '~/server/db/schema';

interface StudentGroupProps {
  studentData: {
    rollNumber: string;
    designation?: string;
  }[];
}

export default async function StudentGroup({ studentData }: StudentGroupProps) {
  // Extract roll numbers from the input
  const rollNumbers = studentData.map((s) => s.rollNumber);

  // Fetch students from database
  const studentMembers = await db.query.students.findMany({
    where: inArray(students.rollNumber, rollNumbers),
    columns: {
      rollNumber: true,
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
    studentData.map((s) => [s.rollNumber, s.designation])
  );

  // Combine student data with designations, maintaining input order
  const enrichedStudents = rollNumbers
    .map((rollNumber) => {
      const member = studentMembers.find((m) => m.rollNumber === rollNumber);
      if (!member) return null;
      return {
        ...member,
        displayDesignation: designationMap.get(rollNumber),
      };
    })
    .filter(Boolean);

  return (
    <ul className="grid w-full grid-cols-2 justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-4">
      {enrichedStudents.map((member) =>
        member ? (
          <li key={member.rollNumber} className="flex w-full justify-center">
            <StudentCard
              name={member.person.name}
              email={member.person.email}
              phone={
                member.person.telephone
                  ? member.person.countryCode
                    ? `${member.person.countryCode} ${member.person.telephone}`
                    : member.person.telephone
                  : null
              }
              image={member.person.img}
              designation={member.displayDesignation}
            />
          </li>
        ) : null
      )}
    </ul>
  );
}
