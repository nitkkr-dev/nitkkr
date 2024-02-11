'use client';

import { PiTextT } from 'react-icons/pi';

import { Input, InputProps } from '../ui/input';

export const TextField = ({
  label = 'Text',
  placeholder = 'Enter your text',
  LeftChild = PiTextT,
  ...props
}: InputProps) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      label={label}
      {...props}
      LeftChild={LeftChild}
    />
  );
};
