'use client';

import * as React from 'react';
import { BsCalendarFill } from 'react-icons/bs';
import { FaExclamationCircle } from 'react-icons/fa';
import {
  FaCalendar,
  FaCalendarWeek,
  FaClock,
  FaHashtag,
  FaLink,
  FaLock,
  FaMagnifyingGlass,
  FaPhone,
  FaUpload,
} from 'react-icons/fa6';
import { IoText } from 'react-icons/io5';
import { type IconType } from 'react-icons/lib';
import { LuCalendarClock } from 'react-icons/lu';
import { MdEmail } from 'react-icons/md';

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
  type: React.HTMLInputTypeAttribute;
  LeftChild?: IconType;
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

const Input = React.forwardRef<HTMLInputElement, InputProps>(
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

      LeftChild,
      ...props
    },
    ref
  ) => {
    const [errorMessage, setErrorMessage] = React.useState<string>();
    const [focusedOnce, setFocusedOnce] = React.useState(false);

    React.useEffect(() => {
      const input = document.getElementById(props.id) as HTMLInputElement;
      validate(input, customValidator);
    }, []);

    if (type === 'date') LeftChild = FaCalendar;
    if (type === 'datetime-local') LeftChild = LuCalendarClock;
    if (type === 'email') LeftChild = MdEmail;
    if (type === 'file') LeftChild = FaUpload;
    if (type === 'month') LeftChild = BsCalendarFill;
    if (type === 'number') LeftChild = FaHashtag;
    if (type === 'password') LeftChild = FaLock;
    if (type === 'search') LeftChild = FaMagnifyingGlass;
    if (type === 'tel') LeftChild = FaPhone;
    if (type === 'text') LeftChild = IoText;
    if (type === 'time') LeftChild = FaClock;
    if (type === 'url') LeftChild = FaLink;
    if (type === 'week') LeftChild = FaCalendarWeek;

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
        {description && (
          <small className="!mt-0 block text-neutral-700">{description}</small>
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
      </fieldset>
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
