import Link from 'next/link';
import Image from 'next/image';

import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

export default async function NotFound({
  params: { locale },
}: {
  params: { catchAll: string[]; locale: string };
}) {
  const text = (await getTranslations(locale)).NotFound;

  return (
    <article className="container flex h-screen items-center justify-center text-error">
      <div
        className={cn(
          'flex w-full max-w-6xl flex-col items-center',
          'space-y-8 md:flex-row md:space-x-20 md:space-y-0'
        )}
      >
        <section className="w-full text-center md:w-1/2">
          <h1
            className={cn(
              'bg-clip-text font-fingerpaint text-transparent',
              'bg-gradient-to-t from-primary-100 to-primary-500',
              'text-[80px] sm:text-[120px] md:text-[150px] lg:text-[190px]',
              'leading-none'
            )}
          >
            {text.title}
          </h1>

          <p
            className={cn(
              'font-Poppins font-bold',
              'text-[24px] sm:text-[32px] md:text-[40px]',
              'leading-[32px] sm:leading-[40px] md:leading-[48px]',
              'text-primary-300'
            )}
          >
            {text.description}
          </p>

          <div className="mt-4">
            <Link
              href={`/${locale}`}
              className={cn(
                'block text-center font-Poppins font-bold',
                'text-[24px] sm:text-[32px] md:text-[40px]',
                'leading-[38px] sm:leading-[44px] md:leading-[48px]',
                'decoration-skip-ink-none decoration-[from-font]',
                'text-primary-300'
              )}
            >
              {text.backHome}
            </Link>
          </div>
        </section>

        <section className="flex w-full justify-center md:w-1/2">
          <Image
            src="assets/error-2.png"
            alt="Work in Progress"
            width={661}
            height={513}
            className={cn(
              'h-auto opacity-50',
              'w-[300px] sm:w-[400px] md:w-[500px] lg:w-[661px]'
            )}
          />
        </section>
      </div>
    </article>
  );
}
