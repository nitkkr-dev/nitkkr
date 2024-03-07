'use client';

import Link from 'next/link';

export default function SearchLink({
  label,
  value,
}: {
  label: string;
  value: string;
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
    <Link href={value} className="py-2" onClick={addToRecent}>
      {label}
    </Link>
  );
}
