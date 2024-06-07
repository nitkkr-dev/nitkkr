import { WorkInProgressStatus } from '~/components/status';
import { clubs, db } from '~/server/db';

export async function generateStaticParams() {
  return await db.select({ display_name: clubs.urlName }).from(clubs);
}

export default function Club({
  params: { locale },
}: {
  params: { locale: string; display_name: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
