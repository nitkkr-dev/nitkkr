// Import necessary libraries
import * as React from 'react';
import { type IconBaseProps } from 'react-icons';

import { cn } from '~/lib/utils';

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
      'flex h-9 w-full rounded-md border border-input bg-neutral-50',
      'text-md transition-colors',
      'placeholder:text-neutral-500',
      'file:border-0 file:bg-neutral-50 file:text-sm file:font-medium ',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ',
      'disabled:cursor-not-allowed disabled:ring-0 disabled:border-0 disabled:bg-neutral-200/30',
      'invalid:border-primary-500 invalid:outline-red-100 invalid:outline-offset-2',
      inputClassName,
      LeftChild ? 'pl-7 ' : 'pl-3 ' // Adjusted margin-top
    );

    return (
      <div className={className}>
        <Label className="text-neutral-500" htmlFor={name}>
          {label}
        </Label>
        {required && <span className="text-primary-700">*</span>}
        {description && (
          <p className="block text-[0.8rem] text-neutral-500">{description}</p>
        )}
        <div className={inputContainerClasses}>
          {LeftChild && (
            <div className="absolute left-2 top-[0.70rem] h-5 w-5 text-neutral-500 ">
              <LeftChild />
            </div>
          )}
          <input
            type={type}
            className={inputClasses}
            ref={ref}
            name={name}
            required={required}
            maxLength={props.maxLength}
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
        <p className="block text-[0.8rem] text-primary-500">{errorMsg}</p>
      </div>
    );
  }
);

// Set display name for Input component
Input.displayName = 'Input';

// Export Input component
export { Input };
