'use client';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useFloating,
} from '@floating-ui/react';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { RxChevronDown } from 'react-icons/rx';

import { cn } from '~/lib/utils';

// Radix UI automatically injects a `position: relative` wrapper <div> around the list to anchor its dropdowns and animations.
// By default, this injected <div> shrink-wraps. The `[&>div:first-child]:w-full` forces it to expand,
// allowing the `justify-between` class on the nested <ul> to properly distribute the navigation links.

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      'relative z-10 flex flex-1 items-center justify-center [&>div:first-child]:w-full',
      className
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      'flex w-full flex-1 list-none items-center justify-between space-x-1',
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

interface NavigationMenuItemContextValue {
  triggerElement: HTMLElement | null;
  setTriggerElement: (element: HTMLElement | null) => void;
}

const NavigationMenuItemContext =
  React.createContext<NavigationMenuItemContextValue | null>(null);

const assignRef = <T,>(ref: React.ForwardedRef<T>, value: T) => {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  if (ref) {
    ref.current = value;
  }
};

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, ...props }, ref) => {
  const [triggerElement, setTriggerElement] =
    React.useState<HTMLElement | null>(null);

  return (
    <NavigationMenuItemContext.Provider
      value={{ triggerElement, setTriggerElement }}
    >
      <NavigationMenuPrimitive.Item
        ref={ref}
        className={cn('relative', className)}
        {...props}
      />
    </NavigationMenuItemContext.Provider>
  );
});
NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName;

export const navigationMenuTriggerStyle = cva(
  'hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 group flex max-w-fit rounded-md bg-background transition-colors hover:bg-neutral-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50'
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const itemContext = React.useContext(NavigationMenuItemContext);

  const setTriggerRef = React.useCallback(
    (node: React.ElementRef<typeof NavigationMenuPrimitive.Trigger> | null) => {
      assignRef(ref, node);
      itemContext?.setTriggerElement(node);
    },
    [itemContext, ref]
  );

  return (
    <NavigationMenuPrimitive.Trigger
      ref={setTriggerRef}
      className={cn(navigationMenuTriggerStyle(), 'group', className)}
      {...props}
    >
      <p className="w-fit min-w-0 text-pretty text-left text-base uppercase">
        {children}
      </p>
      <RxChevronDown
        className="relative top-[1px] my-auto ml-1 w-5 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
});
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, style, ...props }, ref) => {
  const itemContext = React.useContext(NavigationMenuItemContext);
  const { refs, floatingStyles, update } = useFloating({
    placement: 'bottom',
    strategy: 'fixed',
    transform: false,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(12),
      flip({ padding: 16 }),
      shift({ padding: 16 }),
      size({
        padding: 16,
        apply({ availableWidth, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            maxWidth: `${Math.max(availableWidth, 0)}px`,
            maxHeight: `${Math.max(availableHeight, 0)}px`,
          });
        },
      }),
    ],
  });

  React.useEffect(() => {
    if (!itemContext?.triggerElement) {
      return;
    }

    refs.setReference(itemContext.triggerElement);
  }, [itemContext?.triggerElement, refs]);

  const setContentRef = React.useCallback(
    (node: React.ElementRef<typeof NavigationMenuPrimitive.Content> | null) => {
      refs.setFloating(node);
      assignRef(ref, node);
    },
    [ref, refs]
  );

  React.useEffect(() => {
    const floatingElement = refs.floating.current;

    if (!floatingElement) {
      return;
    }

    const observer = new MutationObserver(() => {
      if (floatingElement.dataset.state === 'open') {
        void update();
      }
    });

    observer.observe(floatingElement, {
      attributes: true,
      attributeFilter: ['data-state'],
    });

    if (floatingElement.dataset.state === 'open') {
      void update();
    }

    return () => observer.disconnect();
  }, [refs.floating, update]);

  return (
    <NavigationMenuPrimitive.Content
      ref={setContentRef}
      className={cn(
        'text-neutral-950 z-50 w-auto overflow-hidden rounded-xl border border-neutral-200 bg-shade-light normal-case shadow-lg',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90',
        className
      )}
      style={{
        ...floatingStyles,
        ...style,
      }}
      {...props}
    />
  );
});
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center text-neutral-950 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl border border-neutral-200 bg-shade-light shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-neutral-200 shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
};
