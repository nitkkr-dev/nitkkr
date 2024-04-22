import { forwardRef } from 'react';
import { MdNumbers } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/form-elements';
import { Input, type InputProps } from '~/components/inputs';

//import TextValidationForm from './InputBasedForm';

const inputType: ElementsType = 'NumberField';

export const NumberFieldFormElement: FormElement = {
  inputType,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <Input
      id={elementInstance.Id}
      type="number"
      readOnly
      label={elementInstance.question}
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ onChange, value, ...restProps }, ref) => {
      const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const inputValue = Number.isNaN(parseFloat(event.target.value))
          ? event.target.value
          : parseFloat(event.target.value);
        onChange?.(
          inputValue as unknown as React.ChangeEvent<HTMLInputElement>
        );
      };

      return (
        <Input
          {...restProps}
          ref={ref}
          type="number"
          onChange={handleInputChange}
          defaultValue={Number(value?.toString())}
        />
      );
    }
  ),
  //propertiesComponent: TextValidationForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Number Field',
      inputType,
      isRequired: false,
      pageNumber,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdNumbers,
    label: 'Number Field',
  },
  schemaObjects: (element: FormElementInstance) => {
    return {
      type: 'number',
    };
  },
  shouldValidate: true,
};
