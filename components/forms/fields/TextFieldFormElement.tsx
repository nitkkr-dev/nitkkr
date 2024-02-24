import { MdTextFields } from 'react-icons/md';
import { z } from 'zod';

import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/forms/interfaces/FormElements';
import TextField from '@/components/inputs/text';

import TextValidationForm from './TextValdiationForm';

const input_type: ElementsType = 'TextField';

export const TextFieldFormElement: FormElement = {
  input_type,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <TextField
      className="w-full"
      readOnly
      label={elementInstance.question}
      required={elementInstance.is_required}
      description={elementInstance.description}
    />
  ),
  formComponent: TextField,
  propertiesComponent: TextValidationForm,
  construct: (Id: string, page_number: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Text Field',
      input_type,
      is_required: false,
      page_number,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdTextFields,
    label: 'Text Field',
  },
  schemaObject: schemaObject,
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'string',
  };
}
function schemaObject(required: boolean) {
  if (required) {
    return z.string().min(1, { message: 'Field is required' });
  } else {
    return z.string().optional();
  }
}
