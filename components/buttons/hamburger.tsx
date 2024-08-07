'use client';

import { useEffect } from 'react';
import { useEventCallback, useScrollLock, useToggle } from 'usehooks-ts';

import { Button } from '~/components/buttons';
import { cn } from '~/lib/utils';

const HamburgerButton = ({ className }: { className: string }) => {
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

  const handler = useEventCallback((event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset.dropdownignore) return;
    setDropdownState(false);
  });

  return (
    <Button
      aria-controls="primary-navigation"
      aria-expanded={dropdownOpen}
      className={cn(
        'hamburger-button fill-shade-light aria-expanded:fill-primary-700',
        'p-1',
        className
      )}
      onClick={toggleDropdown}
    >
      <svg viewBox="0 0 100 100">
        <rect
          className="line top"
          height="10"
          rx="5"
          width="80"
          x="10"
          y="25"
        />
        <rect
          className="line middle"
          height="10"
          rx="5"
          width="80"
          x="10"
          y="45"
        />
        <rect
          className="line bottom"
          height="10"
          rx="5"
          width="80"
          x="10"
          y="65"
        />
      </svg>
    </Button>
  );
};

export { HamburgerButton };
