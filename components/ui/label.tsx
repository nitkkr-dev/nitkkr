'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';

import { cn } from '~/lib/utils';

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
    disabled: boolean;
    required: boolean;
  }
>(({ className, disabled, required, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      'font-medium leading-none text-neutral-700',
      disabled && 'cursor-not-allowed text-neutral-300',
      className
    )}
    {...props}
  >
    {props.children}
    {required && (
      <span className={cn('text-primary-700', disabled && 'text-neutral-300')}>
        &nbsp;*
      </span>
    )}
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
