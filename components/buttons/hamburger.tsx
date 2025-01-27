'use client';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { dropdownAtom, NavCurrValueAtom } from '~/state/default';
import { Button, type ButtonProps } from '~/components/buttons';
import { cn } from '~/lib/utils';

const HamburgerButton = ({ className }: { className: string }) => {
  const [isDropdownOpen, setDropdownOpen] = useAtom(dropdownAtom);
  const setNavCurrValue = useSetAtom(NavCurrValueAtom);

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
        //!isDropdownOpen && setNavCurrValue({ current: 'default', prev: '' });
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
    <style>{`.nav-column-${NavCurr.current}{
      animation-name: enter;
        --tw-enter-opacity: initial;
        --tw-enter-scale: initial;
        --tw-enter-rotate: initial;
        --tw-enter-translate-y: initial;
      }
    .nav-column-${NavCurr.prev}{
    animation-name: exit;
    animation-duration: 150ms;
    --tw-exit-opacity: initial;
    --tw-exit-scale: initial;
    --tw-exit-rotate: initial;
    --tw-exit-translate-x: initial;
    --tw-exit-translate-y: initial;
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
