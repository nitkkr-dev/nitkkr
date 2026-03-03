import Search from '~/app/search/search';
import { Dialog } from '~/components/dialog';
import { schema } from '~/server/typesense';

export default function Page({
  params: { locale },
  searchParams: { category, query },
}: {
  params: { locale: string };
  searchParams: { category?: string; query?: string };
}) {
  return (
    <Dialog
      className="container mb-10 mt-24 overflow-y-auto xl:max-w-screen-xl"
      shouldCenter={false}
    >
      <Search
        currentCategory={
          category ?? '' in schema ? (category as keyof typeof schema) : 'all'
        }
        locale={locale}
        query={query}
      />
    </Dialog>
  );
}
