import FacultySection from './[faculty_section]/page';

export default function FacultyAndStaff({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <FacultySection
      params={{ locale: locale, faculty_section: 'qualifications' }}
    />
  );
}
