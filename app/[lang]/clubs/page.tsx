import WorkInProgress from '@/components/work-in-progress';

export default function Clubs({ params }: { params: { lang: string } }) {
  return <WorkInProgress lang={params.lang} />;
}
