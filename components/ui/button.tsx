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
          'bg-primary-500 text-shade-light',
          'hover:bg-primary-700',
          'focus:bg-primary-700',
          'active:bg-primary-900'
        ),
        primaryDisabled: 'cursor-not-allowed bg-primary-100 text-shade-light',
        secondary: cn(
          'border border-primary-700 bg-neutral-50 text-primary-700',
          'hover:bg-primary-700 hover:text-shade-light',
          'focus:bg-primary-700 focus:text-shade-light',
          'active:bg-primary-700 active:text-shade-light'
        ),
        secondaryDisabled:
          'cursor-not-allowed border border-primary-100 bg-neutral-50 text-neutral-300',
        outline: cn(
          'border border-primary-500 text-primary-500',
          'hover:border-primary-700 hover:text-primary-700',
          'focus:border-primary-700 focus:text-primary-700',
          'active:border-primary-900 active:text-primary-900'
        ),
        outlineDisabled: cn(
          'cursor-not-allowed border border-primary-100 text-primary-100'
        ),
        ghost: cn(
          'text-primary-500',
          'hover:bg-primary-300 hover:text-shade-light',
          'focus:bg-primary-300 focus:text-shade-light',
          'active:bg-primary-500 active:text-shade-light'
        ),
        link: cn(
          'text-primary-500 underline-offset-4 hover:underline',
          'hover:text-primary-700',
          'focus:text-primary-700',
          'active:text-primary-900'
        ),
        icon: '',
      },
    },
    defaultVariants: { variant: 'primary' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  active?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      active = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    if (props.disabled) {
      if (
        variant === 'primary' ||
        variant === 'secondary' ||
        variant === 'outline'
      ) {
        variant += 'Disabled';
      } else if (variant === 'ghost' || variant === 'link') {
        console.warn(
          'Disabled style does not exist for Ghost, Link, and Icon variants'
        );
      }
    }

    let activeStyles = '';
    if (active) {
      if (variant === 'primary') activeStyles = 'bg-primary-700';
      else if (variant === 'secondary')
        activeStyles = 'bg-primary-700 text-shade-light';
      else if (variant === 'outline')
        activeStyles = 'border-primary-700 text-primary-700';
      else if (variant === 'ghost')
        activeStyles = 'bg-primary-300 text-shade-light';
      else if (variant === 'link') activeStyles = 'text-primary-700';
    }

    const Comp =
      asChild || (props.disabled && typeof props.children !== 'string')
        ? Slot
        : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, className }),
          activeStyles,
          props.disabled &&
            (asChild ? 'pointer-events-none' : 'cursor-not-allowed'),
          // Overrides at every breakpoint since custom styles would conflict
          className?.includes('rounded-full') &&
            'rounded-full sm:rounded-full md:rounded-full lg:rounded-full'
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
