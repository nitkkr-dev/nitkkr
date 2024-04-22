import { forwardRef } from 'react';
import { MdPhone } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/form-elements';
import { Input, type InputProps } from '~/components/inputs';

//import TextValidationForm from './InputBasedForm';

const inputType: ElementsType = 'PhoneField';

export const PhoneFieldFormElement: FormElement = {
  inputType,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <Input
      id={elementInstance.Id}
      type="tel"
      readOnly
      label={elementInstance.question}
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ onChange, ...props }, ref) => {
      const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const inputValue = event.target.value.replace(/\D/g, '');
        const truncatedValue = inputValue.slice(0, 10);
        event.target.value = truncatedValue;
        onChange?.(event);
      };

      return (
        <Input
          {...props}
          ref={ref}
          type="tel"
          maxLength={10}
          onChange={handleInputChange}
        />
      );
    }
  ),
  //propertiesComponent: TextValidationForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Phone Field',
      inputType,
      isRequired: false,
      pageNumber,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdPhone,
    label: 'Phone Field',
  },
  schemaObjects: (element: FormElementInstance) => {
    return {
      type: 'string',
    };
  },
  shouldValidate: true,
};
