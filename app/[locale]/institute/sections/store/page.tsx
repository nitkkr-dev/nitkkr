// Revalidate every hour (has DB calls, rarely changes)
export const revalidate = 3600;

import { WorkInProgressStatus } from '~/components/status';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function Store({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.Store;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'store'),
  }))!;

  return <WorkInProgressStatus locale={locale} />;
}
