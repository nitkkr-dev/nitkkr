import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';

export default async function HealthCentre({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Section.HealthCentre;

  return <WorkInProgress locale={locale} />;
}
