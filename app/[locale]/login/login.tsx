import { FcGoogle } from 'react-icons/fc';

import { Input } from '~/components/inputs';
import { Button } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { signIn } from '~/server/auth';
import { getS3Url } from '~/server/s3';

const Login = async ({ locale }: { locale: string }) => {
  const text = (await getTranslations(locale)).Login;

  return (
    <article
      className={cn(
        'flex h-auto w-full grow flex-col items-center justify-center',
        'max-w-[384px] sm:max-w-[512px] md:max-w-[640px] lg:max-w-[640px]',
        'bg-background bg-contain bg-center bg-no-repeat bg-blend-overlay',
        'p-4 sm:p-12 md:p-20'
      )}
      style={{
        backgroundImage: `url('${getS3Url()}/assets/logo-transparent.png')`,
      }}
    >
      <header className="mb-8 text-center">
        <h3 className="mt-4 text-primary-700">{text.title}</h3>
      </header>
      <section className="w-full space-y-4 md:space-y-6">
        <Input
          inputClassName="sm:px-4 sm:py-3 md:px-5 md:py-4"
          id="email"
          label={text.enterEmail}
          placeholder="isac@nitkkr.ac.in"
          pattern="\w+@nitkkr.ac.in"
          type="email"
        />
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

        <form
          action={async () => {
            'use server';
            await signIn('google', { redirectTo: `/${locale}/profile` });
          }}
        >
          <Button
            className={cn(
              'p-2 sm:p-3 md:p-4',
              'w-full space-x-3 bg-neutral-50 hover:bg-neutral-100'
            )}
            type="submit"
            variant="outline"
          >
            <FcGoogle className="size-4 sm:size-5 md:size-6" />
            <span>{text.signInWithGoogle}</span>
          </Button>
        </form>
      </section>
    </article>
  );
};

export default Login;
