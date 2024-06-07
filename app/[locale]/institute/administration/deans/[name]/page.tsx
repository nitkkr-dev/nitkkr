import { WorkInProgressStatus } from '~/components/status';
import { db, deans } from '~/server/db';

export async function generateStaticParams() {
  return await db.select({ name: deans.domain }).from(deans);
}

export default function Dean({
  params: { locale },
}: {
  params: { locale: string; name: (typeof deans.domain.enumValues)[number] };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
