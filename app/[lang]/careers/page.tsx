import WorkInProgress from '@/components/work-in-progress';

export default function Careers({ params }: { params: { lang: string } }) {
  return <WorkInProgress lang={params.lang} />;
}
