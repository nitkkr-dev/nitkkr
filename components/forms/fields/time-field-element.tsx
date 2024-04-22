import { forwardRef } from 'react';
import { MdMoreTime } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/form-elements';
import { Input, type InputProps } from '~/components/inputs';

//import TimeBasedForm from './TimeBasedForm';

const inputType: ElementsType = 'TimeField';

export const TimeFieldFormElement: FormElement = {
  inputType,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <Input
      id={elementInstance.Id}
      type="time"
      readOnly
      label={elementInstance.question}
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ ...restProps }, ref) => {
      return <Input {...restProps} ref={ref} step={1} type="time" />;
    }
  ),

  //propertiesComponent: TimeBasedForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Time Field',
      inputType,
      isRequired: false,
      pageNumber,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdMoreTime,
    label: 'Time Field',
  },
  schemaObjects: (element: FormElementInstance) => {
    return {
      type: 'string',
      format: 'time',
      formatMinimum: element.formatMinimum,
      formatMaximum: element.formatMaximum,
    };
  },
  shouldValidate: true,
};
