'use client';
import { MdOutlineEmail } from 'react-icons/md';

import { Input, InputProps } from '../ui/input';

export interface EmailFieldProps extends InputProps {}

export const EmailField = ({
  label = 'Email',
  placeholder = 'Enter your Email',
  LeftChild = MdOutlineEmail,
  ...props
}: EmailFieldProps) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      type="email"
      LeftChild={LeftChild}
      {...props}
    />
  );
};
