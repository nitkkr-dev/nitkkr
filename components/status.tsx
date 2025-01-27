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
    <article className="flex h-screen items-center justify-center text-error">
      <div className="flex items-center space-x-12">
        <div className="text-center">
          <h1
            className="font-fingerpaint text-[190px] leading-none"
            style={{
              fontWeight: 400,
              background: 'linear-gradient(to right, #E7695F, #E13F32)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {title}
          </h1>
          <p
            className="font-poppins text-center text-[40px] leading-[48px] text-[#D27D78]"
            style={{ fontWeight: 500, width: '361px', height: '48px' }}
          >
            {description}
          </p>
        </div>
        <Image
          src="/assets/error-1.png"
          alt="Work in Progress"
          width={400}
          height={400}
          className="max-w-xs"
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
