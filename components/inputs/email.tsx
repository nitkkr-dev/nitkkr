'use client';
import { MdOutdoorGrill, MdOutlineEmail } from 'react-icons/md';

import { Input, InputProps } from '../ui/input';

export interface EmailFieldProps extends InputProps {}

export const EmailField = ({
  label = 'Email',
  placeholder = 'Enter your Email',
  LeftChild = MdOutlineEmail,
  RightChild = MdOutdoorGrill,
  ...props
}: EmailFieldProps) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      type="email"
      LeftChild={LeftChild}
      RightChild={RightChild}
      {...props}
    />
  );
};
