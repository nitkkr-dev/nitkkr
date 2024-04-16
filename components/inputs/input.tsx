'use client';

import { forwardRef, useEffect, useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

import { Label } from '~/components/ui';
import { cn, getKeys } from '~/lib/utils';

export type ValidityStateWithError = {
  [K in keyof ValidityStateFlags]: (input: HTMLInputElement) => string;
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  customValidator?: () => ValidityStateWithError;
  description?: string;
  id: string;
  label?: string;
  reserveSpaceForError?: boolean;
  showError?: boolean;
}

const defaultErrors: ValidityStateWithError = {
  // These attributes are in order of error priority
  valueMissing: () => 'Please fill out this field.',
  typeMismatch: (input) => `Please enter a valid ${input.type}.`,
  patternMismatch: () => 'Please match the requested format.',
  tooShort: (input) =>
    `Please use at least ${input.minLength} character(s) (currently using ${input.value.length} character(s)).`,
  tooLong: (input) =>
    `Please shorten this text to ${input.maxLength} character(s) or less (currently using ${input.value.length} character(s)).`,
  rangeUnderflow: (input) =>
    `Please select a value that is no less than ${input.min}.`,
  rangeOverflow: (input) =>
    `Please select a value that is no more than ${input.max}.`,
  stepMismatch: ({ valueAsNumber, step }) => {
    const nearest_lower = valueAsNumber - (valueAsNumber % Number(step));
    const nearest_upper = nearest_lower + Number(step);
    return `Please select a valid value. The two nearest valid values are ${nearest_lower} and ${nearest_upper}.`;
  },
  badInput: () => 'Please enter a valid value.',
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      customValidator = () => ({}) as ValidityStateWithError,
      description,
      label,
      onBlur,
      onChange,
      reserveSpaceForError = false,
      showError = true,
      type,
      ...props
    },
    ref
  ) => {
    const [errorMessage, setErrorMessage] = useState<string>();
    const [focusedOnce, setFocusedOnce] = useState(false);

    useEffect(() => {
      const input = document.getElementById(props.id) as HTMLInputElement;
      validate(input, customValidator);
    }, []);

    return (
      <>
        <fieldset
          className={cn(
            'space-y-2',
            (type === 'checkbox' || type === 'radio') &&
              'inline-flex gap-2 space-y-0'
          )}
        >
          {label && type !== 'checkbox' && type !== 'radio' && (
            <Label
              disabled={Boolean(props.disabled)}
              htmlFor={props.id}
              required={Boolean(props.required)}
            >
              {label}
            </Label>
          )}
          {description && (
            <small className="!mt-0 block text-neutral-700">
              {description}
            </small>
          )}
          <input
            aria-errormessage={
              showError &&
              props['aria-invalid'] &&
              props['aria-invalid'] !== 'false'
                ? `${props.id}-error`
                : undefined
            }
            className={cn(
              'peer flex w-full rounded-lg px-3 py-2 text-xs sm:text-sm',
              'border border-secondary-700 bg-neutral-50 placeholder:text-neutral-400',
              'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary-700',
              'disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-100',
              'file:border-0 file:bg-transparent file:text-sm file:font-medium',
              focusedOnce &&
                'invalid:border-primary-500 invalid:focus-visible:ring-primary-500',
              (type === 'checkbox' || type === 'radio') && 'h-5 w-5 ', //incomplete
              className
            )}
            onBlur={(event) => {
              if (!focusedOnce) setFocusedOnce(true);
              onBlur && onBlur(event);
            }}
            onChange={(event) => {
              if (!event.isDefaultPrevented()) {
                validate(event.target, customValidator);
              }
              onChange && onChange(event);
            }}
            onInvalid={(event) => {
              setErrorMessage(event.currentTarget.validationMessage);
            }}
            ref={ref}
            type={type}
            {...props}
          />
          {(type === 'checkbox' || type === 'radio') && label && (
            <Label
              disabled={Boolean(props.disabled)}
              htmlFor={props.id}
              required={Boolean(props.required)}
            >
              {label}
            </Label>
          )}
        </fieldset>
        {showError && (
          <p
            className={cn(
              'flex items-center gap-2 text-sm text-primary-500 sm:text-base',
              reserveSpaceForError
                ? cn('invisible', focusedOnce && 'peer-invalid:visible')
                : cn('hidden', focusedOnce && 'peer-invalid:flex')
            )}
            id={`${props.id}-error`}
          >
            <FaExclamationCircle />
            {errorMessage ?? 'Unrendered text to reserve line height'}
          </p>
        )}
      </>
    );
  }
);
Input.displayName = 'Input';

const validate = (
  input: HTMLInputElement,
  customValidator: () => ValidityStateWithError
) => {
  let error: string | undefined;
  const validityState = input.validity;
  const customValidity = customValidator();

  if (!validityState.valid) {
    getKeys(defaultErrors).forEach((state) => {
      if (error ?? !validityState[state]) return;
      const errorCallback = customValidity[state] ?? defaultErrors[state];
      if (!errorCallback) return;
      error = errorCallback(input);
    });
  }

  input.setCustomValidity(error ?? '');
  return input.checkValidity();
};

export { Input };
