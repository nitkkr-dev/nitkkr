import { forwardRef } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

import { Label } from '~/components/ui';
import { cn } from '~/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: boolean;
  id: string;
  label?: string;
  reserveSpaceForError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      errorMessage,
      label,
      reserveSpaceForError = false,
      type,
      ...props
    },
    ref
  ) => {
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
          aria-errormessage={
            props['aria-invalid'] && props['aria-invalid'] !== 'false'
              ? `${props.id}-error`
              : undefined
          }
          className={cn(
            'peer flex w-full rounded-lg px-3 py-2 text-xs sm:text-sm',
            'border border-secondary-700 bg-neutral-50 placeholder:text-neutral-400',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary-700',
            'disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-100',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            errorMessage &&
              'invalid:border-primary-500 invalid:focus-visible:ring-primary-500',
            className
          )}
          ref={ref}
          type={type}
          {...props}
        />
        <p
          className={cn(
            'flex items-center gap-2 text-sm text-primary-500 sm:text-base',
            reserveSpaceForError
              ? cn('invisible', errorMessage && 'peer-invalid:visible')
              : cn('hidden', errorMessage && 'peer-invalid:flex')
          )}
          id={`${props.id}-error`}
        >
          <FaExclamationCircle />
          {errorMessage ?? 'Unrendered text to reserve line height'}
        </p>
      </fieldset>
    );
  }
);
Input.displayName = 'Input';

export { Input };
