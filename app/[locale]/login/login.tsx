import clsx from 'clsx';

import { Button } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

import LoginButton from './sign-in-with-google-button';

const Login = async ({ locale }: { locale: string }) => {
  const text = (await getTranslations(locale)).Login;

  return (
    <article
      // Using clsx instead here due to a bug in twMerge where it thinks
      // bg-logo and bg-background are the same so it removes one of them.
      className={clsx(
        'flex h-auto w-full grow flex-col items-center justify-center',
        'max-w-[384px] sm:max-w-[512px] md:max-w-[640px] lg:max-w-[768px]',
        'bg-background bg-logo bg-contain bg-center bg-no-repeat bg-blend-overlay',
        'p-4 sm:p-12 md:p-24'
      )}
    >
      <header className="mb-8 text-center">
        <h3 className="mt-4 text-primary-700">{text.title}</h3>
      </header>
      <section className="w-full space-y-4 md:space-y-6">
        <fieldset className="flex flex-col space-y-2">
          <label className="font-semibold text-primary-700" htmlFor="email">
            {text.enterEmail}
          </label>
          <input
            className={cn(
              'rounded-md border border-primary-500 outline-none',
              'p-2 sm:p-3 md:p-4'
            )}
            id="email"
            placeholder="isac@nitkkr.ac.in"
            type="email"
          />
        </fieldset>
        <Button className="w-full p-2 sm:p-3 md:p-4" disabled>
          {text.continueButton}
        </Button>
        <hr
          className={cn(
            'overflow-visible text-center font-serif text-primary-500',
            'after:relative after:top-[-13px] after:bg-background after:px-3',
            locale === 'en' ? "after:content-['OR']" : "after:content-['अथवा']"
          )}
        />
        <LoginButton loginText={text.signInWithGoogle} />
      </section>
    </article>
  );
};

export default Login;
