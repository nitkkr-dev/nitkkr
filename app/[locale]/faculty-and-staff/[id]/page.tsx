import WorkInProgress from '@/components/work-in-progress';

export default function FacultyOrStaff({
  params: { locale },
}: {
  params: { locale: string; id: string };
}) {
  return <WorkInProgress locale={locale} />;
}
