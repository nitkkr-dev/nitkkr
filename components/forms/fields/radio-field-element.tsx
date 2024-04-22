import { forwardRef } from 'react';
import type * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { MdRadioButtonChecked } from 'react-icons/md';

//import DropdownForm from './DropdownFrom';

import { Label, RadioGroup, RadioGroupItem } from '~/components/ui';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '../interfaces/form-elements';

export interface RadioGenericProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  items: string[];
  label?: string;
  inputClassName?: string;
  description?: string;
}

const inputType: ElementsType = 'RadioField';

const RadioGeneric = forwardRef<
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
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <RadioGeneric
      className="w-full"
      disabled
      items={elementInstance.choices ?? []}
      label={elementInstance.question}
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  formComponent: RadioGeneric,
  //propertiesComponent: DropdownForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Radio Field',
      inputType,
      isRequired: false,
      pageNumber,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdRadioButtonChecked,
    label: 'Radio Field',
  },
  schemaObjects: (element: FormElementInstance) => {
    return {
      type: 'string',
    };
  },
  shouldValidate: true,
};
