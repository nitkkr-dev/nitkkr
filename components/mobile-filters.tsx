'use client';

import { createPortal } from 'react-dom';
import React, { startTransition, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';

import { ScrollArea } from '~/components/ui/scroll-area';
import { DateRangeFilter, MultiCheckbox } from '~/components/inputs';
import { cn } from '~/lib/utils';

// -------------- Mobile Filters ------------------
// How to customize for different pages:
// 1. Import and use <MobileFilters> in the page, passing appropriate props
// 2. For category/department/degreeLevel filters, pass config objects to enable them
//    - Dept rows should have 'urlName' for building URLs and 'name' for display
// 3. Provide localized text via the 'text' prop
// If new filter types are needed in the future,
// add new optional config props and
// render corresponding filter components in the panel
// ------------------------------------------------

interface Dept {
  id: number;
  name: string;
  urlName: string;
}

/** Optional category filter config */
interface CategoryFilterConfig {
  options: readonly string[];
  selected: string[];
  textMap: Record<string, string>;
  title: string;
}

/** Optional department filter config */
interface DepartmentFilterConfig {
  selected: string[];
  rows: Dept[];
  title: string;
}

/** Optional degree level filter config */
interface DegreeLevelFilterConfig {
  options: readonly string[];
  selected: string[];
  textMap: Record<string, string>;
  title: string;
}

/** Optional majors filter config */
interface MajorsFilterConfig {
  options: readonly string[];
  selected: string[];
  textMap: Record<string, string>;
  title: string;
}

/** Optional semester filter config */
interface SemesterFilterConfig {
  options: readonly string[];
  selected: string[];
  textMap: Record<string, string>;
  title: string;
}

/** Optional year dropdown filter config */
interface YearFilterDropdownConfig {
  options: readonly string[];
  selected: string | null;
  textMap: Record<string, string>;
  title: string;
}

interface MobileFiltersProps {
  locale: string;
  /** Base path used for building filter URLs, e.g. '/events' or '/notifications' */
  basePath: string;
  start?: string;
  end?: string;
  /** Category filter — pass to enable */
  category?: CategoryFilterConfig;
  /** Department filter — pass to enable */
  department?: DepartmentFilterConfig;
  /** Degree level filter — pass to enable */
  degreeLevel?: DegreeLevelFilterConfig;
  /** Majors filter — pass to enable */
  majors?: MajorsFilterConfig;
  /** Semester filter — pass to enable */
  semester?: SemesterFilterConfig;
  /** Year dropdown filter — pass to enable */
  yearDropdown?: YearFilterDropdownConfig;
  text: {
    filters: string;
    filterBy: string;
    clearAllFilters: string;
    filter: {
      date: string;
      startDate: string;
      endDate: string;
      day: string;
      month: string;
      year: string;
    };
  };
  className?: string;
}

export function MobileFilters({
  locale,
  basePath,
  start,
  end,
  category,
  department,
  degreeLevel,
  majors,
  semester,
  yearDropdown,
  text,
  className,
}: MobileFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
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

  // Calculate active filters count
  const dateFiltersCount = (start ? 1 : 0) + (end ? 1 : 0);
  const activeFiltersCount =
    (category?.selected.length ?? 0) +
    (department?.selected.length ?? 0) +
    (degreeLevel?.selected.length ?? 0) +
    (majors?.selected.length ?? 0) +
    (semester?.selected.length ?? 0) +
    (yearDropdown?.selected ? 1 : 0) +
    dateFiltersCount;

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
                {/* 1. FIXED HEADER */}
                <div className="mb-4 flex flex-col">
                  {/* Close button row */}
                  <div className="mt-8 flex justify-end sm:mt-12">
                    <button
                      onClick={handleClose}
                      aria-label="Close filters"
                      className="hover:bg-black/5 rounded p-1"
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
                      href={`/${locale}${basePath}`}
                      onClick={handleClose}
                      className="hover:bg-primary-50 rounded border border-primary-700 px-3 py-1 text-sm text-primary-700"
                    >
                      {text.clearAllFilters}
                    </Link>
                  </div>
                </div>

                {/* 2. SCROLLABLE FILTERS AREA */}
                <ScrollArea className="flex-1 pr-4">
                  <div className="flex flex-col gap-6 pb-4">
                    {/* Date Filter */}
                    <div className="rounded bg-neutral-50 p-4">
                      <h3 className="mb-2 text-lg font-bold text-primary-700">
                        {text.filter.date}
                      </h3>
                      <DateRangeFilter
                        locale={locale}
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

                    {/* Category Filter (conditional) */}
                    {category && (
                      <div className="rounded">
                        <MultiCheckbox
                          param="category"
                          options={category.options}
                          selected={category.selected}
                          locale={locale}
                          textMap={category.textMap}
                          title={category.title}
                          basePath={basePath}
                        />
                      </div>
                    )}

                    {/* Year Dropdown Filter (conditional) */}
                    {yearDropdown && (
                      <div className="rounded-lg border border-primary-100 bg-neutral-50 p-5 shadow-sm">
                        <h3 className="mb-4 text-lg font-semibold text-primary-700">
                          {yearDropdown.title}
                        </h3>

                        <div className="relative">
                          <select
                            value={yearDropdown.selected ?? ''}
                            onChange={(e) => {
                              const year = e.target.value;
                              const params = new URLSearchParams(searchParams.toString());

                              if (year) {
                                params.set('year', year);
                              } else {
                                params.delete('year');
                              }

                              startTransition(() => {
                                router.replace(`?${params.toString()}`, { scroll: false });
                              });

                              handleClose();
                            }}                                                
                            className="
                              w-full
                              appearance-none
                              rounded-md
                              border border-primary-200
                              bg-white
                              px-4 py-2
                              pr-10
                              text-sm
                              text-primary-700
                              shadow-sm
                              focus:border-primary-600
                              focus:ring-2
                              focus:ring-primary-500
                              focus:outline-none
                              transition
                            "
                          >
                            <option value="">
                              Select {yearDropdown.title.toLowerCase()}
                            </option>

                            {yearDropdown.options.map((option) => (
                              <option key={option} value={option}>
                                {yearDropdown.textMap[option] || option}
                              </option>
                            ))}
                          </select>

                          {/* Custom Arrow */}
                          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary-600">
                            ▼
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Department Filter (conditional) */}
                    {department && (
                      <div className="rounded">
                        <MultiCheckbox
                          param="department"
                          options={department.rows.map((d) => d.urlName)}
                          selected={department.selected}
                          locale={locale}
                          textMap={Object.fromEntries(
                            department.rows.map((d) => [d.urlName, d.name])
                          )}
                          title={department.title}
                          basePath={basePath}
                        />
                      </div>
                    )}

                    {/* Degree Level Filter (conditional) */}
                    {degreeLevel && (
                      <div className="rounded">
                        <MultiCheckbox
                          param="degree"
                          options={degreeLevel.options}
                          selected={degreeLevel.selected}
                          locale={locale}
                          textMap={degreeLevel.textMap}
                          title={degreeLevel.title}
                          basePath={basePath}
                        />
                      </div>
                    )}

                    {/* Majors Filter (conditional) */}
                    {majors && (
                      <div className="rounded">
                        <MultiCheckbox
                          param="major"
                          options={majors.options}
                          selected={majors.selected}
                          locale={locale}
                          textMap={majors.textMap}
                          title={majors.title}
                          basePath={basePath}
                        />
                      </div>
                    )}

                    {/* Semester Filter (conditional) */}
                    {semester && (
                      <div className="rounded">
                        <MultiCheckbox
                          param="semester"
                          options={semester.options}
                          selected={semester.selected}
                          locale={locale}
                          textMap={semester.textMap}
                          title={semester.title}
                          basePath={basePath}
                        />
                      </div>
                    )}

                    
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
