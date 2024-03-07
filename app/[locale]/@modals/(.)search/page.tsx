import Search from '~/app/search/search';
import { Dialog } from '~/components/dialog';

export default function Page({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  return (
    <Dialog>
      <Search search={searchParams.q} />
    </Dialog>
  );
}
