import React, {
  ElementType,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import { ZodType } from 'zod';

import { InputProps } from '@/components/ui/input';
import { ListProps } from '@/components/inputs/radioItems';

import { TextFieldFormElement } from '../fields/TextFieldFormElement';
import { TimeFieldFormElement } from '../fields/TimeFieldFormElement';
import { EmailFieldFormElement } from '../fields/EmailFieldFormElement';
import { DateFieldFormElement } from '../fields/DateFieldFormElement';
import { PhoneFieldFormElement } from '../fields/PhoneFieldFormElement';
import { SelectDropdownFormElement } from '../fields/SelectDropdownFormElement';

export type ElementsType =
  | 'TextField'
  | 'EmailField'
  | 'SelectDropdown'
  | 'TimeField'
  | 'PhoneField'
  | 'DateField';

export type validationProperty = {
  type: string;
  format?: string;
  formatMinimum?: string;
  formatMaximum?: string;
};

type Generics = InputProps;

export type FormElement = {
  input_type: ElementsType;
  dragBtnElement: {
    icon: ElementType;
    label: string;
  };
  uiFieldComponent: React.FC<{ elementInstance: FormElementInstance }>;
  formComponent:
    | ForwardRefExoticComponent<
        Omit<Generics, 'ref'> & RefAttributes<HTMLInputElement>
      >
    | React.FC<ListProps>;
  propertiesComponent: React.FC<{ elementInstance: FormElementInstance }>;
  construct: (
    Id: string,
    page_number: number,
    id?: number
  ) => FormElementInstance;
  schemaObject: (required: boolean) => ZodType;
  schemaObjects: (element: FormElementInstance) => validationProperty;
  shouldValidate: boolean;
};

export type FormElementInstance = {
  Id: string;
  id?: number;
  question: string;
  description?: string;
  is_required: boolean;
  input_type: ElementsType;
  choices?: string[];
  mime_types?: string[];
  range?: string[];
  page_number: number;
  marks: number;
  formatMaximum?: string;
  formatMinimum?: string;
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
};
