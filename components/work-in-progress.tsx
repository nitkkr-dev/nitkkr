import { getLocale } from './dictionaries';

export default async function WorkInProgress({ lang }: { lang: string }) {
  const dict = await getLocale(lang);
  return (
    <div>
      <h1>{dict.WIP}</h1>
      <p>{dict.WIP_}</p>
    </div>
  );
}
