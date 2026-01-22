'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

import { cn } from '~/lib/utils';

export function MultiCheckbox({
  param,
  options,
  selected,
  locale,
  textMap,
  title,
  basePath = '/notifications',
}: {
  param: string;
  options: readonly string[];
  selected: string[];
  locale: string;
  textMap: Record<string, string>;
  title: string;
  basePath?: string;
}) {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // Ref for the scrollable options container
  const optionsRef = useRef<HTMLDivElement>(null);

  // Sort options: selected ones first, then unselected
  const sortedOptions = [...options].sort((a, b) => {
    const aSelected = selected.includes(a);
    const bSelected = selected.includes(b);
    if (aSelected && !bSelected) return -1;
    if (!aSelected && bSelected) return 1;
    return 0;
  });

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
    return `/${locale}${basePath}${qs ? `?${qs}` : ''}`;
  };

  return (
    <div className="relative w-full">
      {/* Card Container */}
      <div
        className={cn(
          'bg-neutral-50 overflow-hidden rounded-lg border shadow-sm transition-all duration-200 border-primary-500' 
        )}
      >
        {/* Dropdown Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full px-3 items-center justify-between text-left transition-colors"
        >
          <h3 className="text-lg mt-2 font-bold text-primary-300">{title}</h3>
          <IoChevronDown
            className={cn(
              'h-5 w-5 text-primary-700 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        {/* Dropdown Content with Animation */}
        <div
          className={cn(
            'grid transition-all duration-200 ease-in-out',
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          )}
        >
          <div className="overflow-hidden">
            <div className="max-h-[300px] overflow-y-auto px-2 pb-2 font-semibold text-shade-dark">
              {sortedOptions.map((opt) => {
                const isChecked = selected.includes(opt);
                return (
                  <Link
                    key={opt}
                    scroll={false}
                    href={buildLocalHref({
                      [param]: getUpdatedValues(opt),
                    })}
                    className={cn(
                      'flex items-center gap-3 rounded-md border bg-white px-3 py-2.5 mb-1.5 transition-color',
                      isChecked ? 'border-primary-700' : 'border-neutral-200'
                    )}
                  >
                    <div
                      className={cn(
                        'flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 transition-colors',
                        isChecked
                          ? 'border-primary-700 bg-primary-700'
                          : 'border-primary-700 bg-white'
                      )}
                    >
                      {isChecked && (
                        <svg
                          className="h-3 w-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className=" font-semibold text-shade-dark">
                      {textMap[opt] ?? opt}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Clear Filters Button */}
            {selected.length > 0 && (
              <div className="px-4 py-3 flex justify-center">
                <Link
                  scroll={false}
                  href={buildLocalHref({ [param]: [] })}
                  className="inline-flex items-center rounded-md border border-primary-700 bg-white px-4 py-2 text-center text-sm font-medium text-primary-700 transition-colors hover:bg-primary-700 hover:text-neutral-50"
                  onClick={() => {
                    if (optionsRef.current) {
                      optionsRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  Clear {title} Filters
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
