import { WorkInProgressStatus } from '~/components/status';

export default function Campus({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
