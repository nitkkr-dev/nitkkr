'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function ClearFiltersButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClearFilters = () => {
    router.push(pathname);
  };

  return (
    <button
      className="hover:bg-primary-50 rounded border border-primary-700 px-3 py-1 text-sm text-primary-700"
      onClick={handleClearFilters}
    >
      Clear All Filters
    </button>
  );
}
