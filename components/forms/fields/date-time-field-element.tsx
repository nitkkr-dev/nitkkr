import { forwardRef } from 'react';
import { MdDateRange } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/form-elements';
import { Input, type InputProps } from '~/components/inputs';

//import DateTimeBasedForm from './DateTimeBasedForm';

const inputType: ElementsType = 'DateTimeField';

export const DateTimeFieldFormElement: FormElement = {
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
    ({ onChange, value, ...restProps }, ref) => (
      <Input
        {...restProps}
        ref={ref}
        type="datetime-local"
        max="9999-12-31T23:59"
        defaultValue={(value as string)?.slice(0, -4)}
        onChange={(event) => {
          onChange?.({
            target: { value: event.target.value + ':00Z' },
          } as React.ChangeEvent<HTMLInputElement>);
        }}
      />
    )
  ),
  //propertiesComponent: DateTimeBasedForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Date-Time Field',
      inputType,
      isRequired: false,
      pageNumber,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdDateRange,
    label: 'Date-Time Field',
  },
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'string',
    format: 'date-time',
    formatMinimum: element.formatMinimum,
    formatMaximum: element.formatMaximum,
  };
}
