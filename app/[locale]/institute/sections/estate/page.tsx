import { WorkInProgressStatus } from '~/components/status';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function Estate({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.Estate;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'estate'),
  }))!;

  return <WorkInProgressStatus locale={locale} />;
}
