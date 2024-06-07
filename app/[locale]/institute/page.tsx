import { WorkInProgressStatus } from '~/components/status';

export default function Institute({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
