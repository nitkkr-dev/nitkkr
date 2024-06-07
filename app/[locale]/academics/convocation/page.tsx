import { WorkInProgressStatus } from '~/components/status';

export default function Convocation({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
