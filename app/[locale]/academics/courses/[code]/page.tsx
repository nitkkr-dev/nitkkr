import WorkInProgress from '~/components/work-in-progress';

export default function Course({
  params: { locale },
}: {
  params: { locale: string; code: string };
}) {
  return <WorkInProgress locale={locale} />;
}
