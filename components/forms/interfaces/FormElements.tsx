import type {
  ElementType,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

import { type InputProps } from '~/components/ui/input';
import { type ListProps } from '~/components/inputs/radioItems';
import type { MultiListProps } from '~/components/inputs/multiSelectItem';

import { TextFieldFormElement } from '../fields/TextFieldFormElement';
import { TimeFieldFormElement } from '../fields/TimeFieldFormElement';
import { EmailFieldFormElement } from '../fields/EmailFieldFormElement';
import { DateFieldFormElement } from '../fields/DateFieldFormElement';
import { PhoneFieldFormElement } from '../fields/PhoneFieldFormElement';
import { SelectDropdownFormElement } from '../fields/SelectDropdownFormElement';
import { RadioGenericFormElement } from '../fields/RadioGenericFormElement';
import { DateTimeFieldFormElement } from '../fields/DateTimeFieldFormElement';
import { NumberFieldFormElement } from '../fields/NumberFieldFormElement';
import { TextAreaFieldFormElement } from '../fields/TextAreaFormElement';
import { MultiSelectFormElement } from '../fields/MultiSelectFormElement';

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
