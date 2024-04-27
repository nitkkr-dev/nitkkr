import Committee from '../committee';

export default function FinancialCommittee({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { meetingPage?: string };
}) {
  return (
    <Committee locale={locale} searchParams={searchParams} type="financial" />
  );
}
