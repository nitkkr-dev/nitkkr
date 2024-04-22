import { forwardRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/form-elements';
import { Input, type InputProps } from '~/components/inputs';

//import InputBasedForm from './InputBasedForm';

const inputType: ElementsType = 'EmailField';

export const EmailFieldFormElement: FormElement = {
  inputType,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <Input
      id={elementInstance.Id}
      type="email"
      readOnly
      label={elementInstance.question}
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ ...restProps }, ref) => <Input {...restProps} ref={ref} type="email" />
  ),
  //propertiesComponent: InputBasedForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Email Field',
      inputType,
      isRequired: false,
      pageNumber,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdOutlineEmail,
    label: 'Email Field',
  },
  schemaObjects: (element: FormElementInstance) => {
    return {
      type: 'string',
      format: 'email',
    };
  },
  shouldValidate: true,
};
