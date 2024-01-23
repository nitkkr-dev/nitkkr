import { getDictionary } from './dictionaries';

interface PageProps {
  params: {
    lang: string;
  };
}

export default async function Page({ params: { lang } }: PageProps): Promise<JSX.Element> {
  const dict = await getDictionary(lang); // Assuming getDictionary returns the appropriate type
  return dict.products.cart; // Assuming dict has the expected structure
}
