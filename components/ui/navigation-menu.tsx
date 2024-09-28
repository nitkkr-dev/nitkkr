import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { RxChevronDown } from 'react-icons/rx';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '~/lib/utils';

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      'relative z-10 flex max-w-max flex-1 items-center justify-center',
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
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
      'group flex flex-1 list-none items-center justify-center space-x-1',
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  'hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 group flex max-w-fit rounded-md bg-background transition-colors hover:bg-neutral-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50 lg:text-lg'
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}
  >
    <p className="w-fit min-w-0 text-pretty text-left">{children}</p>
    <RxChevronDown
      className="relative top-[1px] my-auto ml-1 w-5 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
      className
    )}
    {...props}
  />
));
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

const NavigationMenuCustomListItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item> & {
    imageDetails?: {
      src: string;
      alt: string;
      href: string;
    };
    listItems: {
      title: string;
      description: string;
      href: string;
    }[];
    triggerName: string;
  }
>(({ imageDetails, listItems, triggerName, ...props }, ref) => {
  const imageHeight = listItems.length > 4 ? 4 : listItems.length;
  return (
    <NavigationMenuItem {...props} ref={ref}>
      <NavigationMenuTrigger>{triggerName}</NavigationMenuTrigger>
      <NavigationMenuContent className="flex gap-4 p-6 xl:gap-6 2xl:gap-8">
        {imageDetails && (
          <Link href={imageDetails.href} passHref legacyBehavior>
            <NavigationMenuLink
              className="group relative flex select-none flex-col justify-end overflow-hidden rounded-xl no-underline outline-none"
              style={{ minWidth: `${70 * imageHeight}px` }}
            >
              <Image
                className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
                alt=""
                src={imageDetails.src}
                width={0}
                height={0}
              />
              <section className="relative z-30 flex h-3/4 w-full flex-col justify-end bg-gradient-to-b from-primary-500/25 to-primary-500 p-2 focus:shadow-md">
                <h5 className="!mb-0 origin-bottom-left text-shade-light transition-transform duration-500 ease-in-out group-hover:scale-150">
                  {imageDetails.alt + '→'}
                </h5>
              </section>
            </NavigationMenuLink>
          </Link>
        )}
        <ul
          className={cn(
            'grid grid-flow-col auto-rows-max gap-4 xl:gap-6 2xl:gap-8'
          )}
          style={{
            gridTemplateRows: `repeat(${imageHeight}, minmax(0, 1fr))`,
          }}
        >
          {listItems.map(({ title, description, href }, index) => (
            <li key={index}>
              <NavigationMenuLink asChild>
                <Link
                  className={cn(
                    'group block min-w-[12rem] select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors transition-transform duration-500 ease-in-out hover:scale-110 hover:bg-neutral-50 focus:bg-neutral-50'
                  )}
                  href={href}
                >
                  <h6 className="font-sans font-semibold leading-none text-shade-dark group-hover:text-primary-500 group-focus:text-primary-500">
                    {title}
                  </h6>
                  <p className="line-clamp-3 text-sm leading-snug text-neutral-700 group-hover:text-primary-500 group-focus:text-primary-500">
                    {description}
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
});
NavigationMenuCustomListItem.displayName = 'NavigationMenuCustomListItem';

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuCustomListItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
