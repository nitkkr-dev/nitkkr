import { WorkInProgressStatus } from '~/components/status';

export default function Sections({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
