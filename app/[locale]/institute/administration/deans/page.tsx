import { WorkInProgressStatus } from '~/components/status';

export default function Deans({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
