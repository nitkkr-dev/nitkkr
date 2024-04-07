import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';

export default async function CentralWorkshop({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Section.CentralWorkshop;

  return <WorkInProgress locale={locale} />;
}
