import { getLocale } from './dictionaries';

export default async function WorkInProgress({ lang }: { lang: string }) {
  const dict = await getLocale(lang);
  return (
    <div className="m-auto max-w-fit text-center">
      <h1>{dict.WIP}</h1>
      <p>{dict.WIP_}</p>
    </div>
  );
}
