import { redirect } from 'next/navigation';

import { getFormForSubmission } from '~/actions/form.actions';

async function page({ params }: { params: { id: string } }) {
  if (!params.id) return redirect('/');
  const data = await getFormForSubmission(Number(params.id));
  return <> {data} </>;
}
export default page;
