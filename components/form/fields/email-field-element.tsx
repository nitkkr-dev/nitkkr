import { forwardRef } from 'react';

import type { ElementsType, FormElement } from '~/components/form/interfaces';
import { Input, type InputProps } from '~/components/inputs';

const inputType: ElementsType = 'EmailField';

export const EmailFieldFormElement: FormElement = {
  inputType,
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ ...restProps }, ref) => <Input {...restProps} ref={ref} type="email" />
  ),
};
