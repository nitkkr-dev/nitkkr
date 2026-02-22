'use client';

import { useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { PreserveParamsLink } from '~/app/faculty-and-staff/client-components'; // reuse this
import { cn } from '~/lib/utils';

interface Option {
  label: string;
  value: string;
}

export function FilterListClient({
  options,
  paramName,
}: {
  options: Option[];
  paramName: string;
}) {
  const searchParams = useSearchParams();
  const [showAll, setShowAll] = useState(false);
  const optionsToShow = 4;

  const selected = searchParams?.getAll(paramName) ?? [];

  const sortedOptions = useMemo(() => {
    return [...options].sort((a, b) => {
      const aSelected = selected.includes(a.value);
      const bSelected = selected.includes(b.value);
      if (aSelected && !bSelected) return -1;
      if (!aSelected && bSelected) return 1;
      return 0;
    });
  }, [options, selected]);

  const getUpdatedValues = (value: string) =>
    selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];

  const visible = showAll
    ? sortedOptions
    : sortedOptions.slice(0, optionsToShow);

  return (
    <div>
      <ol className="space-y-4">
        {visible.map(({ label, value }) => (
          <li key={value}>
            <PreserveParamsLink
              paramToUpdate={paramName}
              value={getUpdatedValues(value)}
              className={cn(
                'flex w-full items-center rounded border p-3',
                selected.includes(value)
                  ? 'bg-primary-50 border-primary-700'
                  : 'border-neutral-300'
              )}
            >
              <input
                type="checkbox"
                checked={selected.includes(value)}
                readOnly
                className="mr-2"
              />
              <span>{label}</span>
            </PreserveParamsLink>
          </li>
        ))}
      </ol>

      {options.length > optionsToShow && (
        <div className="mt-2 flex justify-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="text-primary-700 underline"
          >
            {showAll ? 'View less' : 'View more'}
          </button>
        </div>
      )}
    </div>
  );
}

