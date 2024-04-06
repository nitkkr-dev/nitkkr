import type {
  ElementType,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

import { type MultiListProps } from '~/components/inputs/multiSelectItem';
import { type ListProps } from '~/components/inputs/radioItems';
import { type InputProps } from '~/components/inputs';

import { CheckBoxFieldFormElement } from '../fields/checkbox-field-element';
import { DateFieldFormElement } from '../fields/date-field-element';
import { DateTimeFieldFormElement } from '../fields/date-time-field-element';
import { EmailFieldFormElement } from '../fields/email-field-element';
import { MultiSelectFormElement } from '../fields/multi-select-element';
import { NumberFieldFormElement } from '../fields/number-field-element';
import { PhoneFieldFormElement } from '../fields/phone-field-element';
import { RadioGenericFormElement } from '../fields/radio-field-element';
import { SelectDropdownFormElement } from '../fields/select-field-element';
import { TextAreaFieldFormElement } from '../fields/textarea-element';
import { TextFieldFormElement } from '../fields/text-field-element';
import { TimeFieldFormElement } from '../fields/time-field-element';

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

type Generics = InputProps;

export type FormElement = {
  inputType: ElementsType;
  dragBtnElement: {
    icon: ElementType;
    label: string;
  };
  uiFieldComponent: React.FC<{ elementInstance: FormElementInstance }>;
  formComponent:
    | ForwardRefExoticComponent<MultiListProps>
    | ForwardRefExoticComponent<
        Omit<Generics, 'ref'> & RefAttributes<HTMLInputElement>
      >
    | React.FC<ListProps>;
  //propertiesComponent: React.FC<{ elementInstance: FormElementInstance }>;
  construct: (
    Id: string,
    pageNumber: number,
    id?: number
  ) => FormElementInstance;
  shouldValidate: boolean;
} & (
  | {
      shouldValidate: true;
      schemaObjects: (element: FormElementInstance) => validationProperty;
    }
  | {
      shouldValidate?: false;
      schemaObjects?: never;
    }
);

export interface FormElementInstance {
  Id: string;
  id?: number;
  question: string;
  description?: string;
  isRequired: boolean;
  inputType: ElementsType;
  choices?: string[];
  mimeTypes?: string[];
  range?: string[];
  pageNumber: number;
  marks: number;
  formatMaximum?: string;
  formatMinimum?: string;
}

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
