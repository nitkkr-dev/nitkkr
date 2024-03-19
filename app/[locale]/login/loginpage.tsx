import { getTranslations } from '~/i18n/translations';

import LoginButton from './loginbutton';

const LoginPage = async ({ locale }: { locale: string }) => {
  const text = (await getTranslations(locale)).LoginText;

  return (
    <div className="bg-loginBackground flex h-auto grow flex-col items-center justify-center rounded-lg bg-background bg-contain bg-center bg-no-repeat bg-blend-overlay ">
      <div className="mx-16 flex h-auto w-full grow flex-col items-center justify-center">
        <header className="mb-8 text-center">
          <h3 className="mt-4 text-primary-700">{text.title}</h3>
        </header>
        <div className="w-full max-w-lg space-y-6">
          <div className="flex flex-col space-y-2">
            <h6 className="text-primary-700">{text.enterEmail}</h6>
            <input
              id="email"
              placeholder={text.enterEmail}
              type="email"
              className="outline-red-100 rounded-md border border-primary-500 p-5 outline-offset-2 ring-0"
            />
          </div>
          <button className="text-md w-full rounded-md bg-primary-700 p-4 text-neutral-50 hover:bg-primary-900">
            {text.continueButton}
          </button>
          <div className="flex items-center justify-center">
            <div className="h-px w-full bg-primary-700" />
            <span className="mx-2 text-sm text-primary-700">{text.orText}</span>
            <div className="h-px w-full bg-primary-700" />
          </div>
          <LoginButton logintext={text.signInWithGoogle} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
