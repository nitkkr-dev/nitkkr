import Heading from '~/components/heading';
import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';

export default async function FrequentlyAskedQuestions({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).FAQ;

  return (
    <>
      <Heading glyphDirection="dual" heading="h2" text={text.title} />;
      <WorkInProgress locale={locale} />
    </>
  );
}
