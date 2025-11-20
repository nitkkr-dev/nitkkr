'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs';
import { cn } from '~/lib/utils';

export function ClearFiltersButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClearFilters = () => {
    router.push(pathname);
  };

  return (
    <button
      className="hover:bg-primary-50 mb-auto mt-1 rounded border border-primary-700 px-3 py-1 text-sm text-primary-700"
      onClick={handleClearFilters}
    >
      Clear All Filters
    </button>
  );
}

// Helper function to preserve existing query params while updating specific ones
export function PreserveParamsLink({
  children,
  paramToUpdate,
  value,
  className,
}: {
  children: React.ReactNode;
  paramToUpdate: string;
  value: string | string[];
  className?: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams.toString());

  // Remove the parameter we're updating
  params.delete(paramToUpdate);

  // Add the new value(s) for the parameter
  if (Array.isArray(value)) {
    value.forEach((v) => params.append(paramToUpdate, v));
  } else if (value) {
    params.append(paramToUpdate, value);
  }

  return (
    <Link
      href={`${pathname}?${params.toString()}`}
      className={className}
      replace
    >
      {children}
    </Link>
  );
}

interface Dept {
  id: number;
  name: string;
  urlName: string;
}

export function DepartmentsClient({
  departments,
  department,
  select = false,
}: {
  departments: Dept[];
  department?: string | string[];
  select?: boolean;
}) {
  const [showAll, setShowAll] = useState(false);
  const optionsToShow = 4;

  const selectedDepartments = useMemo(
    () =>
      Array.isArray(department) ? department : department ? [department] : [],
    [department]
  );

  const getUpdatedDepartments = (urlName: string) =>
    selectedDepartments.includes(urlName)
      ? selectedDepartments.filter((d) => d !== urlName)
      : [...selectedDepartments, urlName];

  if (select) {
    return (
      <Select navigate>
        <SelectTrigger className="px-4 py-5 sm:w-1/2 lg:w-1/3 xl:hidden">
          <SelectValue
            placeholder={
              selectedDepartments.length
                ? `${selectedDepartments.length} selected`
                : 'Choose a department'
            }
          />
        </SelectTrigger>
        <SelectContent>
          {departments.map(({ name, urlName }, index) => (
            <div key={index} className="flex items-center px-2 py-1">
              <input
                type="checkbox"
                id={`mobile-department-${urlName}`}
                className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
                checked={selectedDepartments.includes(urlName)}
                readOnly
              />
              <PreserveParamsLink
                paramToUpdate="department"
                value={getUpdatedDepartments(urlName)}
                className="ml-2 w-full py-1"
              >
                {name}
              </PreserveParamsLink>
            </div>
          ))}
        </SelectContent>
      </Select>
    );
  }

  // Desktop/list mode: show limited items and "View more" button that toggles full list.
  const visible = showAll ? departments : departments.slice(0, optionsToShow);

  return (
    <div>
      <ol className="w-full space-y-4">
        {/* Constrain the list height and allow internal scrolling */}
        <div
          className={cn(
            'overflow-y-auto',
            showAll ? 'max-h-[calc(100vh-200px)]' : 'max-h-[280px]'
          )}
        >
          {visible.map(({ name, urlName }, index) => (
            <li key={index}>
              <PreserveParamsLink
                paramToUpdate="department"
                value={getUpdatedDepartments(urlName)}
                className={cn(
                  'flex w-full items-center rounded border p-3',
                  selectedDepartments.includes(urlName)
                    ? 'bg-primary-50 border-primary-700'
                    : 'border-neutral-300'
                )}
              >
                <div className="flex w-full items-center">
                  <div className="mr-2">
                    <input
                      type="checkbox"
                      id={`department-${urlName}`}
                      className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
                      checked={selectedDepartments.includes(urlName)}
                      readOnly
                    />
                  </div>
                  <span className="font-semibold text-shade-dark">{name}</span>
                </div>
              </PreserveParamsLink>
            </li>
          ))}
        </div>
      </ol>

      {departments.length > optionsToShow && (
        <div className="mt-2 flex justify-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="text-primary-700 underline"
            aria-expanded={showAll}
          >
            {showAll
              ? 'View less'
              : `View more (${departments.length - optionsToShow} more)`}
          </button>
        </div>
      )}
    </div>
  );
}
