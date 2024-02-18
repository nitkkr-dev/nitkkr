import WorkInProgress from '@/components/work-in-progress';

export default function Director({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgress locale={locale} />;
}
