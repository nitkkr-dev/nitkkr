'use client';
import React, { forwardRef } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';

import { Input, InputProps } from '../ui/input';

const PhoneField = forwardRef<HTMLInputElement, InputProps>(
  ({ label = 'Phone', placeholder = 'Enter your Number', ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="number"
        placeholder={placeholder}
        label={label}
        LeftChild={AiOutlinePhone}
        {...props}
      />
    );
  }
);
PhoneField.displayName = 'PhoneField';

export default PhoneField;
