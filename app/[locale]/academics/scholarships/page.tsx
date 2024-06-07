import { WorkInProgressStatus } from '~/components/status';

export default function Scholarships({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
