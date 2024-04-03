import { eq } from 'drizzle-orm';

import WorkInProgress from '~/components/work-in-progress';
import { db, deans, faculty } from '~/server/db';

export async function generateStaticParams() {
  return await db
    .select({ employee_id: faculty.employee_id })
    .from(faculty)
    .innerJoin(deans, eq(faculty.id, deans.facultyId));
}

export default function Dean({
  params: { locale },
}: {
  params: { locale: string; employee_id: string };
}) {
  return <WorkInProgress locale={locale} />;
}
