'use client';
import { MdOutlineDateRange } from 'react-icons/md';
import { forwardRef } from 'react';

import { Input, type InputProps } from '../ui/input';

const DateField = forwardRef<HTMLInputElement, InputProps>(function DateField(
  {
    label = 'Date',
    placeholder = 'Enter your Date',
    LeftChild = MdOutlineDateRange,
    ...props
  }: InputProps,
  ref
) {
  return (
    <Input
      ref={ref}
      label={label}
      placeholder={placeholder}
      className="placeholder:text-neutral-500"
      type="date"
      max="9999-12-31"
      LeftChild={LeftChild}
      {...props}
    />
  );
});

DateField.displayName = 'DateField';

export default DateField;
