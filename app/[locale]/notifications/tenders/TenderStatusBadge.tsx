import type { TendersTranslations } from '~/i18n/translate/tenders';
import type { TenderStatus } from '~/server/db/schema/tenders.schema';

interface TenderStatusBadgeProps {
  status: TenderStatus;
  endDate: Date;
  extendedDate: Date | null;
  text: TendersTranslations;
}

export function TenderStatusBadge({
  status,
  endDate,
  extendedDate,
  text,
}: TenderStatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status) {
      case 'live':
        return {
          label: text.status.live,
          className: 'bg-green-100 text-green-800 border-green-200',
        };
      case 'archived':
        return {
          label: text.status.closed,
          className: 'bg-neutral-100 text-neutral-600 border-neutral-200',
        };
      default:
        return {
          label: status,
          className: 'bg-neutral-100 text-neutral-600 border-neutral-200',
        };
    }
  };

  const config = getStatusConfig();

  // Calculate days remaining for live tenders
  const getDaysRemaining = () => {
    if (status === 'archived') return null;

    const effectiveDeadline =
      extendedDate && extendedDate > endDate ? extendedDate : endDate;
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const target = new Date(effectiveDeadline);
    target.setHours(0, 0, 0, 0);

    const diffTime = target.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return null;
    if (diffDays === 0) return '< 1 day';
    return `${diffDays} ${text.daysRemaining}`;
  };

  const daysRemaining = getDaysRemaining();

  // Show if the deadline was extended
  const isExtended = extendedDate && extendedDate > endDate;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5">
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.className}`}
        >
          {config.label}
        </span>
        {isExtended && status === 'live' && (
          <span className="border-orange-200 bg-orange-100 text-orange-800 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">
            {text.status.extended}
          </span>
        )}
      </div>
      {daysRemaining && (
        <span className="text-xs text-neutral-500">{daysRemaining}</span>
      )}
    </div>
  );
}
