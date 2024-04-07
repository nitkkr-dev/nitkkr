import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';

export default async function Sports({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Section.Sports;

  return <WorkInProgress locale={locale} />;
}
