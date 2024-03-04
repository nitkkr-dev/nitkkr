'use client';
import React, { forwardRef } from 'react';

import { Input, type InputProps } from '../ui/input';

const DateTimeField = forwardRef<HTMLInputElement, InputProps>(
  (
    { label = 'Date & Time', placeholder = 'Enter Date & Time', ...props },
    ref
  ) => {
    return (
      <Input
        ref={ref}
        className=""
        type="datetime-local"
        max="9999-12-31T23:59"
        placeholder={placeholder}
        label={label}
        {...props}
      />
    );
  }
);
DateTimeField.displayName = 'DateTimeField';

export default DateTimeField;
