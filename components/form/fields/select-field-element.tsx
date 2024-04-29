import type * as SelectPrimitive from '@radix-ui/react-select';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

import { Label } from '~/components/ui';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs';

import type { ElementsType, FormElement } from '../interfaces/form-elements';

const inputType: ElementsType = 'SelectDropdown';

export interface SelectGenericProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  variant?: 'form' | 'ui';
  items: string[];
  inputClassName?: string;
  className?: string;
  onChange?: (value: string) => void;
  description?: string;
  label?: string;
}

const SelectDropdown = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  SelectGenericProps
>(({ className, description, inputClassName, items, label, ...props }, ref) => {
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
      <Select
        defaultValue={props.value}
        onValueChange={props.onChange}
        variant="form"
        {...props}
      >
        <SelectTrigger ref={ref} className={inputClassName}>
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </fieldset>
  );
});

SelectDropdown.displayName = 'SelectDropdown';

export const SelectDropdownFormElement: FormElement = {
  inputType,
  formComponent: SelectDropdown,
};
