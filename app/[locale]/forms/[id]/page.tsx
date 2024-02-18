import { getFormForSubmission } from '@/actions/form.actions';

async function page({ params }: { params: { id: string } }) {
  const data = await getFormForSubmission(Number(params.id));

  return <> {data} </>;
}
export default page;
