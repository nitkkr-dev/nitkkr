import WorkInProgress from '@/components/work-in-progress';

export default function Department({
  params: { locale },
}: {
  params: { locale: string; name: string };
}) {
  return <WorkInProgress locale={locale} />;
}
