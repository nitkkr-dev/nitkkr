'use client';

import React, { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Option {
  label: string;
  value: string;
}

export function YearFilterClient({
  yearOptions,
}: {
  yearOptions: readonly string[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const years: Option[] = useMemo(() => {
    return yearOptions.map((year) => ({
      label: year,
      value: year,
    }));
  }, [yearOptions]);

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
    <div className="relative w-40">
      <select
        value={selected}
        onChange={handleChange}
        className="
        bg-white
        w-full
        appearance-none
        rounded-md border
        border-primary-700
        py-2 pl-4
        pr-10
        text-sm
        text-primary-700
        shadow-none
        transition
        focus:border-primary-700
        focus:outline-none
        focus:ring-1
        focus:ring-primary-500
      "
      >
        <option value="">All years</option>
        {years.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {/* Custom Arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg
          className="h-4 w-4 text-primary-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
