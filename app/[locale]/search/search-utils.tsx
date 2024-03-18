'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { type IconBaseProps } from 'react-icons/lib';
import { useDebounceCallback } from 'usehooks-ts';

export function Recents({
  title,
  clearButton,
}: {
  title: string;
  clearButton: string;
}) {
  const [recents, setRecents] = useState<{ value: string; label: string }[]>(
    JSON.parse(localStorage.getItem('recentSearches') ?? '[]') as {
      value: string;
      label: string;
    }[]
  );

  const clearRecents = () => {
    localStorage.removeItem('recentSearches');
    setRecents([]);
  };
  return recents.length ? (
    <section className="mr-4 mt-6 md:mr-12 md:mt-12">
      <header className="flex items-center">
        <h5 className="grow text-primary-700">{title}</h5>
        <button
          className="rounded-md  p-2 font-semibold text-primary-700 hover:bg-primary-100"
          onClick={clearRecents}
        >
          {clearButton}
        </button>
      </header>

      <ol className="flex flex-wrap gap-x-6">
        {recents.map(
          (
            { label, value }: { label: string; value: string },
            index: number
          ) => (
            <SearchLink value={value} key={index} label={label} />
          )
        )}
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

export function SearchLink({
  label,
  value,
  Icon = FaMagnifyingGlass,
  children = (
    <p className="mb-0 gap-2 font-medium">
      <Icon className="inline-block h-2 text-primary-500" /> {label}
    </p>
  ),
}: {
  label: string;
  value: string;
  Icon?: React.ComponentType<IconBaseProps>;
  children?: React.ReactNode;
}) {
  function addToRecent() {
    let recents: { value: string; label: string }[] = JSON.parse(
      localStorage.getItem('recentSearches') ?? '[]'
    ) as { value: string; label: string }[];
    recents = recents.filter((item: { value: string }) => item.value !== value);
    recents.unshift({ value, label });
    localStorage.setItem(
      'recentSearches',
      JSON.stringify(recents.slice(0, 10))
    );
  }
  return (
    <Link href={value} onClick={addToRecent}>
      {children}
    </Link>
  );
}
