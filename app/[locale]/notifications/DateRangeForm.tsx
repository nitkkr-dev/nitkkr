'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { cn } from '~/lib/utils';
import { Slider } from '~/components/ui';

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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [yearRange, setYearRange] = React.useState<number[]>([
    start ? new Date(start).getFullYear() : 2000,
    end ? new Date(end).getFullYear() : 2025,
  ]);

  const startDate = start ? new Date(start) : undefined;
  const endDate = end ? new Date(end) : undefined;

  const [startDay, setStartDay] = React.useState(startDate?.getDate() ?? 1);
  const [startMonth, setStartMonth] = React.useState(
    startDate ? startDate.getMonth() + 1 : 1
  );
  const [endDay, setEndDay] = React.useState(endDate?.getDate() ?? 1);
  const [endMonth, setEndMonth] = React.useState(
    endDate ? endDate.getMonth() + 1 : 1
  );

  // Auto-apply when date values change
  React.useEffect(() => {
    const params = new URLSearchParams(searchParams);

    const startVal =
      yearRange[0] && startMonth && startDay
        ? `${yearRange[0]}-${String(startMonth).padStart(2, '0')}-${String(startDay).padStart(2, '0')}`
        : undefined;
    const endVal =
      yearRange[1] && endMonth && endDay
        ? `${yearRange[1]}-${String(endMonth).padStart(2, '0')}-${String(endDay).padStart(2, '0')}`
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
  }, [yearRange, startDay, startMonth, endDay, endMonth]);

  return (
    <div className={cn('flex flex-col gap-4 pt-4', compact && 'text-xs')}>
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
      <div className="space-y-1">
        <label className="text-sm font-semibold text-primary-300">
          Start Date
        </label>
        <div className="grid grid-cols-3 gap-2">
          <input
            type="number"
            min="1"
            max="31"
            placeholder="Day"
            value={startDay}
            onChange={(e) => setStartDay(+e.target.value)}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            type="number"
            min="1"
            max="12"
            placeholder="Month"
            value={startMonth}
            onChange={(e) => setStartMonth(+e.target.value)}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
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
      <div className="space-y-1">
        <label className="text-sm font-semibold text-primary-300">
          End Date
        </label>
        <div className="grid grid-cols-3 gap-2">
          <input
            type="number"
            min="1"
            max="31"
            placeholder="Day"
            value={endDay}
            onChange={(e) => setEndDay(+e.target.value)}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
            type="number"
            min="1"
            max="12"
            placeholder="Month"
            value={endMonth}
            onChange={(e) => setEndMonth(+e.target.value)}
            className="bg-white rounded border border-neutral-300 px-3 py-2 text-sm placeholder:text-neutral-400"
          />
          <input
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
    </div>
  );
}
