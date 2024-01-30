// import { getLocale } from './dictionaries';

import WorkInProgress from '@/components/work-in-progress';

interface PageProps {
  params: {
    lang: string;
  };
}

export default async function Page({}: PageProps) {
  // const dict = await getLocale(lang); // Assuming getDictionary returns the appropriate type
  // const products = dict.products;
  // const cartItems = products.cart;
  // return cartItems; // Assuming dict has the expected structure
  return <WorkInProgress />;
}
