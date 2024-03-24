import { redirect } from 'next/navigation';

import { getFormForSubmission } from '~/actions/form.actions';

export default async function page({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  if (!id) return redirect('/');
  const { Element, props } = await getFormForSubmission(Number(id));
  return <Element {...props} locale={locale} />;
}
