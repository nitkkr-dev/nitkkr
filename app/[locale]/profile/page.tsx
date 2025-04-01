import { getServerAuthSession } from '~/server/auth';

import FacultySection from '../faculty-and-staff/[employee_id]/[faculty_section]/page';
import { Personal } from './personal/utils';

export default async function Profile({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const session = (await getServerAuthSession())!;
  if (session.person.type == 'faculty')
    return (
      <FacultySection
        asProfile={{
          faculty_section: 'qualifications',
          id: session.person.id,
          locale,
        }}
      />
    );

  return <Personal locale={locale} id={session.person.id} />;
}
