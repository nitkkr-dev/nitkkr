'use server';

import { redirect } from 'next/navigation';

export async function applyDateFilter(formData: FormData) {
  const locale = formData.get('locale')?.toString() ?? 'en';
  const startDay = formData.get('start-day')?.toString();
  const startMonth = formData.get('start-month')?.toString();
  const startYear = formData.get('start-year')?.toString();
  const endDay = formData.get('end-day')?.toString();
  const endMonth = formData.get('end-month')?.toString();
  const endYear = formData.get('end-year')?.toString();

  const categories = formData.getAll('category') as string[];
  const departments = formData.getAll('department') as string[];
  const q = formData.get('q')?.toString();

  const startVal =
    startYear && startMonth && startDay
      ? `${startYear}-${startMonth.padStart(2, '0')}-${startDay.padStart(2, '0')}`
      : undefined;
  const endVal =
    endYear && endMonth && endDay
      ? `${endYear}-${endMonth.padStart(2, '0')}-${endDay.padStart(2, '0')}`
      : undefined;

  const params = new URLSearchParams();
  if (startVal) params.set('start', startVal);
  if (endVal) params.set('end', endVal);
  if (q) params.set('q', q);
  categories.forEach((c) => params.append('category', c));
  departments.forEach((d) => params.append('department', d));

  const qs = params.toString();
  redirect(`/${locale}/notifications${qs ? `?${qs}` : ''}`);
}
