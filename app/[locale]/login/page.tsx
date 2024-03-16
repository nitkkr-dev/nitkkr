import LoginPage from './loginpage';

export default function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="flex h-screen grow items-center justify-center">
      <LoginPage locale={locale} />
    </div>
  );
}
