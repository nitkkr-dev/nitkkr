'use client';

import { useRouter } from 'next/navigation';
import { useDebounceCallback, useLocalStorage } from 'usehooks-ts';

import { Button } from '~/components/ui';

import { MiniSearchLink } from './search';

export function Recents({
  title,
  clearButton,
}: {
  title: string;
  clearButton: string;
}) {
  const [recents, setRecents] = useLocalStorage<
    {
      title: string;
      href: string;
      category: string;
    }[]
  >('recentSearches', []);

  return recents.length ? (
    <section className="mb-1 sm:mb-3 md:mb-5">
      <header className="flex items-center">
        <h5 className="mb-2 grow text-primary-700 lg:mb-3 xl:mb-4">{title}</h5>
        <Button
          className="px-4 py-2 font-semibold"
          onClick={() => setRecents([])}
          variant="ghost"
        >
          {clearButton}
        </Button>
      </header>

      <ol className="flex flex-wrap gap-x-6">
        {recents.map((item, index) => (
          <li className="mb-2" key={index}>
            <MiniSearchLink item={item} />
          </li>
        ))}
      </ol>
    </section>
  ) : null;
}

export function Searchbar({ placeholder }: { placeholder: string }) {
  const router = useRouter();

  return (
    <input
      className="min-w-full rounded-lg border border-primary-700 px-4 py-2 focus:outline-none"
      placeholder={placeholder}
      onChange={useDebounceCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          router.replace(`?query=${e.target.value}`, { scroll: false });
        },
        300
      )}
    />
  );
}
