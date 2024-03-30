import type {
  ElementType,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

import { type MultiListProps } from '~/components/inputs/multiSelectItem';
import { type ListProps } from '~/components/inputs/radioItems';
import { type InputProps } from '~/components/ui/input';

import { DateFieldFormElement } from '../fields/DateFieldFormElement';
import { DateTimeFieldFormElement } from '../fields/DateTimeFieldFormElement';
import { EmailFieldFormElement } from '../fields/EmailFieldFormElement';
import { MultiSelectFormElement } from '../fields/MultiSelectFormElement';
import { NumberFieldFormElement } from '../fields/NumberFieldFormElement';
import { PhoneFieldFormElement } from '../fields/PhoneFieldFormElement';
import { RadioGenericFormElement } from '../fields/RadioGenericFormElement';
import { SelectDropdownFormElement } from '../fields/SelectDropdownFormElement';
import { TextAreaFieldFormElement } from '../fields/TextAreaFormElement';
import { TextFieldFormElement } from '../fields/TextFieldFormElement';
import { TimeFieldFormElement } from '../fields/TimeFieldFormElement';

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
  | 'MultiSelectField';

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
};
