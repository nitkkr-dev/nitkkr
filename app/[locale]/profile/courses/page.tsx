import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';

export default async function Courses({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Profile.tabs.courses;

  return (
    <>
      <header className="mb-4 max-md:hidden">
        <h4>{text.title}</h4>
        <hr className="border border-primary-700 opacity-50" />
      </header>

      <WorkInProgress locale={locale} />
    </>
  );
}
