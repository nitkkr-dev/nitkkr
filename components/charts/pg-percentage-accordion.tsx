'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui';

interface ProgrammeEntry {
  programme: string;
  eligible: number;
  placed: number;
  percentagePlaced: number;
}

interface DisciplineGroup {
  discipline: string;
  programmes: ProgrammeEntry[];
  totalEligible: number;
  totalPlaced: number;
  percentagePlaced: number;
}

interface PgPercentageAccordionProps {
  data: DisciplineGroup[];
}

function getBarColor(pct: number): string {
  if (pct >= 80) return '#C5291D';
  if (pct >= 60) return '#E13F32';
  if (pct >= 40) return '#E7695F';
  return '#EE928B';
}

function getBgColor(pct: number): string {
  if (pct >= 80) return 'rgba(197,41,29,0.12)';
  if (pct >= 60) return 'rgba(225,63,50,0.12)';
  if (pct >= 40) return 'rgba(231,105,95,0.12)';
  return 'rgba(238,146,139,0.12)';
}

function ProgressRow({
  label,
  pct,
  eligible,
  placed,
  bold = false,
}: {
  label: string;
  pct: number;
  eligible: number;
  placed: number;
  bold?: boolean;
}) {
  const clamped = Math.min(Math.max(pct, 0), 100);
  const color = getBarColor(clamped);

  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <span
          className={
            bold
              ? 'text-sm font-semibold text-neutral-900 sm:text-base'
              : 'text-xs font-medium text-neutral-700 sm:text-sm'
          }
        >
          {label}
        </span>
        <div className="flex shrink-0 items-baseline gap-2.5">
          <span className="text-xs tabular-nums text-neutral-500">
            {placed}/{eligible} placed
          </span>
          <span
            className={
              bold
                ? 'text-base font-bold tabular-nums sm:text-lg'
                : 'text-sm font-bold tabular-nums sm:text-base'
            }
            style={{ color }}
          >
            {clamped.toFixed(1)}%
          </span>
        </div>
      </div>
      <div
        className={`w-full overflow-hidden rounded-full bg-neutral-200 ${bold ? 'h-3 sm:h-3.5' : 'h-2 sm:h-2.5'}`}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${clamped}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export function PgPercentageAccordion({ data }: PgPercentageAccordionProps) {
  const sorted = [...data].sort(
    (a, b) => b.percentagePlaced - a.percentagePlaced
  );

  return (
    <div className="w-full">
      {/* Color legend */}
      <div className="mb-6 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm">
        {[
          { color: '#C5291D', label: '≥ 80%' },
          { color: '#E13F32', label: '60 – 79%' },
          { color: '#E7695F', label: '40 – 59%' },
          { color: '#EE928B', label: '< 40%' },
        ].map(({ color, label }) => (
          <span key={label} className="flex items-center gap-1.5">
            <span
              className="inline-block size-3 rounded-sm"
              style={{ backgroundColor: color }}
            />
            {label}
          </span>
        ))}
      </div>

      <Accordion type="multiple" className="space-y-3">
        {sorted.map((group) => {
          const pct = Math.min(Math.max(group.percentagePlaced, 0), 100);
          const bg = getBgColor(pct);

          return (
            <AccordionItem
              key={group.discipline}
              value={group.discipline}
              className="overflow-hidden rounded-lg border-0"
              style={{ backgroundColor: bg }}
            >
              <AccordionTrigger className="px-3 py-2.5 hover:no-underline sm:px-4 sm:py-3">
                <div className="flex w-full flex-col gap-1.5 pr-3">
                  <ProgressRow
                    label={group.discipline}
                    pct={pct}
                    eligible={group.totalEligible}
                    placed={group.totalPlaced}
                    bold
                  />
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-3 pb-3 pt-0 sm:px-4 sm:pb-4">
                <div className="bg-white/60 space-y-2.5 rounded-md p-2.5 sm:p-3">
                  {group.programmes
                    .sort((a, b) => b.percentagePlaced - a.percentagePlaced)
                    .map((prog) => (
                      <ProgressRow
                        key={prog.programme}
                        label={prog.programme}
                        pct={prog.percentagePlaced}
                        eligible={prog.eligible}
                        placed={prog.placed}
                      />
                    ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
