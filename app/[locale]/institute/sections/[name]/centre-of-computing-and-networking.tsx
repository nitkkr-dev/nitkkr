import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';

export default async function CentreOfComputingAndNetworking({
  locale,
}: {
  locale: string;
}) {
  const text = (await getTranslations(locale)).Section
    .CentreOfComputingAndNetworking;

  return <WorkInProgress locale={locale} />;
}
