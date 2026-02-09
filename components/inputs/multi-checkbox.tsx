'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

import { cn } from '~/lib/utils';
import { ScrollArea } from '~/components/ui';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs/select';

export interface MultiCheckboxProps {
  /** URL search param name */
  param: string;
  /** Available options */
  options: readonly string[];
  /** Currently selected options */
  selected: string[];
  /** Locale for URL building */
  locale: string;
  /** Map of option values to display text */
  textMap: Record<string, string>;
  /** Base path for URL building (e.g., '/notifications', '/events') */
  basePath: string;
  /**
   * Variant style:
   * - 'accordion': Collapsible card with title (notifications style)
   * - 'list': Simple scrollable list with "All" option (events style)
   */
  variant?: 'accordion' | 'list';
  /** Title for accordion variant (required when variant='accordion') */
  title?: string;
  /** Show as mobile select dropdown instead */
  select?: boolean;
  /** Height of the scroll area */
  scrollHeight?: string;
}

export function MultiCheckbox({
  param,
  options,
  selected,
  locale,
  textMap,
  basePath,
  variant = 'accordion',
  title,
  select = false,
  scrollHeight,
}: MultiCheckboxProps) {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  const isAllSelected = selected.length === 0;

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

  // Mobile select dropdown variant
  if (select) {
    return (
      <Select navigate>
        <SelectTrigger className="px-4 py-5 sm:w-1/2 lg:w-1/3 xl:hidden">
          <SelectValue
            placeholder={
              selected.length
                ? `${selected.length} selected`
                : `All ${param === 'category' ? 'Categories' : 'Options'}`
            }
          />
        </SelectTrigger>
        <SelectContent>
          {/* All Option */}
          <div className="flex items-center px-2 py-1">
            <input
              type="checkbox"
              id={`mobile-${param}-all`}
              className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
              checked={isAllSelected}
              readOnly
            />
            <Link
              scroll={false}
              href={buildLocalHref({
                [param]: [],
              })}
              className="ml-2 w-full py-1 font-semibold"
            >
              All
            </Link>
          </div>
          <hr className="my-1 border-neutral-200" />
          {sortedOptions.map((opt) => (
            <div key={opt} className="flex items-center px-2 py-1">
              <input
                type="checkbox"
                id={`mobile-${param}-${opt}`}
                className="h-4 w-4 rounded border-neutral-300 text-primary-700 focus:ring-primary-700"
                checked={selected.includes(opt)}
                readOnly
              />
              <Link
                scroll={false}
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
    );
  }

  // Accordion variant (notifications style)
  if (variant === 'accordion') {
    return (
      <div className="relative w-full">
        {/* Card Container */}
        <div
          className={cn(
            'overflow-hidden rounded-md border border-primary-500 bg-neutral-50 shadow-sm transition-all duration-200'
          )}
        >
          {/* Dropdown Trigger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls={`${param}-content`}
            className="flex w-full items-center justify-between px-3 text-left transition-colors"
          >
            <h3 className="mt-3 text-lg font-bold text-primary-300">{title}</h3>
            <IoChevronDown
              className={cn(
                'h-5 w-5 text-primary-700 transition-transform duration-200',
                isOpen && 'rotate-180'
              )}
            />
          </button>

          {/* Dropdown Content with Animation */}
          <div
            id={`${param}-content`}
            className={cn(
              'grid transition-all duration-200 ease-in-out',
              isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            )}
          >
            <div className="overflow-hidden">
              <ScrollArea
                ref={optionsRef}
                className={cn(
                  'px-4 pb-2 pt-1 font-semibold text-shade-dark',
                  scrollHeight ?? 'h-[300px]'
                )}
              >
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
                        'bg-white mb-1.5 flex items-center gap-3 rounded-sm border px-3 py-2.5 transition-colors',
                        isChecked ? 'border-primary-700' : 'border-neutral-200'
                      )}
                    >
                      <div
                        className={cn(
                          'flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 transition-colors',
                          isChecked
                            ? 'border-primary-700 bg-primary-700'
                            : 'bg-white border-primary-700'
                        )}
                      >
                        {isChecked && (
                          <svg
                            className="text-white h-3 w-3"
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
                      <span className="font-semibold text-shade-dark">
                        {textMap[opt] ?? opt}
                      </span>
                    </Link>
                  );
                })}
              </ScrollArea>

              {/* Clear Filters Button */}
              {selected.length > 0 && (
                <div className="flex justify-center px-4 py-3">
                  <Link
                    scroll={false}
                    href={buildLocalHref({ [param]: [] })}
                    className="bg-white inline-flex items-center rounded-md border border-primary-700 px-4 py-2 text-center text-sm font-medium text-primary-700 transition-colors hover:bg-primary-700 hover:text-neutral-50"
                    onClick={() => {
                      const root = optionsRef.current;
                      if (root) {
                        const viewport = root.querySelector<HTMLElement>(
                          '[data-radix-scroll-area-viewport]'
                        );
                        if (viewport) {
                          viewport.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                          });
                        }
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

  // List variant (events style)
  return (
    <ScrollArea className={scrollHeight ?? 'h-[200px]'}>
      <ol className="w-full space-y-2 pr-4">
        {/* All Option */}
        <li>
          <Link
            scroll={false}
            href={buildLocalHref({
              [param]: [],
            })}
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
        {sortedOptions.map((opt) => {
          const isChecked = selected.includes(opt);
          return (
            <li key={opt}>
              <Link
                scroll={false}
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
