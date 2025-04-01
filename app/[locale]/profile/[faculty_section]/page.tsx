import FacultySection from '~/app/faculty-and-staff/[employee_id]/[faculty_section]/page';
import { Translations } from '~/i18n/translations';
import { getServerAuthSession } from '~/server/auth';

export default async function FacultyProfileSection({
  params: { locale, faculty_section },
}: {
  params: {
    locale: string;
    faculty_section: keyof Translations['FacultyAndStaff']['tabs'];
  };
}) {
  const session = (await getServerAuthSession())!;

  return (
    <FacultySection
      asProfile={{ locale, faculty_section, id: session.person.id }}
    />
  );
}
