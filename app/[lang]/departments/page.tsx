import WorkInProgress from '@/components/work-in-progress';

export default function Departments({ params }: { params: { lang: string } }) {
  return <WorkInProgress lang={params.lang} />;
}
