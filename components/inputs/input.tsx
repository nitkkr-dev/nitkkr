import * as React from 'react';

import { Label } from '~/components/ui';
import { cn } from '~/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, ...props }, ref) => {
    return (
      <fieldset className="space-y-2">
        {label && (
          <Label
            disabled={Boolean(props.disabled)}
            htmlFor={props.id}
            required={Boolean(props.required)}
          >
            {label}
          </Label>
        )}
        <input
          type={type}
          className={cn(
            'flex w-full rounded-lg px-3 py-2 text-xs sm:text-sm',
            'border border-secondary-700 bg-neutral-50 placeholder:text-neutral-400',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary-700',
            'disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-100',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            className
          )}
          ref={ref}
          {...props}
        />
      </fieldset>
    );
  }
);
Input.displayName = 'Input';

export { Input };
