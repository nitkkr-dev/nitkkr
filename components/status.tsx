import Image from 'next/image';

import { getTranslations } from '~/i18n/translations';

export default async function Status({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="flex items-center justify-center h-screen text-error">  
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-12">
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
            className="font-poppins text-center text-[24px] leading-[32px] sm:text-[32px] sm:leading-[40px] md:text-[40px] md:leading-[48px] text-[#D27D78]"
            style={{
              fontWeight: 500,
              maxWidth: '361px',
              margin: '0 auto',
            }}
          >
            {description}
          </p>
        </div>
        <Image
          src="assets/error-1.png"
          alt="Work in Progress"
          width={300}
          height={300}
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
        />
      </div>
    </article>
  );
}

export const CustomStatus = async ({
  locale,
  type,
}: {
  locale: string;
  type: 'NoResult' | 'Unauthorised' | 'WorkInProgress' | 'NotAcceptable';
}) => {
  const text = (await getTranslations(locale)).Status[type];
  return <Status title={text.title} description={text.description} />;
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
export const NotAcceptable = async ({ locale }: { locale: string }) => (
  <CustomStatus locale={locale} type="NotAcceptable" />
);
