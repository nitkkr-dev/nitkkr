import { forwardRef } from 'react';
import { MdTextFields } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/form-elements';
import { Input, type InputProps } from '~/components/inputs';

//import TextValidationForm from './InputBasedForm';

const inputType: ElementsType = 'TextField';

export const TextFieldFormElement: FormElement = {
  inputType,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <Input
      id={elementInstance.Id}
      readOnly
      label={elementInstance.question}
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ ...restProps }, ref) => <Input {...restProps} ref={ref} type="text" />
  ),
  //propertiesComponent: TextValidationForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Text Field',
      inputType,
      isRequired: false,
      pageNumber,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdTextFields,
    label: 'Text Field',
  },
  schemaObjects: (element: FormElementInstance) => {
    return {
      type: 'string',
    };
  },
  shouldValidate: true,
};
