import { RxDropdownMenu } from 'react-icons/rx';
import { forwardRef } from 'react';

import {
  MultipleSelector,
  type MultipleSelectorProps,
  type MultipleSelectorRef,
} from '~/components/inputs';
import { Label } from '~/components/ui';

//import DropdownForm from './DropdownFrom';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '../interfaces/form-elements';

const inputType: ElementsType = 'MultiSelectField';

export interface MultiSelectGenericProps extends MultipleSelectorProps {
  items: string[];
  label?: string;
  inputClassName?: string;
  description?: string;
  name: string;
  required?: boolean;
}

const MultiSelectDropdown = forwardRef<
  MultipleSelectorRef,
  MultiSelectGenericProps
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
      <MultipleSelector
        ref={ref}
        defaultOptions={items}
        className={inputClassName}
        emptyIndicator={
          <p className="text-gray-600 dark:text-gray-400 text-center text-lg leading-10">
            no results found.
          </p>
        }
        {...props}
      />
    </fieldset>
  );
});

MultiSelectDropdown.displayName = 'MultiSelectDropdown';

export const MultiSelectFormElement: FormElement = {
  inputType,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <MultiSelectDropdown
      name={elementInstance.Id}
      className="w-full"
      disabled
      items={elementInstance.choices ?? []}
      label={elementInstance.question}
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  formComponent: MultiSelectDropdown,
  //propertiesComponent: DropdownForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Multi Select Field',
      inputType,
      isRequired: false,
      pageNumber,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: RxDropdownMenu,
    label: 'Multi Select Field',
  },
  schemaObjects: (element: FormElementInstance) => {
    return {
      type: 'array',
      items: {
        type: 'string',
      },
    };
  },
  shouldValidate: true,
};
