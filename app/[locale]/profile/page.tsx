import { getServerAuthSession } from '~/server/auth';

import { FacultySectionComponent } from '../faculty-and-staff/utils';
import { Personal } from './personal/utils';

export default async function Profile({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const session = (await getServerAuthSession())!;
  if (session.person.type == 'faculty')
    return (
      <FacultySectionComponent
        facultySection="qualifications"
        id={session.person.id}
        locale={locale}
      />
    );

  return <Personal locale={locale} id={session.person.id} />;
}
