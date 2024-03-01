import React, {
  ElementType,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import { ZodType } from 'zod';

import { TextFieldFormElement } from '@/components/forms/fields/TextFieldFormElement';
import { TimeFieldFormElement } from '@/components/forms/fields/TimeFieldFormElement';
import { EmailFieldFormElement } from '@/components/forms/fields/EmailFieldFormElement';
import { DateFieldFormElement} from '@/components/forms/fields/DateFieldFormElement';
import { SelectDropdownFormElement } from '@/components/forms/fields/SelectDropdownFormElement';
import { InputProps } from '@/components/ui/input';
import { ListProps } from '@/components/inputs/radioItems';
import { PhoneFieldFormElement } from '../fields/PhoneFieldFormElement';

export type ElementsType =
  | 'TextField'
  | 'EmailField'
  | 'SelectDropdown'
  | 'TimeField'
  | 'PhoneField'
  | 'DateField';

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
  schemaObjects: (element: FormElementInstance) => object;
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
