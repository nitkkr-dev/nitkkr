import WorkInProgress from '~/components/work-in-progress';

export default function Courses({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgress locale={locale} />;
}
