'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { cn } from '~/lib/utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'focus-visible:ring-ring peer h-5 w-5 shrink-0 rounded-md border border-primary-700 shadow focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:border-0 disabled:bg-neutral-200/30 disabled:ring-0  data-[state=checked]:bg-primary-700 data-[state=checked]:text-neutral-50',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('text-current flex items-center justify-center')}
    >
      <CheckIcon className="h-5 w-5" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
