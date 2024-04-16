import Committee from '../committee';

export default function FinancialCommittee({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <Committee locale={locale} type="financial" />;
}
