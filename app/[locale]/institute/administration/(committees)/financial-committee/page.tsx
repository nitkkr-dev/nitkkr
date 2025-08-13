import Committee from '../committee';

export default function FinancialCommittee({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { page?: string };
}) {
  return (
    <Committee locale={locale} searchParams={searchParams} type="financial" />
  );
}
