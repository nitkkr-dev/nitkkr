import type * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';

import { Label, RadioGroup, RadioGroupItem } from '~/components/ui';

import type { ElementsType, FormElement } from '../interfaces';

export interface RadioGenericProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  items: string[];
  label?: string;
  inputClassName?: string;
  description?: string;
}

const inputType: ElementsType = 'RadioField';

const RadioGeneric = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGenericProps
>(({ className, description, label, inputClassName, items, ...props }, ref) => {
  return (
    <fieldset className={className}>
      {label && (
        <Label
          className="text-neutral-500"
          htmlFor={props.name}
          required={Boolean(props.required)}
          disabled={Boolean(props.disabled)}
        >
          {label}
        </Label>
      )}
      {description && (
        <p className="block text-[0.8rem] text-neutral-500">{description}</p>
      )}
      <RadioGroup
        ref={ref}
        defaultValue={props.value}
        className={inputClassName}
        {...props}
      >
        {items.map((item) => (
          <div key={item} className="flex items-center space-x-2">
            <RadioGroupItem value={item} required={props.required} />
            <Label
              className="text-md"
              disabled={props.disabled ?? false}
              required={false}
            >
              {item}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </fieldset>
  );
});

RadioGeneric.displayName = 'RadioGeneric';

export const RadioGenericFormElement: FormElement = {
  inputType,
  formComponent: RadioGeneric,
};
