import WorkInProgress from '~/components/work-in-progress';
import { clubs, db } from '~/server/db';

export async function generateStaticParams() {
  const clubNames = await db
    .select({ alias: clubs.alias, name: clubs.name })
    .from(clubs);
  return clubNames.map(({ alias, name }) => ({
    display_name: (alias ?? name).toLowerCase().replace(' ', '-'),
  }));
}

export default function Club({
  params: { locale },
}: {
  params: { locale: string; display_name: string };
}) {
  return <WorkInProgress locale={locale} />;
}
