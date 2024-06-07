import { WorkInProgressStatus } from '~/components/status';

export default function NoticeBoard({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
