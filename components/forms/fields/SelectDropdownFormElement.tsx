import { RxDropdownMenu } from 'react-icons/rx';
import { z } from 'zod';

import SelectDropdown from '@/components/inputs/selectIItem';
import TextField from '@/components/inputs/text';

import DropdownForm from './DropdownFrom';
import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '../interfaces/FormElements';

const input_type: ElementsType = 'SelectDropdown';

export const SelectDropdownFormElement: FormElement = {
  input_type,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <SelectDropdown
      className="w-full"
      readOnly
      items={elementInstance.choices || []}
      label={elementInstance.question}
      required={elementInstance.is_required}
      description={elementInstance.description}
    />
  ),
  formComponent: TextField,
  propertiesComponent: DropdownForm,
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
    icon: RxDropdownMenu,
    label: 'Text Field',
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
