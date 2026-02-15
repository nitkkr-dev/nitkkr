// FILTERING PAGES : NOTIFICATIONS, EVENTS, ADMISSIONS : HELPERS

export function toArray(v: string | string[] | undefined): string[] {
  return Array.isArray(v) ? v : v ? [v] : [];
}

export function parseDate(d?: string) {
  if (!d) return undefined;
  const date = new Date(d);
  return isNaN(date.getTime()) ? undefined : date;
}

export function buildHref(
  locale: string,
  updates: Record<string, unknown>
): string {
  const params = new URLSearchParams();

  Object.entries(updates).forEach(([k, v]) => {
    if (v === undefined || (Array.isArray(v) && v.length === 0)) {
      return;
    }

    if (Array.isArray(v)) {
      v.forEach((item) => {
        if (item) params.append(k, String(item));
      });
    } else {
      params.set(k, String(v));
    }
  });

  const qs = params.toString();
  return `/${locale}/notifications${qs ? `?${qs}` : ''}`;
}
