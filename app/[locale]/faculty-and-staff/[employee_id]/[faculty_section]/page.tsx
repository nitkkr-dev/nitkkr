import { type Translations } from '~/i18n/translations';

import { FacultySectionComponent } from '../../utils';

export default async function FacultySection({
  params: { locale, faculty_section, employee_id: employeeId },
}: {
  params: {
    locale: string;
    faculty_section: keyof Translations['FacultyAndStaff']['tabs'];
    employee_id: string;
  };
}) {
  return (
    <FacultySectionComponent
      locale={locale}
      facultySection={faculty_section}
      employeeId={employeeId}
    />
  );
}
