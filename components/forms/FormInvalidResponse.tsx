import { getTranslations } from '~/i18n/translations';

export interface FormInvalidResponseProps {
  type: string;
}
export default async function FormInvalidResponse({
  locale,
  type,
}: FormInvalidResponseProps & { locale: string }) {
  const response = (await getTranslations(locale)).Form;
  const text = response[type as keyof typeof response];
  return (
    <section>
      <h1>{text.title}</h1>
      <p>{text.content}</p>
    </section>
  );
}
