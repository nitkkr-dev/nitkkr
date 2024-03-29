import LoginPage from './login-page';

export default function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <section className="flex h-screen items-center justify-center">
      <LoginPage locale={locale} />
    </section>
  );
}
