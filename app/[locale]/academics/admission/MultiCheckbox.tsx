'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { cn } from '~/lib/utils';
import { ScrollArea } from '~/components/ui';

interface Props {
  param?: string;
  options?: string[];
  selected?: string[];
  locale?: string;
  textMap?: Record<string, string>;
  // New props for mobile filters
  departments?: string[];
  selectedDepartments?: string[];
  departmentMap?: Record<string, string>;
}

export function MultiCheckbox({
  param = 'department',
  options,
  selected,
  locale = 'en',
  textMap,
  departments,
  selectedDepartments,
  departmentMap,
}: Props) {
  const searchParams = useSearchParams();
  const depts = departments ?? options ?? [];
  const selectedDepts = selectedDepartments ?? selected ?? [];
  const deptMap = departmentMap ?? textMap ?? {};

  const isAllSelected = selectedDepts.length === 0;

  // Sort options: selected ones first, then unselected
  const sortedDepts = [...depts].sort((a, b) => {
    const aSelected = selectedDepts.includes(a);
    const bSelected = selectedDepts.includes(b);
    if (aSelected && !bSelected) return -1;
    if (!aSelected && bSelected) return 1;
    return 0;
  });

  function hrefFor(value?: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value === undefined) {
      // All option
      params.delete(param);
    } else {
      const set = new Set(selectedDepts);
      set.has(value) ? set.delete(value) : set.add(value);
      params.delete(param);
      [...set].forEach((v) => params.append(param, v));
    }

    return `/${locale}/academics/admission${params.toString() ? `?${params.toString()}` : ''}`;
  }

  return (
    <ScrollArea className="h-[150px]">
      <ol className="w-full space-y-2 pr-4">
        {/* All Option */}
        <li>
          <Link
            scroll={false}
            href={hrefFor()}
            className={cn(
              'flex w-full items-center rounded border p-2',
              isAllSelected
                ? 'bg-primary-50 border-primary-700'
                : 'border-neutral-300'
            )}
          >
            <div className="flex w-full items-center">
              <div className="mr-2">
                <input
                  type="checkbox"
                  id={`${param}-all`}
                  className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
                  checked={isAllSelected}
                  readOnly
                />
              </div>
              <span className="font-semibold text-shade-dark">All</span>
            </div>
          </Link>
        </li>
        {sortedDepts.map((opt) => {
          const isChecked = selectedDepts.includes(opt);
          return (
            <li key={opt}>
              <Link
                scroll={false}
                href={hrefFor(opt)}
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
                    {deptMap[opt] ?? opt}
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
