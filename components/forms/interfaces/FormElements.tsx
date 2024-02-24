import React, {
  ElementType,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import { ZodOptional, ZodString } from 'zod';

import { TextFieldFormElement } from '@/components/forms/fields/TextFieldFormElement';
import { EmailFieldFormElement } from '@/components/forms/fields/EmailFieldFormElement';
import { InputProps } from '@/components/ui/input';
import SelectDropdown, { ListProps } from '@/components/inputs/selectIItem';

export type ElementsType = 'TextField' | 'EmailField';

type GenericTypes = InputProps | ListProps;

export type FormElement = {
  input_type: ElementsType;
  dragBtnElement: {
    icon: ElementType;
    label: string;
  };
  uiFieldComponent: React.FC<{ elementInstance: FormElementInstance }>;
  formComponent: ForwardRefExoticComponent<
    Omit<GenericTypes, 'ref'> & RefAttributes<HTMLInputElement>
  >;
  propertiesComponent: React.FC<{ elementInstance: FormElementInstance }>;
  construct: (
    Id: string,
    page_number: number,
    id?: number
  ) => FormElementInstance;
  schemaObject: (required: boolean) => ZodString | ZodOptional<ZodString>;
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
};

type FormElementsType = {
  [Key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
  EmailField: EmailFieldFormElement,
};
