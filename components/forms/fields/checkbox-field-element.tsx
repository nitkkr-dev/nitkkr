import { forwardRef } from 'react';
import { MdCheckBox } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/form-elements';
import { Input, type InputProps } from '~/components/inputs';

//import InputBasedForm from './InputBasedForm';

const inputType: ElementsType = 'CheckBoxField';

export const CheckBoxFieldFormElement: FormElement = {
  inputType,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <Input
      id={elementInstance.Id}
      type="checkbox"
      readOnly
      label={elementInstance.question}
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ onChange, value, ...restProps }, ref) => (
      <Input
        {...restProps}
        ref={ref}
        type="checkbox"
        onChange={(event) => {
          onChange?.({
            target: { value: event.target.checked },
          } as unknown as React.ChangeEvent<HTMLInputElement>);
        }}
        defaultChecked={value as unknown as boolean}
      />
    )
  ),
  //propertiesComponent: InputBasedForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'CheckBox Field',
      inputType,
      isRequired: false,
      pageNumber,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdCheckBox,
    label: 'CheckBox Field',
  },
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'boolean',
  };
}
