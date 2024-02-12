import { getLocale } from './dictionaries';

export default async function WorkInProgress({ locale }: { locale: string }) {
  const dict = await getLocale(locale);
  return (
    <div className="m-auto max-w-fit text-center">
      <h1>{dict.WIP}</h1>
      <p>{dict.WIP_}</p>
    </div>
  );
}
