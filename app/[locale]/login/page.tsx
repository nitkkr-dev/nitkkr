import { cn } from '~/lib/utils';

import Login from './login';

// Never cache login page
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default function LoginPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <section
      className={cn(
        'flex items-center justify-center',
        'h-[calc(100dvh-3.5rem)] sm:h-[calc(100dvh-4.5rem)] md:h-[calc(100dvh-5.5rem)]' // DEPENDS-ON: header.tsx
      )}
    >
      <Login locale={locale} />
    </section>
  );
}
