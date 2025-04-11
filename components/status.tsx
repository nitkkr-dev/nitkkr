import Image from 'next/image';

import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

const errorImages = {
  NoResult: 'assets/error-2.png',
  Unauthorised: 'assets/error-3.png',
  WorkInProgress: 'assets/error-1.png',
  NotAcceptable: 'assets/error-4.png',
};

export default async function Status({
  title,
  description,
  type,
}: {
  title: string;
  description: string;
  type: 'NoResult' | 'Unauthorised' | 'WorkInProgress' | 'NotAcceptable';
}) {
  return (
    <article className="container flex h-screen items-center justify-center">
      <div
        className={cn(
          'flex flex-col items-center md:flex-row',
          'space-y-8 md:space-x-10 md:space-y-0'
        )}
      >
        <div className="md:w-1/2">
          <h1
            className={cn(
              'text-center font-fingerpaint',
              'text-[80px] sm:text-[120px] md:text-[150px] lg:text-[190px]',
              'leading-none',
              'bg-gradient-to-t from-primary-100 to-primary-500 bg-clip-text text-transparent'
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              'mx-auto max-w-[361px] text-center',
              'font-poppins font-bold',
              'text-[24px] sm:text-[32px] md:text-[40px]',
              'leading-[32px] sm:leading-[40px] md:leading-[48px]',
              'text-primary-300'
            )}
          >
            {description}
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={errorImages[type] || '/assets/default-error.png'}
            alt={type}
            width={661}
            height={513}
            className={cn(
              'h-auto -scale-x-100 opacity-50',
              'w-[300px] sm:w-[400px] md:w-[500px] lg:w-[661px]',
              'ml-4 sm:ml-8 md:ml-12'
            )}
          />
        </div>
      </div>
    </article>
  );
}

export const CustomStatus = async ({
  locale,
  type,
}: {
  locale: string;
  type: keyof typeof errorImages;
}) => {
  const text = (await getTranslations(locale)).Status[type];
  return (
    <Status title={text.title} description={text.description} type={type} />
  );
};

export const NoResultStatus = async ({ locale }: { locale: string }) => (
  <CustomStatus locale={locale} type="NoResult" />
);
export const UnauthorisedStatus = async ({ locale }: { locale: string }) => (
  <CustomStatus locale={locale} type="Unauthorised" />
);
export const WorkInProgressStatus = async ({ locale }: { locale: string }) => (
  <CustomStatus locale={locale} type="WorkInProgress" />
);
export const NotAcceptableStatus = async ({ locale }: { locale: string }) => (
  <CustomStatus locale={locale} type="NotAcceptable" />
);
