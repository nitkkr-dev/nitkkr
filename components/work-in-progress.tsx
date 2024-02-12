import { getTranslations } from '@/i18n/translations';

export default async function WorkInProgress({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).WorkInProgress;

  return (
    <div className="m-auto max-w-fit text-center">
      <h1>{text.title}</h1>
      <p>{text.description}</p>
    </div>
  );
}
