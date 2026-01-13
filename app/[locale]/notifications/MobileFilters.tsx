'use client';

import { createPortal } from 'react-dom';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';

import { ScrollArea } from '~/components/ui/scroll-area';
import { cn } from '~/lib/utils';

import { DateRangeForm } from './DateRangeForm';
import { MultiCheckbox } from './MultiCheckbox';

interface Dept {
  id: number;
  name: string;
  urlName: string;
}

type Cat = string;

interface MobileFiltersProps {
  locale: string;
  categories: Cat[];
  departments: string[];
  departmentRows: Dept[];
  categoryOptions: readonly string[];
  query: string;
  start?: string;
  end?: string;
  text: {
    filters: string;
    filterBy: string;
    clearAllFilters: string;
    filter: {
      date: string;
      category: string;
      department: string;
      startDate: string;
      endDate: string;
      day: string;
      month: string;
      year: string;
    };
    categories: Record<string, string>;
  };
  className?: string;
}

export function MobileFilters({
  locale,
  categories,
  departments,
  departmentRows,
  categoryOptions,
  query,
  start,
  end,
  text,
  className,
}: MobileFiltersProps) {
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
    if (!open) return;

    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  // Calculate active filters count (including date filters)
  const dateFiltersCount = (start ? 1 : 0) + (end ? 1 : 0);
  const activeFiltersCount =
    categories.length + departments.length + dateFiltersCount;

  return (
    <div className="z-50 font-semibold xl:hidden">
      {/* Filter button */}
      <button
        aria-expanded={open}
        aria-controls="mobile-filters-panel"
        onClick={() => setOpen((s) => !s)}
        className={cn(
          'flex items-center gap-2 rounded border border-primary-100 bg-neutral-50 px-3 py-2',
          className
        )}
      >
        <MdFilterList className="text-xl text-primary-700" />
        <span className="text-primary-700">{text.filters}</span>
        {activeFiltersCount > 0 && (
          <span className="text-white flex h-5 w-5 items-center justify-center rounded-full bg-primary-700 text-xs">
            {activeFiltersCount}
          </span>
        )}
      </button>

      {/* Backdrop */}
      <div
        aria-hidden={!open}
        className={cn(
          'pointer-events-none fixed inset-0 z-[60] transition-opacity',
          open
            ? 'pointer-events-auto visible opacity-100'
            : 'invisible opacity-0'
        )}
        onClick={() => setOpen(false)}
      >
        <div className="bg-black/40 absolute inset-0" />
      </div>

      {open &&
        createPortal(
          <aside
            id="mobile-filters-panel"
            role="dialog"
            aria-modal="true"
            ref={panelRef}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              'fixed left-0 top-0 z-[70] h-[100svh] w-full transition-transform',
              open ? 'translate-x-0' : '-translate-x-full'
            )}
          >
            {/* Inner content area */}
            <div className="h-screen min-h-screen bg-[#f7efe6] p-4 md:pt-8 lg:p-8">
              <div className="bg-white h-full p-5">
                <ScrollArea className="mt-8 h-[calc(100svh-80px)]">
                  <div className="rounded-lg">
                    <div>
                      {/* Close button row - right aligned, above header */}
                      <div className="flex justify-end">
                        <button
                          onClick={() => setOpen(false)}
                          aria-label="Close filters"
                          className="hover:bg-black/5 rounded"
                        >
                          <FaTimes className="size-5 text-primary-700" />
                        </button>
                      </div>
                      {/* Header row with title and clear all button */}
                      <div className="mt-2 flex flex-row items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-primary-700">
                          {text.filterBy}
                        </h3>
                        <Link
                          scroll={false}
                          href={`/${locale}/notifications`}
                          onClick={() => setOpen(false)}
                          className="hover:bg-primary-50 rounded border border-primary-700 px-3 py-1 text-sm text-primary-700"
                        >
                          {text.clearAllFilters}
                        </Link>
                      </div>
                    </div>

                    {/* Date Filter */}
                    <div className="mb-6 mt-4 rounded bg-neutral-50 p-4">
                      <h3 className="mb-2 text-lg font-bold text-primary-700">
                        {text.filter.date}
                      </h3>
                      <DateRangeForm
                        locale={locale}
                        categories={categories}
                        departments={departments}
                        query={query}
                        start={start}
                        end={end}
                        compact
                        text={{
                          startDate: text.filter.startDate,
                          endDate: text.filter.endDate,
                          day: text.filter.day,
                          month: text.filter.month,
                          year: text.filter.year,
                        }}
                      />
                    </div>

                    {/* Category Filter */}
                    <div className="mb-6 rounded bg-neutral-50 p-4">
                      <h3 className="mb-2 text-lg font-bold text-primary-700">
                        {text.filter.category}
                      </h3>
                      <MultiCheckbox
                        param="category"
                        options={categoryOptions}
                        selected={categories}
                        locale={locale}
                        textMap={text.categories}
                      />
                    </div>

                    {/* Department Filter */}
                    <div className="mb-6 rounded bg-neutral-50 p-4">
                      <h3 className="mb-2 text-lg font-bold text-primary-700">
                        {text.filter.department}
                      </h3>
                      <MultiCheckbox
                        param="department"
                        options={departmentRows.map((d) => d.urlName)}
                        selected={departments}
                        locale={locale}
                        textMap={Object.fromEntries(
                          departmentRows.map((d) => [d.urlName, d.name])
                        )}
                      />
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </aside>,
          document.body
        )}
    </div>
  );
}
