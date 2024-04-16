import Committee from '../committee';

export default function BuildingAndWorkCommittee({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <Committee locale={locale} type="building" />;
}
