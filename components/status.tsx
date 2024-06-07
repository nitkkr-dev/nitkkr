import { getTranslations } from '~/i18n/translations';

export default async function Status({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="m-auto max-w-fit text-center">
      <h2>{title}</h2>
      <p>{description}</p>
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
