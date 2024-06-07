import { WorkInProgressStatus } from '~/components/status';

export default function Careers({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
