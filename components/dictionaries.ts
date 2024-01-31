type Obj<T> = {
  [k: string]: T;
};

interface Dictionary {
  [k: string]: () => Promise<Obj<string>>;
}

const dictionaries: Dictionary = {
  'en-GB': () => import('./locales/en.json').then((module) => module.default),
  'hi-IN': () => import('./locales/hi.json').then((module) => module.default),
};

export const getLocale = async (locale: string) => {
  const fn = dictionaries[locale];
  return await fn();
};
