'use client';

import React from 'react';

import { cn } from '~/lib/utils';
import { Slider } from '~/components/ui';
import { Button } from '~/components/buttons';
import { applyDateFilter } from '~/server/actions';

export function DateRangeForm({
  locale,
  categories,
  departments,
  query,
  start,
  end,
  compact = false,
}: {
  locale: string;
  categories?: string[];
  departments?: string[];
  query?: string;
  start?: string;
  end?: string;
  compact?: boolean;
}) {
  const [yearRange, setYearRange] = React.useState<number[]>([
    start ? new Date(start).getFullYear() : 2000,
    end ? new Date(end).getFullYear() : 2025,
  ]);

  const startDate = start ? new Date(start) : undefined;
  const endDate = end ? new Date(end) : undefined;

  return (
    <form className={cn('flex flex-col gap-4', compact && 'text-xs')}>
      {/* Hidden fields to preserve state */}
      <input type="hidden" name="locale" value={locale} />
      {query && <input type="hidden" name="q" value={query} />}
      {categories?.map((c) => (
        <input key={c} type="hidden" name="category" value={c} />
      ))}
      {departments?.map((d) => (
        <input key={d} type="hidden" name="department" value={d} />
      ))}

      {/* Year Range Slider */}
      <div className="space-y-3">
        <div className="relative">
          <div className="absolute -top-6 left-0 text-sm font-bold text-neutral-900">
            {yearRange[0]}
          </div>
          <div className="absolute -top-6 right-0 text-sm font-bold text-neutral-900">
            {yearRange[1]}
          </div>
        </div>
        <Slider
          min={2000}
          max={2025}
          step={1}
          value={yearRange}
          onValueChange={setYearRange}
          className="w-full"
        />
      </div>

      {/* Start Date */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-primary-700">
          Start date
        </label>
        <div className="grid grid-cols-3 gap-2">
          <input
            name="start-day"
            type="number"
            min="1"
            max="31"
            placeholder="Day"
            defaultValue={startDate?.getDate() ?? 1}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            name="start-month"
            type="number"
            min="1"
            max="12"
            placeholder="Month"
            defaultValue={startDate ? startDate.getMonth() + 1 : 1}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            name="start-year"
            type="number"
            min="2000"
            max="2100"
            placeholder="Year"
            value={yearRange[0]}
            onChange={(e) => setYearRange([+e.target.value, yearRange[1]])}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
        </div>
      </div>

      {/* End Date */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-primary-700">End</label>
        <div className="grid grid-cols-3 gap-2">
          <input
            name="end-day"
            type="number"
            min="1"
            max="31"
            placeholder="Day"
            defaultValue={endDate?.getDate() ?? 1}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            name="end-month"
            type="number"
            min="1"
            max="12"
            placeholder="Month"
            defaultValue={endDate ? endDate.getMonth() + 1 : 1}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            name="end-year"
            type="number"
            min="2000"
            max="2100"
            placeholder="Year"
            value={yearRange[1]}
            onChange={(e) => setYearRange([yearRange[0], +e.target.value])}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
        </div>
      </div>

      <Button
        variant="primary"
        className="mt-2 w-full"
        formAction={applyDateFilter}
      >
        Apply
      </Button>
    </form>
  );
}
