import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';

export default async function Estate({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Section.Estate;

  return <WorkInProgress locale={locale} />;
}
