import { Input, InputProps } from '../ui/input';
import { MdOutlineEmail } from 'react-icons/md';

export interface EmailFieldProps
  extends Omit<InputProps, 'type' | 'LeftChild'> {}

export const EmailField = ({
  label = 'Email',
  placeholder = 'Enter your Email',
  ...props
}: EmailFieldProps) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      type="email"
      {...props}
      LeftChild={MdOutlineEmail}
    />
  );
};
