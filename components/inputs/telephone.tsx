'use client';
import React, { forwardRef } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';

import { Input, type InputProps } from '../ui/input';

const PhoneField = forwardRef<HTMLInputElement, InputProps>(
  ({ label = 'Phone', placeholder = 'Enter your Number', ...props }, ref) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value.replace(/\D/g, '');
      const truncatedValue = inputValue.slice(0, 10);
      event.target.value = truncatedValue;
      props.onChange?.(event);
    };

    return (
      <Input
        ref={ref}
        type="tel"
        placeholder={placeholder}
        label={label}
        LeftChild={AiOutlinePhone}
        maxLength={10}
        {...props}
        onChange={handleInputChange}
      />
    );
  }
);
PhoneField.displayName = 'PhoneField';

export default PhoneField;
