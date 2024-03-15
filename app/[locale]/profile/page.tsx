import Unauthorized from '~/components/unauthorized';
import WorkInProgress from '~/components/work-in-progress';
import { getServerAuthSession } from '~/server/auth';

export default async function Profile({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const session = await getServerAuthSession();

  return session ? (
    <WorkInProgress locale={locale} />
  ) : (
    <Unauthorized locale={locale} />
  );
}

export const runtime = 'nodejs';
