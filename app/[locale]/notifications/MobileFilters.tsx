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
  const [isAnimating, setIsAnimating] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Handle close with animation
  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setOpen(false), 300);
  };

  // Trigger animation after open
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setIsAnimating(true));
    }
  }, [open]);

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
          'pointer-events-none fixed inset-0 z-[60] transition-opacity duration-300',
          open ? 'pointer-events-auto visible' : 'invisible',
          isAnimating ? 'opacity-100' : 'opacity-0'
        )}
        onClick={handleClose}
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
              'fixed left-0 top-0 z-[70] h-[100svh] w-full transition-transform duration-300 ease-in-out',
              isAnimating ? 'translate-x-0' : '-translate-x-full'
            )}
          >
            {/* Inner content area */}
            <div className="h-screen min-h-screen bg-[#f7efe6] p-4 md:pt-8 lg:p-8">
              <div className="bg-white flex h-full flex-col overflow-hidden p-5">
                {' '}
                {/* Added flex flex-col and overflow-hidden */}
                {/* 1. FIXED HEADER (Outside ScrollArea) */}
                <div className="mb-4 flex flex-col">
                  {/* Close button row */}
                  <div className="flex justify-end">
                    <button
                      onClick={handleClose}
                      aria-label="Close filters"
                      className="hover:bg-black/5 mt-8 rounded p-1 sm:mt-12"
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
                      onClick={handleClose}
                      className="hover:bg-primary-50 rounded border border-primary-700 px-3 py-1 text-sm text-primary-700"
                    >
                      {text.clearAllFilters}
                    </Link>
                  </div>
                </div>
                {/* 2. SCROLLABLE FILTERS AREA */}
                {/* Removed hardcoded mt-8 and calc height, replaced with flex-1 */}
                <ScrollArea className="flex-1 pr-4">
                  <div className="flex flex-col gap-6 pb-4">
                    {/* Date Filter */}
                    <div className="rounded bg-neutral-50 p-4">
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
                    <div className="rounded">
                      <MultiCheckbox
                        param="category"
                        options={categoryOptions}
                        selected={categories}
                        locale={locale}
                        textMap={text.categories}
                        title={text.filter.category}
                      />
                    </div>

                    {/* Department Filter */}
                    <div className="rounded">
                      <MultiCheckbox
                        param="department"
                        options={departmentRows.map((d) => d.urlName)}
                        selected={departments}
                        locale={locale}
                        textMap={Object.fromEntries(
                          departmentRows.map((d) => [d.urlName, d.name])
                        )}
                        title={text.filter.department}
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
