import Committee from '../committee';

export default async function BoardOfGovernors({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <Committee locale={locale} type="governor" />;
}
