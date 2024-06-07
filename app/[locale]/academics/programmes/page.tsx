import { WorkInProgressStatus } from '~/components/status';

export default function Programmes({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
