import { forwardRef } from 'react';

import type { ElementsType, FormElement } from '~/components/form/interfaces';
import { Input, type InputProps } from '~/components/inputs';

//import TextValidationForm from './InputBasedForm';

const inputType: ElementsType = 'TextField';

export const TextFieldFormElement: FormElement = {
  inputType,
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ ...restProps }, ref) => <Input {...restProps} ref={ref} type="text" />
  ),
};
