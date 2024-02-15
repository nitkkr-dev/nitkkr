import WorkInProgress from '@/components/work-in-progress';

export default function Clubs({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgress locale={locale} />;
}
