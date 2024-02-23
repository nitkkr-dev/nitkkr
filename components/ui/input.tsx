// Import necessary libraries
import * as React from 'react';
import { IconBaseProps } from 'react-icons';

import { cn } from '@/lib/utils';

import { Label } from './label';

// Define InputProps interface
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  alwaysFocused?: boolean;
  label?: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
  description?: string;
  required?: boolean;
  errorMsg?: string;
  disabled?: boolean;
  inputClassName?: string;
  className?: string;

  LeftChild?: React.ComponentType<IconBaseProps>; // Updated to a function that returns ReactNode
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
      RightChild,
      required = false,
      label,
      errorMsg,
      inputClassName,
      name,
      ...props
    }: InputProps,
    ref
  ) => {
    const inputContainerClasses = cn('relative', 'flex items-center');

    const inputClasses = cn(
      'flex h-9 w-full rounded-md border border-input bg-neutral-10',
      'text-sm transition-colors',
      'placeholder:text-muted-foreground',
      'file:border-0 file:bg-neutral-10 file:text-sm file:font-medium ',
      'focus-visible:border-black focus-visible:outline-blue-100 focus-visible:outline-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'invalid:border-red-500 invalid:outline-red-100 invalid:outline-offset-2',
      inputClassName,
      LeftChild ? 'pl-7 ' : 'pl-3 ' // Adjusted margin-top
    );

    return (
      <div className={className}>
        <Label htmlFor={name}>{label}</Label>
        {required && <span style={{ color: '#EC734B' }}>*</span>}
        {description && (
          <p className="text-muted-foreground block text-[0.8rem]">
            {description}
          </p>
        )}
        <div className={inputContainerClasses}>
          {LeftChild && (
            <div className="text-muted-foreground absolute left-2 top-[0.70rem] h-4 w-4 ">
              <LeftChild />
            </div>
          )}
          <input
            type={type}
            className={inputClasses}
            ref={ref}
            name={name}
            required={required}
            {...props}
          />
          {RightChild && (
            <RightChild
              className="absolute right-2 mx-2 hover:cursor-pointer"
              // onClick={onRightChildClick}
              size={20}
            />
          )}
        </div>
        <p className="text-muted-foreground block text-[0.8rem] text-red-500">
          {errorMsg}
        </p>
      </div>
    );
  }
);

// Set display name for Input component
Input.displayName = 'Input';

// Export Input component
export { Input };
