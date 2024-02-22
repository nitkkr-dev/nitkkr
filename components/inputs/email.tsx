'use client';
import { MdOutdoorGrill, MdOutlineEmail } from 'react-icons/md';
import { forwardRef } from 'react';

import { Input, InputProps } from '../ui/input';

export interface EmailFieldProps extends InputProps {}

const EmailField = forwardRef<HTMLInputElement, EmailFieldProps>(
  function EmailField(
    {
      label = 'Email',
      placeholder = 'Enter your Email',
      LeftChild = MdOutlineEmail,
      RightChild = MdOutdoorGrill,
      ...props
    }: EmailFieldProps,
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
  }
);

EmailField.displayName = 'EmailField';

export default EmailField;
