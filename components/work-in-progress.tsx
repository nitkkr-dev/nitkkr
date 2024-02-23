import { getTranslations } from '~/i18n/translations';

export default async function WorkInProgress({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).WorkInProgress;

  return (
    <div className="m-auto max-w-fit text-center">
      <h2>{text.title}</h2>
      <p>{text.description}</p>
    </div>
  );
}
