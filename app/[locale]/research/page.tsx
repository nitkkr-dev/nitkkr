import { WorkInProgressStatus } from '~/components/status';

export default function Research({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
