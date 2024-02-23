'use client';
import React, { forwardRef } from 'react';

import { Input, InputProps } from '../ui/input';

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
        placeholder={placeholder}
        label={label}
        {...props}
      />
    );
  }
);
DateTimeField.displayName = 'DateTimeField';

export default DateTimeField;
