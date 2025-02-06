import Image from 'next/image';

import { getTranslations } from '~/i18n/translations';

const errorImages = {
  NoResult: 'assets/error-2.png',
  Unauthorised: 'assets/error-3.png',
  WorkInProgress: 'assets/error-1.png',
  NotAcceptable: 'assets/error-4.png.png',
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
    <article className="flex h-screen items-center justify-center text-error">
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-20 md:space-y-0">
        <div className="text-center md:text-left">
          <h1
            className="font-fingerpaint text-[80px] leading-none sm:text-[120px] md:text-[150px] lg:text-[190px]"
            style={{
              background: 'linear-gradient(to top, #E7695F, #E13F32)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {title}
          </h1>
          <p
            className="font-poppins text-center text-[24px] leading-[32px] text-[#D27D78] sm:text-[32px] sm:leading-[40px] md:text-[40px] md:leading-[48px]"
            style={{ fontWeight: 500, maxWidth: '361px', margin: '0 auto' }}
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
            className="ml-4 h-auto w-[300px] -scale-x-100 opacity-50 sm:ml-8 sm:w-[400px] md:ml-12 md:w-[500px] lg:w-[661px]"
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
