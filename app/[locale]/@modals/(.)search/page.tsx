import Search from '~/app/search/search';
import { Dialog } from '~/components/dialog';

export default function Page({
  searchParams: { q: query },
}: {
  searchParams: { q: string };
}) {
  return (
    <Dialog>
      <Search search={query} />
    </Dialog>
  );
}
