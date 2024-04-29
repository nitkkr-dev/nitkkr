import { forwardRef } from 'react';

import {
  MultipleSelector,
  type MultipleSelectorProps,
  type MultipleSelectorRef,
} from '~/components/inputs';
import { Label } from '~/components/ui';

import type { ElementsType, FormElement } from '../interfaces/form-elements';

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
  formComponent: MultiSelectDropdown,
};
