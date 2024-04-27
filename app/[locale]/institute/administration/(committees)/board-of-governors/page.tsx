import Committee from '../committee';

export default async function BoardOfGovernors({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { meetingPage?: string };
}) {
  return (
    <Committee locale={locale} searchParams={searchParams} type="governor" />
  );
}
