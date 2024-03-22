import Search from '~/app/search/search';
import { Dialog } from '~/components/dialog';

export type searchCategory =
  | 'allResults'
  | 'webPages'
  | 'people'
  | 'documents'
  | 'events'
  | 'news'
  | 'courses'
  | 'clubs'
  | 'positions';

export default function Page({
  params: { locale },
  searchParams: { query, category },
}: {
  params: { locale: string };
  searchParams: {
    query: string;
    category: searchCategory;
  };
}) {
  return (
    <Dialog
      className="container mb-10 mt-24 max-w-screen-xl overflow-y-auto"
      shouldCenter={false}
    >
      <Search query={query} selectedCategory={category} locale={locale} />
    </Dialog>
  );
}
