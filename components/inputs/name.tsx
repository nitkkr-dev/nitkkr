'use client';

import { AiOutlineUser } from 'react-icons/ai';

import { Input, InputProps } from '../ui/input';

export const NameField = ({
  label = 'Name',
  placeholder = 'Enter your Name',
  ...props
}: InputProps) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      label={label}
      {...props}
      LeftChild={AiOutlineUser}
    />
  );
};
