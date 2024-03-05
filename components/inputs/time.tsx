'use client';
import React, { forwardRef } from 'react';

import { Input, type InputProps } from '../ui/input';

const TimeField = forwardRef<HTMLInputElement, InputProps>(
  ({ label = 'Time', placeholder = 'Enter time', ...props }, ref) => {
    return (
      <Input
        ref={ref}
        className="pr-2"
        type="time"
        placeholder={placeholder}
        step={1}
        label={label}
        {...props}
      />
    );
  }
);
TimeField.displayName = 'TimeField';

export default TimeField;
