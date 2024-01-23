import 'server-only'

interface DictionaryInterface {
  [k: string]: any;
}

const dictionaries: {[k: string]: () => Promise<DictionaryInterface> } = {
  "en-GB": () => import('./dictionaries/en.json').then((module) => module.default),
  "hi-IN": () => import('./dictionaries/hi.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: string): Promise<DictionaryInterface> => {
  const fn = dictionaries[locale];
  return await fn();
}
