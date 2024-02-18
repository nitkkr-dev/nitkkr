export async function getTranslations(locale: string): Promise<Translations> {
  return import(`./${locale}.ts`).then((module) => module.default);
}

export interface Translations {
  DirectorsCorner: {
    name: string;
    quote: [string, string];
    more: string;
  };
  Footer: {
    logo: string;
    nit: string;
    location: string;
    copyDefault: string;
    copySuccess: string;
    design: string;
    headings: [string, string, string];
    lorem: string;
    copyright: string;
  };
  Header: {
    institute: string;
    academics: string;
    faculty: string;
    placement: string;
    alumni: string;
    activities: string;
    logo: string;
    search: string;
    login: string;
  };
  NotFound: { title: string; description: string; backHome: string };
  WorkInProgress: { title: string; description: string };
}
