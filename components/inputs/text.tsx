'use client';

import { PiTextT } from 'react-icons/pi';
import { forwardRef } from 'react';

import { Input, type InputProps } from '../ui/input';

const TextField = forwardRef<HTMLInputElement, InputProps>(function TextField(
  {
    label = 'Text',
    placeholder = 'Enter your text',
    LeftChild = PiTextT,
    ...props
  },
  ref
) {
  return (
    <Input
      ref={ref}
      type="text"
      placeholder={placeholder}
      label={label}
      LeftChild={LeftChild}
      {...props}
    />
  );
});

TextField.displayName = 'TextField';

export default TextField; // Export the component
