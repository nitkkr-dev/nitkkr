// Revalidate every 5 minutes (has DB calls)
export const revalidate = 300;

import { union } from 'drizzle-orm/pg-core';
import { type ReactNode } from 'react';

import { db, faculty, staff } from '~/server/db';

import { FacultyOrStaffComponent } from '../utils';

export async function generateStaticParams() {
  const facultyIds = db
    .select({ employee_id: faculty.employeeId })
    .from(faculty);
  const staffIds = db.select({ employee_id: staff.employeeId }).from(staff);
  return await union(facultyIds, staffIds);
}

export default async function FacultyOrStaffLayout({
  children,
  params: { locale, employee_id },
}: {
  children?: ReactNode;
  params: { locale: string; employee_id: string };
}) {
  return (
    <FacultyOrStaffComponent locale={locale} employeeId={employee_id}>
      {children}
    </FacultyOrStaffComponent>
  );
}
