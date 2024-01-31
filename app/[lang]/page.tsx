import WorkInProgress from '@/components/work-in-progress';

interface PageProps {
  params: {
    lang: string;
  };
}

export default async function Page({ params: { lang } }: PageProps) {
  return <WorkInProgress lang={lang} />;
}
