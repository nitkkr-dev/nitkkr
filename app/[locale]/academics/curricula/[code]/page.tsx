import WorkInProgress from '~/components/work-in-progress';
import { courses, db } from '~/server/db';

export async function generateStaticParams() {
  return await db.select({ code: courses.code }).from(courses);
}

export default function Curriculum({
  params: { locale },
}: {
  params: { locale: string; code: string };
}) {
  return <WorkInProgress locale={locale} />;
}
