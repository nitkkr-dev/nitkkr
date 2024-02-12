import Link from 'next/link';

import { getTranslations } from '@/i18n/translations';

export default async function NotFound({
  params,
}: {
  params: { locale: string };
}) {
  if (params === undefined) return null;

  const text = (await getTranslations(params.locale)).NotFound;

  return (
    <div className="m-auto max-w-fit text-center">
      <h2>{text.title}</h2>
      <p>{text.description}</p>
      <Link href="/">{text.backHome}</Link>
    </div>
  );
}
