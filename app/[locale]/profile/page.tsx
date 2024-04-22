import Unauthorized from '~/components/unauthorized';
import WorkInProgress from '~/components/work-in-progress';
import { checkPermissions } from '~/lib/roles';
import { getServerAuthSession } from '~/server/auth';

export default async function Profile({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const session = await getServerAuthSession();
  if (session) {
    const isUserAuthorized = await checkPermissions(['ADMIN'], session);
    console.log(isUserAuthorized);
  }

  return session ? (
    <WorkInProgress locale={locale} />
  ) : (
    <Unauthorized locale={locale} />
  );
}
