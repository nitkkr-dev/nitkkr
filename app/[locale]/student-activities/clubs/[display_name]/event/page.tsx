import { redirect } from 'next/navigation';

export default function Event({
  params: { locale, display_name },
}: {
  params: { locale: string; display_name: string };
}) {
  redirect(`/${locale}/student-activities/clubs/${display_name}`);
}
