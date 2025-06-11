import FacultySection from './[faculty_section]/page';

export default function FacultyAndStaff({
  params: { locale, employee_id },
}: {
  params: { locale: string; employee_id: string };
}) {
  return (
    <FacultySection
      params={{
        locale: locale,
        faculty_section: 'qualifications',
        employee_id: employee_id,
      }}
    />
  );
}
