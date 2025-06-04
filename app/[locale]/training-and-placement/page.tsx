import { WorkInProgressStatus } from '~/components/status';
import Gallery from '~/components/ui/gallery';
const dummyImages = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
  'https://images.unsplash.com/photo-1465101162946-4377e57745c3',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  'https://images.unsplash.com/photo-1486308510493-aa648336b43b',
  'https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913',

];

export default function TrainingAndPlacement({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
  <>
  <WorkInProgressStatus locale={locale} />
  <Gallery images={dummyImages}/>
  </>
  );
}
