import WorkInProgress from '@/components/work-in-progress';

export default function Contact({ params }: { params: { lang: string } }) {
  return <WorkInProgress lang={params.lang} />;
}
