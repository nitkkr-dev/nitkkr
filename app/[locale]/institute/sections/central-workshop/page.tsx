import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function CentralWorkshop({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.CentralWorkshop;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'central-workshop'),
  }))!;

  return <WorkInProgress locale={locale} />;
}
