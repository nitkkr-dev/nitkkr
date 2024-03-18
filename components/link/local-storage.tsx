'use client';

import Link from 'next/link';
import { useLocalStorage } from 'usehooks-ts';

export function LocalStorageLink<T>({
  children,
  href,
  newItem,
  options = { filter: false, unshift: false },
  storageKey: key,
}: {
  children: React.ReactNode;
  href: string;
  storageKey: string;
  newItem: T;
  options?: { filter?: boolean; unshift?: boolean };
}) {
  const [items, setItems] = useLocalStorage<T[]>(key, []);

  let filteredItems = items;
  if (options.filter) {
    filteredItems = filteredItems.filter(
      (item) => JSON.stringify(item) !== JSON.stringify(newItem)
    );
  }

  return (
    <Link
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
