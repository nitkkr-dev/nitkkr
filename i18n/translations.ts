export async function getTranslations(locale: string): Promise<Translations> {
  return import(`./${locale}.ts`).then((module) => module.default);
}

export interface Translations {
  Header: {
    institute: string;
    administration: string;
    academics: string;
    sections: string;
    faculty: string;
    placement: string;
    activities: string;
    logo: string;
    login: string;
  };
  NotFound: { title: string; description: string; backHome: string };
  WorkInProgress: { title: string; description: string };
}
