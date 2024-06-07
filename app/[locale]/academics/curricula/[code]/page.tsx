import { WorkInProgressStatus } from '~/components/status';
import { courses, db } from '~/server/db';

export async function generateStaticParams() {
  return await db.select({ code: courses.code }).from(courses);
}

export default function Curriculum({
  params: { locale },
}: {
  params: { locale: string; code: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
