import Personal from './personal/page';

export default async function Profile({
  params,
}: {
  params: { locale: string };
}) {
  return <Personal params={params} />;
}
