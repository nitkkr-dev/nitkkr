function getSerialKey(row: Record<string, string>): string | undefined {
  const possibleKeys = [
    'S. No.',
    'S.No',
    'S No',
    'Sno',
    'Sr No',
    'Sr. No',
    'Serial',
    'Serial No',
  ];
  for (const key of possibleKeys) {
    if (row[key] !== undefined && row[key] !== '') {
      return String(row[key]).trim();
    }
  }
  return undefined;
}

export function mergeAndDedup(
  existing: Record<string, string>[],
  incoming: Record<string, string>[]
): Record<string, string>[] {
  const seen = new Map<string, Record<string, string>>();

  for (const row of existing) {
    const key = getSerialKey(row);
    if (key) seen.set(key, row);
  }

  for (const row of incoming) {
    const key = getSerialKey(row);
    if (key) {
      if (!seen.has(key)) {
        seen.set(key, row);
      }
    } else {
      // if no serial key, push anyway
      seen.set(Math.random().toString(36).slice(2), row);
    }
  }

  return Array.from(seen.values());
}
