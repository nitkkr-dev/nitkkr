import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function capitalise(text: string, separator = ' ') {
  return text
    .split(separator)
    .map((value) => value[0].toUpperCase() + value.slice(1))
    .join(separator);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToCSV(rows: Record<string, unknown>[]) {
  if (rows.length === 0) return '';

  const columns = Object.keys(rows[0]);
  if (columns.length === 0) return '';

  const escapeField = (field: string) => {
    if (field.includes(',') || field.includes('"') || field.includes('\n')) {
      field = `"${field.replace(/"/g, '""')}"`;
    }

    return field;
  };

  return [
    columns.join(','),
    rows
      .map((row) =>
        columns
          .map((column) => escapeField(String(row[column] ?? '')))
          .join(',')
      )
      .join('\n'),
  ].join('\n');
}

export function getKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

export function groupBy<T extends object>(
  objectArray: T[],
  field: keyof T
): Map<T[typeof field], T[]> {
  const objectArrayByField = new Map<T[typeof field], typeof objectArray>();
  objectArray.forEach((object) => {
    const objectArraySubset = objectArrayByField.get(object[field]) ?? [];
    objectArraySubset.push(object);
    objectArrayByField.set(object[field], objectArraySubset);
  });

  return objectArrayByField;
}
