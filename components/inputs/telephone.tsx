'use client';

import { AiOutlinePhone } from 'react-icons/ai';

import { Input, InputProps } from '../ui/input';

export const PhoneField = ({
  label = 'Phone',
  placeholder = 'Enter your Number',
  ...props
}: InputProps) => {
  return (
    <Input
      className="remove-arrow"
      type="number"
      placeholder={placeholder}
      label={label}
      {...props}
      LeftChild={AiOutlinePhone}
    />
  );
};
