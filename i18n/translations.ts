export async function getTranslations(locale: string): Promise<Translations> {
  return import(`./${locale}.ts`).then((module) => module.default);
}

export interface Translations {
  DirectorsCorner: {
    title: string;
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
  Form: {
    FormNotFound: { title: string; content: string };
    FormExpired: { title: string; content: string };
    FormEditNotAllowed: { title: string; content: string };
  };
  FormDetails: {
    title: string;
    description: string;
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
  Notifications: {
    title: string;
    categories: [string, string, string, string];
    viewAll: string;
  };
  NotFound: { title: string; description: string; backHome: string };
  Unauthorised: { title: string; description: string };
  WorkInProgress: { title: string; description: string };
}
