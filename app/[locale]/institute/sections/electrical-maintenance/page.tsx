import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function ElectricalMaintenance({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.ElectricalMaintenance;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'electrical-maintenance'),
  }))!;

  return <WorkInProgress locale={locale} />;
}
