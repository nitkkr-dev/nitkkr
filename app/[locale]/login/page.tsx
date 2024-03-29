import Login from './login';

export default function LoginPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <section className="flex h-screen items-center justify-center">
      <Login locale={locale} />
    </section>
  );
}
