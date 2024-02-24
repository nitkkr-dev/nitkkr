import { MdOutlineEmail } from 'react-icons/md';
import { z } from 'zod';

import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/forms/interfaces/FormElements';
import EmailField from '@/components/inputs/email';

import EmailValidationForm from './EmailValidationForm';

const input_type: ElementsType = 'EmailField';

export const EmailFieldFormElement: FormElement = {
  input_type,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <EmailField
      className="w-full"
      readOnly
      label={elementInstance.question}
      required={elementInstance.is_required}
      description={elementInstance.description}
    />
  ),
  formComponent: EmailField,
  propertiesComponent: EmailValidationForm,
  construct: (Id: string, page_number: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Email Field',
      input_type,
      is_required: false,
      page_number,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdOutlineEmail,
    label: 'Email Field',
  },
  schemaObject: schemaObject,
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'string',
    format: 'email',
  };
}
function schemaObject(required: boolean) {
  if (required) {
    return z.string().email({ message: 'Invalid email' });
  } else {
    return z.string().email({ message: 'Invalid email' }).optional();
  }
}
