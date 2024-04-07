import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';

export default async function Store({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Section.Store;

  return <WorkInProgress locale={locale} />;
}
