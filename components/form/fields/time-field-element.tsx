import { forwardRef } from 'react';

import type { ElementsType, FormElement } from '~/components/form/interfaces';
import { Input, type InputProps } from '~/components/inputs';

const inputType: ElementsType = 'TimeField';

export const TimeFieldFormElement: FormElement = {
  inputType,
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ ...restProps }, ref) => {
      return <Input {...restProps} ref={ref} step={1} type="time" />;
    }
  ),
};
