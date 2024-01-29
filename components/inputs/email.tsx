"use client"
import { Input, InputProps } from '../shadcn/ui/input';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';

export interface EmailFieldProps
  extends Omit<InputProps, 'type' | 'LeftChild'> {}

export const EmailField = ({
  label = 'Email',
  placeholder = 'email',
  ...props
}: EmailFieldProps) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      type="email"
      {...props}
      LeftChild= {MdOutlineMarkEmailUnread}
    />
  );
};
