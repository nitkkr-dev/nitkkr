'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export default function MobNavButton({ className }: { className: string }) {
  const [expanded, setExpanded] = useState(false);
  const mobNav: React.MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    mobNav.current = document.getElementById('mobNav');
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);
  const disableDropdown = useCallback(() => {
    setExpanded(false);
    document.body.style.touchAction = 'auto';
    document.body.style.overflow = 'visible';
    document.body.style.overscrollBehavior = 'auto';
    document.removeEventListener('mousedown', handler);
  }, []);
  const enableDropdown = useCallback(() => {
    setExpanded(true);
    document.body.style.touchAction = 'none';
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';
    document.addEventListener('mousedown', handler);
  }, []);

  const handler = useCallback((e: MouseEvent) => {
    if ((e.target as HTMLElement)?.classList.contains('mobNavTrigger')) return;
    if (!mobNav.current!.contains(e.target as HTMLElement)) {
      disableDropdown();
    } else if ((e.target as HTMLElement)?.tagName === 'A') {
      (e.target as HTMLElement)?.click();
      disableDropdown();
    }
  }, []);

  return (
    <Button
      aria-controls="primary-navigation"
      aria-expanded={expanded}
      className={cn(
        'hamburger-button fill-shade-light aria-expanded:fill-primary-700',
        'mobNavTrigger p-1',
        className
      )}
      onClick={() => {
        setExpanded(!expanded);
        expanded ? disableDropdown() : enableDropdown();
      }}
    >
      <svg className="mobNavTrigger" viewBox="0 0 100 100">
        <rect
          className="line top mobNavTrigger"
          height="10"
          rx="5"
          width="80"
          x="10"
          y="25"
        />
        <rect
          className="line middle mobNavTrigger"
          height="10"
          rx="5"
          width="80"
          x="10"
          y="45"
        />
        <rect
          className="line bottom mobNavTrigger"
          height="10"
          rx="5"
          width="80"
          x="10"
          y="65"
        />
      </svg>
    </Button>
  );
}
