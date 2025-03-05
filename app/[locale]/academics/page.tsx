import { WorkInProgressStatus } from '~/components/status';

export default async function Academics({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
