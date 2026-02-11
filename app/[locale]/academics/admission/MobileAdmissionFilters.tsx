'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';

import { ScrollArea } from '~/components/ui/scroll-area';
import { cn } from '~/lib/utils';

import { DateRangeForm } from '../../notifications/DateRangeForm';
import { MultiCheckbox } from './MultiCheckbox';

interface MobileAdmissionFiltersProps {
  locale: string;
  departments: string[];
  selectedDepartments: string[];
  departmentMap: Record<string, string>;
  start?: string;
  end?: string;
  text: {
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

export function MobileAdmissionFilters({
  locale,
  departments,
  selectedDepartments,
  departmentMap,
  start,
  end,
  text,
  className,
}: MobileAdmissionFiltersProps) {
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

  // Calculate active filters count (including date filters)
  const dateFiltersCount = (start ? 1 : 0) + (end ? 1 : 0);
  const deptFiltersCount = selectedDepartments.length;
  const totalFilters = dateFiltersCount + deptFiltersCount;

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setOpen(true)}
        className={cn(
          'bg-white hover:text-white relative inline-flex items-center gap-2 rounded border border-primary-700 px-4 py-2 text-sm font-semibold text-primary-700 hover:bg-primary-700 xl:hidden',
          className
        )}
      >
        <MdFilterList className="text-lg" />
        <span>Filters</span>
        {totalFilters > 0 && (
          <span className="text-white ml-1 inline-flex items-center justify-center rounded-full bg-primary-700 px-2 py-0.5 text-xs font-bold">
            {totalFilters}
          </span>
        )}
      </button>

      {/* Mobile Filter Modal */}
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-40 bg-neutral-50 transition-opacity duration-300"
            style={{ opacity: isAnimating ? 1 : 0 }}
            onClick={handleClose}
          >
            {/* Backdrop Close Button (top-right) */}
            <button
              onClick={handleClose}
              aria-label="Close filters"
              className="z-60 text-white fixed right-4 top-4 inline-flex items-center justify-center rounded-full bg-neutral-900 p-2 shadow-lg hover:bg-neutral-800"
            >
              <FaTimes className="text-lg" />
            </button>
            <div
              className={cn(
                'bg-white fixed left-0 top-0 z-50 flex h-full w-[85vw] max-w-sm flex-col shadow-2xl transition-transform duration-300',
                isAnimating ? 'translate-x-0' : '-translate-x-full'
              )}
              onClick={(e) => e.stopPropagation()}
              ref={panelRef}
            >
              {/* Header */}
              <div className="border-gray-200 flex items-center justify-between border-b px-4 py-3">
                <h2 className="text-lg font-bold text-primary-700">
                  {text.filterBy}
                </h2>
                <button
                  onClick={handleClose}
                  className="text-white rounded-full bg-neutral-900 p-2 hover:bg-neutral-800"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Filters Content */}
              <ScrollArea className="flex-1">
                <div className="space-y-4 p-4">
                  {/* Date Filter */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary-700">
                      {text.filter.date}
                    </h3>
                    <DateRangeForm
                      locale={locale}
                      categories={['admission']}
                      departments={selectedDepartments}
                      query=""
                      start={start}
                      end={end}
                      text={{
                        startDate: text.filter.startDate,
                        endDate: text.filter.endDate,
                        day: text.filter.day,
                        month: text.filter.month,
                        year: text.filter.year,
                      }}
                    />
                  </div>

                  {/* Department Filter */}
                  {departments.length > 0 && (
                    <div className="border-gray-200 space-y-2 border-t pt-4">
                      <h3 className="font-semibold text-primary-700">
                        Departments
                      </h3>
                      <MultiCheckbox
                        departments={departments}
                        selectedDepartments={selectedDepartments}
                        departmentMap={departmentMap}
                      />
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Footer */}
              <div className="border-gray-200 border-t p-4">
                <Link
                  href={`/${locale}/academics/admission`}
                  scroll={false}
                  className="text-white hover:bg-primary-800 block w-full rounded bg-primary-700 px-4 py-2 text-center font-semibold"
                  onClick={handleClose}
                >
                  {text.clearAllFilters}
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
