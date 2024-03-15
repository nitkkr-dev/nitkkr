export async function getTranslations(locale: string): Promise<Translations> {
  return import(`./${locale}.ts`).then((module) => module.default);
}

export interface Translations {
  DirectorsCorner: {
    alt: string;
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
    categories: {
      academic: string;
      tenders: string;
      workshops: string;
      recruitement: string;
    };
    viewAll: string;
  };
  NotFound: { title: string; description: string; backHome: string };
  StudentActivities: {
    title: string;
    headings: {
      clubs: string;
      council: string;
      events: string;
      thoughtLab: string;
      nss: string;
      ncc: string;
    };
    sections: {
      clubs: { title: string; more: string };
    };
  };
  Unauthorised: { title: string; description: string };
  WorkInProgress: { title: string; description: string };
}
