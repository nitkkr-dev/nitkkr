'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useScrollLock } from 'usehooks-ts';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export default function MobNavButton({ className }: { className: string }) {
  const { lock, unlock } = useScrollLock({
    autoLock: false,
    widthReflow: true,
  });
  const buttonRef: React.MutableRefObject<HTMLButtonElement | null> =
    useRef(null);

  useEffect(() => {
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const triggerDropdown = () => {
    if (buttonRef.current!.getAttribute('aria-expanded') === 'true') {
      closeDropDown();
    } else {
      openDropDown();
    }
  };

  const openDropDown = useCallback(() => {
    buttonRef.current!.setAttribute('aria-expanded', 'true');
    lock();
    document.addEventListener('mousedown', handler);
  }, []);

  const closeDropDown = useCallback(() => {
    buttonRef.current!.setAttribute('aria-expanded', 'false');
    unlock();
    document.removeEventListener('mousedown', handler);
  }, []);

  const handler = useCallback((e: MouseEvent) => {
    if ((e.target as HTMLElement)?.classList.contains('DropDownIgnore')) return;
    closeDropDown();
  }, []);

  return (
    <Button
      aria-controls="primary-navigation"
      aria-expanded={false}
      ref={buttonRef}
      className={cn(
        'hamburger-button fill-shade-light aria-expanded:fill-primary-700',
        'DropDownIgnore p-1',
        className
      )}
      onClick={triggerDropdown}
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
