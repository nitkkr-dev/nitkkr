'use client';

import Link, { type LinkProps } from 'next/link';
import { useLocalStorage } from 'usehooks-ts';

export interface LocalStorageLinkProps<T> extends LinkProps {
  children: React.ReactNode;
  className?: string;
  newItem: T;
  options?: { filter?: boolean; unshift?: boolean };
  storageKey: string;
}

export function LocalStorageLink<T>({
  children,
  className,
  href,
  newItem,
  options = { filter: false, unshift: false },
  storageKey: key,
}: LocalStorageLinkProps<T>) {
  const [items, setItems] = useLocalStorage<T[]>(key, []);

  let filteredItems = items;
  if (options.filter) {
    filteredItems = filteredItems.filter(
      (item) => JSON.stringify(item) !== JSON.stringify(newItem)
    );
  }

  return (
    <Link
      className={className}
      href={href}
      onClick={() =>
        options.unshift
          ? setItems([newItem, ...filteredItems])
          : setItems([...filteredItems, newItem])
      }
    >
      {children}
    </Link>
  );
}
