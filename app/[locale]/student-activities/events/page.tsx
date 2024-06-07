import { WorkInProgressStatus } from '~/components/status';

export default function Events({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
