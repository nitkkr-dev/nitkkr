'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { cn } from '~/lib/utils';
import { ScrollArea } from '~/components/ui';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs';

export function MultiCheckbox({
  param,
  options,
  selected,
  locale,
  textMap,
  select = false,
}: {
  param: string;
  options: readonly string[];
  selected: string[];
  locale: string;
  textMap: Record<string, string>;
  select?: boolean;
}) {
  const searchParams = useSearchParams();

  const getUpdatedValues = (option: string) => {
    return selected.includes(option)
      ? selected.filter((s) => s !== option)
      : [...selected, option];
  };

  const buildLocalHref = (updates: Record<string, unknown>) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([k, v]) => {
      if (v === undefined || (Array.isArray(v) && v.length === 0)) {
        params.delete(k);
        return;
      }

      if (Array.isArray(v)) {
        params.delete(k);
        v.forEach((item) => {
          if (item) params.append(k, String(item));
        });
      } else {
        params.set(k, String(v));
      }
    });

    const qs = params.toString();
    return `/${locale}/notifications${qs ? `?${qs}` : ''}`;
  };

  return select ? (
    <Select navigate>
      <SelectTrigger className="px-4 py-5 sm:w-1/2 lg:w-1/3 xl:hidden">
        <SelectValue
          placeholder={
            selected.length ? `${selected.length} selected` : `Choose ${param}`
          }
        />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <div key={opt} className="flex items-center px-2 py-1">
            <input
              type="checkbox"
              id={`mobile-${param}-${opt}`}
              className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
              checked={selected.includes(opt)}
              readOnly
            />
            <Link
              href={buildLocalHref({
                [param]: getUpdatedValues(opt),
              })}
              className="ml-2 w-full py-1"
            >
              {textMap[opt] ?? opt}
            </Link>
          </div>
        ))}
      </SelectContent>
    </Select>
  ) : (
    <ScrollArea className="h-[200px]">
      <ol className="w-full space-y-2 pr-4">
        {options.map((opt) => {
          const isChecked = selected.includes(opt);
          return (
            <li key={opt}>
              <Link
                href={buildLocalHref({
                  [param]: getUpdatedValues(opt),
                })}
                className={cn(
                  'flex w-full items-center rounded border p-2',
                  isChecked
                    ? 'bg-primary-50 border-primary-700'
                    : 'border-neutral-300'
                )}
              >
                <div className="flex w-full items-center">
                  <div className="mr-2">
                    <input
                      type="checkbox"
                      id={`${param}-${opt}`}
                      className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
                      checked={isChecked}
                      readOnly
                    />
                  </div>
                  <span className="font-semibold text-shade-dark">
                    {textMap[opt] ?? opt}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </ScrollArea>
  );
}
