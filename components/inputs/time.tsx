'use client';
import React, { forwardRef } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

import { Input, type InputProps } from '../ui/input';

const TimeField = forwardRef<HTMLInputElement, InputProps>(
  ({ label = 'Time', placeholder = 'Enter time', ...props }, ref) => {
    return (
      <Input
        ref={ref}
        className="pr-2"
        type="time"
        placeholder={placeholder}
        label={label}
        LeftChild={AiOutlineClockCircle}
        {...props}
      />
    );
  }
);
TimeField.displayName = 'TimeField';

export default TimeField;
