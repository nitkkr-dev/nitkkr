import WorkInProgress from '~/components/work-in-progress';

export default function TrainingAndPlacement({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgress locale={locale} />;
}
