import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';

export default async function Accounts({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Section.Account;

  return <WorkInProgress locale={locale} />;
}
