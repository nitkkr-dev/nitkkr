'use client';
import { MdOutdoorGrill, MdOutlineEmail } from 'react-icons/md';
import { forwardRef } from 'react';

import { Input, InputProps } from '../ui/input';

const EmailField = forwardRef<HTMLInputElement, InputProps>(function EmailField(
  {
    label = 'Email',
    placeholder = 'Enter your Email',
    LeftChild = MdOutlineEmail,
    RightChild = MdOutdoorGrill,
    ...props
  }: InputProps,
  ref
) {
  return (
    <Input
      ref={ref}
      label={label}
      placeholder={placeholder}
      type="email"
      LeftChild={LeftChild}
      RightChild={RightChild}
      {...props}
    />
  );
});

EmailField.displayName = 'EmailField';

export default EmailField;
