'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { Button } from './ui';

const ScrollingNav = ({
  headings,
}: {
  headings: { label: string; href: string }[];
}) => {
  const [hash, setHash] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  return headings.map(({ label, href }, index) => (
    <li key={index}>
      <Button
        asChild
        className="rounded-full px-4 py-2 text-shade-dark transition-colors duration-300"
        variant="ghost"
        active={hash === href}
      >
        <Link
          href={href}
          onClick={(event) => {
            (event.target as HTMLButtonElement).blur(); // to be removed, focus styles overrides both active and normal styles on the button causing visual bug
            setHash(href);
          }}
        >
          {label}
        </Link>
      </Button>
    </li>
  ));
};

export default ScrollingNav;
