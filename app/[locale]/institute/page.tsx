import WorkInProgress from '@/components/work-in-progress';

export default function Institute({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgress locale={locale} />;
}
