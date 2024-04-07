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
