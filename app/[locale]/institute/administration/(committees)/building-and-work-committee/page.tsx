import Committee from '../committee';

export default function BuildingAndWorkCommittee({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { page?: string };
}) {
  return (
    <Committee locale={locale} searchParams={searchParams} type="building" />
  );
}
