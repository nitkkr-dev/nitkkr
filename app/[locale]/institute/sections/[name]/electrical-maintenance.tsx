import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';

export default async function ElectricalMaintenance({
  locale,
}: {
  locale: string;
}) {
  const text = (await getTranslations(locale)).Section.ElectricalMaintenance;

  return <WorkInProgress locale={locale} />;
}
