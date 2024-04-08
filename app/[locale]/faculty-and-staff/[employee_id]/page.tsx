import { union } from 'drizzle-orm/pg-core';

import WorkInProgress from '~/components/work-in-progress';
import { db, faculty, staff } from '~/server/db';

export async function generateStaticParams() {
  const facultyIds = db
    .select({ employee_id: faculty.employeeId })
    .from(faculty);
  const staffIds = db.select({ employee_id: staff.employeeId }).from(staff);
  return await union(facultyIds, staffIds);
}

export default function FacultyOrStaff({
  params: { locale, employee_id: employeeId },
}: {
  params: { locale: string; employee_id: string };
}) {
  return <WorkInProgress locale={locale} />;
}
