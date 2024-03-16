import { Dialog } from '~/components/dialog';
import LoginPage from '~/app/login/loginpage';

export default function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <Dialog className="rounded-md border border-primary-500 bg-background p-20 px-32 drop-shadow-2xl">
      <LoginPage locale={locale} />
    </Dialog>
  );
}
