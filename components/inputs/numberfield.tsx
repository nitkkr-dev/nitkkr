'use client';
import React, { forwardRef } from 'react';
import { AiOutlineNumber } from 'react-icons/ai';

import { Input, type InputProps } from '../ui/input';

const NumberField = forwardRef<HTMLInputElement, InputProps>(
  ({ label = 'Number', placeholder = 'Enter a Number', ...props }, ref) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value.replace(/[^\d.-]/g, '');
      event.target.value = inputValue;
      props.onChange?.(
        Number(inputValue) as unknown as React.ChangeEvent<HTMLInputElement>
      );
    };

    return (
      <Input
        ref={ref}
        type="number"
        placeholder={placeholder}
        label={label}
        LeftChild={AiOutlineNumber}
        defaultValue={props.value?.toString()}
        onChange={handleInputChange}
      />
    );
  }
);
NumberField.displayName = 'NumberField';

export default NumberField;
