'use client';

import React, { useCallback, useEffect } from 'react';
import { useScrollLock, useToggle } from 'usehooks-ts';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export default function MobNavButton({ className }: { className: string }) {
  const { lock, unlock } = useScrollLock({
    autoLock: false,
    widthReflow: true,
  });
  const [dropdownOpen, toggleDropdown, setDropdownState] = useToggle(false);

  useEffect(() => {
    if (dropdownOpen) {
      lock();
      document.addEventListener('click', handler);
    } else {
      unlock();
      document.removeEventListener('click', handler);
    }
    return () => {
      unlock();
      document.removeEventListener('click', handler);
    };
  }, [dropdownOpen]);

  const handler = useCallback((e: MouseEvent) => {
    if ((e.target as HTMLElement)?.classList.contains('DropDownIgnore')) return;
    setDropdownState(false);
  }, []);

  return (
    <Button
      aria-controls="primary-navigation"
      aria-expanded={dropdownOpen}
      className={cn(
        'hamburger-button fill-shade-light aria-expanded:fill-primary-700',
        'DropDownIgnore p-1',
        className
      )}
      onClick={toggleDropdown}
    >
      <svg className="DropDownIgnore" viewBox="0 0 100 100">
        <rect
          className="line top DropDownIgnore"
          height="10"
          rx="5"
          width="80"
          x="10"
          y="25"
        />
        <rect
          className="line middle DropDownIgnore"
          height="10"
          rx="5"
          width="80"
          x="10"
          y="45"
        />
        <rect
          className="line bottom DropDownIgnore"
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
