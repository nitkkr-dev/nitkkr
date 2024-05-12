import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function GeneralAdministration({
  locale,
}: {
  locale: string;
}) {
  const text = (await getTranslations(locale)).Section.GeneralAdministration;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'general-administration'),
  }))!;

  return <WorkInProgress locale={locale} />;
}
