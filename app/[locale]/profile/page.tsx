import { getTranslations } from '~/i18n/translations';
import { getServerAuthSession } from '~/server/auth';

import { FacultySectionComponent } from '../faculty-and-staff/utils';
import { Personal } from './personal/utils';
import { SectionProfile } from './SectionProfile';

export default async function Profile({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const session = (await getServerAuthSession())!;

  // Faculty profile
  if (session.person.type === 'faculty') {
    return (
      <FacultySectionComponent
        facultySection="qualifications"
        id={session.person.id}
        locale={locale}
      />
    );
  }

  // Section profile (e.g., CCN office)
  if (session.person.type === 'section' && session.section) {
    const text = (await getTranslations(locale)).Profile;
    return (
      <SectionProfile
        section={session.section}
        locale={locale}
        text={{
          logout: text.logout,
          sectionProfile: text.sectionProfile,
          email: text.email,
        }}
      />
    );
  }

  // Student profile
  return <Personal locale={locale} id={session.person.id} />;
}
