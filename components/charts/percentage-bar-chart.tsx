interface PercentageDataPoint {
  programme: string;
  percentagePlaced: number;
  eligible: number;
  placed: number;
}

interface PercentageBarChartProps {
  data: PercentageDataPoint[];
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

export function PercentageBarChart({ data }: PercentageBarChartProps) {
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

      {/* Progress bar rows */}
      <div className="space-y-3">
        {sorted.map((entry) => {
          const pct = Math.min(Math.max(entry.percentagePlaced, 0), 100);
          const color = getBarColor(pct);
          const bg = getBgColor(pct);

          return (
            <div
              key={entry.programme}
              className="rounded-lg px-3 py-2.5 sm:px-4 sm:py-3"
              style={{ backgroundColor: bg }}
            >
              {/* Top row: programme name + stats */}
              <div className="mb-1.5 flex items-baseline justify-between gap-4">
                <span className="text-sm font-medium text-neutral-800 sm:text-base">
                  {entry.programme}
                </span>
                <div className="flex shrink-0 items-baseline gap-3">
                  <span className="text-xs text-neutral-500 sm:text-sm">
                    {entry.placed}/{entry.eligible}
                  </span>
                  <span
                    className="text-base font-bold tabular-nums sm:text-lg"
                    style={{ color }}
                  >
                    {pct.toFixed(1)}%
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-200 sm:h-3.5">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
