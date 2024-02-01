import WorkInProgress from '@/components/work-in-progress';

export default function Club({
  params,
}: {
  params: { lang: string; name: string };
}) {
  return <WorkInProgress lang={params.lang} />;
}
