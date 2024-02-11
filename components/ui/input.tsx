// Import necessary libraries
import * as React from 'react';
import { IconBaseProps, IconType } from 'react-icons';

import { cn } from '@/lib/utils';

import { Label } from './label';

// Define InputProps interface
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  alwaysFocused?: boolean;
  label?: string;
  inputClassName?: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
  description?: string;
  required?: boolean;

  LeftChild?: IconType; // Updated to a function that returns ReactNode
  RightChild?: React.ComponentType<IconBaseProps>;
  onRightChildClick?: () => void;
}

// Define Input component
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      description,
      type,
      LeftChild,
      required = false,
      label,
      ...props
    }: InputProps,
    ref
  ) => {
    const inputContainerClasses = cn('relative', 'flex items-center');

    const inputClasses = cn(
      'flex h-9 w-full rounded-md border border-input bg-transparent',
      'text-sm transition-colors',
      'placeholder:text-muted-foreground',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium ',
      'focus-visible:border-black focus-visible:outline-blue-100 focus-visible:outline-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'invalid:border-red-500 invalid:outline-red-100 invalid:outline-offset-2',
      className,
      LeftChild ? 'pl-7 ' : 'pl-3 ' // Adjusted margin-top
    );

    return (
      <div>
        <Label htmlFor="file">{label}</Label>
        {required && <span style={{ color: '#EC734B' }}>*</span>}
        {description && (
          <p className="text-[0.8rem] text-muted-foreground block">
            {description}
          </p>
        )}
        <div className={inputContainerClasses}>
          {LeftChild && (
            <div className="absolute left-2 top-[0.70rem] h-4 w-4 text-muted-foreground ">
              {<LeftChild />}
            </div>
          )}
          <input type={type} className={inputClasses} ref={ref} {...props} />
        </div>
      </div>
    );
  }
);

// Set display name for Input component
Input.displayName = 'Input';

// Export Input component
export { Input };
