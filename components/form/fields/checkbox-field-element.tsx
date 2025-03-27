import { forwardRef } from 'react';

import type { ElementsType, FormElement } from '~/components/form/interfaces';
import { Input, type InputProps } from '~/components/inputs';

const inputType: ElementsType = 'CheckBoxField';

export const CheckBoxFieldFormElement: FormElement = {
  inputType,
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ onChange, value, ...restProps }, ref) => (
      <Input
        {...restProps}
        ref={ref}
        type="checkbox"
        onChange={(event) => {
          onChange?.({
            target: { value: event.target.checked },
          } as unknown as React.ChangeEvent<HTMLInputElement>);
        }}
        defaultChecked={value as unknown as boolean}
      />
    )
  ),
};
