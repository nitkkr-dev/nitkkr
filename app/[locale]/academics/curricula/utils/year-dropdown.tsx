'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


interface Option {
  label: string;
  value: string;
}



export function YearFilterClient() {
  // dropdown instead of list of checkboxes
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentYear = new Date().getFullYear();

  const years: Option[] = useMemo(() => {
    const arr: Option[] = [];

    for (let year = currentYear; year >= 1976; year--) {
      arr.push({
        label: String(year),
        value: String(year),
      });
    }

    return arr;
  }, [currentYear]);

  const selected = searchParams?.get('year') ?? '';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.delete('year');
    if (value) {
      params.set('year', value);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
  <div className="relative">
    <select
      value={selected}
      onChange={handleChange}
      className="
        w-40
        rounded-lg
        border border-primary-100
        bg-neutral-50
        px-4 py-2
        text-sm
        shadow-sm
        focus:outline-none
        focus:ring-2
        focus:ring-primary-500
        focus:border-primary-500
        transition
      "
    >
      <option value="">All years</option>
      {years.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);
}