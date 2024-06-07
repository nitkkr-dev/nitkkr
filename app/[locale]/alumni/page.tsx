import { WorkInProgressStatus } from '~/components/status';

export default function Alumni({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
