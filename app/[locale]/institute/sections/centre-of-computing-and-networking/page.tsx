import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function CentreOfComputingAndNetworking({
  locale,
}: {
  locale: string;
}) {
  const text = (await getTranslations(locale)).Section
    .CentreOfComputingAndNetworking;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) =>
      eq(section.urlName, 'centre-of-computing-and-networking'),
  }))!;

  return <WorkInProgress locale={locale} />;
}
