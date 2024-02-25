import { getTranslations } from '~/i18n/translations';

export default async function Unauthorized({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Unauthorised;

  return (
    <div className="m-auto max-w-fit text-center">
      <h2>{text.title}</h2>
      <p>{text.description}</p>
    </div>
  );
}
