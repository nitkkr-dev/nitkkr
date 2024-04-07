import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';

export default async function CentralLibrary({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Section.CentralLibrary;

  return <WorkInProgress locale={locale} />;
}
