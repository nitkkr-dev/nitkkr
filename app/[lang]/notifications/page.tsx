import WorkInProgress from '@/components/work-in-progress';

export default function Notifications({
  params,
}: {
  params: { lang: string };
}) {
  return <WorkInProgress lang={params.lang} />;
}
