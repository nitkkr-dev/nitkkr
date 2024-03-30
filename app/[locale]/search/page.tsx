import { redirect } from 'next/navigation';

export default function SearchPage({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}`);
}
