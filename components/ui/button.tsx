import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/lib/utils';

const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center whitespace-nowrap transition-colors',
    'ring-offset-shade-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2',
    'rounded sm:rounded-lg lg:rounded-xl'
  ),
  {
    variants: {
      variant: {
        primary: cn(
          'bg-primary-500 text-neutral-50',
          'hover:bg-primary-700',
          'focus:bg-primary-900',
          'active:bg-primary-900'
        ),
        primaryDisabled: 'cursor-not-allowed bg-primary-100 text-neutral-50',
        secondary: cn(
          'border border-primary-700 bg-neutral-50 text-primary-700',
          'hover:bg-primary-700 hover:text-shade-light',
          'focus:bg-primary-700 focus:text-shade-light',
          'active:bg-primary-700 active:text-shade-light'
        ),
        secondaryDisabled:
          'border border-primary-100 cursor-not-allowed bg-neutral-50 text-neutral-300',
        outline: cn(
          'border border-primary-500 text-primary-500',
          'hover:border-primary-700 hover:text-primary-700',
          'focus:border-primary-900 focus:text-primary-900',
          'active:border-primary-900 active:text-primary-900'
        ),
        outlineDisabled: cn(
          'cursor-not-allowed border border-primary-100 text-primary-100'
        ),
        ghost: cn(
          'text-primary-500',
          'hover:bg-primary-500 hover:text-neutral-50',
          'focus:bg-primary-700 focus:text-neutral-50',
          'active:bg-primary-700 active:text-neutral-50'
        ),
        link: cn(
          'text-primary-500 underline-offset-4 hover:underline',
          'hover:text-primary-700',
          'focus:text-primary-900',
          'active:text-primary-900'
        ),
      },
    },
    defaultVariants: { variant: 'primary' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', asChild = false, ...props }, ref) => {
    if (props.disabled) {
      if (
        variant === 'primary' ||
        variant === 'secondary' ||
        variant === 'outline'
      ) {
        variant += 'Disabled';
      } else if (variant === 'ghost' || variant === 'link') {
        console.warn(
          'Disabled style does not exist for Ghost and Link variants'
        );
      }
    }

    const Comp = asChild || props.disabled ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
