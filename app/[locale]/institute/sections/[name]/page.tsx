import WorkInProgress from '@/components/work-in-progress';

export default function Section({
  params: { locale },
}: {
  params: { locale: string; name: string };
}) {
  return <WorkInProgress locale={locale} />;
}
