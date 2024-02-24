import WorkInProgress from '~/components/work-in-progress';

export default function NoticeBoard({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgress locale={locale} />;
}
