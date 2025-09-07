'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

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

// Helper function to preserve existing query params while updating specific ones
export function PreserveParamsLink({
  children,
  paramToUpdate,
  value,
  className,
}: {
  children: React.ReactNode;
  paramToUpdate: string;
  value: string | string[];
  className?: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams.toString());

  // Remove the parameter we're updating
  params.delete(paramToUpdate);

  // Add the new value(s) for the parameter
  if (Array.isArray(value)) {
    value.forEach((v) => params.append(paramToUpdate, v));
  } else if (value) {
    params.append(paramToUpdate, value);
  }

  return (
    <Link
      href={`${pathname}?${params.toString()}`}
      className={className}
      replace
    >
      {children}
    </Link>
  );
}
