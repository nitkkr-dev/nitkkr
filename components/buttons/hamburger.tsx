'use client';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { dropdownAtom, NavCurrValueAtom } from '~/state/default';
import { Button, type ButtonProps } from '~/components/buttons';
import { cn } from '~/lib/utils';

const HamburgerButton = ({ className }: { className: string }) => {
  const [isDropdownOpen, setDropdownOpen] = useAtom(dropdownAtom);
  const [navCurrValue, setNavCurrValue] = useAtom(NavCurrValueAtom);

  return (
    <Button
      aria-controls="primary-navigation"
      aria-expanded={isDropdownOpen}
      className={cn(
        'hamburger-button fill-shade-light aria-expanded:fill-primary-700',
        'p-1',
        className
      )}
      onClick={() => {
        setDropdownOpen(!isDropdownOpen);
        !isDropdownOpen
          ? setNavCurrValue({ current: 'default', prev: '' })
          : setNavCurrValue({ current: '', prev: navCurrValue.current });
      }}
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

const NavStyleSwitcher = () => {
  const NavCurr = useAtomValue(NavCurrValueAtom);
  return (
    <style>{`
      @keyframes slideInRight {
        from {
          transform: translateX(-100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes slideOutLeft {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(-100%);
          opacity: 0;
          visibility: hidden;
        }
      }

      .nav-column-${NavCurr.current}{
        animation-name: slideInRight;
        animation-duration: 300ms;
        animation-fill-mode: forwards;
        --tw-enter-opacity: initial;
        --tw-enter-scale: initial;
        --tw-enter-rotate: initial;
        --tw-enter-translate-y: initial;
        visibility: visible;
        height: auto;
      }
      .nav-column-${NavCurr.prev}{
        animation-name: slideOutLeft;
        animation-duration: 300ms;
        animation-fill-mode: forwards;
        --tw-exit-opacity: initial;
        --tw-exit-scale: initial;
        --tw-exit-rotate: initial;
        --tw-exit-translate-x: initial;
        --tw-exit-translate-y: initial;
        height:0;
      }`}</style>
  );
};

const SwitchNavButton = ({
  text,
  column,
  props,
}: {
  text: string;
  column: string;
  props: ButtonProps;
}) => {
  const [navCurrValue, setNavCurrValue] = useAtom(NavCurrValueAtom);

  return (
    <Button
      onClick={() =>
        setNavCurrValue({ prev: navCurrValue.current, current: column })
      }
      {...props}
    >
      {text}
    </Button>
  );
};

interface NavButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
}
const NavButton = ({ children, ...props }: NavButtonProps) => {
  const setDropdownOpen = useSetAtom(dropdownAtom);

  return (
    <Button onClick={() => setDropdownOpen(false)} {...props}>
      {children}
    </Button>
  );
};
export { HamburgerButton, NavButton, NavStyleSwitcher, SwitchNavButton };
