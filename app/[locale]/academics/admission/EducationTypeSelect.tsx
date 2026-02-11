'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function EducationTypeSelect({ locale }: { locale: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const current = searchParams.get('educationType') ?? '';

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());
    const value = e.target.value;

    if (value) params.set('educationType', value);
    else params.delete('educationType');

    router.push(`/${locale}/academics/admission?${params.toString()}`);
  }

  return (
    <select
      value={current}
      onChange={onChange}
      className="w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm font-semibold text-neutral-800"
    >
      <option value="">All</option>
      <option value="ug">Undergraduate (UG)</option>
      <option value="pg">Postgraduate (PG)</option>
      <option value="phd">PhD</option>
    </select>
  );
}
