'use client';

import { createPortal } from 'react-dom';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaTimes } from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';

import { ScrollArea } from '~/components/ui/scroll-area';
import { cn } from '~/lib/utils';

import { MultiCheckbox } from './MultiCheckbox';

interface Dept {
  id: number;
  name: string;
  urlName: string;
}

interface MobileFiltersProps {
  locale: string;
  designations: string[];
  departments: string[];
  departmentRows: Dept[];
  designationOptions: readonly string[];
  text: {
    filters: string;
    filterBy: string;
    clearAllFilters: string;
    designation: string;
    department: string;
  };
  designationTextMap: Record<string, string>;
  className?: string;
}

export function MobileFilters({
  locale,
  designations,
  departments,
  departmentRows,
  designationOptions,
  text,
  designationTextMap,
  className,
}: MobileFiltersProps) {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams();

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
  const activeFiltersCount = designations.length + departments.length;

  // Build clear all href preserving query param
  const buildClearAllHref = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('designation');
    params.delete('department');
    const qs = params.toString();
    return `/${locale}/faculty-and-staff${qs ? `?${qs}` : ''}`;
  };

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
              <div className="bg-white h-full p-5">
                <ScrollArea className="mt-8 h-[calc(100svh-80px)]">
                  <div className="rounded-lg">
                    <div>
                      {/* Close button row - right aligned, above header */}
                      <div className="flex justify-end">
                        <button
                          onClick={handleClose}
                          aria-label="Close filters"
                          className="hover:bg-black/5 rounded"
                        >
                          <FaTimes className="size-5 pr-1 text-primary-700" />
                        </button>
                      </div>
                      {/* Header row with title and clear all button */}
                      <div className="mt-2 flex flex-row items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-primary-700">
                          {text.filterBy}
                        </h3>
                        <Link
                          scroll={false}
                          href={buildClearAllHref()}
                          onClick={handleClose}
                          className="hover:bg-primary-50 rounded border border-primary-700 px-3 py-1 text-sm text-primary-700"
                        >
                          {text.clearAllFilters}
                        </Link>
                      </div>
                    </div>

                    {/* Designation Filter */}
                    <div className="mb-6 mt-4 rounded bg-neutral-50 p-4">
                      <h3 className="mb-2 text-lg font-bold text-primary-700">
                        {text.designation}
                      </h3>
                      <MultiCheckbox
                        param="designation"
                        options={designationOptions}
                        selected={designations}
                        locale={locale}
                        textMap={designationTextMap}
                      />
                    </div>

                    {/* Department Filter */}
                    <div className="mb-6 rounded bg-neutral-50 p-4">
                      <h3 className="mb-2 text-lg font-bold text-primary-700">
                        {text.department}
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
