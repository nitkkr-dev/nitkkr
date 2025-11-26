'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ScrollArea } from '~/components/ui/scroll-area';

import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { FaFilter, FaSlidersH, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs';
import { cn } from '~/lib/utils';
import { MdFilterList } from "react-icons/md";

import Loading from '~/components/loading';

interface Dept {
  id: number;
  name: string;
  urlName: string;
}

export function MobileFilters({
  departments,
  department,
  className,
}: {
  departments?: Dept[];
  department?: string | string[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on outside click
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node | null;
      if (panelRef.current && target && !panelRef.current.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  return (
    <div className="z-50 font-semibold xl:hidden">
      {/* Filter button */}
      <button
        aria-expanded={open}
        aria-controls="mobile-filters-panel"
        onClick={() => setOpen((s) => !s)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded border border-primary-100 bg-neutral-50 ',
          className
        )}
      >
        <MdFilterList className="text-primary-700 text-xl"/>
        <span className='text-primary-700'>Filters</span>
      </button>

      {/* Backdrop */}
      <div
        aria-hidden={!open}
        className={cn(
          'fixed inset-0 z-[60] transition-opacity',
          open ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Panel: full screen, slides from left */}
      <aside
        id="mobile-filters-panel"
        role="dialog"
        aria-modal="true"
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'fixed top-0 left-0 z-[70] h-screen w-screen transition-transform',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >

        {/* Inner content area */}
        <div className="bg-[#f7efe6] min-h-screen h-screen p-4 lg:p-8 md:pt-8">
          <div >
            <div className=" bg-white p-5">
              <ScrollArea className="h-[calc(100vh-200px)]">
                <div className="rounded-lg ">
                  <div className='mt-10 flex flex-row justify-between'>
                    <h3 className="text-2xl font-bold text-primary-700">Filter By</h3>
                    <button
                      onClick={() => setOpen(false)}
                      aria-label="Close filters"
                      className=" hover:bg-black/5"
                    >
                      <FaTimes className="text-primary-700 size-7" />
                    </button>
                  </div>
                  <div className="mb-6 rounded  bg-neutral-50 p-4">
                    <DesignationsClient />
                  </div>
                </div>

                {/* Department box */}
                <div className="mb-6 rounded  bg-neutral-50 p-4">
                  <h3 className="mb-2 text-lg font-bold text-primary-700">
                    Department
                  </h3>

                  <Suspense fallback={<Loading className="max-xl:hidden" />}>
                    {departments ? (
                      <DepartmentsClient departments={departments} department={department} select={false} />
                    ) : (
                      <p className="text-sm text-neutral-500">Loading departments...</p>
                    )}
                  </Suspense>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}



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


/**
 * Small client-side Designations UI for mobile carousel.
 */
function DesignationsClient() {
  const searchParams = useSearchParams();
  const selected = searchParams?.getAll('designation') ?? [];
  const options = ['faculty', 'staff'];

  const getUpdatedDesignations = (option: string) =>
    selected.includes(option) ? selected.filter((d) => d !== option) : [...selected, option];

  return (
    <div className="p-4">
      <h3 className="mb-2 text-lg font-bold text-primary-700">Designation</h3>
      <div className="space-y-3">
        {options.map((option) => (
          <div key={option} className="flex items-center gap-3 rounded border p-3">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              readOnly
              className="h-4 w-4 rounded border-neutral-300 text-primary-700"
            />
            <PreserveParamsLink
              paramToUpdate="designation"
              value={getUpdatedDesignations(option)}
              className="w-full"
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </PreserveParamsLink>
          </div>
        ))}
      </div>
    </div>
  );
}
