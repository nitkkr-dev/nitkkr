import WorkInProgress from '@/components/work-in-progress';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Department({
  params,
}: {
  params: { lang: string; name: string };
}) {
  return <WorkInProgress lang={params.lang} />;
}
