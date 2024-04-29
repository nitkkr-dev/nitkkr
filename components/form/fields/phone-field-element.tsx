import { forwardRef } from 'react';

import type {
  ElementsType,
  FormElement,
} from '~/components/form/interfaces/form-elements';
import { Input, type InputProps } from '~/components/inputs';

const inputType: ElementsType = 'PhoneField';

export const PhoneFieldFormElement: FormElement = {
  inputType,
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ onChange, ...props }, ref) => {
      const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const inputValue = event.target.value.replace(/\D/g, '');
        const truncatedValue = inputValue.slice(0, 10);
        event.target.value = truncatedValue;
        onChange?.(event);
      };

      return (
        <Input
          {...props}
          ref={ref}
          type="tel"
          maxLength={10}
          onChange={handleInputChange}
        />
      );
    }
  ),
};
