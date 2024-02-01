import WorkInProgress from '@/components/work-in-progress';

export default function Department({
  params,
}: {
  params: { lang: string; name: string };
}) {
  return <WorkInProgress lang={params.lang} />;
}
