import { getTranslations } from '~/i18n/translations';

export interface FormInvalidResponseProps {
  type: 'FormNotFound' | 'FormExpired' | 'FormEditNotAllowed';
}
export default async function FormInvalidResponse({
  locale,
  type,
}: FormInvalidResponseProps & { locale: string }) {
  const response = (await getTranslations(locale)).Forms;
  const text = response[type];
  return (
    <section>
      <h1>{text.title}</h1>
      <p>{text.content}</p>
    </section>
  );
}
