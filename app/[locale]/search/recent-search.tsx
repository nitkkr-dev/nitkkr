'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Recents() {
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
  return (
    <section className="mt-12">
      <header className="flex">
        <h5 className="grow">Recent Searches</h5>
        <button
          className="mb-0 max-h-fit rounded-md  p-2 align-baseline  hover:bg-primary-300"
          onClick={clearRecents}
        >
          Clear recents
        </button>
      </header>

      <ol className="flex gap-6">
        {recents.map(
          (
            { label, value }: { label: string; value: string },
            index: number
          ) => (
            <li key={index}>
              <Link href={value}>{label}</Link>
            </li>
          )
        )}
      </ol>
    </section>
  );
}
