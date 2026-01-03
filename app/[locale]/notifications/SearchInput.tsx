'use client';

import { useEffect, useState } from 'react';
import { usePathname,useRouter, useSearchParams } from 'next/navigation';
import { MdSearch } from 'react-icons/md';

export function SearchInput({
  defaultValue,
  placeholder,
}: {
  defaultValue?: string;
  placeholder: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(defaultValue ?? '');

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (query.trim()) {
        params.set('q', query.trim());
      } else {
        params.delete('q');
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }, 300);

    return () => clearTimeout(timer);
  }, [query, searchParams, pathname, router]);

  return (
    <div className="relative w-full sm:grow">
      <MdSearch className="pointer-events-none absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-neutral-400" />
      <input
        id="notification-search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="bg-white w-full rounded-md border border-neutral-300 px-3 py-2 pl-10 text-sm placeholder:text-neutral-400 focus:border-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-700"
      />
    </div>
  );
}
