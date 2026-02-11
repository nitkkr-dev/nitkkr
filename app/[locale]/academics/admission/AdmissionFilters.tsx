'use client';

import Link from 'next/link';

import { Button } from '~/components/buttons';
import { ScrollArea } from '~/components/ui/scroll-area';
import { cn } from '~/lib/utils';

import EducationTypeSelect from './EducationTypeSelect';
import { MultiCheckbox } from './MultiCheckbox';
import { DateRangeForm } from '../../notifications/DateRangeForm';

interface AdmissionFiltersText {
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
}

export function AdmissionFilters({
  locale,
  departments,
  selectedDepartments,
  departmentMap,
  searchParams,
  text,
}: {
  locale: string;
  departments: string[];
  selectedDepartments: string[];
  departmentMap: Record<string, string>;
  searchParams: { start?: string; end?: string };
  text: AdmissionFiltersText;
}) {
  return (
    <aside
      className={cn(
        'hidden w-[290px] shrink-0 flex-col gap-2 xl:flex',
        'sticky top-[88px] self-start'
      )}
    >
      <div className="flex items-baseline justify-between pb-2">
        <h2 className="font-serif text-2xl font-bold leading-none text-primary-700">
          {text.filterBy}
        </h2>
        <Button
          asChild
          variant="outline"
          className="rounded-sm bg-neutral-50 px-4 py-2 text-sm text-primary-700 hover:bg-primary-700 hover:text-neutral-50"
        >
          <Link scroll={false} href={`/${locale}/academics/admission`}>
            {text.clearAllFilters}
          </Link>
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="flex flex-col gap-2 pr-4">
          {/* Degree */}
          <section className="rounded border border-primary-100 bg-neutral-50 p-4">
            <h3 className="mb-2 text-lg font-bold text-primary-700">
              Degree Level
            </h3>
            <EducationTypeSelect locale={locale} />
          </section>

          {/* Date */}
          <section className="rounded border border-primary-100 bg-neutral-50 p-4">
            <h3 className="mb-2 text-lg font-bold text-primary-700">
              {text.filter.date}
            </h3>
            <DateRangeForm
              locale={locale}
              start={searchParams.start}
              end={searchParams.end}
              categories={['admission']}
              departments={selectedDepartments}
              query=""
              text={{
                startDate: text.filter.startDate,
                endDate: text.filter.endDate,
                day: text.filter.day,
                month: text.filter.month,
                year: text.filter.year,
              }}
            />
          </section>

          {/* Department */}
          <section className="rounded border border-primary-100 bg-neutral-50 p-4">
            <h3 className="mb-2 text-lg font-bold text-primary-700">
              Departments
            </h3>
            <MultiCheckbox
              departments={departments}
              selectedDepartments={selectedDepartments}
              departmentMap={departmentMap}
            />
          </section>
        </div>
      </ScrollArea>
    </aside>
  );
}
