import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';

export default async function GeneralAdministration({
  locale,
}: {
  locale: string;
}) {
  const text = (await getTranslations(locale)).Section.GeneralAdministration;

  return <WorkInProgress locale={locale} />;
}
