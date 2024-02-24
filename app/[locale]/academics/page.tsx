import WorkInProgress from '~/components/work-in-progress';

export default function Academics({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgress locale={locale} />;
}
