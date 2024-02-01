import WorkInProgress from '@/components/work-in-progress';

export default async function Page({ params }: { params: { lang: string } }) {
  return <WorkInProgress lang={params.lang} />;
}
