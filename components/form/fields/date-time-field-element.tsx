import { forwardRef } from 'react';

import type { ElementsType, FormElement } from '~/components/form/interfaces';
import { Input, type InputProps } from '~/components/inputs';

const inputType: ElementsType = 'DateTimeField';

export const DateTimeFieldFormElement: FormElement = {
  inputType,
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ onChange, value, ...restProps }, ref) => (
      <Input
        {...restProps}
        ref={ref}
        type="datetime-local"
        max="9999-12-31T23:59"
        defaultValue={(value as string)?.slice(0, -4)}
        onChange={(event) => {
          onChange?.({
            target: { value: event.target.value + ':00Z' },
          } as React.ChangeEvent<HTMLInputElement>);
        }}
      />
    )
  ),
};
