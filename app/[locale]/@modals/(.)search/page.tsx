import Search from '~/app/search/search';
import { Dialog } from '~/components/dialog';

export default function Page({
  searchParams: { q: query, c: category },
}: {
  searchParams: { q: string; c: string };
}) {
  return (
    <Dialog>
      <Search search={query} category={category} />
    </Dialog>
  );
}
