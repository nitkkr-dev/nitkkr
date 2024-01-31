import { Input, InputProps } from '../ui/input';

import { AiOutlineUser } from 'react-icons/ai';

export const NameField = ({
  label = 'Enter Your Name',
  placeholder,
  ...props
}: InputProps) => {
  return (
    <Input
      type='text'
      placeholder={placeholder}
      label={label}
      {...props}
      LeftChild={AiOutlineUser}
    />
  );
};
