import { AiOutlineUser } from 'react-icons/ai';

import { Input, InputProps } from '../ui/input';

export const NameField = ({
  label = 'Enter Your Name',
  placeholder,
  ...props
}: InputProps) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      label={label}
      {...props}
      LeftChild={AiOutlineUser}
    />
  );
};
