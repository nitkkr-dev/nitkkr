import { WorkInProgressStatus } from '~/components/status';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function Accounts({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.Account;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'accounts'),
  }))!;

  return <WorkInProgressStatus locale={locale} />;
}
