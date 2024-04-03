import WorkInProgress from '~/components/work-in-progress';

export default function ElectricalMaintenance({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgress locale={locale} />;
}
