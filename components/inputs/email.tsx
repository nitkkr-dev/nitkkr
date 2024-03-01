'use client';
import { MdOutlineEmail } from 'react-icons/md';
import { forwardRef } from 'react';

import { Input, InputProps } from '../ui/input';

const EmailField = forwardRef<HTMLInputElement, InputProps>(function EmailField(
  {
    label,
    placeholder = 'Enter your Email',
    LeftChild = MdOutlineEmail,
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
      {...props}
    />
  );
});

EmailField.displayName = 'EmailField';

export default EmailField;
