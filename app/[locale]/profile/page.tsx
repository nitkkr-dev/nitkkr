import { auth } from '@/auth';
import Unauthorized from '@/components/unauthorized';
import WorkInProgress from '@/components/work-in-progress';

export default async function Profile({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const session = await auth();

  return session ? (
    <WorkInProgress locale={locale} />
  ) : (
    <Unauthorized locale={locale} />
  );
}
