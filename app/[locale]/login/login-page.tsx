import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

import LoginButton from './login-button';

const LoginPage = async ({ locale }: { locale: string }) => {
  const text = (await getTranslations(locale)).LoginText;

  return (
    <main className="bg-loginBackground flex h-auto grow flex-col items-center justify-center rounded-lg bg-background bg-contain bg-center bg-no-repeat bg-blend-overlay ">
      <article className="mx-16 flex h-auto w-full grow flex-col items-center justify-center">
        <header className="mb-8 text-center">
          <h3 className="mt-4 text-primary-700">{text.title}</h3>
        </header>
        <section className="w-full max-w-lg space-y-6">
          <fieldset className="flex flex-col space-y-2">
            <h6 className="text-primary-700">{text.enterEmail}</h6>
            <input
              id="email"
              placeholder="isac@nitkkr.ac.in"
              type="email"
              className="rounded-md border border-primary-500 p-5 outline-offset-2 outline-primary-100 "
            />
          </fieldset>
          <button className="text-md w-full rounded-md bg-primary-700 p-4 text-neutral-50 hover:bg-primary-900">
            {text.continueButton}
          </button>
          <hr
            className={cn(
              'h-1 overflow-visible border-0 border-t-[1px] border-primary-500 text-center after:relative after:top-[-13px] after:bg-background after:px-3 after:text-primary-500',
              locale === 'en'
                ? "after:content-['OR']"
                : "after:content-['अथवा']"
            )}
          />
          <LoginButton loginText={text.signInWithGoogle} />
        </section>
      </article>
    </main>
  );
};

export default LoginPage;
