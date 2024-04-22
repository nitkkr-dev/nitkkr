import { RxDropdownMenu } from 'react-icons/rx';
import type * as SelectPrimitive from '@radix-ui/react-select';
//import DropdownForm from './DropdownFrom';
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

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '../interfaces/form-elements';

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
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <SelectDropdown
      className="w-full"
      disabled
      items={elementInstance.choices ?? []}
      label={elementInstance.question}
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  formComponent: SelectDropdown,
  //propertiesComponent: DropdownForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Select Field',
      inputType,
      isRequired: false,
      pageNumber,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: RxDropdownMenu,
    label: 'Select Field',
  },
  schemaObjects: (element: FormElementInstance) => {
    return {
      type: 'string',
    };
  },
  shouldValidate: true,
};
