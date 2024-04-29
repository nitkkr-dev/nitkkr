import { forwardRef } from 'react';

import type {
  ElementsType,
  FormElement,
} from '~/components/form/interfaces/form-elements';
import { Input, type InputProps } from '~/components/inputs';

const inputType: ElementsType = 'NumberField';

export const NumberFieldFormElement: FormElement = {
  inputType,
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ onChange, value, ...restProps }, ref) => {
      const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const inputValue = Number.isNaN(parseFloat(event.target.value))
          ? event.target.value
          : parseFloat(event.target.value);
        onChange?.(
          inputValue as unknown as React.ChangeEvent<HTMLInputElement>
        );
      };

      return (
        <Input
          {...restProps}
          ref={ref}
          type="number"
          onChange={handleInputChange}
          defaultValue={Number(value?.toString())}
        />
      );
    }
  ),
};
