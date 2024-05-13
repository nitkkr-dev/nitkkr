import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function HealthCentre({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.HealthCentre;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'health-centre'),
  }))!;

  return <WorkInProgress locale={locale} />;
}
