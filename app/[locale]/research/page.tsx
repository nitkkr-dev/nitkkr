import WorkInProgress from '~/components/work-in-progress';

export default function Research({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgress locale={locale} />;
}
