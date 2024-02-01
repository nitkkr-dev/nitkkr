import { getServerSession } from 'next-auth';

import { authOptions } from '@/api/auth/auth';
import Unauthorized from '@/components/unauthorized';
import WorkInProgress from '@/components/work-in-progress';

export default async function Profile({
  params,
}: {
  params: { lang: string };
}) {
  const session = await getServerSession(authOptions);

  return session ? (
    <WorkInProgress lang={params.lang} />
  ) : (
    <Unauthorized lang={params.lang} />
  );
}
