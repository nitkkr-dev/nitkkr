import { getTranslations } from '~/i18n/translations';

export default async function Status({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="flex items-center justify-center h-screen bg-[#FDF8F2] text-[#DB4437]">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="text-center md:text-left">
          <h1
            className="font-fingerpaint text-[190px] leading-[280.06px]"
            style={{ fontWeight: 400 }}
          >
            {title}
          </h1>
          <p className="text-2xl mt-4">{description}</p>
        </div>
        <div>
          <img
            src="/assets/work-in-progress.svg"
            alt="Work in Progress"
            className="max-w-md"
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
  type: 'NoResult' | 'Unauthorised' | 'WorkInProgress';
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
