'use client';

import { useRouter } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';

export default function Searchbar() {
  const router = useRouter();

  return (
    <input
      className="min-w-full rounded-lg border border-primary-700 px-4 py-2 focus:outline-none"
      placeholder="Quick Search..."
      onChange={useDebounceCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          router.replace(`?q=${e.target.value}`, { scroll: false });
        },
        300
      )}
    />
  );
}
