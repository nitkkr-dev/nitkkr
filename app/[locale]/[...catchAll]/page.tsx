import Link from 'next/link';

import { getTranslations } from '~/i18n/translations';

export default async function NotFound({
  params: { locale },
}: {
  params: { catchAll: string[]; locale: string };
}) {
  const text = (await getTranslations(locale)).NotFound;

  return (
    <div className="m-auto max-w-fit text-center">
      <h2>{text.title}</h2>
      <p>{text.description}</p>
      <Link href={`/${locale}`}>{text.backHome}</Link>
    </div>
  );
}
