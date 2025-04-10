import { getServerAuthSession } from '~/server/auth';

import { Personal } from './utils';

export default async function PersonalPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const personId = (await getServerAuthSession())!.person.id;
  return <Personal locale={locale} id={personId} />;
}
