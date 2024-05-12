import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function Sports({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Section.Sports;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'sports'),
  }))!;

  return <WorkInProgress locale={locale} />;
}
