'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { cn } from '~/lib/utils';
import { Slider } from '~/components/ui';

interface DateRangeFormText {
  startDate: string;
  endDate: string;
  day: string;
  month: string;
  year: string;
}

export function DateRangeForm({
  start,
  end,
  compact = false,
  text,
}: {
  locale: string;
  categories?: string[];
  departments?: string[];
  query?: string;
  start?: string;
  end?: string;
  compact?: boolean;
  text?: DateRangeFormText;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const [yearRange, setYearRange] = React.useState<number[]>([
    start ? new Date(start).getFullYear() : 2000,
    end ? new Date(end).getFullYear() : currentYear,
  ]);

  const startDate = start ? new Date(start) : undefined;
  const endDate = end ? new Date(end) : undefined;

  const [startDay, setStartDay] = React.useState(startDate?.getDate() ?? 1);
  const [startMonth, setStartMonth] = React.useState(
    startDate ? startDate.getMonth() + 1 : 1
  );
  const [endDay, setEndDay] = React.useState(
    endDate?.getDate() ?? currentDate.getDate()
  );
  const [endMonth, setEndMonth] = React.useState(
    endDate ? endDate.getMonth() + 1 : currentDate.getMonth() + 1
  );

  // Apply filters to URL - only called on explicit user actions
  const applyFilters = React.useCallback(
    (newYearRange?: number[]) => {
      const params = new URLSearchParams(searchParams);
      const years = newYearRange ?? yearRange;

      const startVal =
        years[0] && startMonth && startDay
          ? `${years[0]}-${String(startMonth).padStart(2, '0')}-${String(startDay).padStart(2, '0')}`
          : undefined;
      const endVal =
        years[1] && endMonth && endDay
          ? `${years[1]}-${String(endMonth).padStart(2, '0')}-${String(endDay).padStart(2, '0')}`
          : undefined;

      if (startVal) {
        params.set('start', startVal);
      } else {
        params.delete('start');
      }

      if (endVal) {
        params.set('end', endVal);
      } else {
        params.delete('end');
      }

      const newUrl = `${pathname}?${params.toString()}`;
      router.push(newUrl, { scroll: false });
    },
    [
      yearRange,
      startDay,
      startMonth,
      endDay,
      endMonth,
      searchParams,
      pathname,
      router,
    ]
  );

  return (
    <div className={cn('flex flex-col gap-2 pt-4', compact && 'text-xs')}>
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
          max={2026}
          step={1}
          value={yearRange}
          onValueChange={setYearRange}
          onValueCommit={(value) => {
            setYearRange(value);
            applyFilters(value);
          }}
          className="w-full"
        />
      </div>

      {/* Start Date */}
      <div className="space-y-1">
        <label className="text-sm font-semibold text-primary-300">
          {text?.startDate ?? 'Start Date'}
        </label>
        <div className="grid grid-cols-3 gap-2">
          <input
            type="number"
            min="1"
            max="31"
            placeholder={text?.day ?? 'Day'}
            value={startDay}
            onChange={(e) => setStartDay(+e.target.value)}
            onBlur={() => applyFilters()}
            className="bg-white rounded border border-neutral-300 px-2 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            type="number"
            min="1"
            max="12"
            placeholder={text?.month ?? 'Month'}
            value={startMonth}
            onChange={(e) => setStartMonth(+e.target.value)}
            onBlur={() => applyFilters()}
            className="bg-white rounded border border-neutral-300 px-2 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            type="number"
            min="2000"
            max="2100"
            placeholder={text?.year ?? 'Year'}
            value={yearRange[0]}
            onChange={(e) => setYearRange([+e.target.value, yearRange[1]])}
            onBlur={() => applyFilters()}
            className="bg-white rounded border border-neutral-300 px-2 py-2 text-sm placeholder:text-neutral-400"
          />
        </div>
      </div>

      {/* End Date */}
      <div className="space-y-1">
        <label className="text-sm font-semibold text-primary-300">
          {text?.endDate ?? 'End Date'}
        </label>
        <div className="grid grid-cols-3 gap-2">
          <input
            type="number"
            min="1"
            max="31"
            placeholder={text?.day ?? 'Day'}
            value={endDay}
            onChange={(e) => setEndDay(+e.target.value)}
            onBlur={() => applyFilters()}
            className="bg-white rounded border border-neutral-300 px-2 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            type="number"
            min="1"
            max="12"
            placeholder={text?.month ?? 'Month'}
            value={endMonth}
            onChange={(e) => setEndMonth(+e.target.value)}
            onBlur={() => applyFilters()}
            className="bg-white rounded border border-neutral-300 px-2 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            type="number"
            min="2000"
            max="2100"
            placeholder={text?.year ?? 'Year'}
            value={yearRange[1]}
            onChange={(e) => setYearRange([yearRange[0], +e.target.value])}
            onBlur={() => applyFilters()}
            className="bg-white rounded border border-neutral-300 px-2 py-2 text-sm placeholder:text-neutral-400"
          />
        </div>
      </div>
    </div>
  );
}
