import { WorkInProgressStatus } from '~/components/status';

export default function TrainingAndPlacement({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
