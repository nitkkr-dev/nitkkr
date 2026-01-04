import { WorkInProgressStatus } from '~/components/status';

// Form submission pages - never cache (user input)
export const revalidate = 0;
export const dynamic = 'force-dynamic';

// FIXME: This will contain both ids from forms and persistent URLs.
// Old persistent URLs should trigger a redirect.
// export async function generateStaticParams() {}

export default function Form({
  params: { locale },
}: {
  params: { locale: string; id: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
