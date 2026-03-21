import { WorkInProgressStatus } from '~/components/status';

export default async function GeneralSection({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
