'use client';

import * as React from 'react';
import { IconBaseProps } from 'react-icons';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  alwaysFocused?: boolean;
  label?: string;
  inputClassName?: string;
  ref?: React.ForwardedRef<HTMLInputElement>;

  LeftChild?: React.ComponentType<IconBaseProps>;
  RightChild?: React.ComponentType<IconBaseProps>;

  onRightChildClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-black focus-visible:outline-blue-100 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 invalid:border-red-500 invalid:outline-red-100 invalid:outline-offset-2',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
