import WorkInProgress from '~/components/work-in-progress';
import { db, departments } from '~/server/db';

export async function generateStaticParams() {
  const departmentNames = await db
    .select({ name: departments.name })
    .from(departments);
  return departmentNames.map(({ name }) => ({
    name: name.toLowerCase().replace(' ', '-'),
  }));
}

export default function Department({
  params: { locale },
}: {
  params: { locale: string; name: string };
}) {
  return <WorkInProgress locale={locale} />;
}
