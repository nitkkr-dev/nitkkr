import { Input, InputProps } from '../shadcn/ui/input';

import { AiOutlineUser } from 'react-icons/ai';

export const NameField = ({
  label = 'Name',
  placeholder,
  ...props
}: InputProps) => {
  return (
    <Input
      placeholder={placeholder}
      label={label}
      {...props}
      LeftChild={AiOutlineUser}
    />
  );
};
