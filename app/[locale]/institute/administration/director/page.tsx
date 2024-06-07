import { WorkInProgressStatus } from '~/components/status';

export default function Director({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
