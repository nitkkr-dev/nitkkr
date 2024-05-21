// export async function generateStaticParams() {}

import { redirect } from 'next/navigation';

import { getFormForSubmission } from '~/actions/form.actions';

export default async function Form({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  if (!id) return redirect('/');
  const { Element, props } = await getFormForSubmission(id);
  return <Element {...props} locale={locale} id={id} />;
}
