'use client';

import { useRouter } from 'next/navigation';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useDebounceCallback, useLocalStorage } from 'usehooks-ts';

import { LocalStorageLink } from '~/components/link';

export function Recents({
  title,
  clearButton,
}: {
  title: string;
  clearButton: string;
}) {
  const [recents, setRecents] = useLocalStorage<
    { label: string; value: string }[]
  >('recentSearches', []);

  return recents.length ? (
    <section className="mr-4 mt-6 md:mr-12 md:mt-12">
      <header className="flex items-center">
        <h5 className="grow text-primary-700">{title}</h5>
        <button
          className="rounded-md  p-2 font-semibold text-primary-700 hover:bg-primary-100"
          onClick={() => setRecents([])}
        >
          {clearButton}
        </button>
      </header>

      <ol className="flex flex-wrap gap-x-6">
        {recents.map(({ label, value }, index) => (
          <li key={index}>
            <LocalStorageLink
              className="inline-flex items-center gap-2 font-medium lg:text-lg"
              href={value}
              newItem={{ label, value }}
              options={{ filter: true, unshift: true }}
              replace
              storageKey="recentSearches"
            >
              <FaMagnifyingGlass className="inline-block h-2 text-primary-500 lg:h-3" />
              {label}
            </LocalStorageLink>
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
