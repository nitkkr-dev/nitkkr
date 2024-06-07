import { WorkInProgressStatus } from '~/components/status';

export default function Administration({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
