import { redirect } from 'next/navigation';

// Never cache search page
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default function SearchPage({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}`);
}
