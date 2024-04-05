import { getTranslations } from '~/i18n/translations';

export default async function FormDetails({
  title,
  description,
  locale,
}: {
  title: string;
  description?: string;
  locale: string;
}) {
  const text = (await getTranslations(locale)).FormDetails;
  return (
    <>
      <h5>{text.title}</h5>
      <h1 className="text-sky-900 text-3xl font-semibold">{title}</h1>
      <h6>{text.description}</h6>
      <p className="text-gray-600">{description}</p>
    </>
  );
}
