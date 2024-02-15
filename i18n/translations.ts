export async function getTranslations(locale: string): Promise<Translations> {
  return import(`./${locale}.ts`).then((module) => module.default);
}

export interface Translations {
  Header: {
    institute: string;
    academics: string;
    faculty: string;
    placement: string;
    alumni: string;
    activities: string;
    logo: string;
    login: string;
  };
  NotFound: { title: string; description: string; backHome: string };
  WorkInProgress: { title: string; description: string };
}
