import WorkInProgress from '~/components/work-in-progress';

export default function Curriculum({
  params: { locale },
}: {
  params: { locale: string; code: string };
}) {
  return <WorkInProgress locale={locale} />;
}
