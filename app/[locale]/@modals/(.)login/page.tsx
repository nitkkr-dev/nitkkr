import LoginModal from '~/app/login/login';
import { Dialog } from '~/components/dialog';
import { cn } from '~/lib/utils';

export default function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <Dialog
      className={cn(
        'container',
        'max-w-[384px] sm:max-w-[512px] md:max-w-[640px] lg:max-w-[768px]'
      )}
    >
      <section
        className={cn(
          'rounded-lg border border-primary-500 bg-background',
          'p-2 sm:p-6 md:p-10 lg:p-16'
        )}
      >
        <LoginModal locale={locale} />
      </section>
    </Dialog>
  );
}
