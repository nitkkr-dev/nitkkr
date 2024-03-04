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
    };

    return (
      <Input
        ref={ref}
        type="tel"
        placeholder={placeholder}
        label={label}
        LeftChild={AiOutlinePhone}
        maxLength={10}
        onChange={handleInputChange}
        {...props}
      />
    );
  }
);
PhoneField.displayName = 'PhoneField';

export default PhoneField;
