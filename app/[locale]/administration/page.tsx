import WorkInProgress from '@/components/work-in-progress';

export default function Administration({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgress locale={locale} />;
}
