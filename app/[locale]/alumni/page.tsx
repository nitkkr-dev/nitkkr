import { WorkInProgressStatus } from '~/components/status';

// Alumni page - static content, rarely changes
export const revalidate = 3600;

export default function Alumni({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
