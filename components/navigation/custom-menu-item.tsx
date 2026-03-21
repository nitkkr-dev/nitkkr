// components/navigation/custom-menu-item.tsx
'use client';

import { cva } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '~/components/ui/navigation-menu';
import { cn } from '~/lib/utils';

const navigationMenuTriggerStyle = cva(
  'hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 group flex max-w-fit rounded-md bg-background transition-colors hover:bg-neutral-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50'
);

export const NavigationMenuCustomListItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuItem>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuItem> & {
    locale: string;
    triggerName: string;
    isExternal?: boolean;
    href?: string;
    listItems?: { title: string; description: string; href: string }[];
    imageDetails?: { src: string; alt: string; href: string };
  }
>(
  (
    {
      imageDetails,
      listItems,
      triggerName,
      href,
      isExternal,
      locale,
      ...props
    },
    ref
  ) => {
    if (!listItems) {
      return (
        <NavigationMenuItem {...props} ref={ref}>
          <Link
            href={isExternal ? href! : `/${locale}/${href}`}
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {triggerName}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      );
    }
    return (
      <NavigationMenuItem {...props} ref={ref}>
        <NavigationMenuTrigger>{triggerName}</NavigationMenuTrigger>
        <NavigationMenuContent className="flex w-fit max-w-[90vw] gap-4 p-4 md:max-h-[calc(100vh-82px)] lg:p-6 xl:gap-6 2xl:gap-8">
          {imageDetails && (
            <Link href={`/${locale}/${href}`} passHref legacyBehavior>
              <NavigationMenuLink className="group relative flex w-48 shrink-0 select-none flex-col justify-end overflow-hidden rounded-xl no-underline outline-none lg:w-60 xl:w-72">
                <Image
                  className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  alt=""
                  src={imageDetails.src}
                  width={0}
                  height={0}
                />
                <section className="relative z-30 flex h-full w-full flex-col justify-end rounded-xl bg-gradient-to-b from-primary-500/0 to-primary-500 p-2 focus:shadow-md">
                  <h5 className="!mb-0 origin-bottom-left text-shade-light transition-transform duration-500 ease-in-out group-hover:scale-105">
                    {imageDetails.alt + '→'}
                  </h5>
                </section>
              </NavigationMenuLink>
            </Link>
          )}
          <ul className="grid w-full grid-cols-2 gap-2 lg:gap-4 xl:gap-6 2xl:gap-8">
            {listItems.map(({ title, description, href }, index) => (
              <li key={index} className="flex h-full">
                <NavigationMenuLink asChild>
                  <Link
                    className={cn(
                      'group/menu-item flex w-full min-w-[14rem] max-w-[18rem] select-none flex-col space-y-1 rounded-xl p-2 leading-none no-underline outline-none transition-all duration-300 ease-in-out hover:bg-neutral-50 focus:bg-neutral-50 lg:p-3'
                    )}
                    href={`/${locale}/${href}`}
                  >
                    <h6 className="font-sans font-semibold leading-none text-shade-dark group-hover/menu-item:text-primary-500 group-focus/menu-item:text-primary-500">
                      {title}
                    </h6>
                    <p className="line-clamp-2 overflow-ellipsis text-sm leading-snug text-neutral-700 group-hover/menu-item:text-primary-500 group-focus/menu-item:text-primary-500">
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
  }
);
NavigationMenuCustomListItem.displayName = 'NavigationMenuCustomListItem';
