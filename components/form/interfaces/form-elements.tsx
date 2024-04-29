import type { ForwardRefExoticComponent, RefAttributes } from 'react';

import { type InputProps, type MultipleSelectorRef } from '~/components/inputs';

import {
  CheckBoxFieldFormElement,
  DateFieldFormElement,
  DateTimeFieldFormElement,
  EmailFieldFormElement,
  MultiSelectFormElement,
  type MultiSelectGenericProps,
  NumberFieldFormElement,
  PhoneFieldFormElement,
  RadioGenericFormElement,
  type RadioGenericProps,
  SelectDropdownFormElement,
  type SelectGenericProps,
  TextAreaFieldFormElement,
  type TextAreaGenericProps,
  TextFieldFormElement,
  TimeFieldFormElement,
} from '../fields';

export type ElementsType =
  | 'TextField'
  | 'EmailField'
  | 'SelectDropdown'
  | 'TimeField'
  | 'PhoneField'
  | 'DateField'
  | 'RadioField'
  | 'DateTimeField'
  | 'NumberField'
  | 'TextAreaField'
  | 'MultiSelectField'
  | 'CheckBoxField';

export interface validationProperty {
  type: string;
  format?: string;
  formatMinimum?: string;
  formatMaximum?: string;
}

export interface GenericProps {
  label?: string;
  description?: string;
  errorMsg?: string;
  inputClassName?: string;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type FormElement = {
  inputType: ElementsType;
  formComponent:
    | ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>
    | ForwardRefExoticComponent<
        MultiSelectGenericProps & RefAttributes<MultipleSelectorRef>
      >
    | ForwardRefExoticComponent<
        RadioGenericProps & RefAttributes<HTMLDivElement>
      >
    | ForwardRefExoticComponent<
        SelectGenericProps & RefAttributes<HTMLButtonElement>
      >
    | ForwardRefExoticComponent<
        TextAreaGenericProps & RefAttributes<HTMLTextAreaElement>
      >;
};

type FormElementsType = {
  [Key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
  EmailField: EmailFieldFormElement,
  SelectDropdown: SelectDropdownFormElement,
  TimeField: TimeFieldFormElement,
  PhoneField: PhoneFieldFormElement,
  DateField: DateFieldFormElement,
  RadioField: RadioGenericFormElement,
  DateTimeField: DateTimeFieldFormElement,
  NumberField: NumberFieldFormElement,
  TextAreaField: TextAreaFieldFormElement,
  MultiSelectField: MultiSelectFormElement,
  CheckBoxField: CheckBoxFieldFormElement,
};
