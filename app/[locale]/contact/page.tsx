import { WorkInProgressStatus } from '~/components/status';

// Static content - revalidate every hour
export const revalidate = 3600;

export default function Contact({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
