import { getServerSession } from 'next-auth';

import { authOptions } from '@/api/auth/auth';
import Unauthorized from '@/components/unauthorized';
import WorkInProgress from '@/components/work-in-progress';

export default async function Profile() {
  const session = await getServerSession(authOptions);
  return session ? <WorkInProgress /> : <Unauthorized />;
}
