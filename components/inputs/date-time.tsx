'use client';
import React, { forwardRef } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

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
        disabled={props.disabled}
        LeftChild={FaRegCalendarAlt}
        onChange={(event) => {
          props.onChange?.({
            target: { value: event.target.value + ':00Z' },
          } as React.ChangeEvent<HTMLInputElement>);
        }}
      />
    );
  }
);
DateTimeField.displayName = 'DateTimeField';

export default DateTimeField;
