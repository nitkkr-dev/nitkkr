import { WorkInProgressStatus } from '~/components/status';

export default function Academics({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
